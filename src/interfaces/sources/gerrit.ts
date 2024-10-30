import { BasicAuth, EventSourceFilter, WebhookContext } from '../types';

/**
 * GerritEventSource refers to event-source related to gerrit events
 */
export interface GerritEventSource {
  /**
   * Auth hosts secret selectors for username and password
   */
  readonly auth?: BasicAuth;
  /**
   * DeleteHookOnFinish determines whether to delete the Gerrit hook for the project once the
   * event source is stopped.
   */
  readonly deleteHookOnFinish?: boolean;
  /**
   * Events are gerrit event to listen to. Refer
   * https://gerrit-review.googlesource.com/Documentation/cmd-stream-events.html#events
   */
  readonly events: string[];
  /**
   * Filter
   */
  readonly filter?: EventSourceFilter;
  /**
   * GerritBaseURL is the base URL for API requests to a custom endpoint
   */
  readonly gerritBaseURL: string;
  /**
   * HookName is the name of the webhook
   */
  readonly hookName: string;
  /**
   * Metadata holds the user defined metadata which will passed along the event payload.
   */
  readonly metadata?: { [key: string]: string };
  /**
   * List of project namespace paths like "whynowy/test".
   */
  readonly projects?: string[];
  /**
   * SslVerify to enable ssl verification
   */
  readonly sslVerify?: boolean;
  /**
   * Webhook holds configuration to run a http server
   */
  readonly webhook?: WebhookContext;
}
