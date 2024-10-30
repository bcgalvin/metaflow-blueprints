import { SecretKeySelector } from '../../imports/k8s';
import { Backoff, EventSourceFilter, TLSConfig } from '../types';

/**
 * Consumer group for kafka client
 */
export interface KafkaConsumerGroup {
  /**
   * The name for the consumer group to use
   */
  readonly groupName: string;
  /**
   * When starting up a new group do we want to start from the oldest event (true) or the
   * newest event (false), defaults to false
   */
  readonly oldest?: boolean;
  /**
   * Rebalance strategy can be one of: sticky, roundrobin, range. Range is the default.
   */
  readonly rebalanceStrategy?: string;
}

/**
 * SASL configuration for the kafka client
 *
 * SASLConfig refers to SASL configuration for a client
 */
export interface SASLConfig {
  /**
   * SASLMechanism is the name of the enabled SASL mechanism. Possible values: OAUTHBEARER,
   * PLAIN (defaults to PLAIN).
   */
  readonly mechanism?: string;
  /**
   * Password for SASL/PLAIN authentication
   */
  readonly passwordSecret?: SecretKeySelector;
  /**
   * User is the authentication identity (authcid) to present for SASL/PLAIN or SASL/SCRAM
   * authentication
   */
  readonly userSecret?: SecretKeySelector;
}

/**
 * KafkaEventSource refers to event-source for Kafka related events
 */
export interface KafkaEventSource {
  /**
   * Yaml format Sarama config for Kafka connection. It follows the struct of sarama.Config.
   * See https://github.com/IBM/sarama/blob/main/config.go e.g.
   *
   * consumer:
   * fetch:
   * min: 1
   * net:
   * MaxOpenRequests: 5
   */
  readonly config?: string;
  /**
   * Backoff holds parameters applied to connection.
   */
  readonly connectionBackoff?: Backoff;
  /**
   * Consumer group for kafka client
   */
  readonly consumerGroup?: KafkaConsumerGroup;
  /**
   * Filter
   */
  readonly filter?: EventSourceFilter;
  /**
   * JSONBody specifies that all event body payload coming from this source will be JSON
   */
  readonly jsonBody?: boolean;
  /**
   * Sets a limit on how many events get read from kafka per second.
   */
  readonly limitEventsPerSecond?: number;
  /**
   * Metadata holds the user defined metadata which will passed along the event payload.
   */
  readonly metadata?: { [key: string]: string };
  /**
   * Partition name
   */
  readonly partition?: string;
  /**
   * SASL configuration for the kafka client
   */
  readonly sasl?: SASLConfig;
  /**
   * TLS configuration for the kafka client.
   */
  readonly tls?: TLSConfig;
  /**
   * Topic name
   */
  readonly topic: string;
  /**
   * URL to kafka cluster, multiple URLs separated by comma
   */
  readonly url: string;
  /**
   * Specify what kafka version is being connected to enables certain features in sarama,
   * defaults to 1.0.0
   */
  readonly version?: string;
}
