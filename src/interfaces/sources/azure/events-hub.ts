import { SecretKeySelector } from '../../../imports/k8s';
import { EventSourceFilter } from '../../types';

/**
 * AzureEventsHubEventSource describes the event source for azure events hub More info at
 * https://docs.microsoft.com/en-us/azure/event-hubs/
 */
export interface AzureEventsHubEventSource {
  /**
   * Filter
   */
  readonly filter?: EventSourceFilter;
  /**
   * FQDN of the EventHubs namespace you created More info at
   * https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-get-connection-string
   */
  readonly fqdn: string;
  /**
   * Event Hub path/name
   */
  readonly hubName: string;
  /**
   * Metadata holds the user defined metadata which will passed along the event payload.
   */
  readonly metadata?: { [key: string]: string };
  /**
   * SharedAccessKey is the generated value of the key
   */
  readonly sharedAccessKey?: SecretKeySelector;
  /**
   * SharedAccessKeyName is the name you chose for your application's SAS keys
   */
  readonly sharedAccessKeyName?: SecretKeySelector;
}
