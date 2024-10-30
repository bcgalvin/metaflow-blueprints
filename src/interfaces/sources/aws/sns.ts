import { SecretKeySelector } from '../../../imports/k8s';
import { EventSourceFilter, WebhookContext } from '../../types';

/**
 * SNSEventSource refers to event-source for AWS SNS related events
 */
export interface SNSEventSource {
  /**
   * AccessKey refers K8s secret containing aws access key
   */
  readonly accessKey?: SecretKeySelector;
  /**
   * Endpoint configures connection to a specific SNS endpoint instead of Amazons servers
   */
  readonly endpoint?: string;
  /**
   * Filter
   */
  readonly filter?: EventSourceFilter;
  /**
   * Metadata holds the user defined metadata which will passed along the event payload.
   */
  readonly metadata?: { [key: string]: string };
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
   * TopicArn
   */
  readonly topicArn: string;
  /**
   * ValidateSignature is boolean that can be set to true for SNS signature verification
   */
  readonly validateSignature?: boolean;
  /**
   * Webhook configuration for http server
   */
  readonly webhook?: WebhookContext;
}
