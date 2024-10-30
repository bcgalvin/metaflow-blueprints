import { ResourceFilter } from '../types';

/**
 * ResourceEventSource refers to a event-source for K8s resource related events.
 */
export interface ResourceEventSource {
  /**
   * EventTypes is the list of event type to watch. Possible values are - ADD, UPDATE and
   * DELETE.
   */
  readonly eventTypes: string[];
  /**
   * Filter is applied on the metadata of the resource If you apply filter, then the internal
   * event informer will only monitor objects that pass the filter.
   */
  readonly filter?: ResourceFilter;
  readonly group: string;
  /**
   * Metadata holds the user defined metadata which will passed along the event payload.
   */
  readonly metadata?: { [key: string]: string };
  /**
   * Namespace where resource is deployed
   */
  readonly namespace: string;
  readonly resource: string;
  readonly version: string;
}
