import { z } from 'zod';
import { SecretKeySelectorSchema, EventSourceFilterSchema } from './common';
import type { MetadataSchema } from './metadata';

/**
 * SqsEventSourceSpec defines the specification for an SQS Event Source.
 */
export const SqsEventSourceSchema = z.object({
  /**
   * The AWS region where the SQS queue resides.
   */
  region: z.string().min(1, 'Region is required'),

  /**
   * The name of the SQS queue.
   */
  queue: z.string().min(1, 'Queue name is required'),

  /**
   * The duration (in seconds) for which the call waits for a message to arrive in the queue before returning.
   */
  waitTimeSeconds: z
    .number()
    .int()
    .min(0, 'WaitTimeSeconds must be a non-negative integer'),

  /**
   * Access key for authenticating with AWS.
   */
  accessKey: SecretKeySelectorSchema.optional(),

  /**
   * Secret key for authenticating with AWS.
   */
  secretKey: SecretKeySelectorSchema.optional(),

  /**
   * Whether to parse the message as JSON.
   */
  jsonBody: z.boolean().optional(),

  /**
   * Whether to enable Dead Letter Queue (DLQ).
   */
  dlq: z.boolean().optional(),

  /**
   * Optional event filter.
   */
  filter: EventSourceFilterSchema.optional(),

  /**
   * Additional metadata.
   */
  metadata: z.record(z.string()).optional(),

  /**
   * AWS account ID for the SQS queue.
   */
  queueAccountId: z.string().optional(),

  /**
   * ARN of the IAM role.
   */
  roleARN: z.string().optional(),

  /**
   * Session token for AWS authentication.
   */
  sessionToken: SecretKeySelectorSchema.optional(),
});

export type SqsEventSourceSpec = z.infer<typeof SqsEventSourceSchema>;

export type SqsEventSourceProps = {
  metadata: z.infer<typeof MetadataSchema>;
  spec: SqsEventSourceSpec;
};
