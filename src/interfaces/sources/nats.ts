import { SecretKeySelector } from '../../imports/k8s';
import { Backoff, BasicAuth, EventSourceFilter, TLSConfig } from '../types';

/**
 * Auth information
 *
 * NATSAuth refers to the auth info for NATS EventSource
 */
export interface NATSAuth {
  /**
   * Baisc auth with username and password
   */
  readonly basic?: BasicAuth;
  /**
   * credential used to connect
   */
  readonly credential?: SecretKeySelector;
  /**
   * NKey used to connect
   */
  readonly nkey?: SecretKeySelector;
  /**
   * Token used to connect
   */
  readonly token?: SecretKeySelector;
}

/**
 * NATSEventsSource refers to event-source for NATS related events
 */
export interface NATSEventsSource {
  /**
   * Auth information
   */
  readonly auth?: NATSAuth;
  /**
   * ConnectionBackoff holds backoff applied to connection.
   */
  readonly connectionBackoff?: Backoff;
  /**
   * Filter
   */
  readonly filter?: EventSourceFilter;
  /**
   * JSONBody specifies that all event body payload coming from this source will be JSON
   */
  readonly jsonBody?: boolean;
  /**
   * Metadata holds the user defined metadata which will passed along the event payload.
   */
  readonly metadata?: { [key: string]: string };
  /**
   * Queue is the name of the queue group to subscribe as if specified. Uses QueueSubscribe logic to subscribe as queue group.
   * If the queue is empty, uses default Subscribe logic.
   */
  readonly queue?: string;
  /**
   * Subject holds the name of the subject onto which messages are published
   */
  readonly subject: string;
  /**
   * TLS configuration for the nats client.
   */
  readonly tls?: TLSConfig;
  /**
   * URL to connect to NATS cluster
   */
  readonly url: string;
}
