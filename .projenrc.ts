import { cdk8s, javascript, TextFile } from 'projen';
import { workflows } from 'projen/lib/github';
import { NodePackageManager, TrailingComma, TypeScriptModuleResolution } from 'projen/lib/javascript';
import { TypeScriptProject } from 'projen/lib/typescript';
const nodeVersion = '20';

const commonIgnore = [
  '.vscode/',
  '.idea/',
  'docs/src/k8s.md',
  'docs/src/argoEvents.md',
  'docs/.vitepress/dist',
  'docs/.vitepress/cache',
  'docs/.vitepress/.temp',
];
const developmentDeps = [
  'constructs',
  'cdk8s-cli@2.198.254',
  'fs-extra',
  'js-yaml',
  'eslint-plugin-unicorn',
  '@jest/globals',
  '@types/js-yaml',
  '@types/jest',
  '@types/fs-extra',
];
const peerDeps = ['cdk8s', 'constructs'];

const project = new cdk8s.ConstructLibraryCdk8s({
  author: 'Bryan Galvin',
  authorAddress: 'bcgalvin@gmail.com',
  name: 'metaflow-blueprints',
  repositoryUrl: 'https://github.com/bcgalvin/metaflow-blueprints.git',
  defaultReleaseBranch: 'main',
  packageManager: javascript.NodePackageManager.PNPM,
  cdk8sVersion: '2.69.9',
  typescriptVersion: '~5.5.0',
  jsiiVersion: '~5.5.0',
  minNodeVersion: '20.x',
  maxNodeVersion: '20.x',
  projenrcTs: true,
  peerDeps: peerDeps,
  devDeps: developmentDeps,
  docgen: true,
  prettier: true,
  eslint: true,
  github: true,
  buildWorkflow: false,
  pullRequestTemplate: false,
  githubOptions: {
    pullRequestLint: false,
    mergify: false,
  },
  excludeTypescript: ['src/imports/**/*.ts'],
  depsUpgrade: false,
  prettierOptions: {
    ignoreFile: false,
    settings: {
      bracketSpacing: true,
      printWidth: 120,
      quoteProps: javascript.QuoteProps.CONSISTENT,
      semi: true,
      singleQuote: true,
      tabWidth: 2,
      trailingComma: javascript.TrailingComma.ALL,
    },
  },
  eslintOptions: {
    dirs: ['src'],
    ignorePatterns: ['src/imports/', 'test/'],
    prettier: true,
  },
  tsconfig: {
    compilerOptions: {
      lib: ['es2020', 'es2021.WeakRef'],
      target: 'es2020',
      moduleResolution: javascript.TypeScriptModuleResolution.NODE_NEXT,
      module: 'nodenext',
      esModuleInterop: false,
      skipLibCheck: true,

      sourceMap: true,
      inlineSourceMap: false,
      inlineSources: true,
    },
  },
  jestOptions: {
    jestConfig: {
      testPathIgnorePatterns: ['node_modules/', '<rootDir>/src/imports/'],
      modulePathIgnorePatterns: ['node_modules/', '<rootDir>/src/imports/'],
      coveragePathIgnorePatterns: ['node_modules/', '<rootDir>/src/imports/'],
    },
  },
  gitignore: commonIgnore,
  release: false,
});

// Customize ESLint rules
project.tsconfigDev.addInclude('build-tools/**/*.ts');
project.eslint!.rules!['no-bitwise'] = ['off'];
// eslint-disable-next-line prettier/prettier
project.eslint!.rules!.quotes = ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }];
project.addDevDeps('eslint-plugin-unicorn');
// Add Unicorn rules (https://github.com/sindresorhus/eslint-plugin-unicorn#rules)
project.eslint?.addPlugins('unicorn');
project.eslint?.addRules({
  'unicorn/prefer-node-protocol': ['error'],
  'unicorn/no-array-for-each': ['error'],
  'unicorn/no-unnecessary-await': ['error'],
});

project.addTask('import-argo-events-crds', {
  description: 'import argo events crds',
  exec: 'bash scripts/update-argo-events-crds',
});

new TextFile(project, '.nvmrc', {
  lines: [nodeVersion],
});

