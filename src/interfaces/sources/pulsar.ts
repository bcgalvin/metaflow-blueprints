import { SecretKeySelector } from '../../imports/k8s';
import { Backoff, EventSourceFilter, TLSConfig } from '../types';

/**
 * PulsarEventSource describes the event source for Apache Pulsar
 */
export interface PulsarEventSource {
  /**
   * Authentication athenz parameters for the pulsar client. Refer
   * https://github.com/apache/pulsar-client-go/blob/master/pulsar/auth/athenz.go Either token
   * or athenz can be set to use auth.
   */
  readonly authAthenzParams?: { [key: string]: string };
  /**
   * Authentication athenz privateKey secret for the pulsar client. AuthAthenzSecret must be
   * set if AuthAthenzParams is used.
   */
  readonly authAthenzSecret?: SecretKeySelector;
  /**
   * Authentication token for the pulsar client. Either token or athenz can be set to use auth.
   */
  readonly authTokenSecret?: SecretKeySelector;
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
   * TLS configuration for the pulsar client.
   */
  readonly tls?: TLSConfig;
  /**
   * Whether the Pulsar client accept untrusted TLS certificate from broker.
   */
  readonly tlsAllowInsecureConnection?: boolean;
  /**
   * Trusted TLS certificate secret.
   */
  readonly tlsTrustCertsSecret?: SecretKeySelector;
  /**
   * Whether the Pulsar client verify the validity of the host name from broker.
   */
  readonly tlsValidateHostname?: boolean;
  /**
   * Name of the topics to subscribe to.
   */
  readonly topics: string[];
  /**
   * Type of the subscription. Only "exclusive" and "shared" is supported. Defaults to
   * exclusive.
   */
  readonly type?: string;
  /**
   * Configure the service URL for the Pulsar service.
   */
  readonly url: string;
}
