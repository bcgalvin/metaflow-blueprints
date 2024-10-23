import { SqsEventSourceConfig } from './sqs';

export type EventSourceConfigMap<T> = { [eventName: string]: T };

export interface EventSourceSpec {
  readonly sqs?: EventSourceConfigMap<SqsEventSourceConfig>;
}
