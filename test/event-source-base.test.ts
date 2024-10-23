import { EventSourceSpec } from '../src';
import { createTestChart, TestChart } from './utils';
import { BaseEventSource, BaseEventSourceProps } from '../src/sources';
import { validateEventName } from '../src/util';

describe('validateEventName', () => {
  test('accepts valid event names', () => {
    const validNames = [
      'my-event',
      'event123',
      'my.event',
      'event-123.test',
      'a', // Single character
      'event-name-with-multiple-dashes',
      'event.name.with.dots',
    ];

    validNames.forEach((name) => {
      expect(() => validateEventName(name)).not.toThrow();
    });
  });

  test('rejects empty event names', () => {
    expect(() => validateEventName('')).toThrow('Event name cannot be empty');
  });

  test('rejects names longer than 253 characters', () => {
    const longName = 'a'.repeat(254);
    expect(() => validateEventName(longName)).toThrow(
      'Event name cannot be longer than 253 characters',
    );
  });

  test('rejects invalid characters', () => {
    const invalidNames = [
      'UPPERCASE',
      'Special@Character',
      'space in name',
      'under_score',
      'dollar$sign',
    ];

    invalidNames.forEach((name) => {
      expect(() => validateEventName(name)).toThrow(
        'Event name contains invalid characters',
      );
    });
  });

  test('rejects names starting with non-alphanumeric characters', () => {
    const invalidNames = ['-event', '.event'];

    invalidNames.forEach((name) => {
      expect(() => validateEventName(name)).toThrow(
        'Event name must start with a lowercase alphanumeric character',
      );
    });
  });

  test('rejects names ending with non-alphanumeric characters', () => {
    const invalidNames = ['event-', 'event.'];

    invalidNames.forEach((name) => {
      expect(() => validateEventName(name)).toThrow(
        'Event name must end with a lowercase alphanumeric character',
      );
    });
  });

  test('rejects consecutive dots or dashes', () => {
    const invalidNames = ['event..name', 'event--name', 'event.-name'];

    invalidNames.forEach((name) => {
      expect(() => validateEventName(name)).toThrow(
        'Event name cannot contain consecutive dots or dashes',
      );
    });
  });
});

// Create a concrete implementation of BaseEventSource for testing
class TestEventSource extends BaseEventSource {
  protected generateSpec(spec: unknown): EventSourceSpec {
    return spec as EventSourceSpec;
  }

  protected validateSpec(spec: unknown): void {
    super.validateSpec(spec);
  }
}

describe('BaseEventSource', () => {
  let chart: TestChart;

  beforeEach(() => {
    [, chart] = createTestChart();
  });

  test('constructs successfully with valid props', () => {
    const props: BaseEventSourceProps = {
      metadata: { name: 'test-source' },
      spec: { 'valid-event': { someConfig: 'value' } },
    };

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
