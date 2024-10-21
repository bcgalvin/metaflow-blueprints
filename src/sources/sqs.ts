import { Construct } from 'constructs';
import { z } from 'zod';
import { BaseEventSource } from './base';
import {
  SqsEventSourceSpec,
  SqsEventSourceSchema,
  SqsEventSourceProps,
} from '../schemas/sqs';

/**
 * Represents an SQS event source.
 *
 * @class SqsEventSource
 * @extends {BaseEventSource<SqsEventSourceSpec>}
 */
export class SqsEventSource extends BaseEventSource<SqsEventSourceSpec> {
  /**
   * The Zod schema for validating the SQS event source specification.
   *
   * @protected
   * @type {z.ZodType<SqsEventSourceSpec>}
   */
  protected get schema(): z.ZodType<SqsEventSourceSpec> {
    return SqsEventSourceSchema;
  }

  /**
   * Creates an instance of SqsEventSource.
   *
   * @param {Construct} scope - The scope in which to define this construct.
   * @param {string} id - The scoped construct ID.
   * @param {SqsEventSourceProps} props - The properties of the SQS event source.
   *
   * @throws {Error} Throws an error if metadata or spec validation fails.
   */
  constructor(scope: Construct, id: string, props: SqsEventSourceProps) {
    super(scope, id, props);
  }

  /**
   * Generates the specification object for the SQS event source.
   *
   * @param {SqsEventSourceSpec} spec - The specification for the SQS event source.
   * @returns {{ [key: string]: any }} The generated specification object.
   *
   * @protected
   */
  protected generateSpec(spec: SqsEventSourceSpec): { [key: string]: any } {
    const parsedSpec = this.schema.parse(spec);

    const specObj: { [key: string]: any } = {
      queue: parsedSpec.queue,
      region: parsedSpec.region,
      waitTimeSeconds: parsedSpec.waitTimeSeconds,
    };

    if (parsedSpec.accessKey) {
      specObj.accessKey = parsedSpec.accessKey;
    }

    if (parsedSpec.secretKey) {
      specObj.secretKey = parsedSpec.secretKey;
    }

    if (typeof parsedSpec.jsonBody !== 'undefined') {
      specObj.jsonBody = parsedSpec.jsonBody;
    }

    if (typeof parsedSpec.dlq !== 'undefined') {
      specObj.dlq = parsedSpec.dlq;
    }

    if (parsedSpec.filter) {
      specObj.filter = parsedSpec.filter;
    }

    if (parsedSpec.metadata) {
      specObj.metadata = parsedSpec.metadata;
    }

    if (parsedSpec.queueAccountId) {
      specObj.queueAccountId = parsedSpec.queueAccountId;
    }

    if (parsedSpec.roleARN) {
      specObj.roleARN = parsedSpec.roleARN;
    }

    if (parsedSpec.sessionToken) {
      specObj.sessionToken = parsedSpec.sessionToken;
    }

    return {
      sqs: {
        [this.node.id]: specObj,
      },
    };
  }
}
