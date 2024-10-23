/**
 * Configuration for selecting a key from a Kubernetes Secret.
 */
export interface SecretKeySelector {
  /**
   * The key of the secret to select from. Must be a valid secret key.
   * @default - none
   */
  readonly key: string;

  /**
   * Name of the referent.
   * @see https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   * @default - none
   */
  readonly name?: string;

  /**
   * Specify whether the Secret or its key must be defined.
   * @default - false
   */
  readonly optional?: boolean;
}

/**
 * Filter configuration for an EventSource.
 */
export interface EventSourceFilter {
  /**
   * Expression is a string to filter events.
   * @default - none
   */
  readonly expression: string;
}
