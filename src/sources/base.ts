import { ApiObjectMetadata } from 'cdk8s';
import { Construct } from 'constructs';
import { EventSource } from '../imports/argoproj.io';
import { validateEventName, validateEventNameUniqueness } from '../validators';
import { SqsEventSourceSpec } from './sqs';

export type EventSourceConfigMap<T> = { [eventName: string]: T };

export interface EventSourceMetadata extends ApiObjectMetadata {}
export interface EventSourceSpec {
  readonly sqs?: EventSourceConfigMap<SqsEventSourceSpec>;
}

export interface BaseEventSourceProperties {
  readonly metadata: EventSourceMetadata;
  readonly spec: unknown;
}

export abstract class BaseEventSource extends Construct {
  protected readonly eventSourceResource: EventSource;

  constructor(scope: Construct, id: string, properties: BaseEventSourceProperties) {
    super(scope, id);

    this.validateMetadata(properties.metadata);
    this.validateSpec(properties.spec);

    this.eventSourceResource = new EventSource(this, 'EventSource', {
      metadata: properties.metadata,
      spec: this.generateSpec(properties.spec),
    });
  }

  protected abstract generateSpec(spec: unknown): EventSourceSpec;

  protected validateSpec(spec: unknown): void {
    if (typeof spec === 'object' && spec !== null) {
      for (const eventName of Object.keys(spec)) {
        validateEventName(eventName);
      }
    }
    validateEventNameUniqueness(spec as EventSourceSpec);
  }

  protected validateMetadata(metadata: EventSourceMetadata): void {
    validateEventName(metadata.name!);
  }
}
