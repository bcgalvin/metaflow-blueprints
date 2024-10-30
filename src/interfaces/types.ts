import { SecretKeySelector } from '../imports/k8s';

/**
 * Webhook refers to the configuration required to run an http server
 *
 * WebhookContext holds a general purpose REST API context
 *
 * Webhook holds configuration to run a http server.
 *
 * Webhook holds configuration to run a http server
 *
 * Webhook refers to the configuration required to run a http server
 *
 * Webhook holds configuration for a REST endpoint
 *
 * Webhook configuration for http server
 */
export interface WebhookContext {
  /**
   * AuthSecret holds a secret selector that contains a bearer token for authentication
   */
  readonly authSecret?: SecretKeySelector;
  /**
   * REST API endpoint
   */
  readonly endpoint: string;
  /**
   * MaxPayloadSize is the maximum webhook payload size that the server will accept. Requests
   * exceeding that limit will be rejected with "request too large" response. Default value:
   * 1048576 (1MB).
   */
  readonly maxPayloadSize?: number;
  /**
   * Metadata holds the user defined metadata which will passed along the event payload.
   */
  readonly metadata?: { [key: string]: string };
  /**
   * Method is HTTP request method that indicates the desired action to be performed for a
   * given resource. See RFC7231 Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content
   */
  readonly method: string;
  /**
   * Port on which HTTP server is listening for incoming events.
   */
  readonly port: string;
  /**
   * ServerCertPath refers the file that contains the cert.
   */
  readonly serverCertSecret?: SecretKeySelector;
  /**
   * ServerKeyPath refers the file that contains private key
   */
  readonly serverKeySecret?: SecretKeySelector;
  /**
   * URL is the url of the server.
   */
  readonly url: string;
  [property: string]: any;
}

/**
 * ConfigMap holds configmap details for persistence
 */
export interface ConfigMapPersistence {
  /**
   * CreateIfNotExist will create configmap if it doesn't exists
   */
  readonly createIfNotExist?: boolean;
  /**
   * Name of the configmap
   */
  readonly name?: string;
  [property: string]: any;
}

/**
 * Persistence hold the configuration for event persistence
 */
export interface EventPersistence {
  /**
   * Catchup enables to triggered the missed schedule when eventsource restarts
   */
  readonly catchup?: CatchupConfiguration;
  /**
   * ConfigMap holds configmap details for persistence
   */
  readonly configMap?: ConfigMapPersistence;
  [property: string]: any;
}

/**
 * Catchup enables to triggered the missed schedule when eventsource restarts
 */
export interface CatchupConfiguration {
  /**
   * Enabled enables to triggered the missed schedule when eventsource restarts
   */
  readonly enabled?: boolean;
  /**
   * MaxDuration holds max catchup duration
   */
  readonly maxDuration?: string;
  [property: string]: any;
}

/**
 * Filter
 */
export interface EventSourceFilter {
  readonly expression?: string;
  [property: string]: any;
}
