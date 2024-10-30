---
aside: true
---

# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BaseEventSource <a name="BaseEventSource" id="metaflow-blueprints.BaseEventSource"></a>

#### Initializers <a name="Initializers" id="metaflow-blueprints.BaseEventSource.Initializer"></a>

```typescript
import { BaseEventSource } from 'metaflow-blueprints'

new BaseEventSource(scope: Construct, id: string, properties: BaseEventSourceProperties)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.BaseEventSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#metaflow-blueprints.BaseEventSource.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#metaflow-blueprints.BaseEventSource.Initializer.parameter.properties">properties</a></code> | <code><a href="#metaflow-blueprints.BaseEventSourceProperties">BaseEventSourceProperties</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="metaflow-blueprints.BaseEventSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="metaflow-blueprints.BaseEventSource.Initializer.parameter.id"></a>

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="metaflow-blueprints.BaseEventSource.Initializer.parameter.properties"></a>

- *Type:* <a href="#metaflow-blueprints.BaseEventSourceProperties">BaseEventSourceProperties</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#metaflow-blueprints.BaseEventSource.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="metaflow-blueprints.BaseEventSource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#metaflow-blueprints.BaseEventSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="metaflow-blueprints.BaseEventSource.isConstruct"></a>

```typescript
import { BaseEventSource } from 'metaflow-blueprints'

BaseEventSource.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="metaflow-blueprints.BaseEventSource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.BaseEventSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="metaflow-blueprints.BaseEventSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

### SqsEventSource <a name="SqsEventSource" id="metaflow-blueprints.SqsEventSource"></a>

#### Initializers <a name="Initializers" id="metaflow-blueprints.SqsEventSource.Initializer"></a>

```typescript
import { SqsEventSource } from 'metaflow-blueprints'

new SqsEventSource(scope: Construct, id: string, properties: SqsEventSourceProperties)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.SqsEventSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#metaflow-blueprints.SqsEventSource.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#metaflow-blueprints.SqsEventSource.Initializer.parameter.properties">properties</a></code> | <code><a href="#metaflow-blueprints.SqsEventSourceProperties">SqsEventSourceProperties</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="metaflow-blueprints.SqsEventSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="metaflow-blueprints.SqsEventSource.Initializer.parameter.id"></a>

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="metaflow-blueprints.SqsEventSource.Initializer.parameter.properties"></a>

- *Type:* <a href="#metaflow-blueprints.SqsEventSourceProperties">SqsEventSourceProperties</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#metaflow-blueprints.SqsEventSource.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="metaflow-blueprints.SqsEventSource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#metaflow-blueprints.SqsEventSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="metaflow-blueprints.SqsEventSource.isConstruct"></a>

```typescript
import { SqsEventSource } from 'metaflow-blueprints'

SqsEventSource.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="metaflow-blueprints.SqsEventSource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.SqsEventSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="metaflow-blueprints.SqsEventSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

## Structs <a name="Structs" id="Structs"></a>

### BaseEventSourceProperties <a name="BaseEventSourceProperties" id="metaflow-blueprints.BaseEventSourceProperties"></a>

#### Initializer <a name="Initializer" id="metaflow-blueprints.BaseEventSourceProperties.Initializer"></a>

```typescript
import { BaseEventSourceProperties } from 'metaflow-blueprints'

const baseEventSourceProperties: BaseEventSourceProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.BaseEventSourceProperties.property.metadata">metadata</a></code> | <code><a href="#metaflow-blueprints.EventSourceMetadata">EventSourceMetadata</a></code> | *No description.* |
| <code><a href="#metaflow-blueprints.BaseEventSourceProperties.property.spec">spec</a></code> | <code>any</code> | *No description.* |

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="metaflow-blueprints.BaseEventSourceProperties.property.metadata"></a>

```typescript
public readonly metadata: EventSourceMetadata;
```

- *Type:* <a href="#metaflow-blueprints.EventSourceMetadata">EventSourceMetadata</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="metaflow-blueprints.BaseEventSourceProperties.property.spec"></a>

```typescript
public readonly spec: any;
```

- *Type:* any

---

### CalendarEventSource <a name="CalendarEventSource" id="metaflow-blueprints.CalendarEventSource"></a>

CalendarEventSource describes a time based dependency.

One of the fields (schedule,
interval, or recurrence) must be passed. Schedule takes precedence over interval;
interval takes precedence over recurrence

#### Initializer <a name="Initializer" id="metaflow-blueprints.CalendarEventSource.Initializer"></a>

```typescript
import { CalendarEventSource } from 'metaflow-blueprints'

const calendarEventSource: CalendarEventSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.CalendarEventSource.property.exclusionDates">exclusionDates</a></code> | <code>string[]</code> | ExclusionDates defines the list of DATE-TIME exceptions for recurring events. |
| <code><a href="#metaflow-blueprints.CalendarEventSource.property.filter">filter</a></code> | <code><a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a></code> | Filter. |
| <code><a href="#metaflow-blueprints.CalendarEventSource.property.interval">interval</a></code> | <code>string</code> | Interval is a string that describes an interval duration, e.g. 1s, 30m, 2h... |
| <code><a href="#metaflow-blueprints.CalendarEventSource.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata holds the user defined metadata which will passed along the event payload. |
| <code><a href="#metaflow-blueprints.CalendarEventSource.property.persistence">persistence</a></code> | <code><a href="#metaflow-blueprints.EventPersistence">EventPersistence</a></code> | Persistence hold the configuration for event persistence. |
| <code><a href="#metaflow-blueprints.CalendarEventSource.property.schedule">schedule</a></code> | <code>string</code> | Schedule is a cron-like expression. |
| <code><a href="#metaflow-blueprints.CalendarEventSource.property.timezone">timezone</a></code> | <code>string</code> | Timezone in which to run the schedule. |

---

##### `exclusionDates`<sup>Optional</sup> <a name="exclusionDates" id="metaflow-blueprints.CalendarEventSource.property.exclusionDates"></a>

```typescript
public readonly exclusionDates: string[];
```

- *Type:* string[]

ExclusionDates defines the list of DATE-TIME exceptions for recurring events.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="metaflow-blueprints.CalendarEventSource.property.filter"></a>

```typescript
public readonly filter: EventSourceFilter;
```

- *Type:* <a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a>

Filter.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="metaflow-blueprints.CalendarEventSource.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

Interval is a string that describes an interval duration, e.g. 1s, 30m, 2h...

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="metaflow-blueprints.CalendarEventSource.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata holds the user defined metadata which will passed along the event payload.

---

##### `persistence`<sup>Optional</sup> <a name="persistence" id="metaflow-blueprints.CalendarEventSource.property.persistence"></a>

```typescript
public readonly persistence: EventPersistence;
```

- *Type:* <a href="#metaflow-blueprints.EventPersistence">EventPersistence</a>

Persistence hold the configuration for event persistence.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="metaflow-blueprints.CalendarEventSource.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

Schedule is a cron-like expression.

