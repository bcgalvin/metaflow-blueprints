import { ApiObjectMetadata } from 'cdk8s';
import { Construct } from 'constructs';
import { z } from 'zod';
import { EventSource } from '../imports/argoproj.io';

/**
 * Properties for creating a base event source.
 *
 * @typedef {object} BaseEventSourceProps
 * @property {ApiObjectMetadata} metadata - Metadata for the Kubernetes API object.
 * @property {SpecType} spec - Specification for the event source.
 *
 * @template SpecType - The type of the specification object.
 */
export const BaseEventSourcePropsSchema = z.object({
  metadata: ApiObjectMetadata,
  spec: z.unknown(),
});

/**
 * Type definition for base event source properties.
 *
 * @typedef {object} BaseEventSourceProps<SpecType>
 * @property {ApiObjectMetadata} metadata - Metadata for the Kubernetes API object.
 * @property {SpecType} spec - Specification for the event source.
 *
 * @template SpecType - The type of the specification object.
 */
export type BaseEventSourceProps<SpecType> = {
  metadata: ApiObjectMetadata;
  spec: SpecType;
};

/**
 * Abstract base class for all event sources.
 *
 * This class provides common functionality for event sources, including
 * validation of metadata and specification using Zod schemas, and the creation
 * of the underlying EventSource Kubernetes resource.
 *
 * @abstract
 * @template SpecType - The type of the specification object.
 */
export abstract class BaseEventSource<SpecType> extends Construct {
  /**
   * The underlying Kubernetes EventSource resource.
   *
   * @type {EventSource}
   */
  protected readonly eventSource: EventSource;

  /**
   * The Zod schema used to validate the specification.
   *
   * @type {z.ZodType<SpecType>}
   * @protected
   */
  protected abstract schema: z.ZodType<SpecType>;

  /**
   * Creates an instance of BaseEventSource.
   *
   * @param {Construct} scope - The scope in which to define this construct.
   * @param {string} id - The scoped construct ID.
   * @param {BaseEventSourceProps<SpecType>} props - The properties of the event source.
   *
   * @throws Will throw an error if metadata or spec validation fails.
   */
  constructor(
    scope: Construct,
    id: string,
    props: BaseEventSourceProps<SpecType>,
  ) {
    super(scope, id);

    // Validate metadata and spec
    this.validateMetadata(props.metadata);
    this.validateSpec(props.spec);

    // Create the EventSource object
    this.eventSource = new EventSource(this, 'EventSource', {
      ...EventSource.GVK,
      metadata: props.metadata,
      spec: this.generateSpec(props.spec),
    });
  }

  /**
   * Generates the specification object for the EventSource resource.
   *
   * @param {SpecType} spec - The validated specification.
   * @returns {{ [key: string]: any }} - The specification object to be used in the EventSource resource.
   */
  protected abstract generateSpec(spec: SpecType): { [key: string]: any };

  /**
   * Validates the specification using the provided Zod schema.
   *
   * @param {SpecType} spec - The specification to validate.
   * @throws {Error} Throws an error if validation fails with details of the validation issues.
   *
   * @protected
   */
  protected validateSpec(spec: SpecType): void {
    try {
      this.schema.parse(spec);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessages = error.errors
          .map((err) => `${err.path.join('.')}: ${err.message}`)
          .join(', ');
        throw new Error(`Invalid event source specification: ${errorMessages}`);
      }
      throw error;
    }
  }

  /**
   * Validates the metadata using the MetadataSchema.
   *
   * @param {ApiObjectMetadata} metadata - The metadata to validate.
   * @throws {Error} Throws an error if metadata validation fails with details of the validation issues.
   *
   * @protected
   */
  protected validateMetadata(metadata: ApiObjectMetadata): void {
    try {
      MetadataSchema.parse(metadata);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessages = error.errors
          .map((err) => `${err.path.join('.')}: ${err.message}`)
          .join(', ');
        throw new Error(`Invalid metadata: ${errorMessages}`);
      }
      throw error;
    }
  }
}
