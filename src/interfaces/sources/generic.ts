import { SecretKeySelector } from '../../imports/k8s';
import { EventSourceFilter } from '../types';

/**
 * GenericEventSource refers to a generic event source. It can be used to implement a custom
 * event source.
 */
export interface GenericEventSource {
  /**
   * AuthSecret holds a secret selector that contains a bearer token for authentication
   */
  readonly authSecret?: SecretKeySelector;
  /**
   * Config is the event source configuration
   */
  readonly config: string;
  /**
   * Filter
   */
  readonly filter?: EventSourceFilter;
  /**
   * Insecure determines the type of connection.
   */
  readonly insecure?: boolean;
  /**
   * JSONBody specifies that all event body payload coming from this source will be JSON
   */
  readonly jsonBody?: boolean;
  /**
   * Metadata holds the user defined metadata which will passed along the event payload.
   */
  readonly metadata?: { [key: string]: string };
  /**
   * URL of the gRPC server that implements the event source.
   */
  readonly url: string;
}
