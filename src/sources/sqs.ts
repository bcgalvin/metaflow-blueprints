import { ApiObjectMetadata } from 'cdk8s';
import { Construct } from 'constructs';
import { EventSourceSpec, SqsEventSourceConfig } from '../schemas';
import { BaseEventSource } from './base';

export interface SqsEventSourceProperties {
  readonly metadata: ApiObjectMetadata;

  readonly spec: { [eventName: string]: SqsEventSourceConfig };
}

export class SqsEventSource extends BaseEventSource {
  constructor(
    scope: Construct,
    id: string,
    properties: SqsEventSourceProperties,
  ) {
    super(scope, id, properties);
  }

  private isSqsConfig(config: unknown): config is SqsEventSourceConfig {
    const s = config as Partial<SqsEventSourceConfig>;
    return (
      typeof s === 'object' &&
      s !== null &&
      typeof s.queue === 'string' &&
      typeof s.region === 'string' &&
      typeof s.waitTimeSeconds === 'number'
    );
  }

  private isEventMap(
    spec: unknown,
  ): spec is { [key: string]: SqsEventSourceConfig } {
    if (typeof spec !== 'object' || spec === null) {
      return false;
    }
    return Object.values(spec).every((config) => this.isSqsConfig(config));
  }

  protected validateSpec(spec: unknown): void {
    if (!this.isEventMap(spec)) {
      throw new Error('Invalid SQS configuration map');
    }

    for (const config of Object.values(spec)) {
      validateSqsConfig(config);
    }
  }

  protected generateSpec(spec: unknown): EventSourceSpec {
    if (!this.isEventMap(spec)) {
      throw new Error('Invalid SQS configuration map');
    }

    const sqsSpecMap = spec;

    const eventSourceSpec: EventSourceSpec = {
      sqs: Object.entries(sqsSpecMap).reduce(
        (accumulator, [eventName, config]) => {
          accumulator[eventName] = {
            queue: config.queue,
            region: config.region,
            waitTimeSeconds: config.waitTimeSeconds,
            ...(config.accessKey !== undefined && {
              accessKey: config.accessKey,
            }),
            ...(config.secretKey !== undefined && {
              secretKey: config.secretKey,
            }),
            ...(config.jsonBody !== undefined && { jsonBody: config.jsonBody }),
            ...(config.dlq !== undefined && { dlq: config.dlq }),
            ...(config.filter !== undefined && { filter: config.filter }),
            ...(config.metadata !== undefined && { metadata: config.metadata }),
          };
          return accumulator;
        },
        {} as { [key: string]: SqsEventSourceConfig },
      ),
    };

    return eventSourceSpec;
  }
}

function validateSqsConfig(config: SqsEventSourceConfig): void {
  if (!config.region || config.region.length === 0) {
    throw new Error('Region is required and must not be empty');
  }
  if (!config.queue || config.queue.length === 0) {
    throw new Error('Queue name is required and must not be empty');
  }
  if (!Number.isInteger(config.waitTimeSeconds) || config.waitTimeSeconds < 0) {
    throw new Error('WaitTimeSeconds must be a non-negative integer');
  }
}
