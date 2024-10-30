import { SecretKeySelector } from '../../imports/k8s';
import { EventSourceFilter, TLSConfig } from '../types';

/**
 * RedisEventSource describes an event source for the Redis PubSub. More info at
 * https://godoc.org/github.com/go-redis/redis#example-PubSub
 */
export interface RedisEventSource {
  readonly channels: string[];
  /**
   * DB to use. If not specified, default DB 0 will be used.
   */
  readonly db?: number;
  /**
   * Filter
   */
  readonly filter?: EventSourceFilter;
  /**
   * HostAddress refers to the address of the Redis host/server
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
   * Namespace to use to retrieve the password from. It should only be specified if password
   * is declared
   */
  readonly namespace?: string;
  /**
   * Password required for authentication if any.
   */
  readonly password?: SecretKeySelector;
  /**
   * TLS configuration for the redis client.
   */
  readonly tls?: TLSConfig;
  /**
   * Username required for ACL style authentication if any.
   */
  readonly username?: string;
}

/**
 * RedisStreamEventSource describes an event source for Redis streams
 * (https://redis.io/topics/streams-intro)
 */
export interface RedisStreamEventSource {
  /**
   * ConsumerGroup refers to the Redis stream consumer group that will be created on all redis
   * streams. Messages are read through this group. Defaults to 'argo-events-cg'
   */
  readonly consumerGroup?: string;
  /**
   * DB to use. If not specified, default DB 0 will be used.
   */
  readonly db?: number;
  /**
   * Filter
   */
  readonly filter?: EventSourceFilter;
  /**
   * HostAddress refers to the address of the Redis host/server (master instance)
   */
  readonly hostAddress: string;
  /**
   * MaxMsgCountPerRead holds the maximum number of messages per stream that will be read in
   * each XREADGROUP of all streams Example: if there are 2 streams and MaxMsgCountPerRead=10,
   * then each XREADGROUP may read upto a total of 20 messages. Same as COUNT option in
   * XREADGROUP(https://redis.io/topics/streams-intro). Defaults to 10
   */
  readonly maxMsgCountPerRead?: number;
  /**
   * Metadata holds the user defined metadata which will passed along the event payload.
   */
  readonly metadata?: { [key: string]: string };
  /**
   * Password required for authentication if any.
   */
  readonly password?: SecretKeySelector;
  /**
   * Streams to look for entries. XREADGROUP is used on all streams using a single consumer
   * group.
   */
  readonly streams: string[];
  /**
   * TLS configuration for the redis client.
   */
  readonly tls?: TLSConfig;
  /**
   * Username required for ACL style authentication if any.
   */
  readonly username?: string;
}
