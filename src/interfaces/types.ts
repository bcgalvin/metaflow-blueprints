import { SecretKeySelector } from '../imports/k8s';

/**
 * Configuration for a REST API webhook HTTP server.
 * Defines the server settings, authentication, and endpoint details.
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
}

/**
 * Filter
 */
export interface EventSourceFilter {
  readonly expression?: string;
}

/**
 * Auth hosts secret selectors for username and password
 *
 * BasicAuth contains the reference to K8s secrets that holds the username and password
 *
 * Baisc auth with username and password
 *
 * BasicAuth configuration for the http request.
 *
 * SchemaRegistry - basic authentication
 */
export interface BasicAuth {
  /**
   * Password refers to the Kubernetes secret that holds the password required for basic auth.
   */
  readonly password?: SecretKeySelector;
  /**
   * Username refers to the Kubernetes secret that holds the username required for basic auth.
   */
  readonly username?: SecretKeySelector;
}

/**
 * Backoff holds parameters applied to connection.
 *
 * Backoff for an operation
 *
 * ConnectionBackoff holds backoff applied to connection.
 *
 * Backoff before checking resource state
 *
 * Retry strategy, defaults to no retry
 */
export interface Backoff {
  /**
   * The initial duration in nanoseconds or strings like "1s", "3m"
   */
  /**
   * The initial duration as a string (e.g. "1s", "3m", "1000")
   */
  readonly duration?: string;
  /**
   * Duration is multiplied by factor each iteration
   */
  readonly factor?: number;
  /**
   * The amount of jitter applied each iteration
   */
  readonly jitter?: number;
  /**
   * Exit with error after this many steps
   */
  readonly steps?: number;
}

/**
 * TLS configuration for the kafka client.
 *
 * TLSConfig refers to TLS configuration for a client.
 *
 * TLS configuration for the amqp client.
 *
 * TLS configuration for the service bus client
 *
 * TLS configuration for the bitbucketserver client.
 *
 * TLS configuration for the emitter client.
 *
 * TLS configuration for the mqtt client.
 *
 * TLS configuration for the nats client.
 *
 * TLS configuration for the nsq client.
 *
 * TLS configuration for the pulsar client.
 *
 * TLS configuration for the redis client.
 *
 * TLS configuration for the HTTP client.
 *
 * TLS configuration for the Kafka producer.
 *
 * TLS configuration for the NATS producer.
 */
export interface TLSConfig {
  /**
   * CACertSecret refers to the secret that contains the CA cert
   */
  readonly caCertSecret?: SecretKeySelector;
  /**
   * ClientCertSecret refers to the secret that contains the client cert
   */
  readonly clientCertSecret?: SecretKeySelector;
  /**
   * ClientKeySecret refers to the secret that contains the client key
   */
  readonly clientKeySecret?: SecretKeySelector;
  /**
   * If true, skips creation of TLSConfig with certs and creates an empty TLSConfig. (Defaults
   * to false)
   */
  readonly insecureSkipVerify?: boolean;
}

/**
 * WatchPathConfig contains configuration about the file path to watch
 */
export interface WatchPathConfig {
  /**
   * Directory to watch for events
   */
  readonly directory: string;
  /**
   * Path is relative path of object to watch with respect to the directory
   */
  readonly path?: string;
  /**
   * PathRegexp is regexp of relative path of object to watch with respect to the directory
   */
  readonly pathRegexp?: string;
}

/**
 * Selector represents conditional operation to select K8s objects.
 */
export interface Selector {
  /**
   * Key name
   */
  readonly key: string;
  /**
   * Supported operations like ==, != etc. Defaults to ==. Refer
   * https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
   * for more info.
   */
  readonly operation?: string;
  /**
   * Value
   */
  readonly value: string;
}

/**
 * Filter is applied on the metadata of the resource If you apply filter, then the internal
 * event informer will only monitor objects that pass the filter.
 *
 * ResourceFilter contains K8s ObjectMeta information to further filter resource event
 * objects
 */
export interface ResourceFilter {
  /**
   * If the resource is created after the start time then the event is treated as valid.
   */
  readonly afterStart?: boolean;
  /**
   * If resource is created before the specified time then the event is treated as valid.
   */
  /**
   * ISO-8601 formatted timestamp.
   * If resource is created before this time then the event is treated as valid.
   * @example "2020-01-01T00:00:00Z"
   */
  readonly createdBy?: string;
  /**
   * Fields provide field filters similar to K8s field selector (see
   * https://kubernetes.io/docs/concepts/overview/working-with-objects/field-selectors/).
   * Unlike K8s field selector, it supports arbitrary fileds like "spec.serviceAccountName",
   * and the value could be a string or a regex. Same as K8s field selector, operator "=",
   * "==" and "!=" are supported.
   */
  readonly fields?: Selector[];
  /**
   * Labels provide listing options to K8s API to watch resource/s. Refer
   * https://kubernetes.io/docs/concepts/overview/working-with-objects/label-selectors/ for
   * more info. Unlike K8s field selector, multiple values are passed as comma separated
   * values instead of list of values. Eg: value: value1,value2. Same as K8s label selector,
   * operator "=", "==", "!=", "exists", "!", "notin", "in", "gt" and "lt" are supported
   */
  readonly labels?: Selector[];
  /**
   * Prefix filter is applied on the resource name.
   */
  readonly prefix?: string;
}
