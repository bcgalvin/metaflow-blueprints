import { Backoff, BasicAuth, EventSourceFilter, TLSConfig } from '../types';

/**
 * MQTTEventSource refers to event-source for MQTT related events
 */
export interface MQTTEventSource {
  /**
   * Auth hosts secret selectors for username and password
   */
  readonly auth?: BasicAuth;
  /**
   * ClientID is the id of the client
   */
  readonly clientId: string;
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
   * TLS configuration for the mqtt client.
   */
  readonly tls?: TLSConfig;
  /**
   * Topic name
   */
  readonly topic: string;
  /**
   * URL to connect to broker
   */
  readonly url: string;
}
