import { EventSourceFilter, SecretKeySelector } from './types';

/**
 * Configuration for an SQS Event Source.
 */
export interface SqsEventSourceConfig {
  /**
   * The AWS region where the SQS queue resides.
   */
  readonly region: string;

  /**
   * The name of the SQS queue.
   */
  readonly queue: string;

  /**
   * The duration (in seconds) for which the call waits for a message.
   */
  readonly waitTimeSeconds: number;

  /**
   * Access key for authenticating with AWS.
   * @default - none
   */
  readonly accessKey?: SecretKeySelector;

  /**
   * Secret key for authenticating with AWS.
   * @default - none
   */
  readonly secretKey?: SecretKeySelector;

  /**
   * Whether to parse the message as JSON.
   * @default - false
   */
  readonly jsonBody?: boolean;

  /**
   * Whether to enable Dead Letter Queue (DLQ).
   * @default - false
   */
  readonly dlq?: boolean;

  /**
   * Optional event filter.
   * @default - none
   */
  readonly filter?: EventSourceFilter;

  /**
   * Additional metadata.
   * @default - none
   */
  readonly metadata?: SqsEventSourceMetadata;
}

/**
 * Metadata for an SQS event source.
 */
/**
 * Metadata for an SQS event source.
 */
export interface SqsEventSourceMetadata {
  /**
   * AWS account ID for the SQS queue.
   * @default - none
   */
  readonly queueAccountId?: string;

  /**
   * ARN of the IAM role.
   * @default - none
   */
  readonly roleARN?: string;

  /**
   * Session token for AWS authentication.
   * @default - none
   */
  readonly sessionToken?: SecretKeySelector;
}
