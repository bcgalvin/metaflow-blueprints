import { SecretKeySelector } from '../../imports/k8s';
import { EventSourceFilter, WebhookContext } from '../types';

export interface OwnedRepositories {
  /**
   * Repository names
   */
  readonly names?: string[];
  /**
   * Organization or user name
   */
  readonly owner?: string;
  [property: string]: any;
}
/**
 * GitHubApp holds the GitHub app credentials
 */
export interface GithubAppCreds {
  /**
   * AppID refers to the GitHub App ID for the application you created
   */
  readonly appID: number;
  /**
   * InstallationID refers to the Installation ID of the GitHub app you created and installed
   */
  readonly installationID: number;
  /**
   * PrivateKey refers to a K8s secret containing the GitHub app private key
   */
  readonly privateKey: SecretKeySelector;
  [property: string]: any;
}

/**
 * GithubEventSource refers to event-source for github related events
 */
export interface GithubEventSource {
  /**
   * Active refers to status of the webhook for event deliveries.
   * https://developer.github.com/webhooks/creating/#active
   */
  readonly active?: boolean;
  /**
   * APIToken refers to a K8s secret containing github api token
   */
  readonly apiToken?: SecretKeySelector;
  /**
   * ContentType of the event delivery
   */
  readonly contentType?: string;
  /**
   * DeleteHookOnFinish determines whether to delete the GitHub hook for the repository once
   * the event source is stopped.
   */
  readonly deleteHookOnFinish?: boolean;
  /**
   * Events refer to Github events to which the event source will subscribe
   */
  readonly events: string[];
  /**
   * Filter
   */
  readonly filter?: EventSourceFilter;
  /**
   * GitHubApp holds the GitHub app credentials
   */
  readonly githubApp?: GithubAppCreds;
  /**
   * GitHub base URL (for GitHub Enterprise)
   */
  readonly githubBaseURL?: string;
  /**
   * GitHub upload URL (for GitHub Enterprise)
   */
  readonly githubUploadURL?: string;
  /**
   * Id is the webhook's id Deprecated: This is not used at all, will be removed in v1.6
   */
  readonly id?: number;
  /**
   * Insecure tls verification
   */
  readonly insecure?: boolean;
  /**
   * Metadata holds the user defined metadata which will passed along the event payload.
   */
  readonly metadata?: { [key: string]: string };
  /**
   * Organizations holds the names of organizations (used for organization level webhooks).
   * Not required if Repositories is set.
   */
  readonly organizations?: string[];
  /**
   * DeprecatedOwner refers to GitHub owner name i.e. argoproj Deprecated: use Repositories
   * instead. Will be unsupported in v 1.6
   */
  readonly owner?: string;
  /**
   * Repositories holds the information of repositories, which uses repo owner as the key, and
   * list of repo names as the value. Not required if Organizations is set.
   */
  readonly repositories?: OwnedRepositories[];
  /**
   * DeprecatedRepository refers to GitHub repo name i.e. argo-events Deprecated: use
   * Repositories instead. Will be unsupported in v 1.6
   */
  readonly repository?: string;
  /**
   * Webhook refers to the configuration required to run a http server
   */
  readonly webhook?: WebhookContext;
  /**
   * WebhookSecret refers to K8s secret containing GitHub webhook secret
   * https://developer.github.com/webhooks/securing/
   */
  readonly webhookSecret?: SecretKeySelector;
  [property: string]: any;
}
