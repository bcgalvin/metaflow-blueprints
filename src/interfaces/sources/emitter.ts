import { SecretKeySelector } from '../../imports/k8s';
import { Backoff, EventSourceFilter, TLSConfig } from '../types';

/**
 * EmitterEventSource describes the event source for emitter More info at
 * https://emitter.io/develop/getting-started/
 */
export interface EmitterEventSource {
  /**
   * Broker URI to connect to.
   */
  readonly broker: string;
  /**
   * ChannelKey refers to the channel key
   */
  readonly channelKey: string;
  /**
   * ChannelName refers to the channel name
   */
  readonly channelName: string;
  /**
   * Backoff holds parameters applied to connection.
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
   * Password to use to connect to broker
   */
  readonly password?: SecretKeySelector;
  /**
   * TLS configuration for the emitter client.
   */
  readonly tls?: TLSConfig;
  /**
   * Username to use to connect to broker
   */
  readonly username?: SecretKeySelector;
}