For reference, see: <https://en.wikipedia.org/wiki/Cron>

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="metaflow-blueprints.CalendarEventSource.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

Timezone in which to run the schedule.

---

### CatchupConfiguration <a name="CatchupConfiguration" id="metaflow-blueprints.CatchupConfiguration"></a>

Catchup enables to triggered the missed schedule when eventsource restarts.

#### Initializer <a name="Initializer" id="metaflow-blueprints.CatchupConfiguration.Initializer"></a>

```typescript
import { CatchupConfiguration } from 'metaflow-blueprints'

const catchupConfiguration: CatchupConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.CatchupConfiguration.property.enabled">enabled</a></code> | <code>boolean</code> | Enabled enables to triggered the missed schedule when eventsource restarts. |
| <code><a href="#metaflow-blueprints.CatchupConfiguration.property.maxDuration">maxDuration</a></code> | <code>string</code> | MaxDuration holds max catchup duration. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="metaflow-blueprints.CatchupConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

Enabled enables to triggered the missed schedule when eventsource restarts.

---

##### `maxDuration`<sup>Optional</sup> <a name="maxDuration" id="metaflow-blueprints.CatchupConfiguration.property.maxDuration"></a>

```typescript
public readonly maxDuration: string;
```

- *Type:* string

MaxDuration holds max catchup duration.

---

### ConfigMapPersistence <a name="ConfigMapPersistence" id="metaflow-blueprints.ConfigMapPersistence"></a>

ConfigMap holds configmap details for persistence.

#### Initializer <a name="Initializer" id="metaflow-blueprints.ConfigMapPersistence.Initializer"></a>

```typescript
import { ConfigMapPersistence } from 'metaflow-blueprints'

const configMapPersistence: ConfigMapPersistence = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.ConfigMapPersistence.property.createIfNotExist">createIfNotExist</a></code> | <code>boolean</code> | CreateIfNotExist will create configmap if it doesn't exists. |
| <code><a href="#metaflow-blueprints.ConfigMapPersistence.property.name">name</a></code> | <code>string</code> | Name of the configmap. |

---

##### `createIfNotExist`<sup>Optional</sup> <a name="createIfNotExist" id="metaflow-blueprints.ConfigMapPersistence.property.createIfNotExist"></a>

```typescript
public readonly createIfNotExist: boolean;
```

- *Type:* boolean

CreateIfNotExist will create configmap if it doesn't exists.

---

##### `name`<sup>Optional</sup> <a name="name" id="metaflow-blueprints.ConfigMapPersistence.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the configmap.

---

### EventPersistence <a name="EventPersistence" id="metaflow-blueprints.EventPersistence"></a>

Persistence hold the configuration for event persistence.

#### Initializer <a name="Initializer" id="metaflow-blueprints.EventPersistence.Initializer"></a>

```typescript
import { EventPersistence } from 'metaflow-blueprints'

const eventPersistence: EventPersistence = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.EventPersistence.property.catchup">catchup</a></code> | <code><a href="#metaflow-blueprints.CatchupConfiguration">CatchupConfiguration</a></code> | Catchup enables to triggered the missed schedule when eventsource restarts. |
| <code><a href="#metaflow-blueprints.EventPersistence.property.configMap">configMap</a></code> | <code><a href="#metaflow-blueprints.ConfigMapPersistence">ConfigMapPersistence</a></code> | ConfigMap holds configmap details for persistence. |

---

##### `catchup`<sup>Optional</sup> <a name="catchup" id="metaflow-blueprints.EventPersistence.property.catchup"></a>

```typescript
public readonly catchup: CatchupConfiguration;
```

- *Type:* <a href="#metaflow-blueprints.CatchupConfiguration">CatchupConfiguration</a>

Catchup enables to triggered the missed schedule when eventsource restarts.

---

##### `configMap`<sup>Optional</sup> <a name="configMap" id="metaflow-blueprints.EventPersistence.property.configMap"></a>

```typescript
public readonly configMap: ConfigMapPersistence;
```

- *Type:* <a href="#metaflow-blueprints.ConfigMapPersistence">ConfigMapPersistence</a>

ConfigMap holds configmap details for persistence.

---

### EventSourceFilter <a name="EventSourceFilter" id="metaflow-blueprints.EventSourceFilter"></a>

Filter.

#### Initializer <a name="Initializer" id="metaflow-blueprints.EventSourceFilter.Initializer"></a>

```typescript
import { EventSourceFilter } from 'metaflow-blueprints'

const eventSourceFilter: EventSourceFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.EventSourceFilter.property.expression">expression</a></code> | <code>string</code> | *No description.* |

---

##### `expression`<sup>Optional</sup> <a name="expression" id="metaflow-blueprints.EventSourceFilter.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

### EventSourceMetadata <a name="EventSourceMetadata" id="metaflow-blueprints.EventSourceMetadata"></a>

#### Initializer <a name="Initializer" id="metaflow-blueprints.EventSourceMetadata.Initializer"></a>

