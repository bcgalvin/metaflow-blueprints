import { ApiObjectMetadata } from 'cdk8s';
import { SqsEventSourceConfig } from './sqs';

export type EventSourceConfigMap<T> = { [eventName: string]: T };

export interface EventSourceMetadata extends ApiObjectMetadata {
  readonly name: string;
}
export interface EventSourceSpec {
  readonly sqs?: EventSourceConfigMap<SqsEventSourceConfig>;
}
