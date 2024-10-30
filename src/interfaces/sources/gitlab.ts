import { SecretKeySelector } from '../../imports/k8s';
import { EventSourceFilter, WebhookContext } from '../types';

/**
 * GitlabEventSource refers to event-source related to Gitlab events
 */
export interface GitlabEventSource {
  /**
   * AccessToken references to k8 secret which holds the gitlab api access information
   */
  readonly accessToken?: SecretKeySelector;
  /**
   * DeleteHookOnFinish determines whether to delete the GitLab hook for the project once the
   * event source is stopped.
   */
  readonly deleteHookOnFinish?: boolean;
  /**
   * EnableSSLVerification to enable ssl verification
   */
  readonly enableSSLVerification?: boolean;
  /**
   * Events are gitlab event to listen to. Refer
   * https://github.com/xanzy/go-gitlab/blob/bf34eca5d13a9f4c3f501d8a97b8ac226d55e4d9/projects.go#L794.
   */
  readonly events: string[];
  /**
   * Filter
   */
  readonly filter?: EventSourceFilter;
  /**
   * GitlabBaseURL is the base URL for API requests to a custom endpoint
   */
  readonly gitlabBaseURL: string;
  /**
   * List of group IDs or group name like "test". Group level hook available in Premium and
   * Ultimate Gitlab.
   */
  readonly groups?: string[];
  /**
   * Metadata holds the user defined metadata which will passed along the event payload.
   */
  readonly metadata?: { [key: string]: string };
  /**
   * DeprecatedProjectID is the id of project for which integration needs to setup Deprecated:
   * use Projects instead. Will be unsupported in v 1.7
   */
  readonly projectID?: string;
  /**
   * List of project IDs or project namespace paths like "whynowy/test". Projects and groups
   * cannot be empty at the same time.
   */
  readonly projects?: string[];
  /**
   * SecretToken references to k8 secret which holds the Secret Token used by webhook config
   */
  readonly secretToken?: SecretKeySelector;
  /**
   * Webhook holds configuration to run a http server
   */
  readonly webhook?: WebhookContext;
}