```typescript
import { EventSourceMetadata } from 'metaflow-blueprints'

const eventSourceMetadata: EventSourceMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.EventSourceMetadata.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#metaflow-blueprints.EventSourceMetadata.property.finalizers">finalizers</a></code> | <code>string[]</code> | Namespaced keys that tell Kubernetes to wait until specific conditions are met before it fully deletes resources marked for deletion. |
| <code><a href="#metaflow-blueprints.EventSourceMetadata.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Map of string keys and values that can be used to organize and categorize (scope and select) objects. |
| <code><a href="#metaflow-blueprints.EventSourceMetadata.property.name">name</a></code> | <code>string</code> | The unique, namespace-global, name of this object inside the Kubernetes cluster. |
| <code><a href="#metaflow-blueprints.EventSourceMetadata.property.namespace">namespace</a></code> | <code>string</code> | Namespace defines the space within each name must be unique. |
| <code><a href="#metaflow-blueprints.EventSourceMetadata.property.ownerReferences">ownerReferences</a></code> | <code>cdk8s.OwnerReference[]</code> | List of objects depended by this object. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="metaflow-blueprints.EventSourceMetadata.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* No annotations.

Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be
preserved when modifying objects.

> [http://kubernetes.io/docs/user-guide/annotations](http://kubernetes.io/docs/user-guide/annotations)

---

##### `finalizers`<sup>Optional</sup> <a name="finalizers" id="metaflow-blueprints.EventSourceMetadata.property.finalizers"></a>

```typescript
public readonly finalizers: string[];
```

- *Type:* string[]
- *Default:* No finalizers.

Namespaced keys that tell Kubernetes to wait until specific conditions are met before it fully deletes resources marked for deletion.

Must be empty before the object is deleted from the registry. Each entry is
an identifier for the responsible component that will remove the entry from
the list. If the deletionTimestamp of the object is non-nil, entries in
this list can only be removed. Finalizers may be processed and removed in
any order.  Order is NOT enforced because it introduces significant risk of
stuck finalizers. finalizers is a shared field, any actor with permission
can reorder it. If the finalizer list is processed in order, then this can
lead to a situation in which the component responsible for the first
finalizer in the list is waiting for a signal (field value, external
system, or other) produced by a component responsible for a finalizer later
in the list, resulting in a deadlock. Without enforced ordering finalizers
are free to order amongst themselves and are not vulnerable to ordering
changes in the list.

> [https://kubernetes.io/docs/concepts/overview/working-with-objects/finalizers/](https://kubernetes.io/docs/concepts/overview/working-with-objects/finalizers/)

---

##### `labels`<sup>Optional</sup> <a name="labels" id="metaflow-blueprints.EventSourceMetadata.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* No labels.

Map of string keys and values that can be used to organize and categorize (scope and select) objects.

May match selectors of replication controllers and services.

> [http://kubernetes.io/docs/user-guide/labels](http://kubernetes.io/docs/user-guide/labels)

---

##### `name`<sup>Optional</sup> <a name="name" id="metaflow-blueprints.EventSourceMetadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* an app-unique name generated by the chart

The unique, namespace-global, name of this object inside the Kubernetes cluster.

Normally, you shouldn't specify names for objects and let the CDK generate
a name for you that is application-unique. The names CDK generates are
composed from the construct path components, separated by dots and a suffix
that is based on a hash of the entire path, to ensure uniqueness.

You can supply custom name allocation logic by overriding the
`chart.generateObjectName` method.

If you use an explicit name here, bear in mind that this reduces the
composability of your construct because it won't be possible to include
more than one instance in any app. Therefore it is highly recommended to
leave this unspecified.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="metaflow-blueprints.EventSourceMetadata.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string
- *Default:* undefined (will be assigned to the 'default' namespace)

Namespace defines the space within each name must be unique.

An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation.
Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty. Must be a DNS_LABEL. Cannot be updated. More info: <http://kubernetes.io/docs/user-guide/namespaces>

---

##### `ownerReferences`<sup>Optional</sup> <a name="ownerReferences" id="metaflow-blueprints.EventSourceMetadata.property.ownerReferences"></a>

```typescript
public readonly ownerReferences: OwnerReference[];
```

- *Type:* cdk8s.OwnerReference[]
- *Default:* automatically set by Kubernetes

List of objects depended by this object.

If ALL objects in the list have
been deleted, this object will be garbage collected. If this object is
managed by a controller, then an entry in this list will point to this
controller, with the controller field set to true. There cannot be more
than one managing controller.

Kubernetes sets the value of this field automatically for objects that are
dependents of other objects like ReplicaSets, DaemonSets, Deployments, Jobs
and CronJobs, and ReplicationControllers. You can also configure these
relationships manually by changing the value of this field. However, you
usually don't need to and can allow Kubernetes to automatically manage the
relationships.

> [https://kubernetes.io/docs/concepts/overview/working-with-objects/owners-dependents/](https://kubernetes.io/docs/concepts/overview/working-with-objects/owners-dependents/)

---

### EventSourceSpec <a name="EventSourceSpec" id="metaflow-blueprints.EventSourceSpec"></a>

#### Initializer <a name="Initializer" id="metaflow-blueprints.EventSourceSpec.Initializer"></a>

```typescript
import { EventSourceSpec } from 'metaflow-blueprints'

const eventSourceSpec: EventSourceSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.EventSourceSpec.property.sqs">sqs</a></code> | <code>{[ key: string ]: <a href="#metaflow-blueprints.SqsEventSourceSpec">SqsEventSourceSpec</a>}</code> | *No description.* |

---

##### `sqs`<sup>Optional</sup> <a name="sqs" id="metaflow-blueprints.EventSourceSpec.property.sqs"></a>

```typescript
public readonly sqs: {[ key: string ]: SqsEventSourceSpec};
```

- *Type:* {[ key: string ]: <a href="#metaflow-blueprints.SqsEventSourceSpec">SqsEventSourceSpec</a>}

---

### GithubAppCreds <a name="GithubAppCreds" id="metaflow-blueprints.GithubAppCreds"></a>

GitHubApp holds the GitHub app credentials.

#### Initializer <a name="Initializer" id="metaflow-blueprints.GithubAppCreds.Initializer"></a>

```typescript
import { GithubAppCreds } from 'metaflow-blueprints'

const githubAppCreds: GithubAppCreds = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.GithubAppCreds.property.appID">appID</a></code> | <code>number</code> | AppID refers to the GitHub App ID for the application you created. |
| <code><a href="#metaflow-blueprints.GithubAppCreds.property.installationID">installationID</a></code> | <code>number</code> | InstallationID refers to the Installation ID of the GitHub app you created and installed. |
| <code><a href="#metaflow-blueprints.GithubAppCreds.property.privateKey">privateKey</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | PrivateKey refers to a K8s secret containing the GitHub app private key. |

---

##### `appID`<sup>Required</sup> <a name="appID" id="metaflow-blueprints.GithubAppCreds.property.appID"></a>

```typescript
public readonly appID: number;
```

- *Type:* number

AppID refers to the GitHub App ID for the application you created.

---

##### `installationID`<sup>Required</sup> <a name="installationID" id="metaflow-blueprints.GithubAppCreds.property.installationID"></a>

```typescript
public readonly installationID: number;
```

- *Type:* number

InstallationID refers to the Installation ID of the GitHub app you created and installed.

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="metaflow-blueprints.GithubAppCreds.property.privateKey"></a>

```typescript
public readonly privateKey: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

PrivateKey refers to a K8s secret containing the GitHub app private key.

---

### GithubEventSource <a name="GithubEventSource" id="metaflow-blueprints.GithubEventSource"></a>

GithubEventSource refers to event-source for github related events.

#### Initializer <a name="Initializer" id="metaflow-blueprints.GithubEventSource.Initializer"></a>

