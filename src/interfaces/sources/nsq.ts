import { Backoff, EventSourceFilter, TLSConfig } from '../types';

/**
 * NSQEventSource describes the event source for NSQ PubSub More info at
 * https://godoc.org/github.com/nsqio/go-nsq
 */
export interface NSQEventSource {
  /**
   * Channel used for subscription
   */
  readonly channel: string;
  /**
   * Backoff holds parameters applied to connection.
   */
  readonly connectionBackoff?: Backoff;
  /**
   * Filter
   */
  readonly filter?: EventSourceFilter;
  /**
   * HostAddress is the address of the host for NSQ lookup
   */
  readonly hostAddress: string;
  /**
   * JSONBody specifies that all event body payload coming from this source will be JSON
   */
  readonly jsonBody?: boolean;
  /**
   * Metadata holds the user defined metadata which will passed along the event payload.
   */
  readonly metadata?: { [key: string]: string };
  /**
   * TLS configuration for the nsq client.
   */
  readonly tls?: TLSConfig;
  /**
   * Topic to subscribe to.
   */
  readonly topic: string;
}
