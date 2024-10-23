import { ApiObjectMetadata } from 'cdk8s';
import { Construct } from 'constructs';
import { EventSource } from '../imports/argoproj.io';
import { EventSourceSpec } from '../schemas';
import { validateEventName, validateEventNameUniqueness } from '../util';

export interface BaseEventSourceProps {
  readonly metadata: ApiObjectMetadata;
  readonly spec: unknown;
}

export abstract class BaseEventSource extends Construct {
  protected readonly eventSourceResource: EventSource;

  constructor(scope: Construct, id: string, props: BaseEventSourceProps) {
    super(scope, id);

    if (!props?.metadata || !props?.spec) {
      throw new Error('Both metadata and spec must be provided');
    }

    this.validateMetadata(props.metadata);
    this.validateSpec(props.spec);

    this.eventSourceResource = new EventSource(this, 'EventSource', {
      metadata: props.metadata,
      spec: this.generateSpec(props.spec),
    });
  }

  protected abstract generateSpec(spec: unknown): EventSourceSpec;

  protected validateSpec(spec: unknown): void {
    if (typeof spec === 'object' && spec !== null) {
      Object.keys(spec).forEach((eventName) => {
        validateEventName(eventName);
      });
    }

    validateEventNameUniqueness(spec as EventSourceSpec);
  }

  protected validateMetadata(metadata: ApiObjectMetadata): void {
    if (!metadata.name) {
      throw new Error('Metadata name is required');
    }

    validateEventName(metadata.name);
  }
}
