import { ApiObjectMetadata } from 'cdk8s';
import { Construct } from 'constructs';
import { BaseEventSource } from './base';

export interface SqsEventSourceProps {
  readonly metadata: ApiObjectMetadata;
  readonly spec: {
    eventBusName?: string;
    sqs: {
      region: string;
      queue: string;
      waitTimeSeconds: number;
      accessKey?: { name: string; key: string };
      secretKey?: { name: string; key: string };
      sessionToken?: { name: string; key: string };
      roleARN?: string;
      queueAccountId?: string;
      endpoint?: string;
      jsonBody?: boolean;
      dlq?: boolean;
      metadata?: { [key: string]: string };
      filter?: { expression: string };
    };
  };
}

export class SqsEventSource extends BaseEventSource {
  constructor(scope: Construct, id: string, props: SqsEventSourceProps) {
    super(scope, id, props);
  }
}
