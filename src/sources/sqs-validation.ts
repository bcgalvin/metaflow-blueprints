import { AwsValidator } from '../validators';
import { SqsEventSourceConfig } from './sqs';

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
  public static validateConfig(config: SqsEventSourceConfig): void {
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
