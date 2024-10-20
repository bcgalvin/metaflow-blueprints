import { cdk8s } from 'projen';
const project = new cdk8s.ConstructLibraryCdk8s({
  author: 'Bryan Galvin',
  authorAddress: 'bcgalvin@gmail.com',
  cdk8sVersion: '1.4.10',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.5.0',
  name: 'metaflow-blueprints',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/bcgalvin/metaflow-blueprints.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();