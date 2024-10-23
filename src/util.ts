export function validateEventName(eventName: string): true {
  if (!eventName) {
    throw new Error('Event name cannot be empty');
  }

  if (eventName.length > 253) {
    throw new Error('Event name cannot be longer than 253 characters');
  }

  const invalidChars = eventName.match(/[^a-z0-9\.-]/g);
  if (invalidChars) {
    throw new Error(
      `Event name contains invalid characters: ${Array.from(new Set(invalidChars)).join(', ')}`,
    );
  }

  if (!eventName.match(/^[a-z0-9]/)) {
    throw new Error(
      'Event name must start with a lowercase alphanumeric character',
    );
  }

  if (!eventName.match(/[a-z0-9]$/)) {
    throw new Error(
      'Event name must end with a lowercase alphanumeric character',
    );
  }

  if (eventName.match(/[.-]{2,}/)) {
    throw new Error('Event name cannot contain consecutive dots or dashes');
  }

  return true;
}
