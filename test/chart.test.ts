import * as k from 'cdk8s';

import { Construct } from 'constructs';
import * as src from '../src';

test('sqs-event-source', () => {
  class SqsEventSourceChart extends k.Chart {
    constructor(scope: Construct, id: string, props: k.ChartProps = {}) {
      super(scope, id, props);

      new src.SqsEventSource(this, 'MySqsSource', {
        metadata: { name: 'my-sqs-source' },
        spec: {
          eventBusName: 'default',
          sqs: {
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

  const app = new k.App();
  const chart = new SqsEventSourceChart(app, 'SqsEventSourceChart');
  expect(k.Testing.synth(chart)).toMatchSnapshot();
});
