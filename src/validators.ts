import { SecretKeySelector } from './imports/k8s';
import { EventSourceSpec, SqsEventSourceSpec } from './sources';
export const EVENT_NAME_CONSTRAINTS = {
  MAX_LENGTH: 253,
  PATTERNS: {
    START: /^[\da-z]/,
    END: /[\da-z]$/,
    CONSECUTIVE_SEPARATORS: /[.-]{2,}/,
    INVALID_CHARS: /[^\d.a-z-]/g,
  },
} as const;

export const AWS_CONSTRAINTS = {
  PATTERNS: {
    REGION: /^[a-z]{2}-[a-z]+-\d$/,
    ACCOUNT_ID: /^\d{12}$/,
    ROLE_ARN: /^arn:aws:iam::\d{12}:role\/[\w+,.=@-]+$/,
  },
} as const;

export interface AwsCommonSpec {
  readonly accessKey?: SecretKeySelector;
  readonly secretKey?: SecretKeySelector;
  readonly region: string;
  readonly roleARN?: string;
  readonly endpoint?: string;
}

export class AwsValidator {
  public static validateCommonFields(config: AwsCommonSpec): void {
    this.validateRegion(config.region);

    if (config.roleARN) {
      this.validateRoleArn(config.roleARN);
    }
  }

  private static validateRegion(region: string): void {
    if (!region.trim()) {
      throw new Error('Region cannot be empty');
    }
    if (!AWS_CONSTRAINTS.PATTERNS.REGION.test(region)) {
      throw new Error(`Invalid AWS region format: ${region}`);
    }
  }

  private static validateRoleArn(roleArn: string): void {
    if (!AWS_CONSTRAINTS.PATTERNS.ROLE_ARN.test(roleArn)) {
      throw new Error(`Invalid IAM role ARN format: ${roleArn}`);
    }
  }
}

export function validateEventName(eventName: string): true {
  if (!eventName) {
    throw new Error('Event name cannot be empty');
  }

  if (eventName.length > EVENT_NAME_CONSTRAINTS.MAX_LENGTH) {
    throw new Error(`Event name cannot be longer than ${EVENT_NAME_CONSTRAINTS.MAX_LENGTH} characters`);
  }

  const invalidChars = eventName.match(EVENT_NAME_CONSTRAINTS.PATTERNS.INVALID_CHARS);
  if (invalidChars) {
    throw new Error(`Event name contains invalid characters: ${[...new Set(invalidChars)].join(', ')}`);
  }

  if (!EVENT_NAME_CONSTRAINTS.PATTERNS.START.test(eventName)) {
    throw new Error('Event name must start with a lowercase alphanumeric character');
  }

  if (!EVENT_NAME_CONSTRAINTS.PATTERNS.END.test(eventName)) {
    throw new Error('Event name must end with a lowercase alphanumeric character');
  }

  if (EVENT_NAME_CONSTRAINTS.PATTERNS.CONSECUTIVE_SEPARATORS.test(eventName)) {
    throw new Error('Event name cannot contain consecutive dots or dashes');
  }

  return true;
}

export function validateEventNameUniqueness(spec: EventSourceSpec): void {
  const eventNameMap = new Map<string, string[]>();

  const processEventType = (sourceType: string, events?: { [key: string]: unknown }): void => {
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

/**
 * Constants for SQS validation
 */
export const SQS_CONSTRAINTS = {
  WAIT_TIME: {
    MIN: 0,
    MAX: 20,
  },
  PATTERNS: {
    REGION: /^[a-z]{2}-[a-z]+-\d$/,
    ACCOUNT_ID: /^\d{12}$/,
    ROLE_ARN: /^arn:aws:iam::\d{12}:role\/[\w+,.=@-]+$/,
  },
} as const;

/**
 * Error type for SQS validation failures
 */
export class SqsValidationError extends Error {
  constructor(field: string, message: string, value?: unknown) {
    const errorMessage =
      value === undefined ? `${field}: ${message}` : `${field}: ${message} (got: ${JSON.stringify(value)})`;
    super(errorMessage);
    this.name = 'SqsValidationError';

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, SqsValidationError);
    }
  }
}

export class SqsValidator {
  public static validateSpec(config: SqsEventSourceSpec): void {
    AwsValidator.validateCommonFields(config);

    this.validateQueue(config.queue);
    this.validateWaitTime(config.waitTimeSeconds);
    this.validateQueueAccountId(config.queueAccountId);
  }

  private static validateQueue(queue: string): void {
    if (!queue.trim()) {
      throw new SqsValidationError('queue', 'Queue name cannot be empty');
    }
  }

  private static validateWaitTime(waitTimeSeconds: number): void {
    if (!Number.isInteger(waitTimeSeconds)) {
      throw new SqsValidationError('waitTimeSeconds', 'Must be an integer value', waitTimeSeconds);
    }
    if (waitTimeSeconds < SQS_CONSTRAINTS.WAIT_TIME.MIN || waitTimeSeconds > SQS_CONSTRAINTS.WAIT_TIME.MAX) {
      throw new SqsValidationError(
        'waitTimeSeconds',
        `Must be between ${SQS_CONSTRAINTS.WAIT_TIME.MIN} and ${SQS_CONSTRAINTS.WAIT_TIME.MAX}`,
        waitTimeSeconds,
      );
    }
  }

  private static validateQueueAccountId(queueAccountId?: string): void {
    if (queueAccountId && !SQS_CONSTRAINTS.PATTERNS.ACCOUNT_ID.test(queueAccountId)) {
      throw new SqsValidationError('queueAccountId', 'Must be a 12-digit AWS account ID', queueAccountId);
    }
  }
}
