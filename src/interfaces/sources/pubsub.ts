import { SecretKeySelector } from '../../imports/k8s';
import { EventSourceFilter } from '../types';

/**
 * PubSubEventSource refers to event-source for GCP PubSub related events.
 */
export interface PubSubEventSource {
  /**
   * CredentialSecret references to the secret that contains JSON credentials to access GCP.
   * If it is missing, it implicitly uses Workload Identity to access.
   * https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity
   */
  readonly credentialSecret?: SecretKeySelector;
  /**
   * DeleteSubscriptionOnFinish determines whether to delete the GCP PubSub subscription once
   * the event source is stopped.
   */
  readonly deleteSubscriptionOnFinish?: boolean;
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
   * ProjectID is GCP project ID for the subscription. Required if you run Argo Events outside
   * of GKE/GCE. (otherwise, the default value is its project)
   */
  readonly projectID?: string;
  /**
   * SubscriptionID is ID of subscription. Required if you use existing subscription. The
   * default value will be auto generated hash based on this eventsource setting, so the
   * subscription might be recreated every time you update the setting, which has a
   * possibility of event loss.
   */
  readonly subscriptionID?: string;
  /**
   * Topic to which the subscription should belongs. Required if you want the eventsource to
   * create a new subscription. If you specify this field along with an existing subscription,
   * it will be verified whether it actually belongs to the specified topic.
   */
  readonly topic?: string;
  /**
   * TopicProjectID is GCP project ID for the topic. By default, it is same as ProjectID.
   */
  readonly topicProjectID?: string;
}