```typescript
import { GithubEventSource } from 'metaflow-blueprints'

const githubEventSource: GithubEventSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.GithubEventSource.property.events">events</a></code> | <code>string[]</code> | Events refer to Github events to which the event source will subscribe. |
| <code><a href="#metaflow-blueprints.GithubEventSource.property.active">active</a></code> | <code>boolean</code> | Active refers to status of the webhook for event deliveries. |
| <code><a href="#metaflow-blueprints.GithubEventSource.property.apiToken">apiToken</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | APIToken refers to a K8s secret containing github api token. |
| <code><a href="#metaflow-blueprints.GithubEventSource.property.contentType">contentType</a></code> | <code>string</code> | ContentType of the event delivery. |
| <code><a href="#metaflow-blueprints.GithubEventSource.property.deleteHookOnFinish">deleteHookOnFinish</a></code> | <code>boolean</code> | DeleteHookOnFinish determines whether to delete the GitHub hook for the repository once the event source is stopped. |
| <code><a href="#metaflow-blueprints.GithubEventSource.property.filter">filter</a></code> | <code><a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a></code> | Filter. |
| <code><a href="#metaflow-blueprints.GithubEventSource.property.githubApp">githubApp</a></code> | <code><a href="#metaflow-blueprints.GithubAppCreds">GithubAppCreds</a></code> | GitHubApp holds the GitHub app credentials. |
| <code><a href="#metaflow-blueprints.GithubEventSource.property.githubBaseURL">githubBaseURL</a></code> | <code>string</code> | GitHub base URL (for GitHub Enterprise). |
| <code><a href="#metaflow-blueprints.GithubEventSource.property.githubUploadURL">githubUploadURL</a></code> | <code>string</code> | GitHub upload URL (for GitHub Enterprise). |
| <code><a href="#metaflow-blueprints.GithubEventSource.property.id">id</a></code> | <code>number</code> | Id is the webhook's id Deprecated: This is not used at all, will be removed in v1.6. |
| <code><a href="#metaflow-blueprints.GithubEventSource.property.insecure">insecure</a></code> | <code>boolean</code> | Insecure tls verification. |
| <code><a href="#metaflow-blueprints.GithubEventSource.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata holds the user defined metadata which will passed along the event payload. |
| <code><a href="#metaflow-blueprints.GithubEventSource.property.organizations">organizations</a></code> | <code>string[]</code> | Organizations holds the names of organizations (used for organization level webhooks). |
| <code><a href="#metaflow-blueprints.GithubEventSource.property.owner">owner</a></code> | <code>string</code> | DeprecatedOwner refers to GitHub owner name i.e. argoproj Deprecated: use Repositories instead. Will be unsupported in v 1.6. |
| <code><a href="#metaflow-blueprints.GithubEventSource.property.repositories">repositories</a></code> | <code><a href="#metaflow-blueprints.OwnedRepositories">OwnedRepositories</a>[]</code> | Repositories holds the information of repositories, which uses repo owner as the key, and list of repo names as the value. |
| <code><a href="#metaflow-blueprints.GithubEventSource.property.repository">repository</a></code> | <code>string</code> | DeprecatedRepository refers to GitHub repo name i.e. argo-events Deprecated: use Repositories instead. Will be unsupported in v 1.6. |
| <code><a href="#metaflow-blueprints.GithubEventSource.property.webhook">webhook</a></code> | <code><a href="#metaflow-blueprints.WebhookContext">WebhookContext</a></code> | Webhook refers to the configuration required to run a http server. |
| <code><a href="#metaflow-blueprints.GithubEventSource.property.webhookSecret">webhookSecret</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | WebhookSecret refers to K8s secret containing GitHub webhook secret <https://developer.github.com/webhooks/securing/>. |

---

##### `events`<sup>Required</sup> <a name="events" id="metaflow-blueprints.GithubEventSource.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

Events refer to Github events to which the event source will subscribe.

---

##### `active`<sup>Optional</sup> <a name="active" id="metaflow-blueprints.GithubEventSource.property.active"></a>

```typescript
public readonly active: boolean;
```

- *Type:* boolean

Active refers to status of the webhook for event deliveries.

<https://developer.github.com/webhooks/creating/#active>

---

##### `apiToken`<sup>Optional</sup> <a name="apiToken" id="metaflow-blueprints.GithubEventSource.property.apiToken"></a>

```typescript
public readonly apiToken: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

APIToken refers to a K8s secret containing github api token.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="metaflow-blueprints.GithubEventSource.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

ContentType of the event delivery.

---

##### `deleteHookOnFinish`<sup>Optional</sup> <a name="deleteHookOnFinish" id="metaflow-blueprints.GithubEventSource.property.deleteHookOnFinish"></a>

```typescript
public readonly deleteHookOnFinish: boolean;
```

- *Type:* boolean

DeleteHookOnFinish determines whether to delete the GitHub hook for the repository once the event source is stopped.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="metaflow-blueprints.GithubEventSource.property.filter"></a>

```typescript
public readonly filter: EventSourceFilter;
```

- *Type:* <a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a>

Filter.

---

##### `githubApp`<sup>Optional</sup> <a name="githubApp" id="metaflow-blueprints.GithubEventSource.property.githubApp"></a>

```typescript
public readonly githubApp: GithubAppCreds;
```

- *Type:* <a href="#metaflow-blueprints.GithubAppCreds">GithubAppCreds</a>

GitHubApp holds the GitHub app credentials.

---

##### `githubBaseURL`<sup>Optional</sup> <a name="githubBaseURL" id="metaflow-blueprints.GithubEventSource.property.githubBaseURL"></a>

```typescript
public readonly githubBaseURL: string;
```

- *Type:* string

GitHub base URL (for GitHub Enterprise).

---

##### `githubUploadURL`<sup>Optional</sup> <a name="githubUploadURL" id="metaflow-blueprints.GithubEventSource.property.githubUploadURL"></a>

```typescript
public readonly githubUploadURL: string;
```

- *Type:* string

GitHub upload URL (for GitHub Enterprise).

---

##### `id`<sup>Optional</sup> <a name="id" id="metaflow-blueprints.GithubEventSource.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

Id is the webhook's id Deprecated: This is not used at all, will be removed in v1.6.

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="metaflow-blueprints.GithubEventSource.property.insecure"></a>

```typescript
public readonly insecure: boolean;
```

- *Type:* boolean

Insecure tls verification.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="metaflow-blueprints.GithubEventSource.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata holds the user defined metadata which will passed along the event payload.

---

##### `organizations`<sup>Optional</sup> <a name="organizations" id="metaflow-blueprints.GithubEventSource.property.organizations"></a>

```typescript
public readonly organizations: string[];
```

- *Type:* string[]

Organizations holds the names of organizations (used for organization level webhooks).

Not required if Repositories is set.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="metaflow-blueprints.GithubEventSource.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

DeprecatedOwner refers to GitHub owner name i.e. argoproj Deprecated: use Repositories instead. Will be unsupported in v 1.6.

---

##### `repositories`<sup>Optional</sup> <a name="repositories" id="metaflow-blueprints.GithubEventSource.property.repositories"></a>

```typescript
public readonly repositories: OwnedRepositories[];
```

- *Type:* <a href="#metaflow-blueprints.OwnedRepositories">OwnedRepositories</a>[]

Repositories holds the information of repositories, which uses repo owner as the key, and list of repo names as the value.

Not required if Organizations is set.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="metaflow-blueprints.GithubEventSource.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

DeprecatedRepository refers to GitHub repo name i.e. argo-events Deprecated: use Repositories instead. Will be unsupported in v 1.6.

---

##### `webhook`<sup>Optional</sup> <a name="webhook" id="metaflow-blueprints.GithubEventSource.property.webhook"></a>

```typescript
public readonly webhook: WebhookContext;
```

- *Type:* <a href="#metaflow-blueprints.WebhookContext">WebhookContext</a>

Webhook refers to the configuration required to run a http server.

---

##### `webhookSecret`<sup>Optional</sup> <a name="webhookSecret" id="metaflow-blueprints.GithubEventSource.property.webhookSecret"></a>

