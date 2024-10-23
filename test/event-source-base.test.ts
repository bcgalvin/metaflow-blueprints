import {
  createTestChart,
  createTestProps,
  TestChart,
  TestEventSource,
  ValidationTestHelper,
} from './utils';
import { BaseEventSourceProps } from '../src/sources';
import { validateEventName } from '../src/util';

describe('validateEventName', () => {
  test('accepts valid event names', () => {
    ValidationTestHelper.getValidEventNames().forEach((name) => {
      expect(() => validateEventName(name)).not.toThrow();
    });
  });

  test('rejects invalid event names', () => {
    ValidationTestHelper.getInvalidEventNames().forEach(
      ([name, errorMessage]) => {
        expect(() => validateEventName(name)).toThrow(errorMessage);
      },
    );
  });
});

describe('BaseEventSource', () => {
  let chart: TestChart;

  beforeEach(() => {
    [, chart] = createTestChart();
  });

  test('constructs successfully with valid props', () => {
    const props = createTestProps();

    expect(() => new TestEventSource(chart, 'test', props)).not.toThrow();
  });

  test('validates event names in spec', () => {
    const props: BaseEventSourceProps = {
      metadata: { name: 'test-source' },
      spec: { 'INVALID-EVENT': { someConfig: 'value' } },
    };

    expect(() => new TestEventSource(chart, 'test', props)).toThrow(
      'Event name contains invalid characters',
    );
  });

  test('requires metadata', () => {
    const props = {
      spec: { 'valid-event': { someConfig: 'value' } },
    } as BaseEventSourceProps;

    expect(() => new TestEventSource(chart, 'test', props)).toThrow(
      'Both metadata and spec must be provided',
    );
  });

  test('requires spec', () => {
    const props = {
      metadata: { name: 'test-source' },
    } as BaseEventSourceProps;

    expect(() => new TestEventSource(chart, 'test', props)).toThrow(
      'Both metadata and spec must be provided',
    );
  });

  test('validates multiple event names in spec', () => {
    const props: BaseEventSourceProps = {
      metadata: { name: 'test-source' },
      spec: {
        'valid-event': { someConfig: 'value' },
        'INVALID-EVENT': { someConfig: 'value' },
        'another-invalid..event': { someConfig: 'value' },
      },
    };

    expect(() => new TestEventSource(chart, 'test', props)).toThrow(
      'Event name contains invalid characters',
    );
  });
});
