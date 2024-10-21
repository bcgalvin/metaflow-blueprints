import * as fs from 'fs';
import * as path from 'path';
import { expect } from '@jest/globals';
import { App, Chart, ChartProps, Testing } from 'cdk8s';
import { Construct } from 'constructs';
import * as yaml from 'js-yaml';
import { SqsEventSource, SqsEventSourceProps } from '../src';

const ASSETS_DIR = path.join(__dirname, 'assets');
const EXAMPLE_YAML_PATH = path.join(
  ASSETS_DIR,
  'sqs-event-source-argo-example.yaml',
);
const OUTPUT_YAML_PATH = path.join(ASSETS_DIR, 'sqs-event-source-output.yaml');

describe('SqsEventSource', () => {
  test('synthesizes to the expected YAML manifest', () => {
    const exampleYamlContent = fs.readFileSync(EXAMPLE_YAML_PATH, 'utf8');
    const expectedManifest = yaml.load(exampleYamlContent) as Record<
      string,
      any
    >;

    const { metadata, spec } = expectedManifest;
    const { sqs } = spec;

    const [key] = Object.keys(sqs);
    const sqsSpec = sqs[key];

    const props: SqsEventSourceProps = {
      metadata: metadata,
      spec: {
        region: sqsSpec.region,
        queue: sqsSpec.queue,
        waitTimeSeconds: sqsSpec.waitTimeSeconds,
        accessKey: sqsSpec.accessKey,
        secretKey: sqsSpec.secretKey,
        jsonBody: sqsSpec.jsonBody,
        dlq: sqsSpec.dlq,
      },
    };

    const app = new App();
    const chart = new Chart(app, 'test-chart');

    new SqsEventSource(chart, key, props);

    const outputYaml = app.synthYaml();

    fs.writeFileSync(OUTPUT_YAML_PATH, outputYaml);

    const synthesizedManifest = yaml.load(outputYaml) as Record<string, any>;

    expect(synthesizedManifest).toEqual(expectedManifest);
  });
});

test('sqs-event-source', () => {
  class SqsEventSourceChart extends Chart {
    constructor(scope: Construct, id: string, props: ChartProps = {}) {
      super(scope, id, props);

      new SqsEventSource(this, 'MySqsSource', {
        metadata: { name: 'my-sqs-source' },
        spec: {
          region: 'us-west-2',
          queue: 'my-queue',
          waitTimeSeconds: 20,
          accessKey: { name: 'aws-secret', key: 'accessKey' },
          secretKey: { name: 'aws-secret', key: 'secretKey' },
          jsonBody: true,
        },
      });
    }
  }

  const app = new App();
  const chart = new SqsEventSourceChart(app, 'SqsEventSourceChart');
  app.synth();

  expect(Testing.synth(chart)).toMatchSnapshot();
});
