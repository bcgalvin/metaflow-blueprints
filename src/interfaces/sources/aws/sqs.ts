import { SecretKeySelector } from '../../../imports/k8s';
import { EventSourceFilter } from '../../types';

/**
 * SQSEventSource refers to event-source for AWS SQS related events
 */
export interface SQSEventSource {
  /**
   * AccessKey refers K8s secret containing aws access key
   */
  readonly accessKey?: SecretKeySelector;
  /**
   * DLQ specifies if a dead-letter queue is configured for messages that can't be processed
   * successfully. If set to true, messages with invalid payload won't be acknowledged to
   * allow to forward them farther to the dead-letter queue. The default value is false.
   */
  readonly dlq?: boolean;
  /**
   * Endpoint configures connection to a specific SQS endpoint instead of Amazons servers
   */
  readonly endpoint?: string;
  /**
   * Filter
   */
  readonly filter?: EventSourceFilter;
  /**
   * JSONBody specifies that all event body payload coming from this source will be JSON
   */
  readonly jsonBody?: boolean;
  /**
   * Metadata holds the user defined metadata which will passed along the event payload.
   */
  readonly metadata?: { [key: string]: string };
  /**
   * Queue is AWS SQS queue to listen to for messages
   */
  readonly queue: string;
  /**
   * QueueAccountID is the ID of the account that created the queue to monitor
   */
  readonly queueAccountId?: string;
  /**
   * Region is AWS region
   */
  readonly region: string;
  /**
   * RoleARN is the Amazon Resource Name (ARN) of the role to assume.
   */
  readonly roleARN?: string;
  /**
   * SecretKey refers K8s secret containing aws secret key
   */
  readonly secretKey?: SecretKeySelector;
  /**
   * SessionToken refers to K8s secret containing AWS temporary credentials(STS) session token
   */
  readonly sessionToken?: SecretKeySelector;
  /**
   * WaitTimeSeconds is The duration (in seconds) for which the call waits for a message to
   * arrive in the queue before returning.
   */
  readonly waitTimeSeconds: number;
  [property: string]: any;
}