```typescript
public readonly webhookSecret: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

WebhookSecret refers to K8s secret containing GitHub webhook secret <https://developer.github.com/webhooks/securing/>.

---

### OwnedRepositories <a name="OwnedRepositories" id="metaflow-blueprints.OwnedRepositories"></a>

#### Initializer <a name="Initializer" id="metaflow-blueprints.OwnedRepositories.Initializer"></a>

```typescript
import { OwnedRepositories } from 'metaflow-blueprints'

const ownedRepositories: OwnedRepositories = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.OwnedRepositories.property.names">names</a></code> | <code>string[]</code> | Repository names. |
| <code><a href="#metaflow-blueprints.OwnedRepositories.property.owner">owner</a></code> | <code>string</code> | Organization or user name. |

---

##### `names`<sup>Optional</sup> <a name="names" id="metaflow-blueprints.OwnedRepositories.property.names"></a>

```typescript
public readonly names: string[];
```

- *Type:* string[]

Repository names.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="metaflow-blueprints.OwnedRepositories.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Organization or user name.

---

### SFTPEventSource <a name="SFTPEventSource" id="metaflow-blueprints.SFTPEventSource"></a>

SFTPEventSource describes an event-source for sftp related events.

#### Initializer <a name="Initializer" id="metaflow-blueprints.SFTPEventSource.Initializer"></a>

```typescript
import { SFTPEventSource } from 'metaflow-blueprints'

const sFTPEventSource: SFTPEventSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.SFTPEventSource.property.eventType">eventType</a></code> | <code>string</code> | Type of file operations to watch Refer <https://github.com/fsnotify/fsnotify/blob/master/fsnotify.go> for more information. |
| <code><a href="#metaflow-blueprints.SFTPEventSource.property.watchPathConfig">watchPathConfig</a></code> | <code><a href="#metaflow-blueprints.WatchPathConfig">WatchPathConfig</a></code> | WatchPathConfig contains configuration about the file path to watch. |
| <code><a href="#metaflow-blueprints.SFTPEventSource.property.address">address</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | Address sftp address. |
| <code><a href="#metaflow-blueprints.SFTPEventSource.property.filter">filter</a></code> | <code><a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a></code> | Filter. |
| <code><a href="#metaflow-blueprints.SFTPEventSource.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata holds the user defined metadata which will passed along the event payload. |
| <code><a href="#metaflow-blueprints.SFTPEventSource.property.password">password</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | Password required for authentication if any. |
| <code><a href="#metaflow-blueprints.SFTPEventSource.property.pollIntervalDuration">pollIntervalDuration</a></code> | <code>string</code> | PollIntervalDuration the interval at which to poll the SFTP server defaults to 10 seconds. |
| <code><a href="#metaflow-blueprints.SFTPEventSource.property.sshKeySecret">sshKeySecret</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | SSHKeySecret refers to the secret that contains SSH key. |
| <code><a href="#metaflow-blueprints.SFTPEventSource.property.username">username</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | Username required for authentication if any. |

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="metaflow-blueprints.SFTPEventSource.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

Type of file operations to watch Refer <https://github.com/fsnotify/fsnotify/blob/master/fsnotify.go> for more information.

---

##### `watchPathConfig`<sup>Required</sup> <a name="watchPathConfig" id="metaflow-blueprints.SFTPEventSource.property.watchPathConfig"></a>

```typescript
public readonly watchPathConfig: WatchPathConfig;
```

- *Type:* <a href="#metaflow-blueprints.WatchPathConfig">WatchPathConfig</a>

WatchPathConfig contains configuration about the file path to watch.

---

##### `address`<sup>Optional</sup> <a name="address" id="metaflow-blueprints.SFTPEventSource.property.address"></a>

```typescript
public readonly address: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

Address sftp address.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="metaflow-blueprints.SFTPEventSource.property.filter"></a>

```typescript
public readonly filter: EventSourceFilter;
```

- *Type:* <a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a>

Filter.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="metaflow-blueprints.SFTPEventSource.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata holds the user defined metadata which will passed along the event payload.

---

##### `password`<sup>Optional</sup> <a name="password" id="metaflow-blueprints.SFTPEventSource.property.password"></a>

```typescript
public readonly password: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

Password required for authentication if any.

---

##### `pollIntervalDuration`<sup>Optional</sup> <a name="pollIntervalDuration" id="metaflow-blueprints.SFTPEventSource.property.pollIntervalDuration"></a>

```typescript
public readonly pollIntervalDuration: string;
```

- *Type:* string

PollIntervalDuration the interval at which to poll the SFTP server defaults to 10 seconds.

---

##### `sshKeySecret`<sup>Optional</sup> <a name="sshKeySecret" id="metaflow-blueprints.SFTPEventSource.property.sshKeySecret"></a>

```typescript
public readonly sshKeySecret: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

SSHKeySecret refers to the secret that contains SSH key.

Key needs to contain private key
and public key.

---

##### `username`<sup>Optional</sup> <a name="username" id="metaflow-blueprints.SFTPEventSource.property.username"></a>

```typescript
public readonly username: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

Username required for authentication if any.

---

### SNSEventSource <a name="SNSEventSource" id="metaflow-blueprints.SNSEventSource"></a>

SNSEventSource refers to event-source for AWS SNS related events.

#### Initializer <a name="Initializer" id="metaflow-blueprints.SNSEventSource.Initializer"></a>

```typescript
import { SNSEventSource } from 'metaflow-blueprints'

const sNSEventSource: SNSEventSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.SNSEventSource.property.region">region</a></code> | <code>string</code> | Region is AWS region. |
| <code><a href="#metaflow-blueprints.SNSEventSource.property.topicArn">topicArn</a></code> | <code>string</code> | TopicArn. |
| <code><a href="#metaflow-blueprints.SNSEventSource.property.accessKey">accessKey</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | AccessKey refers K8s secret containing aws access key. |
| <code><a href="#metaflow-blueprints.SNSEventSource.property.endpoint">endpoint</a></code> | <code>string</code> | Endpoint configures connection to a specific SNS endpoint instead of Amazons servers. |
| <code><a href="#metaflow-blueprints.SNSEventSource.property.filter">filter</a></code> | <code><a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a></code> | Filter. |
| <code><a href="#metaflow-blueprints.SNSEventSource.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata holds the user defined metadata which will passed along the event payload. |
| <code><a href="#metaflow-blueprints.SNSEventSource.property.roleARN">roleARN</a></code> | <code>string</code> | RoleARN is the Amazon Resource Name (ARN) of the role to assume. |
| <code><a href="#metaflow-blueprints.SNSEventSource.property.secretKey">secretKey</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | SecretKey refers K8s secret containing aws secret key. |
| <code><a href="#metaflow-blueprints.SNSEventSource.property.validateSignature">validateSignature</a></code> | <code>boolean</code> | ValidateSignature is boolean that can be set to true for SNS signature verification. |
| <code><a href="#metaflow-blueprints.SNSEventSource.property.webhook">webhook</a></code> | <code><a href="#metaflow-blueprints.WebhookContext">WebhookContext</a></code> | Webhook configuration for http server. |

---

##### `region`<sup>Required</sup> <a name="region" id="metaflow-blueprints.SNSEventSource.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region is AWS region.

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="metaflow-blueprints.SNSEventSource.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

