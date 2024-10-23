import { ApiObjectMetadata } from 'cdk8s';
import { Construct } from 'constructs';
import { EventSource } from '../imports/argoproj.io';
import { EventSourceSpec } from '../schemas';
import { validateEventName, validateEventNameUniqueness } from '../validators';

export interface BaseEventSourceProperties {
  readonly metadata: ApiObjectMetadata;
  readonly spec: unknown;
}

export abstract class BaseEventSource extends Construct {
  protected readonly eventSourceResource: EventSource;

  constructor(
    scope: Construct,
    id: string,
    properties: BaseEventSourceProperties,
  ) {
    super(scope, id);

    if (!properties?.metadata || !properties?.spec) {
      throw new Error('Both metadata and spec must be provided');
    }

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

  protected validateMetadata(metadata: ApiObjectMetadata): void {
    if (!metadata.name) {
      throw new Error('Metadata name is required');
    }

    validateEventName(metadata.name);
  }
}
