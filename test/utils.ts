import { App, Chart } from 'cdk8s';
import { Construct } from 'constructs';
import { BaseEventSource, EventSourceSpec } from '../src';

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
