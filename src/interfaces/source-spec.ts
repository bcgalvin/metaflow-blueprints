import { S3Artifact } from './s3';
import {
  AMQPEventSource,
  AzureEventsHubEventSource,
  AzureQueueStorageEventSource,
  AzureServiceBusEventSource,
  BitbucketEventSource,
  BitbucketServerEventSource,
  CalendarEventSource,
  EmitterEventSource,
  FileEventSource,
  GenericEventSource,
  GerritEventSource,
  GithubEventSource,
  GitlabEventSource,
  HDFSEventSource,
  KafkaEventSource,
  MQTTEventSource,
  NATSEventsSource,
  NSQEventSource,
  PubSubEventSource,
  PulsarEventSource,
  RedisEventSource,
  RedisStreamEventSource,
  ResourceEventSource,
  SFTPEventSource,
  SlackEventSource,
  SNSEventSource,
  SQSEventSource,
  StorageGridEventSource,
  StripeEventSource,
  WebhookEventSource,
} from './sources';
import { Service, Template } from './types';

/**
 * EventSourceSpec refers to specification of event-source resource
 */
export interface EventSourceSpec {
  /**
   * EventBusName references to a EventBus name. By default the value is "default"
   */
  readonly eventBusName?: string;
  /**
   * Template is the pod specification for the event source
   *
   * Template is the pod specification for the sensor
   */
  readonly template?: Template;
  /**
   *     is the specifications of the service to expose the event source
   */
  readonly service?: Service;
  /**
   * Minio event sources
   */
  readonly minio?: { [key: string]: S3Artifact };
  /**
   * Calendar event sources
   */
  readonly calendar?: { [key: string]: CalendarEventSource };
  /**
   * File event sources
   */
  readonly file?: { [key: string]: FileEventSource };
  /**
   * Resource event sources
   */
  readonly resource?: { [key: string]: ResourceEventSource };
  /**
   * Webhook event sources
   */
  readonly webhook?: { [key: string]: WebhookEventSource };
  /**
   * AMQP event sources
   */
  readonly amqp?: { [key: string]: AMQPEventSource };
  /**
   * Kafka event sources
   */
  readonly kafka?: { [key: string]: KafkaEventSource };
  /**
   * MQTT event sources
   */
  readonly mqtt?: { [key: string]: MQTTEventSource };
  /**
   * NATS event sources
   */
  readonly nats?: { [key: string]: NATSEventsSource };
  /**
   * SNS event sources
   */
  readonly sns?: { [key: string]: SNSEventSource };
  /**
   * SQS event sources
   */
  readonly sqs?: { [key: string]: SQSEventSource };
  /**
   * PubSub event sources
   */
  readonly pubSub?: { [key: string]: PubSubEventSource };
  /**
   * Github event sources
   */
  readonly github?: { [key: string]: GithubEventSource };
  /**
   * Gitlab event sources
   */
  readonly gitlab?: { [key: string]: GitlabEventSource };
  /**
   * HDFS event sources
   */
  readonly hdfs?: { [key: string]: HDFSEventSource };
  /**
   * Slack event sources
   */
  readonly slack?: { [key: string]: SlackEventSource };
  /**
   * StorageGrid event sources
   */
  readonly storageGrid?: { [key: string]: StorageGridEventSource };
  /**
   * AzureEventsHub event sources
   */
  readonly azureEventsHub?: { [key: string]: AzureEventsHubEventSource };
  /**
   * Stripe event sources
   */
  readonly stripe?: { [key: string]: StripeEventSource };
  /**
   * Emitter event source
   */
  readonly emitter?: { [key: string]: EmitterEventSource };
  /**
   * Redis event source
   */
  readonly redis?: { [key: string]: RedisEventSource };
  /**
   * NSQ event source
   */
  readonly nsq?: { [key: string]: NSQEventSource };
  /**
   * Pulsar event source
   */
  readonly pulsar?: { [key: string]: PulsarEventSource };
  /**
   * Generic event source
   */
  readonly generic?: { [key: string]: GenericEventSource };
  /**
   * Replicas is the event source deployment replicas
   */
  readonly replicas?: number;
  /**
   * Bitbucket Server event sources
   */
  readonly bitbucketserver?: { [key: string]: BitbucketServerEventSource };
  /**
   * Bitbucket event sources
   */
  readonly bitbucket?: { [key: string]: BitbucketEventSource };
  /**
   * Redis stream source
   */
  readonly redisStream?: { [key: string]: RedisStreamEventSource };
  /**
   * Azure Service Bus event source
   */
  readonly azureServiceBus?: { [key: string]: AzureServiceBusEventSource };
  /**
   * AzureQueueStorage event source
   */
  readonly azureQueueStorage?: { [key: string]: AzureQueueStorageEventSource };
  /**
   * SFTP event sources
   */
  readonly sftp?: { [key: string]: SFTPEventSource };
  /**
   * Gerrit event source
   */
  readonly gerrit?: { [key: string]: GerritEventSource };

  [property: string]: any;
}
