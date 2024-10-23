import { App, Chart } from 'cdk8s';
import { Construct } from 'constructs';
import { BaseEventSource, EventSourceMetadata, EventSourceSpec } from '../src';

export class TestEventSource extends BaseEventSource {
  protected generateSpec(spec: unknown): EventSourceSpec {
    return spec as EventSourceSpec;
  }
}

export function createTestApp(): App {
  return new App({ outdir: '' });
}

export class TestChart extends Chart {
  constructor(scope: Construct, id: string) {
    super(scope, id);
  }
}

export function createTestChart(): [App, TestChart] {
  const app = createTestApp();
  const chart = new TestChart(app, 'test-chart');
  return [app, chart];
}

export function createTestProps(overrides?: {
  metadata?: Partial<EventSourceMetadata>;
  spec?: EventSourceSpec;
}): {
  metadata: EventSourceMetadata;
  spec: EventSourceSpec;
} {
  return {
    metadata: {
      name: 'test-event-source',
      ...overrides?.metadata,
    } as EventSourceMetadata,
    spec: {
      sqs: {
        'test-event': {
          region: 'us-west-2',
          queue: 'test-queue',
          waitTimeSeconds: 20,
          accessKey: {
            key: 'accessKey',
            name: 'aws-secret',
          },
          secretKey: {
            key: 'secretKey',
            name: 'aws-secret',
          },
        },
      },
      ...overrides?.spec,
    },
  };
}

export function createSqsTestProps(overrides?: {
  metadata?: Partial<EventSourceMetadata>;
  spec?: EventSourceSpec;
}) {
  return createTestProps({
    metadata: overrides?.metadata,
    spec: {
      sqs: {
        'test-event': {
          region: 'us-west-2',
          queue: 'test-queue',
          waitTimeSeconds: 20,
          accessKey: {
            key: 'accessKey',
            name: 'aws-secret',
          },
          secretKey: {
            key: 'secretKey',
            name: 'aws-secret',
          },
        },
      },
      ...overrides?.spec,
    },
  });
}

export const ValidationTestHelper = {
  getValidEventNames(): string[] {
    return [
      'my-event',
      'event123',
      'my.event',
      'event-123.test',
      'a',
      'event-name-with-multiple-dashes',
      'event.name.with.dots',
    ];
  },

  getInvalidEventNames(): Array<[string, string]> {
    return [
      ['', 'Event name cannot be empty'],
      ['UPPERCASE', 'Event name contains invalid characters'],
      ['Special@Character', 'Event name contains invalid characters'],
      ['space in name', 'Event name contains invalid characters'],
      [
        '-event',
        'Event name must start with a lowercase alphanumeric character',
      ],
      ['event-', 'Event name must end with a lowercase alphanumeric character'],
      ['event..name', 'Event name cannot contain consecutive dots or dashes'],
    ];
  },
};
