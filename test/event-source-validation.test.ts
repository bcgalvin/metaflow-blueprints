import { ApiObjectMetadata, App, Chart } from 'cdk8s';
import { TestEventSource } from './utils';

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
});
