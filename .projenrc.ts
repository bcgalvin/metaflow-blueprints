import { cdk8s, javascript } from 'projen';

const commonIgnore = ['.vscode/', '.idea/'];
const devDeps = [
  'aws-cdk',
  'constructs',
  'aws-cdk-lib',
  'cdk8s-cli',
  'fs-extra',
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
  devDeps: devDeps,
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
    ignorePatterns: ['examples/**/*', 'test/*.snapshot/**/*', '*.d.ts'],
    devdirs: ['test'],
  },
  gitignore: commonIgnore,
});
project.synth();
