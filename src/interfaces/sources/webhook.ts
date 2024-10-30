import { SecretKeySelector } from '../../imports/k8s';
import { EventSourceFilter } from '../types';

/**
 * CalendarEventSource describes an HTTP based EventSource
 */
export interface WebhookEventSource {
  /**
   * AuthSecret holds a secret selector that contains a bearer token for authentication
   */
  readonly authSecret?: SecretKeySelector;
  /**
   * REST API endpoint
   */
  readonly endpoint: string;
  /**
   * Filter
   */
  readonly filter?: EventSourceFilter;
  /**
   * MaxPayloadSize is the maximum webhook payload size that the server will accept. Requests
   * exceeding that limit will be rejected with "request too large" response. Default value:
   * 1048576 (1MB).
   */
  readonly maxPayloadSize?: number;
  /**
   * Metadata holds the user defined metadata which will passed along the event payload.
   */
  readonly metadata?: { [key: string]: string };
  /**
   * Method is HTTP request method that indicates the desired action to be performed for a
   * given resource. See RFC7231 Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content
   */
  readonly method: string;
  /**
   * Port on which HTTP server is listening for incoming events.
   */
  readonly port: string;
  /**
   * ServerCertPath refers the file that contains the cert.
   */
  readonly serverCertSecret?: SecretKeySelector;
  /**
   * ServerKeyPath refers the file that contains private key
   */
  readonly serverKeySecret?: SecretKeySelector;
  /**
   * URL is the url of the server.
   */
  readonly url: string;
}
