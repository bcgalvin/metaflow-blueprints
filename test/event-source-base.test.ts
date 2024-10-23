import {
  createTestChart,
  createTestProps,
  TestChart,
  TestEventSource,
  ValidationTestHelper,
} from './utils';
import { BaseEventSourceProperties } from '../src/sources';
import { validateEventName } from '../src/validators';

describe('validateEventName', () => {
  test('accepts valid event names', () => {
    for (const name of ValidationTestHelper.getValidEventNames()) {
      expect(() => validateEventName(name)).not.toThrow();
    }
  });

  test('rejects invalid event names', () => {
    for (const [
      name,
      errorMessage,
    ] of ValidationTestHelper.getInvalidEventNames()) {
      expect(() => validateEventName(name)).toThrow(errorMessage);
    }
  });
});

describe('BaseEventSource', () => {
  let chart: TestChart;

  beforeEach(() => {
    [, chart] = createTestChart();
  });

  test('constructs successfully with valid props', () => {
    const properties = createTestProps();
    expect(() => new TestEventSource(chart, 'test', properties)).not.toThrow();
  });

  test('validates event names in spec', () => {
    const properties: BaseEventSourceProperties = {
      metadata: { name: 'test-source' },
      spec: { 'INVALID-EVENT': { someConfig: 'value' } },
    };

    expect(() => new TestEventSource(chart, 'test', properties)).toThrow(
      'Event name contains invalid characters',
    );
  });

  test('requires metadata', () => {
    const properties = {
      spec: { 'valid-event': { someConfig: 'value' } },
    } as BaseEventSourceProperties;

    expect(() => new TestEventSource(chart, 'test', properties)).toThrow();
  });

  test('requires spec', () => {
    const properties = {
      metadata: { name: 'test-source' },
    } as BaseEventSourceProperties;

    expect(() => new TestEventSource(chart, 'test', properties)).toThrow();
  });

  test('validates multiple event names in spec', () => {
    const properties: BaseEventSourceProperties = {
      metadata: { name: 'test-source' },
      spec: {
        'valid-event': { someConfig: 'value' },
        'INVALID-EVENT': { someConfig: 'value' },
        'another-invalid..event': { someConfig: 'value' },
      },
    };

    expect(() => new TestEventSource(chart, 'test', properties)).toThrow(
      'Event name contains invalid characters',
    );
  });
});
