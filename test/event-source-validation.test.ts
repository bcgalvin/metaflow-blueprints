import { App, Chart } from 'cdk8s';
import { EventSourceMetadata } from '../src';
import { TestEventSource } from './utils';

describe('EventSource Validation', () => {
  let chart: Chart;

  beforeEach(() => {
    const app = new App();
    chart = new Chart(app, 'test');
  });

  test('allows unique event names across different source types', () => {
    const properties = {
      metadata: { name: 'test' } as EventSourceMetadata,
      spec: {
        sqs: {
          'event-one': {
            queue: 'q1',
            region: 'us-west-2',
            waitTimeSeconds: 20,
            accessKey: { name: 'aws-secret', key: 'accessKey' },
            secretKey: { name: 'aws-secret', key: 'secretKey' }
          }
        }
      }
    };

    expect(() => new TestEventSource(chart, 'test', properties)).not.toThrow();
  });

  test('handles empty/undefined source types gracefully', () => {
    const properties = {
      metadata: { name: 'test' } as EventSourceMetadata,
      spec: {
        sqs: {}
      }
    };

    expect(() => new TestEventSource(chart, 'test', properties)).not.toThrow();
  });
});
