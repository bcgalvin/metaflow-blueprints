import { ApiObjectMetadata, App, Chart } from 'cdk8s';
import { BaseEventSource, EventSourceSpec } from '../src';

class TestEventSource extends BaseEventSource {
  protected generateSpec(spec: unknown): EventSourceSpec {
    return spec as EventSourceSpec;
  }
}

describe('EventSource Validation', () => {
  let chart: Chart;

  beforeEach(() => {
    const app = new App();
    chart = new Chart(app, 'test');
  });

  test('allows unique event names across different source types', () => {
    const props = {
      metadata: { name: 'test' } as ApiObjectMetadata,
      spec: {
        sqs: {
          'event-one': {
            queue: 'q1',
            region: 'us-west-2',
            waitTimeSeconds: 20,
          },
        },
        webhook: {
          'event-two': {
            endpoint: '/test',
          },
        },
      },
    };

    expect(() => new TestEventSource(chart, 'test', props)).not.toThrow();
  });

  test('throws error on duplicate event names across source types', () => {
    const props = {
      metadata: { name: 'test' } as ApiObjectMetadata,
      spec: {
        sqs: {
          'duplicate-event': {
            queue: 'q1',
            region: 'us-west-2',
            waitTimeSeconds: 20,
          },
        },
        webhook: {
          'duplicate-event': {
            endpoint: '/test',
          },
        },
      },
    };

    expect(() => new TestEventSource(chart, 'test', props)).toThrow();
  });

  test('handles empty/undefined source types gracefully', () => {
    const props = {
      metadata: { name: 'test' } as ApiObjectMetadata,
      spec: {
        sqs: {},
        webhook: undefined,
      },
    };

    expect(() => new TestEventSource(chart, 'test', props)).not.toThrow();
  });

  test('validates multiple duplicates across source types', () => {
    const props = {
      metadata: { name: 'test' } as ApiObjectMetadata,
      spec: {
        sqs: {
          'dup-one': { queue: 'q1', region: 'us-west-2', waitTimeSeconds: 20 },
          'dup-two': { queue: 'q2', region: 'us-west-2', waitTimeSeconds: 20 },
        },
        webhook: {
          'dup-one': { endpoint: '/test1' },
          unique: { endpoint: '/test2' },
        },
        sns: {
          'dup-two': { topicArn: 'arn:aws:sns:test' },
        },
      },
    };

    expect(() => new TestEventSource(chart, 'test', props)).toThrow();
  });
});
