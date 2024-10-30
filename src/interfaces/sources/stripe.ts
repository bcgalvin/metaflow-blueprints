import { SecretKeySelector } from '../../imports/k8s';
import { WebhookContext } from '../types';

/**
 * StripeEventSource describes the event source for stripe webhook notifications More info
 * at https://stripe.com/docs/webhooks
 */
export interface StripeEventSource {
  /**
   * APIKey refers to K8s secret that holds Stripe API key. Used only if CreateWebhook is
   * enabled.
   */
  readonly apiKey?: SecretKeySelector;
  /**
   * CreateWebhook if specified creates a new webhook programmatically.
   */
  readonly createWebhook?: boolean;
  /**
   * EventFilter describes the type of events to listen to. If not specified, all types of
   * events will be processed. More info at https://stripe.com/docs/api/events/list
   */
  readonly eventFilter?: string[];
  /**
   * Metadata holds the user defined metadata which will passed along the event payload.
   */
  readonly metadata?: { [key: string]: string };
  /**
   * Webhook holds configuration for a REST endpoint
   */
  readonly webhook?: WebhookContext;
}
