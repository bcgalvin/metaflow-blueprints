import { ApiObjectMetadata } from 'cdk8s';
import { Construct } from 'constructs';
import { EventSource } from '../imports/argoproj.io';
import { EventSourceSpec } from '../schemas/common';
import { validateEventName } from '../util';

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

  protected validateEventNameUniqueness(spec: EventSourceSpec): void {
    const eventNameMap = new Map<string, string[]>();

    const processEventType = (
      sourceType: string,
      events?: { [key: string]: unknown },
    ): void => {
      if (!events) {
        return;
      }

      Object.keys(events).forEach((eventName) => {
        const sources = eventNameMap.get(eventName) || [];
        sources.push(sourceType);
        eventNameMap.set(eventName, sources);
      });
    };

    processEventType('sqs', spec.sqs);

    const duplicates = Array.from(eventNameMap.entries())
      .filter(([, sources]) => sources.length > 1)
      .map(([name, sources]) => `'${name}' in ${sources.join(',')}`);

    if (duplicates.length > 0) {
      throw new Error(
        duplicates.length === 1
          ? `Duplicate event name ${duplicates[0]} found in multiple event source types: ${eventNameMap.get(duplicates[0].slice(1, -1))?.join(', ')}. Event names must be unique across all types.`
          : `Duplicate event names found across event source types: ${duplicates.join(', ')}. Event names must be unique across all types.`,
      );
    }
  }

  protected validateSpec(spec: unknown): void {
    if (typeof spec === 'object' && spec !== null) {
      Object.keys(spec).forEach((eventName) => {
        validateEventName(eventName);
      });
    }

    this.validateEventNameUniqueness(spec as EventSourceSpec);
  }

  protected validateMetadata(metadata: ApiObjectMetadata): void {
    if (!metadata.name) {
      throw new Error('Metadata name is required');
    }

    validateEventName(metadata.name);
  }
}
