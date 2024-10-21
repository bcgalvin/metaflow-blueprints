import * as path from 'path';
import { cdk8s, javascript } from 'projen';
import { PythonProject } from 'projen/lib/python';

const commonIgnore = ['.vscode/', '.idea/'];
const deps = ['zod'];
const devDeps = [
  'aws-cdk',
  'constructs',
  'aws-cdk-lib',
  'cdk8s-cli',
  'fs-extra',
  'js-yaml',
  '@jest/globals',
  '@types/js-yaml',
  '@types/jest',
  '@types/fs-extra',
];
const peerDeps = ['aws-cdk-lib', 'cdk8s', 'constructs'];
const bundledDeps = ['zod'];
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
  bundledDeps: bundledDeps,
  deps: deps,
  devDeps: devDeps,
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
    ignorePatterns: [
      'src/imports/**/*',
      'examples/**/*',
      'test/*.snapshot/**/*',
      '*.d.ts',
    ],
    devdirs: ['test'],
  },
  gitignore: commonIgnore,
  release: false,
  github: false,
});
project.addTask('import-argo-events-crds', {
  description: 'import argo events crds',
  exec: 'bash scripts/update-argo-events-crds',
});

const ghpages = new PythonProject({
  parent: project,
  moduleName: 'nil',
  name: 'metaflow-blueprints-docs',
  authorName: 'Bryan Galvin',
  authorEmail: 'bcgalvin@gmail.com',
  version: '0.0.1',
  outdir: 'docs',
  deps: ['mkdocs', 'mkdocs-material', 'mkdocs-redirects'],
});
ghpages.gitignore.addPatterns(
  'tests',
  'nil',
  'site',
  '.projen',
  'project.json',
  '.gitignore',
  '.gitattributes',
  'requirements.txt',
  'requirements-dev.txt',
);
ghpages.removeTask('build');
ghpages.addTask('docs:build', {
  description: 'build the docs',
  exec: 'mkdocs build',
});
ghpages.addTask('docs:serve', {
  description: 'serve the docs',
  exec: 'mkdocs serve',
});
ghpages.addTask('docs:deploy', {
  description: 'deploy the docs',
  exec: 'mkdocs gh-deploy',
});

project.synth();
