import { SecretKeySelector } from '../../imports/k8s';
import { EventSourceFilter, WatchPathConfig } from '../types';

/**
 * SFTPEventSource describes an event-source for sftp related events.
 */
export interface SFTPEventSource {
  /**
   * Address sftp address.
   */
  readonly address?: SecretKeySelector;
  /**
   * Type of file operations to watch Refer
   * https://github.com/fsnotify/fsnotify/blob/master/fsnotify.go for more information
   */
  readonly eventType: string;
  /**
   * Filter
   */
  readonly filter?: EventSourceFilter;
  /**
   * Metadata holds the user defined metadata which will passed along the event payload.
   */
  readonly metadata?: { [key: string]: string };
  /**
   * Password required for authentication if any.
   */
  readonly password?: SecretKeySelector;
  /**
   * PollIntervalDuration the interval at which to poll the SFTP server defaults to 10 seconds
   */
  readonly pollIntervalDuration?: string;
  /**
   * SSHKeySecret refers to the secret that contains SSH key. Key needs to contain private key
   * and public key.
   */
  readonly sshKeySecret?: SecretKeySelector;
  /**
   * Username required for authentication if any.
   */
  readonly username?: SecretKeySelector;
  /**
   * WatchPathConfig contains configuration about the file path to watch
   */
  readonly watchPathConfig: WatchPathConfig;
}
