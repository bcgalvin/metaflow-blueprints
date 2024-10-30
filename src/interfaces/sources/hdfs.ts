import { ConfigMapKeySelector, SecretKeySelector } from '../../imports/k8s';
import { EventSourceFilter } from '../types';

/**
 * HDFSEventSource refers to event-source for HDFS related events
 */
export interface HDFSEventSource {
  readonly addresses: string[];
  /**
   * CheckInterval is a string that describes an interval duration to check the directory
   * state, e.g. 1s, 30m, 2h... (defaults to 1m)
   */
  readonly checkInterval?: string;
  /**
   * Directory to watch for events
   */
  readonly directory: string;
  /**
   * Filter
   */
  readonly filter?: EventSourceFilter;
  /**
   * HDFSUser is the user to access HDFS file system. It is ignored if either ccache or keytab
   * is used.
   */
  readonly hdfsUser?: string;
  /**
   * KrbCCacheSecret is the secret selector for Kerberos ccache Either ccache or keytab can be
   * set to use Kerberos.
   */
  readonly krbCCacheSecret?: SecretKeySelector;
  /**
   * KrbConfig is the configmap selector for Kerberos config as string It must be set if
   * either ccache or keytab is used.
   */
  readonly krbConfigConfigMap?: ConfigMapKeySelector;
  /**
   * KrbKeytabSecret is the secret selector for Kerberos keytab Either ccache or keytab can be
   * set to use Kerberos.
   */
  readonly krbKeytabSecret?: SecretKeySelector;
  /**
   * KrbRealm is the Kerberos realm used with Kerberos keytab It must be set if keytab is used.
   */
  readonly krbRealm?: string;
  /**
   * KrbServicePrincipalName is the principal name of Kerberos service It must be set if
   * either ccache or keytab is used.
   */
  readonly krbServicePrincipalName?: string;
  /**
   * KrbUsername is the Kerberos username used with Kerberos keytab It must be set if keytab
   * is used.
   */
  readonly krbUsername?: string;
  /**
   * Metadata holds the user defined metadata which will passed along the event payload.
   */
  readonly metadata?: { [key: string]: string };
  /**
   * Path is relative path of object to watch with respect to the directory
   */
  readonly path?: string;
  /**
   * PathRegexp is regexp of relative path of object to watch with respect to the directory
   */
  readonly pathRegexp?: string;
  /**
   * Type of file operations to watch
   */
  readonly type: string;
}
