import { SecretKeySelector } from '../../imports/k8s';
import { EventSourceFilter, WebhookContext } from '../types';

/**
 * SlackEventSource refers to event-source for Slack related events
 */
export interface SlackEventSource {
  /**
   * Filter
   */
  readonly filter?: EventSourceFilter;
  /**
   * Metadata holds the user defined metadata which will passed along the event payload.
   */
  readonly metadata?: { [key: string]: string };
  /**
   * Slack App signing secret
   */
  readonly signingSecret?: SecretKeySelector;
  /**
   * Token for URL verification handshake
   */
  readonly token?: SecretKeySelector;
  /**
   * Webhook holds configuration for a REST endpoint
   */
  readonly webhook?: WebhookContext;
}
