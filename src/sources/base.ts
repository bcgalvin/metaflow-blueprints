import { ApiObject, ApiObjectMetadata, JsonPatch } from 'cdk8s';
import { Construct } from 'constructs';

export interface EventSourceProps {
  readonly metadata: ApiObjectMetadata;
  readonly spec: any;
}

export abstract class BaseEventSource extends ApiObject {
  public static readonly GVK = {
    apiVersion: 'argoproj.io/v1alpha1',
    kind: 'EventSource',
  };
  constructor(scope: Construct, id: string, props: EventSourceProps) {
    super(scope, id, {
      ...BaseEventSource.GVK,
      ...props,
    });
  }

  protected addToSpec(key: string, value: any): void {
    const currentSpec = this.toJson().spec || {};
    this.addJsonPatch(
      JsonPatch.replace('/spec', { ...currentSpec, [key]: value }),
    );
  }
}
