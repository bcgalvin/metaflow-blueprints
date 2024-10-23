import * as fs from 'fs';
import * as path from 'path';
import { expect } from '@jest/globals';
import { App, Chart, ChartProps, Testing } from 'cdk8s';
import { Construct } from 'constructs';
import * as yaml from 'js-yaml';
import { SqsEventSource, SqsEventSourceProps } from '../src';
import { createTestChart } from './utils';

const ASSETS_DIR = path.join(__dirname, 'assets');
const EXAMPLE_YAML_PATH = path.join(
  ASSETS_DIR,
  'sqs-event-source-argo-example.yaml',
);
const OUTPUT_YAML_PATH = path.join(
  ASSETS_DIR,
  'sqs-event-source-test-output.yaml',
);

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
        [key]: {
          region: sqsSpec.region,
          queue: sqsSpec.queue,
          waitTimeSeconds: sqsSpec.waitTimeSeconds,
          accessKey: sqsSpec.accessKey,
          secretKey: sqsSpec.secretKey,
          jsonBody: sqsSpec.jsonBody,
          dlq: sqsSpec.dlq,
        },
      },
    };

    const [app, chart] = createTestChart();

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
          'default-event': {
            region: 'us-west-2',
            queue: 'my-queue',
            waitTimeSeconds: 20,
            accessKey: { name: 'aws-secret', key: 'accessKey' },
            secretKey: { name: 'aws-secret', key: 'secretKey' },
            jsonBody: true,
          },
        },
      });
    }
  }

  const app = new App();
  const chart = new SqsEventSourceChart(app, 'SqsEventSourceChart');
  app.synth();

  expect(Testing.synth(chart)).toMatchSnapshot();
});
test('supports multiple named events', () => {
  const [, chart] = createTestChart();

  new SqsEventSource(chart, 'MultiEventSqsSource', {
    metadata: { name: 'multi-sqs-source' },
    spec: {
      'high-priority': {
        region: 'us-west-2',
        queue: 'high-priority-queue',
        waitTimeSeconds: 20,
        jsonBody: true,
      },
      'low-priority': {
        region: 'us-west-2',
        queue: 'low-priority-queue',
        waitTimeSeconds: 30,
        dlq: true,
      },
    },
  });

  const manifest = Testing.synth(chart);
  expect(manifest).toMatchSnapshot();

  const spec = manifest[0].spec;
  expect(spec.sqs['high-priority']).toBeDefined();
  expect(spec.sqs['low-priority']).toBeDefined();
  expect(spec.sqs['high-priority'].queue).toBe('high-priority-queue');
  expect(spec.sqs['low-priority'].queue).toBe('low-priority-queue');
});

test('validates event configurations', () => {
  const app = new App();
  const chart = new Chart(app, 'test-chart');

  expect(() => {
    new SqsEventSource(chart, 'InvalidSqsSource', {
      metadata: { name: 'invalid-sqs-source' },
      spec: {
        event1: {
          region: '', // Invalid empty region
          queue: 'my-queue',
          waitTimeSeconds: 20,
        },
      },
    });
  }).toThrow('Region is required and must not be empty');
});