TopicArn.

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="metaflow-blueprints.SNSEventSource.property.accessKey"></a>

```typescript
public readonly accessKey: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

AccessKey refers K8s secret containing aws access key.

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="metaflow-blueprints.SNSEventSource.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

Endpoint configures connection to a specific SNS endpoint instead of Amazons servers.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="metaflow-blueprints.SNSEventSource.property.filter"></a>

```typescript
public readonly filter: EventSourceFilter;
```

- *Type:* <a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a>

Filter.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="metaflow-blueprints.SNSEventSource.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata holds the user defined metadata which will passed along the event payload.

---

##### `roleARN`<sup>Optional</sup> <a name="roleARN" id="metaflow-blueprints.SNSEventSource.property.roleARN"></a>

```typescript
public readonly roleARN: string;
```

- *Type:* string

RoleARN is the Amazon Resource Name (ARN) of the role to assume.

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="metaflow-blueprints.SNSEventSource.property.secretKey"></a>

```typescript
public readonly secretKey: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

SecretKey refers K8s secret containing aws secret key.

---

##### `validateSignature`<sup>Optional</sup> <a name="validateSignature" id="metaflow-blueprints.SNSEventSource.property.validateSignature"></a>

```typescript
public readonly validateSignature: boolean;
```

- *Type:* boolean

ValidateSignature is boolean that can be set to true for SNS signature verification.

---

##### `webhook`<sup>Optional</sup> <a name="webhook" id="metaflow-blueprints.SNSEventSource.property.webhook"></a>

```typescript
public readonly webhook: WebhookContext;
```

- *Type:* <a href="#metaflow-blueprints.WebhookContext">WebhookContext</a>

Webhook configuration for http server.

---

### SQSEventSource <a name="SQSEventSource" id="metaflow-blueprints.SQSEventSource"></a>

SQSEventSource refers to event-source for AWS SQS related events.

#### Initializer <a name="Initializer" id="metaflow-blueprints.SQSEventSource.Initializer"></a>

```typescript
import { SQSEventSource } from 'metaflow-blueprints'

const sQSEventSource: SQSEventSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.SQSEventSource.property.queue">queue</a></code> | <code>string</code> | Queue is AWS SQS queue to listen to for messages. |
| <code><a href="#metaflow-blueprints.SQSEventSource.property.region">region</a></code> | <code>string</code> | Region is AWS region. |
| <code><a href="#metaflow-blueprints.SQSEventSource.property.waitTimeSeconds">waitTimeSeconds</a></code> | <code>number</code> | WaitTimeSeconds is The duration (in seconds) for which the call waits for a message to arrive in the queue before returning. |
| <code><a href="#metaflow-blueprints.SQSEventSource.property.accessKey">accessKey</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | AccessKey refers K8s secret containing aws access key. |
| <code><a href="#metaflow-blueprints.SQSEventSource.property.dlq">dlq</a></code> | <code>boolean</code> | DLQ specifies if a dead-letter queue is configured for messages that can't be processed successfully. |
| <code><a href="#metaflow-blueprints.SQSEventSource.property.endpoint">endpoint</a></code> | <code>string</code> | Endpoint configures connection to a specific SQS endpoint instead of Amazons servers. |
| <code><a href="#metaflow-blueprints.SQSEventSource.property.filter">filter</a></code> | <code><a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a></code> | Filter. |
| <code><a href="#metaflow-blueprints.SQSEventSource.property.jsonBody">jsonBody</a></code> | <code>boolean</code> | JSONBody specifies that all event body payload coming from this source will be JSON. |
| <code><a href="#metaflow-blueprints.SQSEventSource.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata holds the user defined metadata which will passed along the event payload. |
| <code><a href="#metaflow-blueprints.SQSEventSource.property.queueAccountId">queueAccountId</a></code> | <code>string</code> | QueueAccountID is the ID of the account that created the queue to monitor. |
| <code><a href="#metaflow-blueprints.SQSEventSource.property.roleARN">roleARN</a></code> | <code>string</code> | RoleARN is the Amazon Resource Name (ARN) of the role to assume. |
| <code><a href="#metaflow-blueprints.SQSEventSource.property.secretKey">secretKey</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | SecretKey refers K8s secret containing aws secret key. |
| <code><a href="#metaflow-blueprints.SQSEventSource.property.sessionToken">sessionToken</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | SessionToken refers to K8s secret containing AWS temporary credentials(STS) session token. |

---

##### `queue`<sup>Required</sup> <a name="queue" id="metaflow-blueprints.SQSEventSource.property.queue"></a>

```typescript
public readonly queue: string;
```

- *Type:* string

Queue is AWS SQS queue to listen to for messages.

---

##### `region`<sup>Required</sup> <a name="region" id="metaflow-blueprints.SQSEventSource.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region is AWS region.

---

##### `waitTimeSeconds`<sup>Required</sup> <a name="waitTimeSeconds" id="metaflow-blueprints.SQSEventSource.property.waitTimeSeconds"></a>

```typescript
public readonly waitTimeSeconds: number;
```

- *Type:* number

WaitTimeSeconds is The duration (in seconds) for which the call waits for a message to arrive in the queue before returning.

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="metaflow-blueprints.SQSEventSource.property.accessKey"></a>

```typescript
public readonly accessKey: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

AccessKey refers K8s secret containing aws access key.

---

##### `dlq`<sup>Optional</sup> <a name="dlq" id="metaflow-blueprints.SQSEventSource.property.dlq"></a>

```typescript
public readonly dlq: boolean;
```

- *Type:* boolean

DLQ specifies if a dead-letter queue is configured for messages that can't be processed successfully.

If set to true, messages with invalid payload won't be acknowledged to
allow to forward them farther to the dead-letter queue. The default value is false.

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="metaflow-blueprints.SQSEventSource.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

Endpoint configures connection to a specific SQS endpoint instead of Amazons servers.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="metaflow-blueprints.SQSEventSource.property.filter"></a>

```typescript
public readonly filter: EventSourceFilter;
```

- *Type:* <a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a>

Filter.

---

##### `jsonBody`<sup>Optional</sup> <a name="jsonBody" id="metaflow-blueprints.SQSEventSource.property.jsonBody"></a>

```typescript
public readonly jsonBody: boolean;
```

- *Type:* boolean

JSONBody specifies that all event body payload coming from this source will be JSON.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="metaflow-blueprints.SQSEventSource.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata holds the user defined metadata which will passed along the event payload.

---

##### `queueAccountId`<sup>Optional</sup> <a name="queueAccountId" id="metaflow-blueprints.SQSEventSource.property.queueAccountId"></a>

```typescript
public readonly queueAccountId: string;
```

- *Type:* string

QueueAccountID is the ID of the account that created the queue to monitor.

---

##### `roleARN`<sup>Optional</sup> <a name="roleARN" id="metaflow-blueprints.SQSEventSource.property.roleARN"></a>

```typescript
public readonly roleARN: string;
```

- *Type:* string

