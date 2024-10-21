import { ApiObjectMetadata } from 'cdk8s';
import { Construct } from 'constructs';
import { BaseEventSource } from './base';

export interface GoogleCloudPubSubEventSourceProps {
  readonly metadata: ApiObjectMetadata;
  readonly spec: {
    eventBusName?: string;
    pubSub: {
      topic: string;
      projectID?: string;
      credentialSecret?: { name: string; key: string };
      deleteSubscriptionOnFinish?: boolean;
      jsonBody?: boolean;
      topicProjectID?: string;
      subscriptionID?: string;
      filter?: { expression: string };
      metadata?: { [key: string]: string };
    };
  };
}

export class GoogleCloudPubSubEventSource extends BaseEventSource {
  constructor(
    scope: Construct,
    id: string,
    props: GoogleCloudPubSubEventSourceProps,
  ) {
    super(scope, id, props);
  }
}
