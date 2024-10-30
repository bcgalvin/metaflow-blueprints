import { SecretKeySelector } from '../../../imports/k8s';
import { EventSourceFilter } from '../../types';

/**
 * AzureQueueStorageEventSource describes the event source for azure queue storage more info
 * at https://learn.microsoft.com/en-us/azure/storage/queues/
 */
export interface AzureQueueStorageEventSource {
  /**
   * ConnectionString is the connection string to access Azure Queue Storage. If this fields
   * is not provided it will try to access via Azure AD with StorageAccountName.
   */
  readonly connectionString?: SecretKeySelector;
  /**
   * DecodeMessage specifies if all the messages should be base64 decoded. If set to true the
   * decoding is done before the evaluation of JSONBody
   */
  readonly decodeMessage?: boolean;
  /**
   * DLQ specifies if a dead-letter queue is configured for messages that can't be processed
   * successfully. If set to true, messages with invalid payload won't be acknowledged to
   * allow to forward them farther to the dead-letter queue. The default value is false.
   */
  readonly dlq?: boolean;
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
   * QueueName is the name of the queue
   */
  readonly queueName: string;
  /**
   * StorageAccountName is the name of the storage account where the queue is. This field is
   * necessary to access via Azure AD (managed identity) and it is ignored if ConnectionString
   * is set.
   */
  readonly storageAccountName?: string;
  /**
   * WaitTimeInSeconds is the duration (in seconds) for which the event source waits between
   * empty results from the queue. The default value is 3 seconds.
   */
  readonly waitTimeInSeconds?: number;
}