RoleARN is the Amazon Resource Name (ARN) of the role to assume.

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="metaflow-blueprints.SQSEventSource.property.secretKey"></a>

```typescript
public readonly secretKey: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

SecretKey refers K8s secret containing aws secret key.

---

##### `sessionToken`<sup>Optional</sup> <a name="sessionToken" id="metaflow-blueprints.SQSEventSource.property.sessionToken"></a>

```typescript
public readonly sessionToken: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

SessionToken refers to K8s secret containing AWS temporary credentials(STS) session token.

---

### SqsEventSourceProperties <a name="SqsEventSourceProperties" id="metaflow-blueprints.SqsEventSourceProperties"></a>

#### Initializer <a name="Initializer" id="metaflow-blueprints.SqsEventSourceProperties.Initializer"></a>

```typescript
import { SqsEventSourceProperties } from 'metaflow-blueprints'

const sqsEventSourceProperties: SqsEventSourceProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.SqsEventSourceProperties.property.metadata">metadata</a></code> | <code><a href="#metaflow-blueprints.EventSourceMetadata">EventSourceMetadata</a></code> | *No description.* |
| <code><a href="#metaflow-blueprints.SqsEventSourceProperties.property.spec">spec</a></code> | <code>{[ key: string ]: <a href="#metaflow-blueprints.SqsEventSourceSpec">SqsEventSourceSpec</a>}</code> | *No description.* |

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="metaflow-blueprints.SqsEventSourceProperties.property.metadata"></a>

```typescript
public readonly metadata: EventSourceMetadata;
```

- *Type:* <a href="#metaflow-blueprints.EventSourceMetadata">EventSourceMetadata</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="metaflow-blueprints.SqsEventSourceProperties.property.spec"></a>

```typescript
public readonly spec: {[ key: string ]: SqsEventSourceSpec};
```

- *Type:* {[ key: string ]: <a href="#metaflow-blueprints.SqsEventSourceSpec">SqsEventSourceSpec</a>}

---

### SqsEventSourceSpec <a name="SqsEventSourceSpec" id="metaflow-blueprints.SqsEventSourceSpec"></a>

Configuration for an SQS Event Source.

#### Initializer <a name="Initializer" id="metaflow-blueprints.SqsEventSourceSpec.Initializer"></a>

```typescript
import { SqsEventSourceSpec } from 'metaflow-blueprints'

const sqsEventSourceSpec: SqsEventSourceSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.SqsEventSourceSpec.property.accessKey">accessKey</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | AccessKey refers K8s secret containing aws access key. |
| <code><a href="#metaflow-blueprints.SqsEventSourceSpec.property.queue">queue</a></code> | <code>string</code> | Queue is AWS SQS queue to listen to for messages. |
| <code><a href="#metaflow-blueprints.SqsEventSourceSpec.property.region">region</a></code> | <code>string</code> | Region is AWS region. |
| <code><a href="#metaflow-blueprints.SqsEventSourceSpec.property.secretKey">secretKey</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | SecretKey refers K8s secret containing aws secret key. |
| <code><a href="#metaflow-blueprints.SqsEventSourceSpec.property.waitTimeSeconds">waitTimeSeconds</a></code> | <code>number</code> | WaitTimeSeconds is The duration (in seconds) for which the call waits for a message to arrive in the queue before returning. |
| <code><a href="#metaflow-blueprints.SqsEventSourceSpec.property.dlq">dlq</a></code> | <code>boolean</code> | DLQ specifies if a dead-letter queue is configured for messages that can’t be processed successfully. |
| <code><a href="#metaflow-blueprints.SqsEventSourceSpec.property.endpoint">endpoint</a></code> | <code>string</code> | Endpoint configures connection to a specific SQS endpoint instead of Amazons servers. |
| <code><a href="#metaflow-blueprints.SqsEventSourceSpec.property.filter">filter</a></code> | <code><a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a></code> | Optional event filter. |
| <code><a href="#metaflow-blueprints.SqsEventSourceSpec.property.jsonBody">jsonBody</a></code> | <code>boolean</code> | JSONBody specifies that all event body payload coming from this source will be JSON. |
| <code><a href="#metaflow-blueprints.SqsEventSourceSpec.property.metadata">metadata</a></code> | <code>cdk8s.ApiObjectMetadata</code> | Metadata holds the user defined metadata which will passed along the event payload. |
| <code><a href="#metaflow-blueprints.SqsEventSourceSpec.property.queueAccountId">queueAccountId</a></code> | <code>string</code> | QueueAccountID is the ID of the account that created the queue to monitor. |
| <code><a href="#metaflow-blueprints.SqsEventSourceSpec.property.roleARN">roleARN</a></code> | <code>string</code> | RoleARN is the Amazon Resource Name (ARN) of the role to assume. |
| <code><a href="#metaflow-blueprints.SqsEventSourceSpec.property.sessionToken">sessionToken</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | SessionToken refers to K8s secret containing AWS temporary credentials(STS) session token. |

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="metaflow-blueprints.SqsEventSourceSpec.property.accessKey"></a>

```typescript
public readonly accessKey: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

AccessKey refers K8s secret containing aws access key.

---

##### `queue`<sup>Required</sup> <a name="queue" id="metaflow-blueprints.SqsEventSourceSpec.property.queue"></a>

```typescript
public readonly queue: string;
```

- *Type:* string

Queue is AWS SQS queue to listen to for messages.

---

##### `region`<sup>Required</sup> <a name="region" id="metaflow-blueprints.SqsEventSourceSpec.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region is AWS region.

---

##### `secretKey`<sup>Required</sup> <a name="secretKey" id="metaflow-blueprints.SqsEventSourceSpec.property.secretKey"></a>

```typescript
public readonly secretKey: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

SecretKey refers K8s secret containing aws secret key.

---

##### `waitTimeSeconds`<sup>Required</sup> <a name="waitTimeSeconds" id="metaflow-blueprints.SqsEventSourceSpec.property.waitTimeSeconds"></a>

```typescript
public readonly waitTimeSeconds: number;
```

- *Type:* number

WaitTimeSeconds is The duration (in seconds) for which the call waits for a message to arrive in the queue before returning.

---

##### `dlq`<sup>Optional</sup> <a name="dlq" id="metaflow-blueprints.SqsEventSourceSpec.property.dlq"></a>

```typescript
public readonly dlq: boolean;
```

- *Type:* boolean
- *Default:* false

DLQ specifies if a dead-letter queue is configured for messages that can’t be processed successfully.

If set to true, messages with invalid payload won’t be acknowledged to allow to forward them farther to the dead-letter queue. The default value is false.

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="metaflow-blueprints.SqsEventSourceSpec.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string
- *Default:* none

Endpoint configures connection to a specific SQS endpoint instead of Amazons servers.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="metaflow-blueprints.SqsEventSourceSpec.property.filter"></a>

```typescript
public readonly filter: EventSourceFilter;
```

- *Type:* <a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a>
- *Default:* none

Optional event filter.

---

