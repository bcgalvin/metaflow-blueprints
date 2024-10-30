import { SecretKeySelector } from '../../../imports/k8s';

/**
 * S3Artifact contains information about an S3 connection and bucket
 *
 * S3 compliant artifact
 */
export interface S3Artifact {
  readonly accessKey: SecretKeySelector;
  readonly bucket: S3Bucket;
  readonly caCertificate?: SecretKeySelector;
  readonly endpoint: string;
  readonly events?: string[];
  readonly filter?: S3Filter;
  readonly insecure?: boolean;
  readonly metadata?: { [key: string]: string };
  readonly region?: string;
  readonly secretKey: SecretKeySelector;
}

/**
 * S3Bucket contains information to describe an S3 Bucket
 */
export interface S3Bucket {
  readonly key?: string;
  readonly name: string;
}

/**
 * S3Filter represents filters to apply to bucket notifications for specifying constraints
 * on objects
 */
export interface S3Filter {
  readonly prefix: string;
  readonly suffix: string;
}