const docgenTask = project.tasks.tryFind('docgen');
if (docgenTask) {
  docgenTask.reset(
    'jsii-docgen .jsii -o docs/src/reference.md --split-by-submodule && rm docs/src/k8s.md docs/src/argoEvents.md',
  );
}

project.addTask('docs:dev', { exec: 'cd docs && vitepress dev' });
project.addTask('docs:build', {
  exec: 'cd docs && vitepress build',
});
project.addTask('docs:serve', { exec: 'cd docs && vitepress serve' });

const deployWorkflow = project.github?.addWorkflow('deploy-pages');

deployWorkflow?.on({
  push: {
    branches: ['main'],
  },
  workflowDispatch: {},
});

deployWorkflow?.addJob('build', {
  name: 'Build',
  runsOn: ['ubuntu-latest'],
  permissions: {
    contents: workflows.JobPermission.READ,
    pages: workflows.JobPermission.WRITE,
    idToken: workflows.JobPermission.WRITE,
  },
  steps: [
    {
      uses: 'actions/checkout@v4',
    },
    {
      uses: 'actions/setup-node@v4',
      with: {
        'node-version': nodeVersion,
      },
    },
    {
      uses: 'pnpm/action-setup@v2',
      with: {
        version: 'latest',
      },
    },
    {
      run: 'pnpm install',
    },
    {
      run: 'npx projen && npx docs:build',
    },
    {
      uses: 'actions/configure-pages@v4',
    },
    {
      uses: 'actions/upload-pages-artifact@v3',
      with: {
        path: 'docs/.vitepress/dist',
      },
    },
  ],
  concurrency: {
    'group': 'pages',
    'cancel-in-progress': false,
  },
});

// Add deploy job
deployWorkflow?.addJob('deploy', {
  name: 'Deploy',
  needs: ['build'],
  runsOn: ['ubuntu-latest'],
  permissions: {
    contents: workflows.JobPermission.READ,
    pages: workflows.JobPermission.WRITE,
    idToken: workflows.JobPermission.WRITE,
  },
  environment: {
    name: 'github-pages',
    url: '${{ steps.deployment.outputs.page_url }}',
  },
  steps: [
    {
      uses: 'actions/deploy-pages@v4',
      id: 'deployment',
    },
  ],
  concurrency: {
    'group': 'pages',
    'cancel-in-progress': false,
  },
});

// Docsite

const docs = new TypeScriptProject({
  name: 'metaflow-blueprints-docs',
  description: 'Documentation for Metaflow Blueprints',
  parent: project,
  outdir: 'docs',
  defaultReleaseBranch: 'main',
  packageManager: NodePackageManager.PNPM,
  deps: ['vitepress', 'vue'],
  devDeps: ['eslint-plugin-unicorn', 'tsx', '@red-asuka/vitepress-plugin-tabs', 'vue3-tabs-component'],
  release: false,
  projenrcTs: true,
  prettier: true,
  maxNodeVersion: nodeVersion,
  minNodeVersion: nodeVersion,
  prettierOptions: {
    settings: {
      trailingComma: TrailingComma.ALL,
    },
  },
  jest: false,
  tsconfig: {
    compilerOptions: {
      module: 'ES2020',
      moduleResolution: TypeScriptModuleResolution.NODE,
      lib: ['DOM', 'ES2020'],
      noUncheckedIndexedAccess: true,
      noUnusedLocals: false,
      noUnusedParameters: false,
      target: 'ES2020',
    },
  },
  gitignore: ['.vscode/settings.json', 'docs/.vitepress/dist', 'docs/.vitepress/cache', 'docs/.vitepress/.temp'],
});

docs.deps.removeDependency('ts-node');
docs.defaultTask?.reset();
docs.defaultTask?.exec('tsx .projenrc.ts');
docs.eslint?.addPlugins('unicorn');
docs.eslint?.addExtends('plugin:unicorn/recommended');
docs.setScript('preinstall', 'npx only-allow pnpm');
docs.compileTask.reset();
docs.compileTask.exec('vitepress build');
docs.packageTask.reset();
docs.package.file.addOverride('type', 'module');

project.synth();