##### `jsonBody`<sup>Optional</sup> <a name="jsonBody" id="metaflow-blueprints.SqsEventSourceSpec.property.jsonBody"></a>

```typescript
public readonly jsonBody: boolean;
```

- *Type:* boolean
- *Default:* false

JSONBody specifies that all event body payload coming from this source will be JSON.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="metaflow-blueprints.SqsEventSourceSpec.property.metadata"></a>

```typescript
public readonly metadata: ApiObjectMetadata;
```

- *Type:* cdk8s.ApiObjectMetadata
- *Default:* none

Metadata holds the user defined metadata which will passed along the event payload.

---

##### `queueAccountId`<sup>Optional</sup> <a name="queueAccountId" id="metaflow-blueprints.SqsEventSourceSpec.property.queueAccountId"></a>

```typescript
public readonly queueAccountId: string;
```

- *Type:* string
- *Default:* none

QueueAccountID is the ID of the account that created the queue to monitor.

---

##### `roleARN`<sup>Optional</sup> <a name="roleARN" id="metaflow-blueprints.SqsEventSourceSpec.property.roleARN"></a>

```typescript
public readonly roleARN: string;
```

- *Type:* string
- *Default:* none

RoleARN is the Amazon Resource Name (ARN) of the role to assume.

---

##### `sessionToken`<sup>Optional</sup> <a name="sessionToken" id="metaflow-blueprints.SqsEventSourceSpec.property.sessionToken"></a>

```typescript
public readonly sessionToken: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector
- *Default:* none

SessionToken refers to K8s secret containing AWS temporary credentials(STS) session token.

---

### WatchPathConfig <a name="WatchPathConfig" id="metaflow-blueprints.WatchPathConfig"></a>

WatchPathConfig contains configuration about the file path to watch.

#### Initializer <a name="Initializer" id="metaflow-blueprints.WatchPathConfig.Initializer"></a>

```typescript
import { WatchPathConfig } from 'metaflow-blueprints'

const watchPathConfig: WatchPathConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.WatchPathConfig.property.directory">directory</a></code> | <code>string</code> | Directory to watch for events. |
| <code><a href="#metaflow-blueprints.WatchPathConfig.property.path">path</a></code> | <code>string</code> | Path is relative path of object to watch with respect to the directory. |
| <code><a href="#metaflow-blueprints.WatchPathConfig.property.pathRegexp">pathRegexp</a></code> | <code>string</code> | PathRegexp is regexp of relative path of object to watch with respect to the directory. |

---

##### `directory`<sup>Required</sup> <a name="directory" id="metaflow-blueprints.WatchPathConfig.property.directory"></a>

```typescript
public readonly directory: string;
```

- *Type:* string

Directory to watch for events.

---

##### `path`<sup>Optional</sup> <a name="path" id="metaflow-blueprints.WatchPathConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path is relative path of object to watch with respect to the directory.

---

##### `pathRegexp`<sup>Optional</sup> <a name="pathRegexp" id="metaflow-blueprints.WatchPathConfig.property.pathRegexp"></a>

```typescript
public readonly pathRegexp: string;
```

- *Type:* string

PathRegexp is regexp of relative path of object to watch with respect to the directory.

---

### WebhookContext <a name="WebhookContext" id="metaflow-blueprints.WebhookContext"></a>

Webhook refers to the configuration required to run an http server.

WebhookContext holds a general purpose REST API context

Webhook holds configuration to run a http server.

Webhook holds configuration to run a http server

Webhook refers to the configuration required to run a http server

Webhook holds configuration for a REST endpoint

Webhook configuration for http server

#### Initializer <a name="Initializer" id="metaflow-blueprints.WebhookContext.Initializer"></a>

```typescript
import { WebhookContext } from 'metaflow-blueprints'

const webhookContext: WebhookContext = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.WebhookContext.property.endpoint">endpoint</a></code> | <code>string</code> | REST API endpoint. |
| <code><a href="#metaflow-blueprints.WebhookContext.property.method">method</a></code> | <code>string</code> | Method is HTTP request method that indicates the desired action to be performed for a given resource. |
| <code><a href="#metaflow-blueprints.WebhookContext.property.port">port</a></code> | <code>string</code> | Port on which HTTP server is listening for incoming events. |
| <code><a href="#metaflow-blueprints.WebhookContext.property.url">url</a></code> | <code>string</code> | URL is the url of the server. |
| <code><a href="#metaflow-blueprints.WebhookContext.property.authSecret">authSecret</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | AuthSecret holds a secret selector that contains a bearer token for authentication. |
| <code><a href="#metaflow-blueprints.WebhookContext.property.maxPayloadSize">maxPayloadSize</a></code> | <code>number</code> | MaxPayloadSize is the maximum webhook payload size that the server will accept. |
| <code><a href="#metaflow-blueprints.WebhookContext.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata holds the user defined metadata which will passed along the event payload. |
| <code><a href="#metaflow-blueprints.WebhookContext.property.serverCertSecret">serverCertSecret</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | ServerCertPath refers the file that contains the cert. |
| <code><a href="#metaflow-blueprints.WebhookContext.property.serverKeySecret">serverKeySecret</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | ServerKeyPath refers the file that contains private key. |

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="metaflow-blueprints.WebhookContext.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

REST API endpoint.

---

##### `method`<sup>Required</sup> <a name="method" id="metaflow-blueprints.WebhookContext.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Method is HTTP request method that indicates the desired action to be performed for a given resource.

See RFC7231 Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content

---

##### `port`<sup>Required</sup> <a name="port" id="metaflow-blueprints.WebhookContext.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

Port on which HTTP server is listening for incoming events.

---

##### `url`<sup>Required</sup> <a name="url" id="metaflow-blueprints.WebhookContext.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

URL is the url of the server.

---

##### `authSecret`<sup>Optional</sup> <a name="authSecret" id="metaflow-blueprints.WebhookContext.property.authSecret"></a>

```typescript
public readonly authSecret: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

AuthSecret holds a secret selector that contains a bearer token for authentication.

---

##### `maxPayloadSize`<sup>Optional</sup> <a name="maxPayloadSize" id="metaflow-blueprints.WebhookContext.property.maxPayloadSize"></a>

```typescript
public readonly maxPayloadSize: number;
```

- *Type:* number

MaxPayloadSize is the maximum webhook payload size that the server will accept.

Requests
exceeding that limit will be rejected with "request too large" response. Default value:
1048576 (1MB).

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="metaflow-blueprints.WebhookContext.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata holds the user defined metadata which will passed along the event payload.

---

##### `serverCertSecret`<sup>Optional</sup> <a name="serverCertSecret" id="metaflow-blueprints.WebhookContext.property.serverCertSecret"></a>

```typescript
public readonly serverCertSecret: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

ServerCertPath refers the file that contains the cert.

---

##### `serverKeySecret`<sup>Optional</sup> <a name="serverKeySecret" id="metaflow-blueprints.WebhookContext.property.serverKeySecret"></a>

```typescript
public readonly serverKeySecret: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

ServerKeyPath refers the file that contains private key.

---
