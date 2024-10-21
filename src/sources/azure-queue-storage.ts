import { ApiObjectMetadata } from 'cdk8s';
import { Construct } from 'constructs';
import { BaseEventSource } from './base';

export interface AzureQueueStorageEventSourceProps {
  readonly metadata: ApiObjectMetadata;
  readonly spec: {
    eventBusName?: string;
    azureQueueStorage: {
      queueName: string;
      connectionString?: { name: string; key: string };
      storageAccountName?: string;
      decodeMessage?: boolean;
      dlq?: boolean;
      filter?: { expression: string };
      jsonBody?: boolean;
      metadata?: { [key: string]: string };
      waitTimeInSeconds?: number;
    };
  };
}

export class AzureQueueStorageEventSource extends BaseEventSource {
  constructor(
    scope: Construct,
    id: string,
    props: AzureQueueStorageEventSourceProps,
  ) {
    super(scope, id, props);
  }
}
