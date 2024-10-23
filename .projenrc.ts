import { cdk8s, javascript } from 'projen';

const commonIgnore = ['.vscode/', '.idea/'];
const developmentDeps = [
  'constructs',
  'cdk8s-cli',
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
  docgenFilePath: 'docs/source/metaflow-blueprints-api.md',
  prettier: true,
  eslint: true,
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
  github: false,
});

// Customize ESLint rules
project.tsconfigDev.addInclude('build-tools/**/*.ts');
project.eslint!.rules!['no-bitwise'] = ['off'];
// eslint-disable-next-line prettier/prettier
project.eslint!.rules!.quotes = [
  'error',
  'single',
  { avoidEscape: true, allowTemplateLiterals: true },
];
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

project.synth();
