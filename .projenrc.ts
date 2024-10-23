import path from 'node:path';

import { cdk8s, javascript } from 'projen';

const commonIgnore = ['.vscode/', '.idea/'];
const developmentDeps = [
  'aws-cdk',
  'constructs',
  'aws-cdk-lib',
  'cdk8s-cli',
  'fs-extra',
  'js-yaml',
  'eslint-plugin-unicorn',
  '@jest/globals',
  '@types/js-yaml',
  '@types/jest',
  '@types/fs-extra',
];
const peerDeps = ['aws-cdk-lib', 'cdk8s', 'constructs'];
const project = new cdk8s.ConstructLibraryCdk8s({
  author: 'Bryan Galvin',
  authorAddress: 'bcgalvin@gmail.com',
  name: 'metaflow-blueprints',
  repositoryUrl: 'https://github.com/bcgalvin/metaflow-blueprints.git',
  defaultReleaseBranch: 'main',
  cdk8sVersion: '2.69.9',
  typescriptVersion: '~5.5.0',
  jsiiVersion: '~5.5.0',
  projenrcTs: true,
  peerDeps: peerDeps,
  devDeps: developmentDeps,
  docgen: true,
  docgenFilePath: path.join(
    __dirname,
    'docs',
    'source',
    'metaflow-blueprints-api.md',
  ),
  prettier: true,
  eslint: true,
  prettierOptions: {
    settings: {
      endOfLine: javascript.EndOfLine.AUTO,
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
      strict: true,
      allowImportingTsExtensions: true,
      resolveJsonModule: true,
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

project.eslint?.addPlugins('unicorn');
project.eslint?.addExtends('plugin:unicorn/recommended');

project.eslint?.addRules({
  'unicorn/prefer-module': 'off',
  'unicorn/better-regex': 'error',
  'unicorn/consistent-empty-array-spread': 'error',
  'unicorn/catch-error-name': 'error',
  'unicorn/error-message': 'error',
  'unicorn/no-lonely-if': 'error',
  'unicorn/no-negation-in-equality-check': 'error',
  'unicorn/no-unnecessary-await': 'error',
  'unicorn/no-useless-undefined': 'error',
  'unicorn/prefer-array-flat-map': 'error',
  'unicorn/prefer-json-parse-buffer': 'error',
  'unicorn/prefer-object-from-entries': 'error',
});

project.addTask('import-argo-events-crds', {
  description: 'import argo events crds',
  exec: 'bash scripts/update-argo-events-crds',
});

project.synth();
