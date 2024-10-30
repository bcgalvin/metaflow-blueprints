import { SecretKeySelector } from '../../../imports/k8s';
import { EventSourceFilter, TLSConfig } from '../../types';

/**
 * AzureServiceBusEventSource describes the event source for azure service bus More info at
 * https://docs.microsoft.com/en-us/azure/service-bus-messaging/
 */
export interface AzureServiceBusEventSource {
  /**
   * ConnectionString is the connection string for the Azure Service Bus. If this fields is
   * not provided it will try to access via Azure AD with DefaultAzureCredential and
   * FullyQualifiedNamespace.
   */
  readonly connectionString?: SecretKeySelector;
  /**
   * Filter
   */
  readonly filter?: EventSourceFilter;
  /**
   * FullyQualifiedNamespace is the Service Bus namespace name (ex:
   * myservicebus.servicebus.windows.net). This field is necessary to access via Azure AD
   * (managed identity) and it is ignored if ConnectionString is set.
   */
  readonly fullyQualifiedNamespace?: string;
  /**
   * JSONBody specifies that all event body payload coming from this source will be JSON
   */
  readonly jsonBody?: boolean;
  /**
   * Metadata holds the user defined metadata which will passed along the event payload.
   */
  readonly metadata?: { [key: string]: string };
  /**
   * QueueName is the name of the Azure Service Bus Queue
   */
  readonly queueName: string;
  /**
   * SubscriptionName is the name of the Azure Service Bus Topic Subscription
   */
  readonly subscriptionName: string;
  /**
   * TLS configuration for the service bus client
   */
  readonly tls?: TLSConfig;
  /**
   * TopicName is the name of the Azure Service Bus Topic
   */
  readonly topicName: string;
}
