import { Construct } from 'constructs';
import { SqsEventSourceConfig } from '../schemas';
import { BaseEventSource, EventSourceMetadata, EventSourceSpec } from './base';
import { SqsValidator } from './sqs-validation';

export interface SqsEventSourceProperties {
  readonly metadata: EventSourceMetadata;
  readonly spec: { [eventName: string]: SqsEventSourceConfig };
}

export class SqsEventSource extends BaseEventSource {
  constructor(scope: Construct, id: string, properties: SqsEventSourceProperties) {
    super(scope, id, properties);
  }

  protected validateSpec(spec: { [eventName: string]: SqsEventSourceConfig }): void {
    super.validateSpec(spec);

    for (const [eventName, config] of Object.entries(spec)) {
      try {
        SqsValidator.validateConfig(config);
      } catch (error) {
        if (error instanceof Error) {
          throw new TypeError(`Event '${eventName}' validation failed: ${error.message}`);
        }
        throw error;
      }
    }
  }

  protected generateSpec(spec: { [eventName: string]: SqsEventSourceConfig }): EventSourceSpec {
    return {
      sqs: Object.fromEntries(
        Object.entries(spec).map(([eventName, config]) => [
          eventName,
          {
            queue: config.queue,
            region: config.region,
            waitTimeSeconds: config.waitTimeSeconds,
            ...(config.accessKey && { accessKey: config.accessKey }),
            ...(config.secretKey && { secretKey: config.secretKey }),
            ...(config.jsonBody !== undefined && { jsonBody: config.jsonBody }),
            ...(config.dlq !== undefined && { dlq: config.dlq }),
            ...(config.filter && { filter: config.filter }),
            ...(config.metadata && { metadata: config.metadata }),
          },
        ]),
      ),
    };
  }
}
