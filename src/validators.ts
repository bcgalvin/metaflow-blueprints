import { EventSourceSpec } from './schemas';

export function validateEventName(eventName: string): true {
  if (!eventName) {
    throw new Error('Event name cannot be empty');
  }

  if (eventName.length > 253) {
    throw new Error('Event name cannot be longer than 253 characters');
  }

  const invalidChars = eventName.match(/[^\d.a-z-]/g);
  if (invalidChars) {
    throw new Error(
      `Event name contains invalid characters: ${[...new Set(invalidChars)].join(', ')}`,
    );
  }

  if (!/^[\da-z]/.test(eventName)) {
    throw new Error(
      'Event name must start with a lowercase alphanumeric character',
    );
  }

  if (!/[\da-z]$/.test(eventName)) {
    throw new Error(
      'Event name must end with a lowercase alphanumeric character',
    );
  }

  if (/[.-]{2,}/.test(eventName)) {
    throw new Error('Event name cannot contain consecutive dots or dashes');
  }

  return true;
}

export function validateEventNameUniqueness(spec: EventSourceSpec): void {
  const eventNameMap = new Map<string, string[]>();

  const processEventType = (
    sourceType: string,
    events?: { [key: string]: unknown },
  ): void => {
    if (!events) {
      return;
    }

    for (const eventName of Object.keys(events)) {
      const sources = eventNameMap.get(eventName) || [];
      sources.push(sourceType);
      eventNameMap.set(eventName, sources);
    }
  };

  processEventType('sqs', spec.sqs);

  const duplicates = [...eventNameMap.entries()]
    .filter(([, sources]) => sources.length > 1)
    .map(([name, sources]) => `'${name}' in ${sources.join(',')}`);

  if (duplicates.length > 0) {
    throw new Error(
      duplicates.length === 1
        ? `Duplicate event name ${duplicates[0]} found in multiple event source types: ${eventNameMap.get(duplicates[0].slice(1, -1))?.join(', ')}. Event names must be unique across all types.`
        : `Duplicate event names found across event source types: ${duplicates.join(', ')}. Event names must be unique across all types.`,
    );
  }
}
