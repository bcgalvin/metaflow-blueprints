import { ApiObjectMetadata } from 'cdk8s';
import { Construct } from 'constructs';
import { SecretKeySelector } from '../imports/k8s';
import { EventSourceFilter, EventSourceSpec } from '../interfaces';
import { SqsValidator } from '../validators';
import { BaseEventSource, EventSourceMetadata } from './base';
/**
 * Configuration for an SQS Event Source.
 */
export interface SqsEventSourceSpec {
  /**
   * AccessKey refers K8s secret containing aws access key
   */
  readonly accessKey: SecretKeySelector;

  /**
   * SecretKey refers K8s secret containing aws secret key
   */
  readonly secretKey: SecretKeySelector;
  /**
   * Region is AWS region
   */
  readonly region: string;

  /**
   * Queue is AWS SQS queue to listen to for messages
   */
  readonly queue: string;

  /**
   * WaitTimeSeconds is The duration (in seconds) for which the call waits for a message to arrive in the queue before returning.
   */
  readonly waitTimeSeconds: number;

  /**
   * RoleARN is the Amazon Resource Name (ARN) of the role to assume.
   * @default - none
   */
  readonly roleARN?: string;

  /**
   * JSONBody specifies that all event body payload coming from this source will be JSON
   * @default - false
   */
  readonly jsonBody?: boolean;

  /**
   * QueueAccountID is the ID of the account that created the queue to monitor
   * @default - none
   */
  readonly queueAccountId?: string;

  /**
   * Metadata holds the user defined metadata which will passed along the event payload.
   * @default - none
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * DLQ specifies if a dead-letter queue is configured for messages that can’t be processed successfully. If set to true, messages with invalid payload won’t be acknowledged to allow to forward them farther to the dead-letter queue. The default value is false.
   * @default - false
   */
  readonly dlq?: boolean;

  /**
   * Optional event filter.
   * @default - none
   */
  readonly filter?: EventSourceFilter;

  /**
   * Endpoint configures connection to a specific SQS endpoint instead of Amazons servers
   * @default - none
   */
  readonly endpoint?: string;

  /**
   * SessionToken refers to K8s secret containing AWS temporary credentials(STS) session token
   * @default - none
   */
  readonly sessionToken?: SecretKeySelector;
}

export interface SqsEventSourceProperties {
  readonly metadata: EventSourceMetadata;
  readonly spec: { [eventName: string]: SqsEventSourceSpec };
}

export class SqsEventSource extends BaseEventSource {
  constructor(scope: Construct, id: string, properties: SqsEventSourceProperties) {
    super(scope, id, properties);
  }

  protected validateSpec(spec: any): void {
    super.validateSpec(spec);

    const sqsSpec = spec as { [eventName: string]: SqsEventSourceSpec };
    for (const [eventName, config] of Object.entries(sqsSpec)) {
      try {
        SqsValidator.validateSpec(config);
      } catch (error) {
        if (error instanceof Error) {
          throw new TypeError(`Event '${eventName}' validation failed: ${error.message}`);
        }
        throw error;
      }
    }
  }

  protected generateSpec(spec: any): EventSourceSpec {
    const sqsSpec = spec as { [eventName: string]: SqsEventSourceSpec };
    return {
      sqs: Object.fromEntries(
        Object.entries(sqsSpec).map(([eventName, config]) => [
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
