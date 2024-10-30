import { SecretKeySelector } from '../../imports/k8s';
import { WebhookContext } from '../types';

/**
 * Filter on object key which caused the notification.
 *
 * StorageGridFilter represents filters to apply to bucket notifications for specifying
 * constraints on objects
 */
export interface StorageGridFilter {
  readonly prefix: string;
  readonly suffix: string;
}

/**
 * StorageGridEventSource refers to event-source for StorageGrid related events
 */
export interface StorageGridEventSource {
  /**
   * APIURL is the url of the storagegrid api.
   */
  readonly apiURL: string;
  /**
   * Auth token for storagegrid api
   */
  readonly authToken: SecretKeySelector;
  /**
   * Name of the bucket to register notifications for.
   */
  readonly bucket: string;
  readonly events?: string[];
  /**
   * Filter on object key which caused the notification.
   */
  readonly filter?: StorageGridFilter;
  /**
   * Metadata holds the user defined metadata which will passed along the event payload.
   */
  readonly metadata?: { [key: string]: string };
  /**
   * S3 region. Defaults to us-east-1
   */
  readonly region?: string;
  /**
   * TopicArn
   */
  readonly topicArn: string;
  /**
   * Webhook holds configuration for a REST endpoint
   */
  readonly webhook?: WebhookContext;
}
