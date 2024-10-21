import { z } from 'zod';

/**
 * SecretKeySelector selects a key of a Secret.
 */
export const SecretKeySelectorSchema = z.object({
  /**
   * The key of the secret to select from. Must be a valid secret key.
   */
  key: z.string().nullable(),

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   */
  name: z.string().nullable().optional(),

  /**
   * Specify whether the Secret or its key must be defined.
   */
  optional: z.boolean().nullable().optional(),
});

export type SecretKeySelector = z.infer<typeof SecretKeySelectorSchema>;

/**
 * EventSourceFilter defines a filter for an EventSource.
 */
export const EventSourceFilterSchema = z.object({
  /**
   * Expression is a string to filter events.
   */
  expression: z.string(),
});

export type EventSourceFilter = z.infer<typeof EventSourceFilterSchema>;
