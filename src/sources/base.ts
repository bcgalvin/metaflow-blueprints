import { ApiObjectMetadata } from 'cdk8s';
import { Construct } from 'constructs';
import { SqsEventSourceSpec } from './sqs';
import { EventSource } from '../imports/argoproj.io';

/**
 * Union type representing all possible event source specifications.
 * Currently only SQS but will be the union of all possible event sources.
 */
export type EventSourceSpec = SqsEventSourceSpec;

/**
 * Properties for creating a base event source.
 */
export interface BaseEventSourceProps {
  /** Metadata for the event source. */
  readonly metadata: ApiObjectMetadata;
  /** Specification for the event source. */
  readonly spec: EventSourceSpec;
}

/**
 * Abstract base class for all event sources.
 */
export abstract class BaseEventSource extends EventSource {
  protected readonly eventSource: EventSource;

  /**
   * Creates a new BaseEventSource.
   * @param scope The scope in which to define this construct
   * @param id The scoped construct ID
   * @param props Configuration properties for the event source
   */
  constructor(scope: Construct, id: string, props: BaseEventSourceProps) {
    super(scope, id, {
      ...EventSource.GVK,
      ...props,
    });

    this.eventSource = new EventSource(this, 'EventSource', {
      metadata: props.metadata,
      spec: this.generateSpec(props.spec),
    });
  }

  /**
   * Generates the spec for the event source.
   * @param spec The event source specification
   * @returns The generated spec object
   */
  protected abstract generateSpec(spec: EventSourceSpec): {
    [key: string]: any;
  };

  /**
   * Adds a dependency to the event source.
   * @param dependency The construct to depend on
   */
  public addDependency(dependency: Construct): void {
    this.eventSource.addDependency(dependency);
  }

  /**
   * Returns the underlying EventSource object for advanced customization.
   */
  public get apiObject(): EventSource {
    return this.eventSource;
  }
}
