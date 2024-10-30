# API Reference <a name="API Reference" id="api-reference"></a>

## Submodules <a name="Submodules" id="submodules"></a>

The following submodules are available:

- [argoEvents](./argoEvents.md)
- [k8s](./k8s.md)

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

### AMQPConsumeConfig <a name="AMQPConsumeConfig" id="metaflow-blueprints.AMQPConsumeConfig"></a>

Consume holds the configuration to immediately starts delivering queued messages For more information, visit https://pkg.go.dev/github.com/rabbitmq/amqp091-go#Channel.Consume.

AMQPConsumeConfig holds the configuration to immediately starts delivering queued messages

#### Initializer <a name="Initializer" id="metaflow-blueprints.AMQPConsumeConfig.Initializer"></a>

```typescript
import { AMQPConsumeConfig } from 'metaflow-blueprints'

const aMQPConsumeConfig: AMQPConsumeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.AMQPConsumeConfig.property.autoAck">autoAck</a></code> | <code>boolean</code> | AutoAck when true, the server will acknowledge deliveries to this consumer prior to writing the delivery to the network. |
| <code><a href="#metaflow-blueprints.AMQPConsumeConfig.property.consumerTag">consumerTag</a></code> | <code>string</code> | ConsumerTag is the identity of the consumer included in every delivery. |
| <code><a href="#metaflow-blueprints.AMQPConsumeConfig.property.exclusive">exclusive</a></code> | <code>boolean</code> | Exclusive when true, the server will ensure that this is the sole consumer from this queue. |
| <code><a href="#metaflow-blueprints.AMQPConsumeConfig.property.noLocal">noLocal</a></code> | <code>boolean</code> | NoLocal flag is not supported by RabbitMQ. |
| <code><a href="#metaflow-blueprints.AMQPConsumeConfig.property.noWait">noWait</a></code> | <code>boolean</code> | NowWait when true, do not wait for the server to confirm the request and immediately begin deliveries. |

---

##### `autoAck`<sup>Optional</sup> <a name="autoAck" id="metaflow-blueprints.AMQPConsumeConfig.property.autoAck"></a>

```typescript
public readonly autoAck: boolean;
```

- *Type:* boolean

AutoAck when true, the server will acknowledge deliveries to this consumer prior to writing the delivery to the network.

---

##### `consumerTag`<sup>Optional</sup> <a name="consumerTag" id="metaflow-blueprints.AMQPConsumeConfig.property.consumerTag"></a>

```typescript
public readonly consumerTag: string;
```

- *Type:* string

ConsumerTag is the identity of the consumer included in every delivery.

---

##### `exclusive`<sup>Optional</sup> <a name="exclusive" id="metaflow-blueprints.AMQPConsumeConfig.property.exclusive"></a>

```typescript
public readonly exclusive: boolean;
```

- *Type:* boolean

Exclusive when true, the server will ensure that this is the sole consumer from this queue.

---

##### `noLocal`<sup>Optional</sup> <a name="noLocal" id="metaflow-blueprints.AMQPConsumeConfig.property.noLocal"></a>

```typescript
public readonly noLocal: boolean;
```

- *Type:* boolean

NoLocal flag is not supported by RabbitMQ.

---

##### `noWait`<sup>Optional</sup> <a name="noWait" id="metaflow-blueprints.AMQPConsumeConfig.property.noWait"></a>

```typescript
public readonly noWait: boolean;
```

- *Type:* boolean

NowWait when true, do not wait for the server to confirm the request and immediately begin deliveries.

---

### AMQPEventSource <a name="AMQPEventSource" id="metaflow-blueprints.AMQPEventSource"></a>

AMQPEventSource refers to an event-source for AMQP stream events.

#### Initializer <a name="Initializer" id="metaflow-blueprints.AMQPEventSource.Initializer"></a>

```typescript
import { AMQPEventSource } from 'metaflow-blueprints'

const aMQPEventSource: AMQPEventSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.AMQPEventSource.property.exchangeName">exchangeName</a></code> | <code>string</code> | ExchangeName is the exchange name For more information, visit https://www.rabbitmq.com/tutorials/amqp-concepts.html. |
| <code><a href="#metaflow-blueprints.AMQPEventSource.property.exchangeType">exchangeType</a></code> | <code>string</code> | ExchangeType is rabbitmq exchange type. |
| <code><a href="#metaflow-blueprints.AMQPEventSource.property.routingKey">routingKey</a></code> | <code>string</code> | Routing key for bindings. |
| <code><a href="#metaflow-blueprints.AMQPEventSource.property.auth">auth</a></code> | <code><a href="#metaflow-blueprints.BasicAuth">BasicAuth</a></code> | Auth hosts secret selectors for username and password. |
| <code><a href="#metaflow-blueprints.AMQPEventSource.property.connectionBackoff">connectionBackoff</a></code> | <code><a href="#metaflow-blueprints.Backoff">Backoff</a></code> | Backoff holds parameters applied to connection. |
| <code><a href="#metaflow-blueprints.AMQPEventSource.property.consume">consume</a></code> | <code><a href="#metaflow-blueprints.AMQPConsumeConfig">AMQPConsumeConfig</a></code> | Consume holds the configuration to immediately starts delivering queued messages For more information, visit https://pkg.go.dev/github.com/rabbitmq/amqp091-go#Channel.Consume. |
| <code><a href="#metaflow-blueprints.AMQPEventSource.property.exchangeDeclare">exchangeDeclare</a></code> | <code><a href="#metaflow-blueprints.AMQPExchangeDeclareConfig">AMQPExchangeDeclareConfig</a></code> | ExchangeDeclare holds the configuration for the exchange on the server For more information, visit https://pkg.go.dev/github.com/rabbitmq/amqp091-go#Channel.ExchangeDeclare. |
| <code><a href="#metaflow-blueprints.AMQPEventSource.property.filter">filter</a></code> | <code><a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a></code> | Filter. |
| <code><a href="#metaflow-blueprints.AMQPEventSource.property.jsonBody">jsonBody</a></code> | <code>boolean</code> | JSONBody specifies that all event body payload coming from this source will be JSON. |
| <code><a href="#metaflow-blueprints.AMQPEventSource.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata holds the user defined metadata which will passed along the event payload. |
| <code><a href="#metaflow-blueprints.AMQPEventSource.property.queueBind">queueBind</a></code> | <code><a href="#metaflow-blueprints.AMQPQueueBindConfig">AMQPQueueBindConfig</a></code> | QueueBind holds the configuration that binds an exchange to a queue so that publishings to the exchange will be routed to the queue when the publishing routing key matches the binding routing key For more information, visit https://pkg.go.dev/github.com/rabbitmq/amqp091-go#Channel.QueueBind. |
| <code><a href="#metaflow-blueprints.AMQPEventSource.property.queueDeclare">queueDeclare</a></code> | <code><a href="#metaflow-blueprints.AMQPQueueDeclareConfig">AMQPQueueDeclareConfig</a></code> | QueueDeclare holds the configuration of a queue to hold messages and deliver to consumers. |
| <code><a href="#metaflow-blueprints.AMQPEventSource.property.tls">tls</a></code> | <code><a href="#metaflow-blueprints.TLSConfig">TLSConfig</a></code> | TLS configuration for the amqp client. |
| <code><a href="#metaflow-blueprints.AMQPEventSource.property.url">url</a></code> | <code>string</code> | URL for rabbitmq service. |
| <code><a href="#metaflow-blueprints.AMQPEventSource.property.urlSecret">urlSecret</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | URLSecret is secret reference for rabbitmq service URL. |

---

##### `exchangeName`<sup>Required</sup> <a name="exchangeName" id="metaflow-blueprints.AMQPEventSource.property.exchangeName"></a>

```typescript
public readonly exchangeName: string;
```

- *Type:* string

ExchangeName is the exchange name For more information, visit https://www.rabbitmq.com/tutorials/amqp-concepts.html.

---

##### `exchangeType`<sup>Required</sup> <a name="exchangeType" id="metaflow-blueprints.AMQPEventSource.property.exchangeType"></a>

```typescript
public readonly exchangeType: string;
```

- *Type:* string

ExchangeType is rabbitmq exchange type.

---

##### `routingKey`<sup>Required</sup> <a name="routingKey" id="metaflow-blueprints.AMQPEventSource.property.routingKey"></a>

```typescript
public readonly routingKey: string;
```

- *Type:* string

Routing key for bindings.

---

##### `auth`<sup>Optional</sup> <a name="auth" id="metaflow-blueprints.AMQPEventSource.property.auth"></a>

```typescript
public readonly auth: BasicAuth;
```

- *Type:* <a href="#metaflow-blueprints.BasicAuth">BasicAuth</a>

Auth hosts secret selectors for username and password.

---

##### `connectionBackoff`<sup>Optional</sup> <a name="connectionBackoff" id="metaflow-blueprints.AMQPEventSource.property.connectionBackoff"></a>

```typescript
public readonly connectionBackoff: Backoff;
```

- *Type:* <a href="#metaflow-blueprints.Backoff">Backoff</a>

Backoff holds parameters applied to connection.

---

##### `consume`<sup>Optional</sup> <a name="consume" id="metaflow-blueprints.AMQPEventSource.property.consume"></a>

```typescript
public readonly consume: AMQPConsumeConfig;
```

- *Type:* <a href="#metaflow-blueprints.AMQPConsumeConfig">AMQPConsumeConfig</a>

Consume holds the configuration to immediately starts delivering queued messages For more information, visit https://pkg.go.dev/github.com/rabbitmq/amqp091-go#Channel.Consume.

---

##### `exchangeDeclare`<sup>Optional</sup> <a name="exchangeDeclare" id="metaflow-blueprints.AMQPEventSource.property.exchangeDeclare"></a>

```typescript
public readonly exchangeDeclare: AMQPExchangeDeclareConfig;
```

- *Type:* <a href="#metaflow-blueprints.AMQPExchangeDeclareConfig">AMQPExchangeDeclareConfig</a>

ExchangeDeclare holds the configuration for the exchange on the server For more information, visit https://pkg.go.dev/github.com/rabbitmq/amqp091-go#Channel.ExchangeDeclare.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="metaflow-blueprints.AMQPEventSource.property.filter"></a>

```typescript
public readonly filter: EventSourceFilter;
```

- *Type:* <a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a>

Filter.

---

##### `jsonBody`<sup>Optional</sup> <a name="jsonBody" id="metaflow-blueprints.AMQPEventSource.property.jsonBody"></a>

```typescript
public readonly jsonBody: boolean;
```

- *Type:* boolean

JSONBody specifies that all event body payload coming from this source will be JSON.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="metaflow-blueprints.AMQPEventSource.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata holds the user defined metadata which will passed along the event payload.

---

##### `queueBind`<sup>Optional</sup> <a name="queueBind" id="metaflow-blueprints.AMQPEventSource.property.queueBind"></a>

```typescript
public readonly queueBind: AMQPQueueBindConfig;
```

- *Type:* <a href="#metaflow-blueprints.AMQPQueueBindConfig">AMQPQueueBindConfig</a>

QueueBind holds the configuration that binds an exchange to a queue so that publishings to the exchange will be routed to the queue when the publishing routing key matches the binding routing key For more information, visit https://pkg.go.dev/github.com/rabbitmq/amqp091-go#Channel.QueueBind.

---

##### `queueDeclare`<sup>Optional</sup> <a name="queueDeclare" id="metaflow-blueprints.AMQPEventSource.property.queueDeclare"></a>

```typescript
public readonly queueDeclare: AMQPQueueDeclareConfig;
```

- *Type:* <a href="#metaflow-blueprints.AMQPQueueDeclareConfig">AMQPQueueDeclareConfig</a>

QueueDeclare holds the configuration of a queue to hold messages and deliver to consumers.

Declaring creates a queue if it doesn't already exist, or ensures that an
existing queue matches the same parameters For more information, visit
https://pkg.go.dev/github.com/rabbitmq/amqp091-go#Channel.QueueDeclare

---

##### `tls`<sup>Optional</sup> <a name="tls" id="metaflow-blueprints.AMQPEventSource.property.tls"></a>

```typescript
public readonly tls: TLSConfig;
```

- *Type:* <a href="#metaflow-blueprints.TLSConfig">TLSConfig</a>

TLS configuration for the amqp client.

---

##### `url`<sup>Optional</sup> <a name="url" id="metaflow-blueprints.AMQPEventSource.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

URL for rabbitmq service.

---

##### `urlSecret`<sup>Optional</sup> <a name="urlSecret" id="metaflow-blueprints.AMQPEventSource.property.urlSecret"></a>

```typescript
public readonly urlSecret: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

URLSecret is secret reference for rabbitmq service URL.

---

### AMQPExchangeDeclareConfig <a name="AMQPExchangeDeclareConfig" id="metaflow-blueprints.AMQPExchangeDeclareConfig"></a>

ExchangeDeclare holds the configuration for the exchange on the server For more information, visit https://pkg.go.dev/github.com/rabbitmq/amqp091-go#Channel.ExchangeDeclare.

AMQPExchangeDeclareConfig holds the configuration for the exchange on the server

#### Initializer <a name="Initializer" id="metaflow-blueprints.AMQPExchangeDeclareConfig.Initializer"></a>

```typescript
import { AMQPExchangeDeclareConfig } from 'metaflow-blueprints'

const aMQPExchangeDeclareConfig: AMQPExchangeDeclareConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.AMQPExchangeDeclareConfig.property.autoDelete">autoDelete</a></code> | <code>boolean</code> | AutoDelete removes the exchange when no bindings are active. |
| <code><a href="#metaflow-blueprints.AMQPExchangeDeclareConfig.property.durable">durable</a></code> | <code>boolean</code> | Durable keeps the exchange also after the server restarts. |
| <code><a href="#metaflow-blueprints.AMQPExchangeDeclareConfig.property.internal">internal</a></code> | <code>boolean</code> | Internal when true does not accept publishings. |
| <code><a href="#metaflow-blueprints.AMQPExchangeDeclareConfig.property.noWait">noWait</a></code> | <code>boolean</code> | NowWait when true does not wait for a confirmation from the server. |

---

##### `autoDelete`<sup>Optional</sup> <a name="autoDelete" id="metaflow-blueprints.AMQPExchangeDeclareConfig.property.autoDelete"></a>

```typescript
public readonly autoDelete: boolean;
```

- *Type:* boolean

AutoDelete removes the exchange when no bindings are active.

---

##### `durable`<sup>Optional</sup> <a name="durable" id="metaflow-blueprints.AMQPExchangeDeclareConfig.property.durable"></a>

```typescript
public readonly durable: boolean;
```

- *Type:* boolean

Durable keeps the exchange also after the server restarts.

---

##### `internal`<sup>Optional</sup> <a name="internal" id="metaflow-blueprints.AMQPExchangeDeclareConfig.property.internal"></a>

```typescript
public readonly internal: boolean;
```

- *Type:* boolean

Internal when true does not accept publishings.

---

##### `noWait`<sup>Optional</sup> <a name="noWait" id="metaflow-blueprints.AMQPExchangeDeclareConfig.property.noWait"></a>

```typescript
public readonly noWait: boolean;
```

- *Type:* boolean

NowWait when true does not wait for a confirmation from the server.

---

### AMQPQueueBindConfig <a name="AMQPQueueBindConfig" id="metaflow-blueprints.AMQPQueueBindConfig"></a>

QueueBind holds the configuration that binds an exchange to a queue so that publishings to the exchange will be routed to the queue when the publishing routing key matches the binding routing key For more information, visit https://pkg.go.dev/github.com/rabbitmq/amqp091-go#Channel.QueueBind.

AMQPQueueBindConfig holds the configuration that binds an exchange to a queue so that
publishings to the exchange will be routed to the queue when the publishing routing key
matches the binding routing key

#### Initializer <a name="Initializer" id="metaflow-blueprints.AMQPQueueBindConfig.Initializer"></a>

```typescript
import { AMQPQueueBindConfig } from 'metaflow-blueprints'

const aMQPQueueBindConfig: AMQPQueueBindConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.AMQPQueueBindConfig.property.noWait">noWait</a></code> | <code>boolean</code> | NowWait false and the queue could not be bound, the channel will be closed with an error. |

---

##### `noWait`<sup>Optional</sup> <a name="noWait" id="metaflow-blueprints.AMQPQueueBindConfig.property.noWait"></a>

```typescript
public readonly noWait: boolean;
```

- *Type:* boolean

NowWait false and the queue could not be bound, the channel will be closed with an error.

---

### AMQPQueueDeclareConfig <a name="AMQPQueueDeclareConfig" id="metaflow-blueprints.AMQPQueueDeclareConfig"></a>

QueueDeclare holds the configuration of a queue to hold messages and deliver to consumers.

Declaring creates a queue if it doesn't already exist, or ensures that an
existing queue matches the same parameters For more information, visit
https://pkg.go.dev/github.com/rabbitmq/amqp091-go#Channel.QueueDeclare

AMQPQueueDeclareConfig holds the configuration of a queue to hold messages and deliver to
consumers. Declaring creates a queue if it doesn't already exist, or ensures that an
existing queue matches the same parameters

#### Initializer <a name="Initializer" id="metaflow-blueprints.AMQPQueueDeclareConfig.Initializer"></a>

```typescript
import { AMQPQueueDeclareConfig } from 'metaflow-blueprints'

const aMQPQueueDeclareConfig: AMQPQueueDeclareConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.AMQPQueueDeclareConfig.property.arguments">arguments</a></code> | <code>string</code> | Arguments of a queue (also known as "x-arguments") used for optional features and plugins. |
| <code><a href="#metaflow-blueprints.AMQPQueueDeclareConfig.property.autoDelete">autoDelete</a></code> | <code>boolean</code> | AutoDelete removes the queue when no consumers are active. |
| <code><a href="#metaflow-blueprints.AMQPQueueDeclareConfig.property.durable">durable</a></code> | <code>boolean</code> | Durable keeps the queue also after the server restarts. |
| <code><a href="#metaflow-blueprints.AMQPQueueDeclareConfig.property.exclusive">exclusive</a></code> | <code>boolean</code> | Exclusive sets the queues to be accessible only by the connection that declares them and will be deleted wgen the connection closes. |
| <code><a href="#metaflow-blueprints.AMQPQueueDeclareConfig.property.name">name</a></code> | <code>string</code> | Name of the queue. |
| <code><a href="#metaflow-blueprints.AMQPQueueDeclareConfig.property.noWait">noWait</a></code> | <code>boolean</code> | NowWait when true, the queue assumes to be declared on the server. |

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="metaflow-blueprints.AMQPQueueDeclareConfig.property.arguments"></a>

```typescript
public readonly arguments: string;
```

- *Type:* string

Arguments of a queue (also known as "x-arguments") used for optional features and plugins.

---

##### `autoDelete`<sup>Optional</sup> <a name="autoDelete" id="metaflow-blueprints.AMQPQueueDeclareConfig.property.autoDelete"></a>

```typescript
public readonly autoDelete: boolean;
```

- *Type:* boolean

AutoDelete removes the queue when no consumers are active.

---

##### `durable`<sup>Optional</sup> <a name="durable" id="metaflow-blueprints.AMQPQueueDeclareConfig.property.durable"></a>

```typescript
public readonly durable: boolean;
```

- *Type:* boolean

Durable keeps the queue also after the server restarts.

---

##### `exclusive`<sup>Optional</sup> <a name="exclusive" id="metaflow-blueprints.AMQPQueueDeclareConfig.property.exclusive"></a>

```typescript
public readonly exclusive: boolean;
```

- *Type:* boolean

Exclusive sets the queues to be accessible only by the connection that declares them and will be deleted wgen the connection closes.

---

##### `name`<sup>Optional</sup> <a name="name" id="metaflow-blueprints.AMQPQueueDeclareConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the queue.

If empty the server auto-generates a unique name for this queue

---

##### `noWait`<sup>Optional</sup> <a name="noWait" id="metaflow-blueprints.AMQPQueueDeclareConfig.property.noWait"></a>

```typescript
public readonly noWait: boolean;
```

- *Type:* boolean

NowWait when true, the queue assumes to be declared on the server.

---

### AzureEventsHubEventSource <a name="AzureEventsHubEventSource" id="metaflow-blueprints.AzureEventsHubEventSource"></a>

AzureEventsHubEventSource describes the event source for azure events hub More info at https://docs.microsoft.com/en-us/azure/event-hubs/.

#### Initializer <a name="Initializer" id="metaflow-blueprints.AzureEventsHubEventSource.Initializer"></a>

```typescript
import { AzureEventsHubEventSource } from 'metaflow-blueprints'

const azureEventsHubEventSource: AzureEventsHubEventSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.AzureEventsHubEventSource.property.fqdn">fqdn</a></code> | <code>string</code> | FQDN of the EventHubs namespace you created More info at https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-get-connection-string. |
| <code><a href="#metaflow-blueprints.AzureEventsHubEventSource.property.hubName">hubName</a></code> | <code>string</code> | Event Hub path/name. |
| <code><a href="#metaflow-blueprints.AzureEventsHubEventSource.property.filter">filter</a></code> | <code><a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a></code> | Filter. |
| <code><a href="#metaflow-blueprints.AzureEventsHubEventSource.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata holds the user defined metadata which will passed along the event payload. |
| <code><a href="#metaflow-blueprints.AzureEventsHubEventSource.property.sharedAccessKey">sharedAccessKey</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | SharedAccessKey is the generated value of the key. |
| <code><a href="#metaflow-blueprints.AzureEventsHubEventSource.property.sharedAccessKeyName">sharedAccessKeyName</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | SharedAccessKeyName is the name you chose for your application's SAS keys. |

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="metaflow-blueprints.AzureEventsHubEventSource.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

FQDN of the EventHubs namespace you created More info at https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-get-connection-string.

---

##### `hubName`<sup>Required</sup> <a name="hubName" id="metaflow-blueprints.AzureEventsHubEventSource.property.hubName"></a>

```typescript
public readonly hubName: string;
```

- *Type:* string

Event Hub path/name.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="metaflow-blueprints.AzureEventsHubEventSource.property.filter"></a>

```typescript
public readonly filter: EventSourceFilter;
```

- *Type:* <a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a>

Filter.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="metaflow-blueprints.AzureEventsHubEventSource.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata holds the user defined metadata which will passed along the event payload.

---

##### `sharedAccessKey`<sup>Optional</sup> <a name="sharedAccessKey" id="metaflow-blueprints.AzureEventsHubEventSource.property.sharedAccessKey"></a>

```typescript
public readonly sharedAccessKey: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

SharedAccessKey is the generated value of the key.

---

##### `sharedAccessKeyName`<sup>Optional</sup> <a name="sharedAccessKeyName" id="metaflow-blueprints.AzureEventsHubEventSource.property.sharedAccessKeyName"></a>

```typescript
public readonly sharedAccessKeyName: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

SharedAccessKeyName is the name you chose for your application's SAS keys.

---

### AzureQueueStorageEventSource <a name="AzureQueueStorageEventSource" id="metaflow-blueprints.AzureQueueStorageEventSource"></a>

AzureQueueStorageEventSource describes the event source for azure queue storage more info at https://learn.microsoft.com/en-us/azure/storage/queues/.

#### Initializer <a name="Initializer" id="metaflow-blueprints.AzureQueueStorageEventSource.Initializer"></a>

```typescript
import { AzureQueueStorageEventSource } from 'metaflow-blueprints'

const azureQueueStorageEventSource: AzureQueueStorageEventSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.AzureQueueStorageEventSource.property.queueName">queueName</a></code> | <code>string</code> | QueueName is the name of the queue. |
| <code><a href="#metaflow-blueprints.AzureQueueStorageEventSource.property.connectionString">connectionString</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | ConnectionString is the connection string to access Azure Queue Storage. |
| <code><a href="#metaflow-blueprints.AzureQueueStorageEventSource.property.decodeMessage">decodeMessage</a></code> | <code>boolean</code> | DecodeMessage specifies if all the messages should be base64 decoded. |
| <code><a href="#metaflow-blueprints.AzureQueueStorageEventSource.property.dlq">dlq</a></code> | <code>boolean</code> | DLQ specifies if a dead-letter queue is configured for messages that can't be processed successfully. |
| <code><a href="#metaflow-blueprints.AzureQueueStorageEventSource.property.filter">filter</a></code> | <code><a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a></code> | Filter. |
| <code><a href="#metaflow-blueprints.AzureQueueStorageEventSource.property.jsonBody">jsonBody</a></code> | <code>boolean</code> | JSONBody specifies that all event body payload coming from this source will be JSON. |
| <code><a href="#metaflow-blueprints.AzureQueueStorageEventSource.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata holds the user defined metadata which will passed along the event payload. |
| <code><a href="#metaflow-blueprints.AzureQueueStorageEventSource.property.storageAccountName">storageAccountName</a></code> | <code>string</code> | StorageAccountName is the name of the storage account where the queue is. |
| <code><a href="#metaflow-blueprints.AzureQueueStorageEventSource.property.waitTimeInSeconds">waitTimeInSeconds</a></code> | <code>number</code> | WaitTimeInSeconds is the duration (in seconds) for which the event source waits between empty results from the queue. |

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="metaflow-blueprints.AzureQueueStorageEventSource.property.queueName"></a>

```typescript
public readonly queueName: string;
```

- *Type:* string

QueueName is the name of the queue.

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="metaflow-blueprints.AzureQueueStorageEventSource.property.connectionString"></a>

```typescript
public readonly connectionString: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

ConnectionString is the connection string to access Azure Queue Storage.

If this fields
is not provided it will try to access via Azure AD with StorageAccountName.

---

##### `decodeMessage`<sup>Optional</sup> <a name="decodeMessage" id="metaflow-blueprints.AzureQueueStorageEventSource.property.decodeMessage"></a>

```typescript
public readonly decodeMessage: boolean;
```

- *Type:* boolean

DecodeMessage specifies if all the messages should be base64 decoded.

If set to true the
decoding is done before the evaluation of JSONBody

---

##### `dlq`<sup>Optional</sup> <a name="dlq" id="metaflow-blueprints.AzureQueueStorageEventSource.property.dlq"></a>

```typescript
public readonly dlq: boolean;
```

- *Type:* boolean

DLQ specifies if a dead-letter queue is configured for messages that can't be processed successfully.

If set to true, messages with invalid payload won't be acknowledged to
allow to forward them farther to the dead-letter queue. The default value is false.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="metaflow-blueprints.AzureQueueStorageEventSource.property.filter"></a>

```typescript
public readonly filter: EventSourceFilter;
```

- *Type:* <a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a>

Filter.

---

##### `jsonBody`<sup>Optional</sup> <a name="jsonBody" id="metaflow-blueprints.AzureQueueStorageEventSource.property.jsonBody"></a>

```typescript
public readonly jsonBody: boolean;
```

- *Type:* boolean

JSONBody specifies that all event body payload coming from this source will be JSON.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="metaflow-blueprints.AzureQueueStorageEventSource.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata holds the user defined metadata which will passed along the event payload.

---

##### `storageAccountName`<sup>Optional</sup> <a name="storageAccountName" id="metaflow-blueprints.AzureQueueStorageEventSource.property.storageAccountName"></a>

```typescript
public readonly storageAccountName: string;
```

- *Type:* string

StorageAccountName is the name of the storage account where the queue is.

This field is
necessary to access via Azure AD (managed identity) and it is ignored if ConnectionString
is set.

---

##### `waitTimeInSeconds`<sup>Optional</sup> <a name="waitTimeInSeconds" id="metaflow-blueprints.AzureQueueStorageEventSource.property.waitTimeInSeconds"></a>

```typescript
public readonly waitTimeInSeconds: number;
```

- *Type:* number

WaitTimeInSeconds is the duration (in seconds) for which the event source waits between empty results from the queue.

The default value is 3 seconds.

---

### AzureServiceBusEventSource <a name="AzureServiceBusEventSource" id="metaflow-blueprints.AzureServiceBusEventSource"></a>

AzureServiceBusEventSource describes the event source for azure service bus More info at https://docs.microsoft.com/en-us/azure/service-bus-messaging/.

#### Initializer <a name="Initializer" id="metaflow-blueprints.AzureServiceBusEventSource.Initializer"></a>

```typescript
import { AzureServiceBusEventSource } from 'metaflow-blueprints'

const azureServiceBusEventSource: AzureServiceBusEventSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.AzureServiceBusEventSource.property.queueName">queueName</a></code> | <code>string</code> | QueueName is the name of the Azure Service Bus Queue. |
| <code><a href="#metaflow-blueprints.AzureServiceBusEventSource.property.subscriptionName">subscriptionName</a></code> | <code>string</code> | SubscriptionName is the name of the Azure Service Bus Topic Subscription. |
| <code><a href="#metaflow-blueprints.AzureServiceBusEventSource.property.topicName">topicName</a></code> | <code>string</code> | TopicName is the name of the Azure Service Bus Topic. |
| <code><a href="#metaflow-blueprints.AzureServiceBusEventSource.property.connectionString">connectionString</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | ConnectionString is the connection string for the Azure Service Bus. |
| <code><a href="#metaflow-blueprints.AzureServiceBusEventSource.property.filter">filter</a></code> | <code><a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a></code> | Filter. |
| <code><a href="#metaflow-blueprints.AzureServiceBusEventSource.property.fullyQualifiedNamespace">fullyQualifiedNamespace</a></code> | <code>string</code> | FullyQualifiedNamespace is the Service Bus namespace name (ex: myservicebus.servicebus.windows.net). This field is necessary to access via Azure AD (managed identity) and it is ignored if ConnectionString is set. |
| <code><a href="#metaflow-blueprints.AzureServiceBusEventSource.property.jsonBody">jsonBody</a></code> | <code>boolean</code> | JSONBody specifies that all event body payload coming from this source will be JSON. |
| <code><a href="#metaflow-blueprints.AzureServiceBusEventSource.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata holds the user defined metadata which will passed along the event payload. |
| <code><a href="#metaflow-blueprints.AzureServiceBusEventSource.property.tls">tls</a></code> | <code><a href="#metaflow-blueprints.TLSConfig">TLSConfig</a></code> | TLS configuration for the service bus client. |

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="metaflow-blueprints.AzureServiceBusEventSource.property.queueName"></a>

```typescript
public readonly queueName: string;
```

- *Type:* string

QueueName is the name of the Azure Service Bus Queue.

---

##### `subscriptionName`<sup>Required</sup> <a name="subscriptionName" id="metaflow-blueprints.AzureServiceBusEventSource.property.subscriptionName"></a>

```typescript
public readonly subscriptionName: string;
```

- *Type:* string

SubscriptionName is the name of the Azure Service Bus Topic Subscription.

---

##### `topicName`<sup>Required</sup> <a name="topicName" id="metaflow-blueprints.AzureServiceBusEventSource.property.topicName"></a>

```typescript
public readonly topicName: string;
```

- *Type:* string

TopicName is the name of the Azure Service Bus Topic.

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="metaflow-blueprints.AzureServiceBusEventSource.property.connectionString"></a>

```typescript
public readonly connectionString: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

ConnectionString is the connection string for the Azure Service Bus.

If this fields is
not provided it will try to access via Azure AD with DefaultAzureCredential and
FullyQualifiedNamespace.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="metaflow-blueprints.AzureServiceBusEventSource.property.filter"></a>

```typescript
public readonly filter: EventSourceFilter;
```

- *Type:* <a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a>

Filter.

---

##### `fullyQualifiedNamespace`<sup>Optional</sup> <a name="fullyQualifiedNamespace" id="metaflow-blueprints.AzureServiceBusEventSource.property.fullyQualifiedNamespace"></a>

```typescript
public readonly fullyQualifiedNamespace: string;
```

- *Type:* string

FullyQualifiedNamespace is the Service Bus namespace name (ex: myservicebus.servicebus.windows.net). This field is necessary to access via Azure AD (managed identity) and it is ignored if ConnectionString is set.

---

##### `jsonBody`<sup>Optional</sup> <a name="jsonBody" id="metaflow-blueprints.AzureServiceBusEventSource.property.jsonBody"></a>

```typescript
public readonly jsonBody: boolean;
```

- *Type:* boolean

JSONBody specifies that all event body payload coming from this source will be JSON.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="metaflow-blueprints.AzureServiceBusEventSource.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata holds the user defined metadata which will passed along the event payload.

---

##### `tls`<sup>Optional</sup> <a name="tls" id="metaflow-blueprints.AzureServiceBusEventSource.property.tls"></a>

```typescript
public readonly tls: TLSConfig;
```

- *Type:* <a href="#metaflow-blueprints.TLSConfig">TLSConfig</a>

TLS configuration for the service bus client.

---

### Backoff <a name="Backoff" id="metaflow-blueprints.Backoff"></a>

Backoff holds parameters applied to connection.

Backoff for an operation

ConnectionBackoff holds backoff applied to connection.

Backoff before checking resource state

Retry strategy, defaults to no retry

#### Initializer <a name="Initializer" id="metaflow-blueprints.Backoff.Initializer"></a>

```typescript
import { Backoff } from 'metaflow-blueprints'

const backoff: Backoff = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.Backoff.property.duration">duration</a></code> | <code>string</code> | The initial duration as a string (e.g. "1s", "3m", "1000"). |
| <code><a href="#metaflow-blueprints.Backoff.property.factor">factor</a></code> | <code>number</code> | Duration is multiplied by factor each iteration. |
| <code><a href="#metaflow-blueprints.Backoff.property.jitter">jitter</a></code> | <code>number</code> | The amount of jitter applied each iteration. |
| <code><a href="#metaflow-blueprints.Backoff.property.steps">steps</a></code> | <code>number</code> | Exit with error after this many steps. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="metaflow-blueprints.Backoff.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

The initial duration as a string (e.g. "1s", "3m", "1000").

---

##### `factor`<sup>Optional</sup> <a name="factor" id="metaflow-blueprints.Backoff.property.factor"></a>

```typescript
public readonly factor: number;
```

- *Type:* number

Duration is multiplied by factor each iteration.

---

##### `jitter`<sup>Optional</sup> <a name="jitter" id="metaflow-blueprints.Backoff.property.jitter"></a>

```typescript
public readonly jitter: number;
```

- *Type:* number

The amount of jitter applied each iteration.

---

##### `steps`<sup>Optional</sup> <a name="steps" id="metaflow-blueprints.Backoff.property.steps"></a>

```typescript
public readonly steps: number;
```

- *Type:* number

Exit with error after this many steps.

---

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

### BasicAuth <a name="BasicAuth" id="metaflow-blueprints.BasicAuth"></a>

Auth hosts secret selectors for username and password.

BasicAuth contains the reference to K8s secrets that holds the username and password

Baisc auth with username and password

BasicAuth configuration for the http request.

SchemaRegistry - basic authentication

#### Initializer <a name="Initializer" id="metaflow-blueprints.BasicAuth.Initializer"></a>

```typescript
import { BasicAuth } from 'metaflow-blueprints'

const basicAuth: BasicAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.BasicAuth.property.password">password</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | Password refers to the Kubernetes secret that holds the password required for basic auth. |
| <code><a href="#metaflow-blueprints.BasicAuth.property.username">username</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | Username refers to the Kubernetes secret that holds the username required for basic auth. |

---

##### `password`<sup>Optional</sup> <a name="password" id="metaflow-blueprints.BasicAuth.property.password"></a>

```typescript
public readonly password: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

Password refers to the Kubernetes secret that holds the password required for basic auth.

---

##### `username`<sup>Optional</sup> <a name="username" id="metaflow-blueprints.BasicAuth.property.username"></a>

```typescript
public readonly username: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

Username refers to the Kubernetes secret that holds the username required for basic auth.

---

### BitbucketAuth <a name="BitbucketAuth" id="metaflow-blueprints.BitbucketAuth"></a>

Auth information required to connect to Bitbucket.

BitbucketAuth holds the different auth strategies for connecting to Bitbucket

#### Initializer <a name="Initializer" id="metaflow-blueprints.BitbucketAuth.Initializer"></a>

```typescript
import { BitbucketAuth } from 'metaflow-blueprints'

const bitbucketAuth: BitbucketAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.BitbucketAuth.property.basic">basic</a></code> | <code><a href="#metaflow-blueprints.BitbucketBasicAuth">BitbucketBasicAuth</a></code> | Basic is BasicAuth auth strategy. |
| <code><a href="#metaflow-blueprints.BitbucketAuth.property.oauthToken">oauthToken</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | OAuthToken refers to the K8s secret that holds the OAuth Bearer token. |

---

##### `basic`<sup>Optional</sup> <a name="basic" id="metaflow-blueprints.BitbucketAuth.property.basic"></a>

```typescript
public readonly basic: BitbucketBasicAuth;
```

- *Type:* <a href="#metaflow-blueprints.BitbucketBasicAuth">BitbucketBasicAuth</a>

Basic is BasicAuth auth strategy.

---

##### `oauthToken`<sup>Optional</sup> <a name="oauthToken" id="metaflow-blueprints.BitbucketAuth.property.oauthToken"></a>

```typescript
public readonly oauthToken: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

OAuthToken refers to the K8s secret that holds the OAuth Bearer token.

---

### BitbucketBasicAuth <a name="BitbucketBasicAuth" id="metaflow-blueprints.BitbucketBasicAuth"></a>

Basic is BasicAuth auth strategy.

BitbucketBasicAuth holds the information required to authenticate user via basic auth
mechanism

#### Initializer <a name="Initializer" id="metaflow-blueprints.BitbucketBasicAuth.Initializer"></a>

```typescript
import { BitbucketBasicAuth } from 'metaflow-blueprints'

const bitbucketBasicAuth: BitbucketBasicAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.BitbucketBasicAuth.property.password">password</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | Password refers to the K8s secret that holds the password. |
| <code><a href="#metaflow-blueprints.BitbucketBasicAuth.property.username">username</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | Username refers to the K8s secret that holds the username. |

---

##### `password`<sup>Required</sup> <a name="password" id="metaflow-blueprints.BitbucketBasicAuth.property.password"></a>

```typescript
public readonly password: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

Password refers to the K8s secret that holds the password.

---

##### `username`<sup>Required</sup> <a name="username" id="metaflow-blueprints.BitbucketBasicAuth.property.username"></a>

```typescript
public readonly username: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

Username refers to the K8s secret that holds the username.

---

### BitbucketEventSource <a name="BitbucketEventSource" id="metaflow-blueprints.BitbucketEventSource"></a>

BitbucketEventSource describes the event source for Bitbucket.

#### Initializer <a name="Initializer" id="metaflow-blueprints.BitbucketEventSource.Initializer"></a>

```typescript
import { BitbucketEventSource } from 'metaflow-blueprints'

const bitbucketEventSource: BitbucketEventSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.BitbucketEventSource.property.auth">auth</a></code> | <code><a href="#metaflow-blueprints.BitbucketAuth">BitbucketAuth</a></code> | Auth information required to connect to Bitbucket. |
| <code><a href="#metaflow-blueprints.BitbucketEventSource.property.events">events</a></code> | <code>string[]</code> | Events this webhook is subscribed to. |
| <code><a href="#metaflow-blueprints.BitbucketEventSource.property.webhook">webhook</a></code> | <code><a href="#metaflow-blueprints.WebhookContext">WebhookContext</a></code> | Webhook refers to the configuration required to run an http server. |
| <code><a href="#metaflow-blueprints.BitbucketEventSource.property.deleteHookOnFinish">deleteHookOnFinish</a></code> | <code>boolean</code> | DeleteHookOnFinish determines whether to delete the defined Bitbucket hook once the event source is stopped. |
| <code><a href="#metaflow-blueprints.BitbucketEventSource.property.filter">filter</a></code> | <code><a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a></code> | Filter. |
| <code><a href="#metaflow-blueprints.BitbucketEventSource.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata holds the user defined metadata which will be passed along the event payload. |
| <code><a href="#metaflow-blueprints.BitbucketEventSource.property.owner">owner</a></code> | <code>string</code> | DeprecatedOwner is the owner of the repository. |
| <code><a href="#metaflow-blueprints.BitbucketEventSource.property.projectKey">projectKey</a></code> | <code>string</code> | DeprecatedProjectKey is the key of the project to which the repository relates Deprecated: use Repositories instead. |
| <code><a href="#metaflow-blueprints.BitbucketEventSource.property.repositories">repositories</a></code> | <code><a href="#metaflow-blueprints.BitbucketRepository">BitbucketRepository</a>[]</code> | Repositories holds a list of repositories for which integration needs to set up. |
| <code><a href="#metaflow-blueprints.BitbucketEventSource.property.repositorySlug">repositorySlug</a></code> | <code>string</code> | DeprecatedRepositorySlug is a URL-friendly version of a repository name, automatically generated by Bitbucket for use in the URL Deprecated: use Repositories instead. |

---

##### `auth`<sup>Required</sup> <a name="auth" id="metaflow-blueprints.BitbucketEventSource.property.auth"></a>

```typescript
public readonly auth: BitbucketAuth;
```

- *Type:* <a href="#metaflow-blueprints.BitbucketAuth">BitbucketAuth</a>

Auth information required to connect to Bitbucket.

---

##### `events`<sup>Required</sup> <a name="events" id="metaflow-blueprints.BitbucketEventSource.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

Events this webhook is subscribed to.

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="metaflow-blueprints.BitbucketEventSource.property.webhook"></a>

```typescript
public readonly webhook: WebhookContext;
```

- *Type:* <a href="#metaflow-blueprints.WebhookContext">WebhookContext</a>

Webhook refers to the configuration required to run an http server.

---

##### `deleteHookOnFinish`<sup>Optional</sup> <a name="deleteHookOnFinish" id="metaflow-blueprints.BitbucketEventSource.property.deleteHookOnFinish"></a>

```typescript
public readonly deleteHookOnFinish: boolean;
```

- *Type:* boolean

DeleteHookOnFinish determines whether to delete the defined Bitbucket hook once the event source is stopped.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="metaflow-blueprints.BitbucketEventSource.property.filter"></a>

```typescript
public readonly filter: EventSourceFilter;
```

- *Type:* <a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a>

Filter.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="metaflow-blueprints.BitbucketEventSource.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata holds the user defined metadata which will be passed along the event payload.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="metaflow-blueprints.BitbucketEventSource.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

DeprecatedOwner is the owner of the repository.

Deprecated: use Repositories instead.
Will be unsupported in v1.9

---

##### `projectKey`<sup>Optional</sup> <a name="projectKey" id="metaflow-blueprints.BitbucketEventSource.property.projectKey"></a>

```typescript
public readonly projectKey: string;
```

- *Type:* string

DeprecatedProjectKey is the key of the project to which the repository relates Deprecated: use Repositories instead.

Will be unsupported in v1.9

---

##### `repositories`<sup>Optional</sup> <a name="repositories" id="metaflow-blueprints.BitbucketEventSource.property.repositories"></a>

```typescript
public readonly repositories: BitbucketRepository[];
```

- *Type:* <a href="#metaflow-blueprints.BitbucketRepository">BitbucketRepository</a>[]

Repositories holds a list of repositories for which integration needs to set up.

---

##### `repositorySlug`<sup>Optional</sup> <a name="repositorySlug" id="metaflow-blueprints.BitbucketEventSource.property.repositorySlug"></a>

```typescript
public readonly repositorySlug: string;
```

- *Type:* string

DeprecatedRepositorySlug is a URL-friendly version of a repository name, automatically generated by Bitbucket for use in the URL Deprecated: use Repositories instead.

Will be
unsupported in v1.9

---

### BitbucketRepository <a name="BitbucketRepository" id="metaflow-blueprints.BitbucketRepository"></a>

#### Initializer <a name="Initializer" id="metaflow-blueprints.BitbucketRepository.Initializer"></a>

```typescript
import { BitbucketRepository } from 'metaflow-blueprints'

const bitbucketRepository: BitbucketRepository = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.BitbucketRepository.property.owner">owner</a></code> | <code>string</code> | Owner is the owner of the repository. |
| <code><a href="#metaflow-blueprints.BitbucketRepository.property.repositorySlug">repositorySlug</a></code> | <code>string</code> | RepositorySlug is a URL-friendly version of a repository name, automatically generated by Bitbucket for use in the URL. |

---

##### `owner`<sup>Required</sup> <a name="owner" id="metaflow-blueprints.BitbucketRepository.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Owner is the owner of the repository.

---

##### `repositorySlug`<sup>Required</sup> <a name="repositorySlug" id="metaflow-blueprints.BitbucketRepository.property.repositorySlug"></a>

```typescript
public readonly repositorySlug: string;
```

- *Type:* string

RepositorySlug is a URL-friendly version of a repository name, automatically generated by Bitbucket for use in the URL.

---

### BitbucketServerEventSource <a name="BitbucketServerEventSource" id="metaflow-blueprints.BitbucketServerEventSource"></a>

BitbucketServerEventSource refers to event-source related to Bitbucket Server events.

#### Initializer <a name="Initializer" id="metaflow-blueprints.BitbucketServerEventSource.Initializer"></a>

```typescript
import { BitbucketServerEventSource } from 'metaflow-blueprints'

const bitbucketServerEventSource: BitbucketServerEventSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.BitbucketServerEventSource.property.bitbucketserverBaseURL">bitbucketserverBaseURL</a></code> | <code>string</code> | BitbucketServerBaseURL is the base URL for API requests to a custom endpoint. |
| <code><a href="#metaflow-blueprints.BitbucketServerEventSource.property.accessToken">accessToken</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | AccessToken is reference to K8s secret which holds the bitbucket api access information. |
| <code><a href="#metaflow-blueprints.BitbucketServerEventSource.property.checkInterval">checkInterval</a></code> | <code>string</code> | CheckInterval is a duration in which to wait before checking that the webhooks exist, e.g. 1s, 30m, 2h... (defaults to 1m). |
| <code><a href="#metaflow-blueprints.BitbucketServerEventSource.property.deleteHookOnFinish">deleteHookOnFinish</a></code> | <code>boolean</code> | DeleteHookOnFinish determines whether to delete the Bitbucket Server hook for the project once the event source is stopped. |
| <code><a href="#metaflow-blueprints.BitbucketServerEventSource.property.events">events</a></code> | <code>string[]</code> | Events are bitbucket event to listen to. |
| <code><a href="#metaflow-blueprints.BitbucketServerEventSource.property.filter">filter</a></code> | <code><a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a></code> | Filter. |
| <code><a href="#metaflow-blueprints.BitbucketServerEventSource.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata holds the user defined metadata which will passed along the event payload. |
| <code><a href="#metaflow-blueprints.BitbucketServerEventSource.property.oneEventPerChange">oneEventPerChange</a></code> | <code>boolean</code> | OneEventPerChange controls whether to process each change in a repo:refs_changed webhook event as a separate event. |
| <code><a href="#metaflow-blueprints.BitbucketServerEventSource.property.projectKey">projectKey</a></code> | <code>string</code> | DeprecatedProjectKey is the key of project for which integration needs to set up. |
| <code><a href="#metaflow-blueprints.BitbucketServerEventSource.property.projects">projects</a></code> | <code>string[]</code> | Projects holds a list of projects for which integration needs to set up, this will add the webhook to all repositories in the project. |
| <code><a href="#metaflow-blueprints.BitbucketServerEventSource.property.repositories">repositories</a></code> | <code><a href="#metaflow-blueprints.BitbucketServerRepository">BitbucketServerRepository</a>[]</code> | Repositories holds a list of repositories for which integration needs to set up. |
| <code><a href="#metaflow-blueprints.BitbucketServerEventSource.property.repositorySlug">repositorySlug</a></code> | <code>string</code> | DeprecatedRepositorySlug is the slug of the repository for which integration needs to set up. |
| <code><a href="#metaflow-blueprints.BitbucketServerEventSource.property.skipBranchRefsChangedOnOpenPR">skipBranchRefsChangedOnOpenPR</a></code> | <code>boolean</code> | SkipBranchRefsChangedOnOpenPR bypasses the event repo:refs_changed for branches whenever there's an associated open pull request. |
| <code><a href="#metaflow-blueprints.BitbucketServerEventSource.property.tls">tls</a></code> | <code><a href="#metaflow-blueprints.TLSConfig">TLSConfig</a></code> | TLS configuration for the bitbucketserver client. |
| <code><a href="#metaflow-blueprints.BitbucketServerEventSource.property.webhook">webhook</a></code> | <code><a href="#metaflow-blueprints.WebhookContext">WebhookContext</a></code> | Webhook holds configuration to run a http server. |
| <code><a href="#metaflow-blueprints.BitbucketServerEventSource.property.webhookSecret">webhookSecret</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | WebhookSecret is reference to K8s secret which holds the bitbucket webhook secret (for HMAC validation). |

---

##### `bitbucketserverBaseURL`<sup>Required</sup> <a name="bitbucketserverBaseURL" id="metaflow-blueprints.BitbucketServerEventSource.property.bitbucketserverBaseURL"></a>

```typescript
public readonly bitbucketserverBaseURL: string;
```

- *Type:* string

BitbucketServerBaseURL is the base URL for API requests to a custom endpoint.

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="metaflow-blueprints.BitbucketServerEventSource.property.accessToken"></a>

```typescript
public readonly accessToken: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

AccessToken is reference to K8s secret which holds the bitbucket api access information.

---

##### `checkInterval`<sup>Optional</sup> <a name="checkInterval" id="metaflow-blueprints.BitbucketServerEventSource.property.checkInterval"></a>

```typescript
public readonly checkInterval: string;
```

- *Type:* string

CheckInterval is a duration in which to wait before checking that the webhooks exist, e.g. 1s, 30m, 2h... (defaults to 1m).

---

##### `deleteHookOnFinish`<sup>Optional</sup> <a name="deleteHookOnFinish" id="metaflow-blueprints.BitbucketServerEventSource.property.deleteHookOnFinish"></a>

```typescript
public readonly deleteHookOnFinish: boolean;
```

- *Type:* boolean

DeleteHookOnFinish determines whether to delete the Bitbucket Server hook for the project once the event source is stopped.

---

##### `events`<sup>Optional</sup> <a name="events" id="metaflow-blueprints.BitbucketServerEventSource.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

Events are bitbucket event to listen to.

Refer
https://confluence.atlassian.com/bitbucketserver/event-payload-938025882.html

---

##### `filter`<sup>Optional</sup> <a name="filter" id="metaflow-blueprints.BitbucketServerEventSource.property.filter"></a>

```typescript
public readonly filter: EventSourceFilter;
```

- *Type:* <a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a>

Filter.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="metaflow-blueprints.BitbucketServerEventSource.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata holds the user defined metadata which will passed along the event payload.

---

##### `oneEventPerChange`<sup>Optional</sup> <a name="oneEventPerChange" id="metaflow-blueprints.BitbucketServerEventSource.property.oneEventPerChange"></a>

```typescript
public readonly oneEventPerChange: boolean;
```

- *Type:* boolean

OneEventPerChange controls whether to process each change in a repo:refs_changed webhook event as a separate event.

This setting is useful when multiple tags are pushed
simultaneously for the same commit, and each tag needs to independently trigger an
action, such as a distinct workflow in Argo Workflows. When enabled, the
BitbucketServerEventSource publishes an individual BitbucketServerEventData for each
change, ensuring independent processing of each tag or reference update in a single
webhook event.

---

##### `projectKey`<sup>Optional</sup> <a name="projectKey" id="metaflow-blueprints.BitbucketServerEventSource.property.projectKey"></a>

```typescript
public readonly projectKey: string;
```

- *Type:* string

DeprecatedProjectKey is the key of project for which integration needs to set up.

Deprecated: use Repositories instead. Will be unsupported in v1.8.

---

##### `projects`<sup>Optional</sup> <a name="projects" id="metaflow-blueprints.BitbucketServerEventSource.property.projects"></a>

```typescript
public readonly projects: string[];
```

- *Type:* string[]

Projects holds a list of projects for which integration needs to set up, this will add the webhook to all repositories in the project.

---

##### `repositories`<sup>Optional</sup> <a name="repositories" id="metaflow-blueprints.BitbucketServerEventSource.property.repositories"></a>

```typescript
public readonly repositories: BitbucketServerRepository[];
```

- *Type:* <a href="#metaflow-blueprints.BitbucketServerRepository">BitbucketServerRepository</a>[]

Repositories holds a list of repositories for which integration needs to set up.

---

##### `repositorySlug`<sup>Optional</sup> <a name="repositorySlug" id="metaflow-blueprints.BitbucketServerEventSource.property.repositorySlug"></a>

```typescript
public readonly repositorySlug: string;
```

- *Type:* string

DeprecatedRepositorySlug is the slug of the repository for which integration needs to set up.

Deprecated: use Repositories instead. Will be unsupported in v1.8.

---

##### `skipBranchRefsChangedOnOpenPR`<sup>Optional</sup> <a name="skipBranchRefsChangedOnOpenPR" id="metaflow-blueprints.BitbucketServerEventSource.property.skipBranchRefsChangedOnOpenPR"></a>

```typescript
public readonly skipBranchRefsChangedOnOpenPR: boolean;
```

- *Type:* boolean

SkipBranchRefsChangedOnOpenPR bypasses the event repo:refs_changed for branches whenever there's an associated open pull request.

This helps in optimizing the event handling
process by avoiding unnecessary triggers for branch reference changes that are already
part of a pull request under review.

---

##### `tls`<sup>Optional</sup> <a name="tls" id="metaflow-blueprints.BitbucketServerEventSource.property.tls"></a>

```typescript
public readonly tls: TLSConfig;
```

- *Type:* <a href="#metaflow-blueprints.TLSConfig">TLSConfig</a>

TLS configuration for the bitbucketserver client.

---

##### `webhook`<sup>Optional</sup> <a name="webhook" id="metaflow-blueprints.BitbucketServerEventSource.property.webhook"></a>

```typescript
public readonly webhook: WebhookContext;
```

- *Type:* <a href="#metaflow-blueprints.WebhookContext">WebhookContext</a>

Webhook holds configuration to run a http server.

---

##### `webhookSecret`<sup>Optional</sup> <a name="webhookSecret" id="metaflow-blueprints.BitbucketServerEventSource.property.webhookSecret"></a>

```typescript
public readonly webhookSecret: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

WebhookSecret is reference to K8s secret which holds the bitbucket webhook secret (for HMAC validation).

---

### BitbucketServerRepository <a name="BitbucketServerRepository" id="metaflow-blueprints.BitbucketServerRepository"></a>

#### Initializer <a name="Initializer" id="metaflow-blueprints.BitbucketServerRepository.Initializer"></a>

```typescript
import { BitbucketServerRepository } from 'metaflow-blueprints'

const bitbucketServerRepository: BitbucketServerRepository = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.BitbucketServerRepository.property.projectKey">projectKey</a></code> | <code>string</code> | ProjectKey is the key of project for which integration needs to set up. |
| <code><a href="#metaflow-blueprints.BitbucketServerRepository.property.repositorySlug">repositorySlug</a></code> | <code>string</code> | RepositorySlug is the slug of the repository for which integration needs to set up. |

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="metaflow-blueprints.BitbucketServerRepository.property.projectKey"></a>

```typescript
public readonly projectKey: string;
```

- *Type:* string

ProjectKey is the key of project for which integration needs to set up.

---

##### `repositorySlug`<sup>Required</sup> <a name="repositorySlug" id="metaflow-blueprints.BitbucketServerRepository.property.repositorySlug"></a>

```typescript
public readonly repositorySlug: string;
```

- *Type:* string

RepositorySlug is the slug of the repository for which integration needs to set up.

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

For reference, see: https://en.wikipedia.org/wiki/Cron

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

### EmitterEventSource <a name="EmitterEventSource" id="metaflow-blueprints.EmitterEventSource"></a>

EmitterEventSource describes the event source for emitter More info at https://emitter.io/develop/getting-started/.

#### Initializer <a name="Initializer" id="metaflow-blueprints.EmitterEventSource.Initializer"></a>

```typescript
import { EmitterEventSource } from 'metaflow-blueprints'

const emitterEventSource: EmitterEventSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.EmitterEventSource.property.broker">broker</a></code> | <code>string</code> | Broker URI to connect to. |
| <code><a href="#metaflow-blueprints.EmitterEventSource.property.channelKey">channelKey</a></code> | <code>string</code> | ChannelKey refers to the channel key. |
| <code><a href="#metaflow-blueprints.EmitterEventSource.property.channelName">channelName</a></code> | <code>string</code> | ChannelName refers to the channel name. |
| <code><a href="#metaflow-blueprints.EmitterEventSource.property.connectionBackoff">connectionBackoff</a></code> | <code><a href="#metaflow-blueprints.Backoff">Backoff</a></code> | Backoff holds parameters applied to connection. |
| <code><a href="#metaflow-blueprints.EmitterEventSource.property.filter">filter</a></code> | <code><a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a></code> | Filter. |
| <code><a href="#metaflow-blueprints.EmitterEventSource.property.jsonBody">jsonBody</a></code> | <code>boolean</code> | JSONBody specifies that all event body payload coming from this source will be JSON. |
| <code><a href="#metaflow-blueprints.EmitterEventSource.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata holds the user defined metadata which will passed along the event payload. |
| <code><a href="#metaflow-blueprints.EmitterEventSource.property.password">password</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | Password to use to connect to broker. |
| <code><a href="#metaflow-blueprints.EmitterEventSource.property.tls">tls</a></code> | <code><a href="#metaflow-blueprints.TLSConfig">TLSConfig</a></code> | TLS configuration for the emitter client. |
| <code><a href="#metaflow-blueprints.EmitterEventSource.property.username">username</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | Username to use to connect to broker. |

---

##### `broker`<sup>Required</sup> <a name="broker" id="metaflow-blueprints.EmitterEventSource.property.broker"></a>

```typescript
public readonly broker: string;
```

- *Type:* string

Broker URI to connect to.

---

##### `channelKey`<sup>Required</sup> <a name="channelKey" id="metaflow-blueprints.EmitterEventSource.property.channelKey"></a>

```typescript
public readonly channelKey: string;
```

- *Type:* string

ChannelKey refers to the channel key.

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="metaflow-blueprints.EmitterEventSource.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

ChannelName refers to the channel name.

---

##### `connectionBackoff`<sup>Optional</sup> <a name="connectionBackoff" id="metaflow-blueprints.EmitterEventSource.property.connectionBackoff"></a>

```typescript
public readonly connectionBackoff: Backoff;
```

- *Type:* <a href="#metaflow-blueprints.Backoff">Backoff</a>

Backoff holds parameters applied to connection.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="metaflow-blueprints.EmitterEventSource.property.filter"></a>

```typescript
public readonly filter: EventSourceFilter;
```

- *Type:* <a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a>

Filter.

---

##### `jsonBody`<sup>Optional</sup> <a name="jsonBody" id="metaflow-blueprints.EmitterEventSource.property.jsonBody"></a>

```typescript
public readonly jsonBody: boolean;
```

- *Type:* boolean

JSONBody specifies that all event body payload coming from this source will be JSON.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="metaflow-blueprints.EmitterEventSource.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata holds the user defined metadata which will passed along the event payload.

---

##### `password`<sup>Optional</sup> <a name="password" id="metaflow-blueprints.EmitterEventSource.property.password"></a>

```typescript
public readonly password: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

Password to use to connect to broker.

---

##### `tls`<sup>Optional</sup> <a name="tls" id="metaflow-blueprints.EmitterEventSource.property.tls"></a>

```typescript
public readonly tls: TLSConfig;
```

- *Type:* <a href="#metaflow-blueprints.TLSConfig">TLSConfig</a>

TLS configuration for the emitter client.

---

##### `username`<sup>Optional</sup> <a name="username" id="metaflow-blueprints.EmitterEventSource.property.username"></a>

```typescript
public readonly username: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

Username to use to connect to broker.

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
Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty. Must be a DNS_LABEL. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/namespaces

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

EventSourceSpec refers to specification of event-source resource.

#### Initializer <a name="Initializer" id="metaflow-blueprints.EventSourceSpec.Initializer"></a>

```typescript
import { EventSourceSpec } from 'metaflow-blueprints'

const eventSourceSpec: EventSourceSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.EventSourceSpec.property.amqp">amqp</a></code> | <code>{[ key: string ]: <a href="#metaflow-blueprints.AMQPEventSource">AMQPEventSource</a>}</code> | AMQP event sources. |
| <code><a href="#metaflow-blueprints.EventSourceSpec.property.azureEventsHub">azureEventsHub</a></code> | <code>{[ key: string ]: <a href="#metaflow-blueprints.AzureEventsHubEventSource">AzureEventsHubEventSource</a>}</code> | AzureEventsHub event sources. |
| <code><a href="#metaflow-blueprints.EventSourceSpec.property.azureQueueStorage">azureQueueStorage</a></code> | <code>{[ key: string ]: <a href="#metaflow-blueprints.AzureQueueStorageEventSource">AzureQueueStorageEventSource</a>}</code> | AzureQueueStorage event source. |
| <code><a href="#metaflow-blueprints.EventSourceSpec.property.azureServiceBus">azureServiceBus</a></code> | <code>{[ key: string ]: <a href="#metaflow-blueprints.AzureServiceBusEventSource">AzureServiceBusEventSource</a>}</code> | Azure Service Bus event source. |
| <code><a href="#metaflow-blueprints.EventSourceSpec.property.bitbucket">bitbucket</a></code> | <code>{[ key: string ]: <a href="#metaflow-blueprints.BitbucketEventSource">BitbucketEventSource</a>}</code> | Bitbucket event sources. |
| <code><a href="#metaflow-blueprints.EventSourceSpec.property.bitbucketserver">bitbucketserver</a></code> | <code>{[ key: string ]: <a href="#metaflow-blueprints.BitbucketServerEventSource">BitbucketServerEventSource</a>}</code> | Bitbucket Server event sources. |
| <code><a href="#metaflow-blueprints.EventSourceSpec.property.calendar">calendar</a></code> | <code>{[ key: string ]: <a href="#metaflow-blueprints.CalendarEventSource">CalendarEventSource</a>}</code> | Calendar event sources. |
| <code><a href="#metaflow-blueprints.EventSourceSpec.property.emitter">emitter</a></code> | <code>{[ key: string ]: <a href="#metaflow-blueprints.EmitterEventSource">EmitterEventSource</a>}</code> | Emitter event source. |
| <code><a href="#metaflow-blueprints.EventSourceSpec.property.eventBusName">eventBusName</a></code> | <code>string</code> | EventBusName references to a EventBus name. |
| <code><a href="#metaflow-blueprints.EventSourceSpec.property.file">file</a></code> | <code>{[ key: string ]: <a href="#metaflow-blueprints.FileEventSource">FileEventSource</a>}</code> | File event sources. |
| <code><a href="#metaflow-blueprints.EventSourceSpec.property.generic">generic</a></code> | <code>{[ key: string ]: <a href="#metaflow-blueprints.GenericEventSource">GenericEventSource</a>}</code> | Generic event source. |
| <code><a href="#metaflow-blueprints.EventSourceSpec.property.gerrit">gerrit</a></code> | <code>{[ key: string ]: <a href="#metaflow-blueprints.GerritEventSource">GerritEventSource</a>}</code> | Gerrit event source. |
| <code><a href="#metaflow-blueprints.EventSourceSpec.property.github">github</a></code> | <code>{[ key: string ]: <a href="#metaflow-blueprints.GithubEventSource">GithubEventSource</a>}</code> | Github event sources. |
| <code><a href="#metaflow-blueprints.EventSourceSpec.property.gitlab">gitlab</a></code> | <code>{[ key: string ]: <a href="#metaflow-blueprints.GitlabEventSource">GitlabEventSource</a>}</code> | Gitlab event sources. |
| <code><a href="#metaflow-blueprints.EventSourceSpec.property.hdfs">hdfs</a></code> | <code>{[ key: string ]: <a href="#metaflow-blueprints.HDFSEventSource">HDFSEventSource</a>}</code> | HDFS event sources. |
| <code><a href="#metaflow-blueprints.EventSourceSpec.property.kafka">kafka</a></code> | <code>{[ key: string ]: <a href="#metaflow-blueprints.KafkaEventSource">KafkaEventSource</a>}</code> | Kafka event sources. |
| <code><a href="#metaflow-blueprints.EventSourceSpec.property.minio">minio</a></code> | <code>{[ key: string ]: <a href="#metaflow-blueprints.S3Artifact">S3Artifact</a>}</code> | Minio event sources. |
| <code><a href="#metaflow-blueprints.EventSourceSpec.property.mqtt">mqtt</a></code> | <code>{[ key: string ]: <a href="#metaflow-blueprints.MQTTEventSource">MQTTEventSource</a>}</code> | MQTT event sources. |
| <code><a href="#metaflow-blueprints.EventSourceSpec.property.nats">nats</a></code> | <code>{[ key: string ]: <a href="#metaflow-blueprints.NATSEventsSource">NATSEventsSource</a>}</code> | NATS event sources. |
| <code><a href="#metaflow-blueprints.EventSourceSpec.property.nsq">nsq</a></code> | <code>{[ key: string ]: <a href="#metaflow-blueprints.NSQEventSource">NSQEventSource</a>}</code> | NSQ event source. |
| <code><a href="#metaflow-blueprints.EventSourceSpec.property.pubSub">pubSub</a></code> | <code>{[ key: string ]: <a href="#metaflow-blueprints.PubSubEventSource">PubSubEventSource</a>}</code> | PubSub event sources. |
| <code><a href="#metaflow-blueprints.EventSourceSpec.property.pulsar">pulsar</a></code> | <code>{[ key: string ]: <a href="#metaflow-blueprints.PulsarEventSource">PulsarEventSource</a>}</code> | Pulsar event source. |
| <code><a href="#metaflow-blueprints.EventSourceSpec.property.redis">redis</a></code> | <code>{[ key: string ]: <a href="#metaflow-blueprints.RedisEventSource">RedisEventSource</a>}</code> | Redis event source. |
| <code><a href="#metaflow-blueprints.EventSourceSpec.property.redisStream">redisStream</a></code> | <code>{[ key: string ]: <a href="#metaflow-blueprints.RedisStreamEventSource">RedisStreamEventSource</a>}</code> | Redis stream source. |
| <code><a href="#metaflow-blueprints.EventSourceSpec.property.replicas">replicas</a></code> | <code>number</code> | Replicas is the event source deployment replicas. |
| <code><a href="#metaflow-blueprints.EventSourceSpec.property.resource">resource</a></code> | <code>{[ key: string ]: <a href="#metaflow-blueprints.ResourceEventSource">ResourceEventSource</a>}</code> | Resource event sources. |
| <code><a href="#metaflow-blueprints.EventSourceSpec.property.service">service</a></code> | <code><a href="#metaflow-blueprints.Service">Service</a></code> | is the specifications of the service to expose the event source. |
| <code><a href="#metaflow-blueprints.EventSourceSpec.property.sftp">sftp</a></code> | <code>{[ key: string ]: <a href="#metaflow-blueprints.SFTPEventSource">SFTPEventSource</a>}</code> | SFTP event sources. |
| <code><a href="#metaflow-blueprints.EventSourceSpec.property.slack">slack</a></code> | <code>{[ key: string ]: <a href="#metaflow-blueprints.SlackEventSource">SlackEventSource</a>}</code> | Slack event sources. |
| <code><a href="#metaflow-blueprints.EventSourceSpec.property.sns">sns</a></code> | <code>{[ key: string ]: <a href="#metaflow-blueprints.SNSEventSource">SNSEventSource</a>}</code> | SNS event sources. |
| <code><a href="#metaflow-blueprints.EventSourceSpec.property.sqs">sqs</a></code> | <code>{[ key: string ]: <a href="#metaflow-blueprints.SQSEventSource">SQSEventSource</a>}</code> | SQS event sources. |
| <code><a href="#metaflow-blueprints.EventSourceSpec.property.storageGrid">storageGrid</a></code> | <code>{[ key: string ]: <a href="#metaflow-blueprints.StorageGridEventSource">StorageGridEventSource</a>}</code> | StorageGrid event sources. |
| <code><a href="#metaflow-blueprints.EventSourceSpec.property.stripe">stripe</a></code> | <code>{[ key: string ]: <a href="#metaflow-blueprints.StripeEventSource">StripeEventSource</a>}</code> | Stripe event sources. |
| <code><a href="#metaflow-blueprints.EventSourceSpec.property.template">template</a></code> | <code><a href="#metaflow-blueprints.Template">Template</a></code> | Template is the pod specification for the event source. |
| <code><a href="#metaflow-blueprints.EventSourceSpec.property.webhook">webhook</a></code> | <code>{[ key: string ]: <a href="#metaflow-blueprints.WebhookEventSource">WebhookEventSource</a>}</code> | Webhook event sources. |

---

##### `amqp`<sup>Optional</sup> <a name="amqp" id="metaflow-blueprints.EventSourceSpec.property.amqp"></a>

```typescript
public readonly amqp: {[ key: string ]: AMQPEventSource};
```

- *Type:* {[ key: string ]: <a href="#metaflow-blueprints.AMQPEventSource">AMQPEventSource</a>}

AMQP event sources.

---

##### `azureEventsHub`<sup>Optional</sup> <a name="azureEventsHub" id="metaflow-blueprints.EventSourceSpec.property.azureEventsHub"></a>

```typescript
public readonly azureEventsHub: {[ key: string ]: AzureEventsHubEventSource};
```

- *Type:* {[ key: string ]: <a href="#metaflow-blueprints.AzureEventsHubEventSource">AzureEventsHubEventSource</a>}

AzureEventsHub event sources.

---

##### `azureQueueStorage`<sup>Optional</sup> <a name="azureQueueStorage" id="metaflow-blueprints.EventSourceSpec.property.azureQueueStorage"></a>

```typescript
public readonly azureQueueStorage: {[ key: string ]: AzureQueueStorageEventSource};
```

- *Type:* {[ key: string ]: <a href="#metaflow-blueprints.AzureQueueStorageEventSource">AzureQueueStorageEventSource</a>}

AzureQueueStorage event source.

---

##### `azureServiceBus`<sup>Optional</sup> <a name="azureServiceBus" id="metaflow-blueprints.EventSourceSpec.property.azureServiceBus"></a>

```typescript
public readonly azureServiceBus: {[ key: string ]: AzureServiceBusEventSource};
```

- *Type:* {[ key: string ]: <a href="#metaflow-blueprints.AzureServiceBusEventSource">AzureServiceBusEventSource</a>}

Azure Service Bus event source.

---

##### `bitbucket`<sup>Optional</sup> <a name="bitbucket" id="metaflow-blueprints.EventSourceSpec.property.bitbucket"></a>

```typescript
public readonly bitbucket: {[ key: string ]: BitbucketEventSource};
```

- *Type:* {[ key: string ]: <a href="#metaflow-blueprints.BitbucketEventSource">BitbucketEventSource</a>}

Bitbucket event sources.

---

##### `bitbucketserver`<sup>Optional</sup> <a name="bitbucketserver" id="metaflow-blueprints.EventSourceSpec.property.bitbucketserver"></a>

```typescript
public readonly bitbucketserver: {[ key: string ]: BitbucketServerEventSource};
```

- *Type:* {[ key: string ]: <a href="#metaflow-blueprints.BitbucketServerEventSource">BitbucketServerEventSource</a>}

Bitbucket Server event sources.

---

##### `calendar`<sup>Optional</sup> <a name="calendar" id="metaflow-blueprints.EventSourceSpec.property.calendar"></a>

```typescript
public readonly calendar: {[ key: string ]: CalendarEventSource};
```

- *Type:* {[ key: string ]: <a href="#metaflow-blueprints.CalendarEventSource">CalendarEventSource</a>}

Calendar event sources.

---

##### `emitter`<sup>Optional</sup> <a name="emitter" id="metaflow-blueprints.EventSourceSpec.property.emitter"></a>

```typescript
public readonly emitter: {[ key: string ]: EmitterEventSource};
```

- *Type:* {[ key: string ]: <a href="#metaflow-blueprints.EmitterEventSource">EmitterEventSource</a>}

Emitter event source.

---

##### `eventBusName`<sup>Optional</sup> <a name="eventBusName" id="metaflow-blueprints.EventSourceSpec.property.eventBusName"></a>

```typescript
public readonly eventBusName: string;
```

- *Type:* string

EventBusName references to a EventBus name.

By default the value is "default"

---

##### `file`<sup>Optional</sup> <a name="file" id="metaflow-blueprints.EventSourceSpec.property.file"></a>

```typescript
public readonly file: {[ key: string ]: FileEventSource};
```

- *Type:* {[ key: string ]: <a href="#metaflow-blueprints.FileEventSource">FileEventSource</a>}

File event sources.

---

##### `generic`<sup>Optional</sup> <a name="generic" id="metaflow-blueprints.EventSourceSpec.property.generic"></a>

```typescript
public readonly generic: {[ key: string ]: GenericEventSource};
```

- *Type:* {[ key: string ]: <a href="#metaflow-blueprints.GenericEventSource">GenericEventSource</a>}

Generic event source.

---

##### `gerrit`<sup>Optional</sup> <a name="gerrit" id="metaflow-blueprints.EventSourceSpec.property.gerrit"></a>

```typescript
public readonly gerrit: {[ key: string ]: GerritEventSource};
```

- *Type:* {[ key: string ]: <a href="#metaflow-blueprints.GerritEventSource">GerritEventSource</a>}

Gerrit event source.

---

##### `github`<sup>Optional</sup> <a name="github" id="metaflow-blueprints.EventSourceSpec.property.github"></a>

```typescript
public readonly github: {[ key: string ]: GithubEventSource};
```

- *Type:* {[ key: string ]: <a href="#metaflow-blueprints.GithubEventSource">GithubEventSource</a>}

Github event sources.

---

##### `gitlab`<sup>Optional</sup> <a name="gitlab" id="metaflow-blueprints.EventSourceSpec.property.gitlab"></a>

```typescript
public readonly gitlab: {[ key: string ]: GitlabEventSource};
```

- *Type:* {[ key: string ]: <a href="#metaflow-blueprints.GitlabEventSource">GitlabEventSource</a>}

Gitlab event sources.

---

##### `hdfs`<sup>Optional</sup> <a name="hdfs" id="metaflow-blueprints.EventSourceSpec.property.hdfs"></a>

```typescript
public readonly hdfs: {[ key: string ]: HDFSEventSource};
```

- *Type:* {[ key: string ]: <a href="#metaflow-blueprints.HDFSEventSource">HDFSEventSource</a>}

HDFS event sources.

---

##### `kafka`<sup>Optional</sup> <a name="kafka" id="metaflow-blueprints.EventSourceSpec.property.kafka"></a>

```typescript
public readonly kafka: {[ key: string ]: KafkaEventSource};
```

- *Type:* {[ key: string ]: <a href="#metaflow-blueprints.KafkaEventSource">KafkaEventSource</a>}

Kafka event sources.

---

##### `minio`<sup>Optional</sup> <a name="minio" id="metaflow-blueprints.EventSourceSpec.property.minio"></a>

```typescript
public readonly minio: {[ key: string ]: S3Artifact};
```

- *Type:* {[ key: string ]: <a href="#metaflow-blueprints.S3Artifact">S3Artifact</a>}

Minio event sources.

---

##### `mqtt`<sup>Optional</sup> <a name="mqtt" id="metaflow-blueprints.EventSourceSpec.property.mqtt"></a>

```typescript
public readonly mqtt: {[ key: string ]: MQTTEventSource};
```

- *Type:* {[ key: string ]: <a href="#metaflow-blueprints.MQTTEventSource">MQTTEventSource</a>}

MQTT event sources.

---

##### `nats`<sup>Optional</sup> <a name="nats" id="metaflow-blueprints.EventSourceSpec.property.nats"></a>

```typescript
public readonly nats: {[ key: string ]: NATSEventsSource};
```

- *Type:* {[ key: string ]: <a href="#metaflow-blueprints.NATSEventsSource">NATSEventsSource</a>}

NATS event sources.

---

##### `nsq`<sup>Optional</sup> <a name="nsq" id="metaflow-blueprints.EventSourceSpec.property.nsq"></a>

```typescript
public readonly nsq: {[ key: string ]: NSQEventSource};
```

- *Type:* {[ key: string ]: <a href="#metaflow-blueprints.NSQEventSource">NSQEventSource</a>}

NSQ event source.

---

##### `pubSub`<sup>Optional</sup> <a name="pubSub" id="metaflow-blueprints.EventSourceSpec.property.pubSub"></a>

```typescript
public readonly pubSub: {[ key: string ]: PubSubEventSource};
```

- *Type:* {[ key: string ]: <a href="#metaflow-blueprints.PubSubEventSource">PubSubEventSource</a>}

PubSub event sources.

---

##### `pulsar`<sup>Optional</sup> <a name="pulsar" id="metaflow-blueprints.EventSourceSpec.property.pulsar"></a>

```typescript
public readonly pulsar: {[ key: string ]: PulsarEventSource};
```

- *Type:* {[ key: string ]: <a href="#metaflow-blueprints.PulsarEventSource">PulsarEventSource</a>}

Pulsar event source.

---

##### `redis`<sup>Optional</sup> <a name="redis" id="metaflow-blueprints.EventSourceSpec.property.redis"></a>

```typescript
public readonly redis: {[ key: string ]: RedisEventSource};
```

- *Type:* {[ key: string ]: <a href="#metaflow-blueprints.RedisEventSource">RedisEventSource</a>}

Redis event source.

---

##### `redisStream`<sup>Optional</sup> <a name="redisStream" id="metaflow-blueprints.EventSourceSpec.property.redisStream"></a>

```typescript
public readonly redisStream: {[ key: string ]: RedisStreamEventSource};
```

- *Type:* {[ key: string ]: <a href="#metaflow-blueprints.RedisStreamEventSource">RedisStreamEventSource</a>}

Redis stream source.

---

##### `replicas`<sup>Optional</sup> <a name="replicas" id="metaflow-blueprints.EventSourceSpec.property.replicas"></a>

```typescript
public readonly replicas: number;
```

- *Type:* number

Replicas is the event source deployment replicas.

---

##### `resource`<sup>Optional</sup> <a name="resource" id="metaflow-blueprints.EventSourceSpec.property.resource"></a>

```typescript
public readonly resource: {[ key: string ]: ResourceEventSource};
```

- *Type:* {[ key: string ]: <a href="#metaflow-blueprints.ResourceEventSource">ResourceEventSource</a>}

Resource event sources.

---

##### `service`<sup>Optional</sup> <a name="service" id="metaflow-blueprints.EventSourceSpec.property.service"></a>

```typescript
public readonly service: Service;
```

- *Type:* <a href="#metaflow-blueprints.Service">Service</a>

is the specifications of the service to expose the event source.

---

##### `sftp`<sup>Optional</sup> <a name="sftp" id="metaflow-blueprints.EventSourceSpec.property.sftp"></a>

```typescript
public readonly sftp: {[ key: string ]: SFTPEventSource};
```

- *Type:* {[ key: string ]: <a href="#metaflow-blueprints.SFTPEventSource">SFTPEventSource</a>}

SFTP event sources.

---

##### `slack`<sup>Optional</sup> <a name="slack" id="metaflow-blueprints.EventSourceSpec.property.slack"></a>

```typescript
public readonly slack: {[ key: string ]: SlackEventSource};
```

- *Type:* {[ key: string ]: <a href="#metaflow-blueprints.SlackEventSource">SlackEventSource</a>}

Slack event sources.

---

##### `sns`<sup>Optional</sup> <a name="sns" id="metaflow-blueprints.EventSourceSpec.property.sns"></a>

```typescript
public readonly sns: {[ key: string ]: SNSEventSource};
```

- *Type:* {[ key: string ]: <a href="#metaflow-blueprints.SNSEventSource">SNSEventSource</a>}

SNS event sources.

---

##### `sqs`<sup>Optional</sup> <a name="sqs" id="metaflow-blueprints.EventSourceSpec.property.sqs"></a>

```typescript
public readonly sqs: {[ key: string ]: SQSEventSource};
```

- *Type:* {[ key: string ]: <a href="#metaflow-blueprints.SQSEventSource">SQSEventSource</a>}

SQS event sources.

---

##### `storageGrid`<sup>Optional</sup> <a name="storageGrid" id="metaflow-blueprints.EventSourceSpec.property.storageGrid"></a>

```typescript
public readonly storageGrid: {[ key: string ]: StorageGridEventSource};
```

- *Type:* {[ key: string ]: <a href="#metaflow-blueprints.StorageGridEventSource">StorageGridEventSource</a>}

StorageGrid event sources.

---

##### `stripe`<sup>Optional</sup> <a name="stripe" id="metaflow-blueprints.EventSourceSpec.property.stripe"></a>

```typescript
public readonly stripe: {[ key: string ]: StripeEventSource};
```

- *Type:* {[ key: string ]: <a href="#metaflow-blueprints.StripeEventSource">StripeEventSource</a>}

Stripe event sources.

---

##### `template`<sup>Optional</sup> <a name="template" id="metaflow-blueprints.EventSourceSpec.property.template"></a>

```typescript
public readonly template: Template;
```

- *Type:* <a href="#metaflow-blueprints.Template">Template</a>

Template is the pod specification for the event source.

Template is the pod specification for the sensor

---

##### `webhook`<sup>Optional</sup> <a name="webhook" id="metaflow-blueprints.EventSourceSpec.property.webhook"></a>

```typescript
public readonly webhook: {[ key: string ]: WebhookEventSource};
```

- *Type:* {[ key: string ]: <a href="#metaflow-blueprints.WebhookEventSource">WebhookEventSource</a>}

Webhook event sources.

---

### FileEventSource <a name="FileEventSource" id="metaflow-blueprints.FileEventSource"></a>

FileEventSource describes an event-source for file related events.

#### Initializer <a name="Initializer" id="metaflow-blueprints.FileEventSource.Initializer"></a>

```typescript
import { FileEventSource } from 'metaflow-blueprints'

const fileEventSource: FileEventSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.FileEventSource.property.eventType">eventType</a></code> | <code>string</code> | Type of file operations to watch Refer https://github.com/fsnotify/fsnotify/blob/master/fsnotify.go for more information. |
| <code><a href="#metaflow-blueprints.FileEventSource.property.watchPathConfig">watchPathConfig</a></code> | <code><a href="#metaflow-blueprints.WatchPathConfig">WatchPathConfig</a></code> | WatchPathConfig contains configuration about the file path to watch. |
| <code><a href="#metaflow-blueprints.FileEventSource.property.filter">filter</a></code> | <code><a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a></code> | Filter. |
| <code><a href="#metaflow-blueprints.FileEventSource.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata holds the user defined metadata which will passed along the event payload. |
| <code><a href="#metaflow-blueprints.FileEventSource.property.polling">polling</a></code> | <code>boolean</code> | Use polling instead of inotify. |

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="metaflow-blueprints.FileEventSource.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

Type of file operations to watch Refer https://github.com/fsnotify/fsnotify/blob/master/fsnotify.go for more information.

---

##### `watchPathConfig`<sup>Required</sup> <a name="watchPathConfig" id="metaflow-blueprints.FileEventSource.property.watchPathConfig"></a>

```typescript
public readonly watchPathConfig: WatchPathConfig;
```

- *Type:* <a href="#metaflow-blueprints.WatchPathConfig">WatchPathConfig</a>

WatchPathConfig contains configuration about the file path to watch.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="metaflow-blueprints.FileEventSource.property.filter"></a>

```typescript
public readonly filter: EventSourceFilter;
```

- *Type:* <a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a>

Filter.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="metaflow-blueprints.FileEventSource.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata holds the user defined metadata which will passed along the event payload.

---

##### `polling`<sup>Optional</sup> <a name="polling" id="metaflow-blueprints.FileEventSource.property.polling"></a>

```typescript
public readonly polling: boolean;
```

- *Type:* boolean

Use polling instead of inotify.

---

### GenericEventSource <a name="GenericEventSource" id="metaflow-blueprints.GenericEventSource"></a>

GenericEventSource refers to a generic event source.

It can be used to implement a custom
event source.

#### Initializer <a name="Initializer" id="metaflow-blueprints.GenericEventSource.Initializer"></a>

```typescript
import { GenericEventSource } from 'metaflow-blueprints'

const genericEventSource: GenericEventSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.GenericEventSource.property.config">config</a></code> | <code>string</code> | Config is the event source configuration. |
| <code><a href="#metaflow-blueprints.GenericEventSource.property.url">url</a></code> | <code>string</code> | URL of the gRPC server that implements the event source. |
| <code><a href="#metaflow-blueprints.GenericEventSource.property.authSecret">authSecret</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | AuthSecret holds a secret selector that contains a bearer token for authentication. |
| <code><a href="#metaflow-blueprints.GenericEventSource.property.filter">filter</a></code> | <code><a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a></code> | Filter. |
| <code><a href="#metaflow-blueprints.GenericEventSource.property.insecure">insecure</a></code> | <code>boolean</code> | Insecure determines the type of connection. |
| <code><a href="#metaflow-blueprints.GenericEventSource.property.jsonBody">jsonBody</a></code> | <code>boolean</code> | JSONBody specifies that all event body payload coming from this source will be JSON. |
| <code><a href="#metaflow-blueprints.GenericEventSource.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata holds the user defined metadata which will passed along the event payload. |

---

##### `config`<sup>Required</sup> <a name="config" id="metaflow-blueprints.GenericEventSource.property.config"></a>

```typescript
public readonly config: string;
```

- *Type:* string

Config is the event source configuration.

---

##### `url`<sup>Required</sup> <a name="url" id="metaflow-blueprints.GenericEventSource.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

URL of the gRPC server that implements the event source.

---

##### `authSecret`<sup>Optional</sup> <a name="authSecret" id="metaflow-blueprints.GenericEventSource.property.authSecret"></a>

```typescript
public readonly authSecret: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

AuthSecret holds a secret selector that contains a bearer token for authentication.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="metaflow-blueprints.GenericEventSource.property.filter"></a>

```typescript
public readonly filter: EventSourceFilter;
```

- *Type:* <a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a>

Filter.

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="metaflow-blueprints.GenericEventSource.property.insecure"></a>

```typescript
public readonly insecure: boolean;
```

- *Type:* boolean

Insecure determines the type of connection.

---

##### `jsonBody`<sup>Optional</sup> <a name="jsonBody" id="metaflow-blueprints.GenericEventSource.property.jsonBody"></a>

```typescript
public readonly jsonBody: boolean;
```

- *Type:* boolean

JSONBody specifies that all event body payload coming from this source will be JSON.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="metaflow-blueprints.GenericEventSource.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata holds the user defined metadata which will passed along the event payload.

---

### GerritEventSource <a name="GerritEventSource" id="metaflow-blueprints.GerritEventSource"></a>

GerritEventSource refers to event-source related to gerrit events.

#### Initializer <a name="Initializer" id="metaflow-blueprints.GerritEventSource.Initializer"></a>

```typescript
import { GerritEventSource } from 'metaflow-blueprints'

const gerritEventSource: GerritEventSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.GerritEventSource.property.events">events</a></code> | <code>string[]</code> | Events are gerrit event to listen to. |
| <code><a href="#metaflow-blueprints.GerritEventSource.property.gerritBaseURL">gerritBaseURL</a></code> | <code>string</code> | GerritBaseURL is the base URL for API requests to a custom endpoint. |
| <code><a href="#metaflow-blueprints.GerritEventSource.property.hookName">hookName</a></code> | <code>string</code> | HookName is the name of the webhook. |
| <code><a href="#metaflow-blueprints.GerritEventSource.property.auth">auth</a></code> | <code><a href="#metaflow-blueprints.BasicAuth">BasicAuth</a></code> | Auth hosts secret selectors for username and password. |
| <code><a href="#metaflow-blueprints.GerritEventSource.property.deleteHookOnFinish">deleteHookOnFinish</a></code> | <code>boolean</code> | DeleteHookOnFinish determines whether to delete the Gerrit hook for the project once the event source is stopped. |
| <code><a href="#metaflow-blueprints.GerritEventSource.property.filter">filter</a></code> | <code><a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a></code> | Filter. |
| <code><a href="#metaflow-blueprints.GerritEventSource.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata holds the user defined metadata which will passed along the event payload. |
| <code><a href="#metaflow-blueprints.GerritEventSource.property.projects">projects</a></code> | <code>string[]</code> | List of project namespace paths like "whynowy/test". |
| <code><a href="#metaflow-blueprints.GerritEventSource.property.sslVerify">sslVerify</a></code> | <code>boolean</code> | SslVerify to enable ssl verification. |
| <code><a href="#metaflow-blueprints.GerritEventSource.property.webhook">webhook</a></code> | <code><a href="#metaflow-blueprints.WebhookContext">WebhookContext</a></code> | Webhook holds configuration to run a http server. |

---

##### `events`<sup>Required</sup> <a name="events" id="metaflow-blueprints.GerritEventSource.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

Events are gerrit event to listen to.

Refer
https://gerrit-review.googlesource.com/Documentation/cmd-stream-events.html#events

---

##### `gerritBaseURL`<sup>Required</sup> <a name="gerritBaseURL" id="metaflow-blueprints.GerritEventSource.property.gerritBaseURL"></a>

```typescript
public readonly gerritBaseURL: string;
```

- *Type:* string

GerritBaseURL is the base URL for API requests to a custom endpoint.

---

##### `hookName`<sup>Required</sup> <a name="hookName" id="metaflow-blueprints.GerritEventSource.property.hookName"></a>

```typescript
public readonly hookName: string;
```

- *Type:* string

HookName is the name of the webhook.

---

##### `auth`<sup>Optional</sup> <a name="auth" id="metaflow-blueprints.GerritEventSource.property.auth"></a>

```typescript
public readonly auth: BasicAuth;
```

- *Type:* <a href="#metaflow-blueprints.BasicAuth">BasicAuth</a>

Auth hosts secret selectors for username and password.

---

##### `deleteHookOnFinish`<sup>Optional</sup> <a name="deleteHookOnFinish" id="metaflow-blueprints.GerritEventSource.property.deleteHookOnFinish"></a>

```typescript
public readonly deleteHookOnFinish: boolean;
```

- *Type:* boolean

DeleteHookOnFinish determines whether to delete the Gerrit hook for the project once the event source is stopped.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="metaflow-blueprints.GerritEventSource.property.filter"></a>

```typescript
public readonly filter: EventSourceFilter;
```

- *Type:* <a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a>

Filter.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="metaflow-blueprints.GerritEventSource.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata holds the user defined metadata which will passed along the event payload.

---

##### `projects`<sup>Optional</sup> <a name="projects" id="metaflow-blueprints.GerritEventSource.property.projects"></a>

```typescript
public readonly projects: string[];
```

- *Type:* string[]

List of project namespace paths like "whynowy/test".

---

##### `sslVerify`<sup>Optional</sup> <a name="sslVerify" id="metaflow-blueprints.GerritEventSource.property.sslVerify"></a>

```typescript
public readonly sslVerify: boolean;
```

- *Type:* boolean

SslVerify to enable ssl verification.

---

##### `webhook`<sup>Optional</sup> <a name="webhook" id="metaflow-blueprints.GerritEventSource.property.webhook"></a>

```typescript
public readonly webhook: WebhookContext;
```

- *Type:* <a href="#metaflow-blueprints.WebhookContext">WebhookContext</a>

Webhook holds configuration to run a http server.

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
| <code><a href="#metaflow-blueprints.GithubEventSource.property.webhookSecret">webhookSecret</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | WebhookSecret refers to K8s secret containing GitHub webhook secret https://developer.github.com/webhooks/securing/. |

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

https://developer.github.com/webhooks/creating/#active

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

WebhookSecret refers to K8s secret containing GitHub webhook secret https://developer.github.com/webhooks/securing/.

---

### GitlabEventSource <a name="GitlabEventSource" id="metaflow-blueprints.GitlabEventSource"></a>

GitlabEventSource refers to event-source related to Gitlab events.

#### Initializer <a name="Initializer" id="metaflow-blueprints.GitlabEventSource.Initializer"></a>

```typescript
import { GitlabEventSource } from 'metaflow-blueprints'

const gitlabEventSource: GitlabEventSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.GitlabEventSource.property.events">events</a></code> | <code>string[]</code> | Events are gitlab event to listen to. |
| <code><a href="#metaflow-blueprints.GitlabEventSource.property.gitlabBaseURL">gitlabBaseURL</a></code> | <code>string</code> | GitlabBaseURL is the base URL for API requests to a custom endpoint. |
| <code><a href="#metaflow-blueprints.GitlabEventSource.property.accessToken">accessToken</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | AccessToken references to k8 secret which holds the gitlab api access information. |
| <code><a href="#metaflow-blueprints.GitlabEventSource.property.deleteHookOnFinish">deleteHookOnFinish</a></code> | <code>boolean</code> | DeleteHookOnFinish determines whether to delete the GitLab hook for the project once the event source is stopped. |
| <code><a href="#metaflow-blueprints.GitlabEventSource.property.enableSSLVerification">enableSSLVerification</a></code> | <code>boolean</code> | EnableSSLVerification to enable ssl verification. |
| <code><a href="#metaflow-blueprints.GitlabEventSource.property.filter">filter</a></code> | <code><a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a></code> | Filter. |
| <code><a href="#metaflow-blueprints.GitlabEventSource.property.groups">groups</a></code> | <code>string[]</code> | List of group IDs or group name like "test". |
| <code><a href="#metaflow-blueprints.GitlabEventSource.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata holds the user defined metadata which will passed along the event payload. |
| <code><a href="#metaflow-blueprints.GitlabEventSource.property.projectID">projectID</a></code> | <code>string</code> | DeprecatedProjectID is the id of project for which integration needs to setup Deprecated: use Projects instead. |
| <code><a href="#metaflow-blueprints.GitlabEventSource.property.projects">projects</a></code> | <code>string[]</code> | List of project IDs or project namespace paths like "whynowy/test". |
| <code><a href="#metaflow-blueprints.GitlabEventSource.property.secretToken">secretToken</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | SecretToken references to k8 secret which holds the Secret Token used by webhook config. |
| <code><a href="#metaflow-blueprints.GitlabEventSource.property.webhook">webhook</a></code> | <code><a href="#metaflow-blueprints.WebhookContext">WebhookContext</a></code> | Webhook holds configuration to run a http server. |

---

##### `events`<sup>Required</sup> <a name="events" id="metaflow-blueprints.GitlabEventSource.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

Events are gitlab event to listen to.

Refer
https://github.com/xanzy/go-gitlab/blob/bf34eca5d13a9f4c3f501d8a97b8ac226d55e4d9/projects.go#L794.

---

##### `gitlabBaseURL`<sup>Required</sup> <a name="gitlabBaseURL" id="metaflow-blueprints.GitlabEventSource.property.gitlabBaseURL"></a>

```typescript
public readonly gitlabBaseURL: string;
```

- *Type:* string

GitlabBaseURL is the base URL for API requests to a custom endpoint.

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="metaflow-blueprints.GitlabEventSource.property.accessToken"></a>

```typescript
public readonly accessToken: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

AccessToken references to k8 secret which holds the gitlab api access information.

---

##### `deleteHookOnFinish`<sup>Optional</sup> <a name="deleteHookOnFinish" id="metaflow-blueprints.GitlabEventSource.property.deleteHookOnFinish"></a>

```typescript
public readonly deleteHookOnFinish: boolean;
```

- *Type:* boolean

DeleteHookOnFinish determines whether to delete the GitLab hook for the project once the event source is stopped.

---

##### `enableSSLVerification`<sup>Optional</sup> <a name="enableSSLVerification" id="metaflow-blueprints.GitlabEventSource.property.enableSSLVerification"></a>

```typescript
public readonly enableSSLVerification: boolean;
```

- *Type:* boolean

EnableSSLVerification to enable ssl verification.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="metaflow-blueprints.GitlabEventSource.property.filter"></a>

```typescript
public readonly filter: EventSourceFilter;
```

- *Type:* <a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a>

Filter.

---

##### `groups`<sup>Optional</sup> <a name="groups" id="metaflow-blueprints.GitlabEventSource.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

List of group IDs or group name like "test".

Group level hook available in Premium and
Ultimate Gitlab.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="metaflow-blueprints.GitlabEventSource.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata holds the user defined metadata which will passed along the event payload.

---

##### `projectID`<sup>Optional</sup> <a name="projectID" id="metaflow-blueprints.GitlabEventSource.property.projectID"></a>

```typescript
public readonly projectID: string;
```

- *Type:* string

DeprecatedProjectID is the id of project for which integration needs to setup Deprecated: use Projects instead.

Will be unsupported in v 1.7

---

##### `projects`<sup>Optional</sup> <a name="projects" id="metaflow-blueprints.GitlabEventSource.property.projects"></a>

```typescript
public readonly projects: string[];
```

- *Type:* string[]

List of project IDs or project namespace paths like "whynowy/test".

Projects and groups
cannot be empty at the same time.

---

##### `secretToken`<sup>Optional</sup> <a name="secretToken" id="metaflow-blueprints.GitlabEventSource.property.secretToken"></a>

```typescript
public readonly secretToken: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

SecretToken references to k8 secret which holds the Secret Token used by webhook config.

---

##### `webhook`<sup>Optional</sup> <a name="webhook" id="metaflow-blueprints.GitlabEventSource.property.webhook"></a>

```typescript
public readonly webhook: WebhookContext;
```

- *Type:* <a href="#metaflow-blueprints.WebhookContext">WebhookContext</a>

Webhook holds configuration to run a http server.

---

### HDFSEventSource <a name="HDFSEventSource" id="metaflow-blueprints.HDFSEventSource"></a>

HDFSEventSource refers to event-source for HDFS related events.

#### Initializer <a name="Initializer" id="metaflow-blueprints.HDFSEventSource.Initializer"></a>

```typescript
import { HDFSEventSource } from 'metaflow-blueprints'

const hDFSEventSource: HDFSEventSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.HDFSEventSource.property.addresses">addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#metaflow-blueprints.HDFSEventSource.property.directory">directory</a></code> | <code>string</code> | Directory to watch for events. |
| <code><a href="#metaflow-blueprints.HDFSEventSource.property.type">type</a></code> | <code>string</code> | Type of file operations to watch. |
| <code><a href="#metaflow-blueprints.HDFSEventSource.property.checkInterval">checkInterval</a></code> | <code>string</code> | CheckInterval is a string that describes an interval duration to check the directory state, e.g. 1s, 30m, 2h... (defaults to 1m). |
| <code><a href="#metaflow-blueprints.HDFSEventSource.property.filter">filter</a></code> | <code><a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a></code> | Filter. |
| <code><a href="#metaflow-blueprints.HDFSEventSource.property.hdfsUser">hdfsUser</a></code> | <code>string</code> | HDFSUser is the user to access HDFS file system. |
| <code><a href="#metaflow-blueprints.HDFSEventSource.property.krbCCacheSecret">krbCCacheSecret</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | KrbCCacheSecret is the secret selector for Kerberos ccache Either ccache or keytab can be set to use Kerberos. |
| <code><a href="#metaflow-blueprints.HDFSEventSource.property.krbConfigConfigMap">krbConfigConfigMap</a></code> | <code>metaflow-blueprints.k8s.ConfigMapKeySelector</code> | KrbConfig is the configmap selector for Kerberos config as string It must be set if either ccache or keytab is used. |
| <code><a href="#metaflow-blueprints.HDFSEventSource.property.krbKeytabSecret">krbKeytabSecret</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | KrbKeytabSecret is the secret selector for Kerberos keytab Either ccache or keytab can be set to use Kerberos. |
| <code><a href="#metaflow-blueprints.HDFSEventSource.property.krbRealm">krbRealm</a></code> | <code>string</code> | KrbRealm is the Kerberos realm used with Kerberos keytab It must be set if keytab is used. |
| <code><a href="#metaflow-blueprints.HDFSEventSource.property.krbServicePrincipalName">krbServicePrincipalName</a></code> | <code>string</code> | KrbServicePrincipalName is the principal name of Kerberos service It must be set if either ccache or keytab is used. |
| <code><a href="#metaflow-blueprints.HDFSEventSource.property.krbUsername">krbUsername</a></code> | <code>string</code> | KrbUsername is the Kerberos username used with Kerberos keytab It must be set if keytab is used. |
| <code><a href="#metaflow-blueprints.HDFSEventSource.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata holds the user defined metadata which will passed along the event payload. |
| <code><a href="#metaflow-blueprints.HDFSEventSource.property.path">path</a></code> | <code>string</code> | Path is relative path of object to watch with respect to the directory. |
| <code><a href="#metaflow-blueprints.HDFSEventSource.property.pathRegexp">pathRegexp</a></code> | <code>string</code> | PathRegexp is regexp of relative path of object to watch with respect to the directory. |

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="metaflow-blueprints.HDFSEventSource.property.addresses"></a>

```typescript
public readonly addresses: string[];
```

- *Type:* string[]

---

##### `directory`<sup>Required</sup> <a name="directory" id="metaflow-blueprints.HDFSEventSource.property.directory"></a>

```typescript
public readonly directory: string;
```

- *Type:* string

Directory to watch for events.

---

##### `type`<sup>Required</sup> <a name="type" id="metaflow-blueprints.HDFSEventSource.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of file operations to watch.

---

##### `checkInterval`<sup>Optional</sup> <a name="checkInterval" id="metaflow-blueprints.HDFSEventSource.property.checkInterval"></a>

```typescript
public readonly checkInterval: string;
```

- *Type:* string

CheckInterval is a string that describes an interval duration to check the directory state, e.g. 1s, 30m, 2h... (defaults to 1m).

---

##### `filter`<sup>Optional</sup> <a name="filter" id="metaflow-blueprints.HDFSEventSource.property.filter"></a>

```typescript
public readonly filter: EventSourceFilter;
```

- *Type:* <a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a>

Filter.

---

##### `hdfsUser`<sup>Optional</sup> <a name="hdfsUser" id="metaflow-blueprints.HDFSEventSource.property.hdfsUser"></a>

```typescript
public readonly hdfsUser: string;
```

- *Type:* string

HDFSUser is the user to access HDFS file system.

It is ignored if either ccache or keytab
is used.

---

##### `krbCCacheSecret`<sup>Optional</sup> <a name="krbCCacheSecret" id="metaflow-blueprints.HDFSEventSource.property.krbCCacheSecret"></a>

```typescript
public readonly krbCCacheSecret: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

KrbCCacheSecret is the secret selector for Kerberos ccache Either ccache or keytab can be set to use Kerberos.

---

##### `krbConfigConfigMap`<sup>Optional</sup> <a name="krbConfigConfigMap" id="metaflow-blueprints.HDFSEventSource.property.krbConfigConfigMap"></a>

```typescript
public readonly krbConfigConfigMap: ConfigMapKeySelector;
```

- *Type:* metaflow-blueprints.k8s.ConfigMapKeySelector

KrbConfig is the configmap selector for Kerberos config as string It must be set if either ccache or keytab is used.

---

##### `krbKeytabSecret`<sup>Optional</sup> <a name="krbKeytabSecret" id="metaflow-blueprints.HDFSEventSource.property.krbKeytabSecret"></a>

```typescript
public readonly krbKeytabSecret: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

KrbKeytabSecret is the secret selector for Kerberos keytab Either ccache or keytab can be set to use Kerberos.

---

##### `krbRealm`<sup>Optional</sup> <a name="krbRealm" id="metaflow-blueprints.HDFSEventSource.property.krbRealm"></a>

```typescript
public readonly krbRealm: string;
```

- *Type:* string

KrbRealm is the Kerberos realm used with Kerberos keytab It must be set if keytab is used.

---

##### `krbServicePrincipalName`<sup>Optional</sup> <a name="krbServicePrincipalName" id="metaflow-blueprints.HDFSEventSource.property.krbServicePrincipalName"></a>

```typescript
public readonly krbServicePrincipalName: string;
```

- *Type:* string

KrbServicePrincipalName is the principal name of Kerberos service It must be set if either ccache or keytab is used.

---

##### `krbUsername`<sup>Optional</sup> <a name="krbUsername" id="metaflow-blueprints.HDFSEventSource.property.krbUsername"></a>

```typescript
public readonly krbUsername: string;
```

- *Type:* string

KrbUsername is the Kerberos username used with Kerberos keytab It must be set if keytab is used.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="metaflow-blueprints.HDFSEventSource.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata holds the user defined metadata which will passed along the event payload.

---

##### `path`<sup>Optional</sup> <a name="path" id="metaflow-blueprints.HDFSEventSource.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path is relative path of object to watch with respect to the directory.

---

##### `pathRegexp`<sup>Optional</sup> <a name="pathRegexp" id="metaflow-blueprints.HDFSEventSource.property.pathRegexp"></a>

```typescript
public readonly pathRegexp: string;
```

- *Type:* string

PathRegexp is regexp of relative path of object to watch with respect to the directory.

---

### JetstreamMetadata <a name="JetstreamMetadata" id="metaflow-blueprints.JetstreamMetadata"></a>

Metadata sets the pods's metadata, i.e. annotations and labels.

Metadata holds the annotations and labels of an event source pod

Metadata sets the pods's metadata, i.e. annotations and labels default={annotations: {},
labels: {}}

#### Initializer <a name="Initializer" id="metaflow-blueprints.JetstreamMetadata.Initializer"></a>

```typescript
import { JetstreamMetadata } from 'metaflow-blueprints'

const jetstreamMetadata: JetstreamMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.JetstreamMetadata.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#metaflow-blueprints.JetstreamMetadata.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="metaflow-blueprints.JetstreamMetadata.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="metaflow-blueprints.JetstreamMetadata.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

### KafkaConsumerGroup <a name="KafkaConsumerGroup" id="metaflow-blueprints.KafkaConsumerGroup"></a>

Consumer group for kafka client.

#### Initializer <a name="Initializer" id="metaflow-blueprints.KafkaConsumerGroup.Initializer"></a>

```typescript
import { KafkaConsumerGroup } from 'metaflow-blueprints'

const kafkaConsumerGroup: KafkaConsumerGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.KafkaConsumerGroup.property.groupName">groupName</a></code> | <code>string</code> | The name for the consumer group to use. |
| <code><a href="#metaflow-blueprints.KafkaConsumerGroup.property.oldest">oldest</a></code> | <code>boolean</code> | When starting up a new group do we want to start from the oldest event (true) or the newest event (false), defaults to false. |
| <code><a href="#metaflow-blueprints.KafkaConsumerGroup.property.rebalanceStrategy">rebalanceStrategy</a></code> | <code>string</code> | Rebalance strategy can be one of: sticky, roundrobin, range. |

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="metaflow-blueprints.KafkaConsumerGroup.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

The name for the consumer group to use.

---

##### `oldest`<sup>Optional</sup> <a name="oldest" id="metaflow-blueprints.KafkaConsumerGroup.property.oldest"></a>

```typescript
public readonly oldest: boolean;
```

- *Type:* boolean

When starting up a new group do we want to start from the oldest event (true) or the newest event (false), defaults to false.

---

##### `rebalanceStrategy`<sup>Optional</sup> <a name="rebalanceStrategy" id="metaflow-blueprints.KafkaConsumerGroup.property.rebalanceStrategy"></a>

```typescript
public readonly rebalanceStrategy: string;
```

- *Type:* string

Rebalance strategy can be one of: sticky, roundrobin, range.

Range is the default.

---

### KafkaEventSource <a name="KafkaEventSource" id="metaflow-blueprints.KafkaEventSource"></a>

KafkaEventSource refers to event-source for Kafka related events.

#### Initializer <a name="Initializer" id="metaflow-blueprints.KafkaEventSource.Initializer"></a>

```typescript
import { KafkaEventSource } from 'metaflow-blueprints'

const kafkaEventSource: KafkaEventSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.KafkaEventSource.property.topic">topic</a></code> | <code>string</code> | Topic name. |
| <code><a href="#metaflow-blueprints.KafkaEventSource.property.url">url</a></code> | <code>string</code> | URL to kafka cluster, multiple URLs separated by comma. |
| <code><a href="#metaflow-blueprints.KafkaEventSource.property.config">config</a></code> | <code>string</code> | Yaml format Sarama config for Kafka connection. It follows the struct of sarama.Config. See https://github.com/IBM/sarama/blob/main/config.go e.g. |
| <code><a href="#metaflow-blueprints.KafkaEventSource.property.connectionBackoff">connectionBackoff</a></code> | <code><a href="#metaflow-blueprints.Backoff">Backoff</a></code> | Backoff holds parameters applied to connection. |
| <code><a href="#metaflow-blueprints.KafkaEventSource.property.consumerGroup">consumerGroup</a></code> | <code><a href="#metaflow-blueprints.KafkaConsumerGroup">KafkaConsumerGroup</a></code> | Consumer group for kafka client. |
| <code><a href="#metaflow-blueprints.KafkaEventSource.property.filter">filter</a></code> | <code><a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a></code> | Filter. |
| <code><a href="#metaflow-blueprints.KafkaEventSource.property.jsonBody">jsonBody</a></code> | <code>boolean</code> | JSONBody specifies that all event body payload coming from this source will be JSON. |
| <code><a href="#metaflow-blueprints.KafkaEventSource.property.limitEventsPerSecond">limitEventsPerSecond</a></code> | <code>number</code> | Sets a limit on how many events get read from kafka per second. |
| <code><a href="#metaflow-blueprints.KafkaEventSource.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata holds the user defined metadata which will passed along the event payload. |
| <code><a href="#metaflow-blueprints.KafkaEventSource.property.partition">partition</a></code> | <code>string</code> | Partition name. |
| <code><a href="#metaflow-blueprints.KafkaEventSource.property.sasl">sasl</a></code> | <code><a href="#metaflow-blueprints.SASLConfig">SASLConfig</a></code> | SASL configuration for the kafka client. |
| <code><a href="#metaflow-blueprints.KafkaEventSource.property.tls">tls</a></code> | <code><a href="#metaflow-blueprints.TLSConfig">TLSConfig</a></code> | TLS configuration for the kafka client. |
| <code><a href="#metaflow-blueprints.KafkaEventSource.property.version">version</a></code> | <code>string</code> | Specify what kafka version is being connected to enables certain features in sarama, defaults to 1.0.0. |

---

##### `topic`<sup>Required</sup> <a name="topic" id="metaflow-blueprints.KafkaEventSource.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

Topic name.

---

##### `url`<sup>Required</sup> <a name="url" id="metaflow-blueprints.KafkaEventSource.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

URL to kafka cluster, multiple URLs separated by comma.

---

##### `config`<sup>Optional</sup> <a name="config" id="metaflow-blueprints.KafkaEventSource.property.config"></a>

```typescript
public readonly config: string;
```

- *Type:* string

Yaml format Sarama config for Kafka connection. It follows the struct of sarama.Config. See https://github.com/IBM/sarama/blob/main/config.go e.g.

consumer:
fetch:
min: 1
net:
MaxOpenRequests: 5

---

##### `connectionBackoff`<sup>Optional</sup> <a name="connectionBackoff" id="metaflow-blueprints.KafkaEventSource.property.connectionBackoff"></a>

```typescript
public readonly connectionBackoff: Backoff;
```

- *Type:* <a href="#metaflow-blueprints.Backoff">Backoff</a>

Backoff holds parameters applied to connection.

---

##### `consumerGroup`<sup>Optional</sup> <a name="consumerGroup" id="metaflow-blueprints.KafkaEventSource.property.consumerGroup"></a>

```typescript
public readonly consumerGroup: KafkaConsumerGroup;
```

- *Type:* <a href="#metaflow-blueprints.KafkaConsumerGroup">KafkaConsumerGroup</a>

Consumer group for kafka client.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="metaflow-blueprints.KafkaEventSource.property.filter"></a>

```typescript
public readonly filter: EventSourceFilter;
```

- *Type:* <a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a>

Filter.

---

##### `jsonBody`<sup>Optional</sup> <a name="jsonBody" id="metaflow-blueprints.KafkaEventSource.property.jsonBody"></a>

```typescript
public readonly jsonBody: boolean;
```

- *Type:* boolean

JSONBody specifies that all event body payload coming from this source will be JSON.

---

##### `limitEventsPerSecond`<sup>Optional</sup> <a name="limitEventsPerSecond" id="metaflow-blueprints.KafkaEventSource.property.limitEventsPerSecond"></a>

```typescript
public readonly limitEventsPerSecond: number;
```

- *Type:* number

Sets a limit on how many events get read from kafka per second.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="metaflow-blueprints.KafkaEventSource.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata holds the user defined metadata which will passed along the event payload.

---

##### `partition`<sup>Optional</sup> <a name="partition" id="metaflow-blueprints.KafkaEventSource.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

Partition name.

---

##### `sasl`<sup>Optional</sup> <a name="sasl" id="metaflow-blueprints.KafkaEventSource.property.sasl"></a>

```typescript
public readonly sasl: SASLConfig;
```

- *Type:* <a href="#metaflow-blueprints.SASLConfig">SASLConfig</a>

SASL configuration for the kafka client.

---

##### `tls`<sup>Optional</sup> <a name="tls" id="metaflow-blueprints.KafkaEventSource.property.tls"></a>

```typescript
public readonly tls: TLSConfig;
```

- *Type:* <a href="#metaflow-blueprints.TLSConfig">TLSConfig</a>

TLS configuration for the kafka client.

---

##### `version`<sup>Optional</sup> <a name="version" id="metaflow-blueprints.KafkaEventSource.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Specify what kafka version is being connected to enables certain features in sarama, defaults to 1.0.0.

---

### MQTTEventSource <a name="MQTTEventSource" id="metaflow-blueprints.MQTTEventSource"></a>

MQTTEventSource refers to event-source for MQTT related events.

#### Initializer <a name="Initializer" id="metaflow-blueprints.MQTTEventSource.Initializer"></a>

```typescript
import { MQTTEventSource } from 'metaflow-blueprints'

const mQTTEventSource: MQTTEventSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.MQTTEventSource.property.clientId">clientId</a></code> | <code>string</code> | ClientID is the id of the client. |
| <code><a href="#metaflow-blueprints.MQTTEventSource.property.topic">topic</a></code> | <code>string</code> | Topic name. |
| <code><a href="#metaflow-blueprints.MQTTEventSource.property.url">url</a></code> | <code>string</code> | URL to connect to broker. |
| <code><a href="#metaflow-blueprints.MQTTEventSource.property.auth">auth</a></code> | <code><a href="#metaflow-blueprints.BasicAuth">BasicAuth</a></code> | Auth hosts secret selectors for username and password. |
| <code><a href="#metaflow-blueprints.MQTTEventSource.property.connectionBackoff">connectionBackoff</a></code> | <code><a href="#metaflow-blueprints.Backoff">Backoff</a></code> | ConnectionBackoff holds backoff applied to connection. |
| <code><a href="#metaflow-blueprints.MQTTEventSource.property.filter">filter</a></code> | <code><a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a></code> | Filter. |
| <code><a href="#metaflow-blueprints.MQTTEventSource.property.jsonBody">jsonBody</a></code> | <code>boolean</code> | JSONBody specifies that all event body payload coming from this source will be JSON. |
| <code><a href="#metaflow-blueprints.MQTTEventSource.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata holds the user defined metadata which will passed along the event payload. |
| <code><a href="#metaflow-blueprints.MQTTEventSource.property.tls">tls</a></code> | <code><a href="#metaflow-blueprints.TLSConfig">TLSConfig</a></code> | TLS configuration for the mqtt client. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="metaflow-blueprints.MQTTEventSource.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

ClientID is the id of the client.

---

##### `topic`<sup>Required</sup> <a name="topic" id="metaflow-blueprints.MQTTEventSource.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

Topic name.

---

##### `url`<sup>Required</sup> <a name="url" id="metaflow-blueprints.MQTTEventSource.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

URL to connect to broker.

---

##### `auth`<sup>Optional</sup> <a name="auth" id="metaflow-blueprints.MQTTEventSource.property.auth"></a>

```typescript
public readonly auth: BasicAuth;
```

- *Type:* <a href="#metaflow-blueprints.BasicAuth">BasicAuth</a>

Auth hosts secret selectors for username and password.

---

##### `connectionBackoff`<sup>Optional</sup> <a name="connectionBackoff" id="metaflow-blueprints.MQTTEventSource.property.connectionBackoff"></a>

```typescript
public readonly connectionBackoff: Backoff;
```

- *Type:* <a href="#metaflow-blueprints.Backoff">Backoff</a>

ConnectionBackoff holds backoff applied to connection.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="metaflow-blueprints.MQTTEventSource.property.filter"></a>

```typescript
public readonly filter: EventSourceFilter;
```

- *Type:* <a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a>

Filter.

---

##### `jsonBody`<sup>Optional</sup> <a name="jsonBody" id="metaflow-blueprints.MQTTEventSource.property.jsonBody"></a>

```typescript
public readonly jsonBody: boolean;
```

- *Type:* boolean

JSONBody specifies that all event body payload coming from this source will be JSON.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="metaflow-blueprints.MQTTEventSource.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata holds the user defined metadata which will passed along the event payload.

---

##### `tls`<sup>Optional</sup> <a name="tls" id="metaflow-blueprints.MQTTEventSource.property.tls"></a>

```typescript
public readonly tls: TLSConfig;
```

- *Type:* <a href="#metaflow-blueprints.TLSConfig">TLSConfig</a>

TLS configuration for the mqtt client.

---

### NATSAuth <a name="NATSAuth" id="metaflow-blueprints.NATSAuth"></a>

Auth information.

NATSAuth refers to the auth info for NATS EventSource

#### Initializer <a name="Initializer" id="metaflow-blueprints.NATSAuth.Initializer"></a>

```typescript
import { NATSAuth } from 'metaflow-blueprints'

const nATSAuth: NATSAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.NATSAuth.property.basic">basic</a></code> | <code><a href="#metaflow-blueprints.BasicAuth">BasicAuth</a></code> | Baisc auth with username and password. |
| <code><a href="#metaflow-blueprints.NATSAuth.property.credential">credential</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | credential used to connect. |
| <code><a href="#metaflow-blueprints.NATSAuth.property.nkey">nkey</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | NKey used to connect. |
| <code><a href="#metaflow-blueprints.NATSAuth.property.token">token</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | Token used to connect. |

---

##### `basic`<sup>Optional</sup> <a name="basic" id="metaflow-blueprints.NATSAuth.property.basic"></a>

```typescript
public readonly basic: BasicAuth;
```

- *Type:* <a href="#metaflow-blueprints.BasicAuth">BasicAuth</a>

Baisc auth with username and password.

---

##### `credential`<sup>Optional</sup> <a name="credential" id="metaflow-blueprints.NATSAuth.property.credential"></a>

```typescript
public readonly credential: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

credential used to connect.

---

##### `nkey`<sup>Optional</sup> <a name="nkey" id="metaflow-blueprints.NATSAuth.property.nkey"></a>

```typescript
public readonly nkey: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

NKey used to connect.

---

##### `token`<sup>Optional</sup> <a name="token" id="metaflow-blueprints.NATSAuth.property.token"></a>

```typescript
public readonly token: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

Token used to connect.

---

### NATSEventsSource <a name="NATSEventsSource" id="metaflow-blueprints.NATSEventsSource"></a>

NATSEventsSource refers to event-source for NATS related events.

#### Initializer <a name="Initializer" id="metaflow-blueprints.NATSEventsSource.Initializer"></a>

```typescript
import { NATSEventsSource } from 'metaflow-blueprints'

const nATSEventsSource: NATSEventsSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.NATSEventsSource.property.subject">subject</a></code> | <code>string</code> | Subject holds the name of the subject onto which messages are published. |
| <code><a href="#metaflow-blueprints.NATSEventsSource.property.url">url</a></code> | <code>string</code> | URL to connect to NATS cluster. |
| <code><a href="#metaflow-blueprints.NATSEventsSource.property.auth">auth</a></code> | <code><a href="#metaflow-blueprints.NATSAuth">NATSAuth</a></code> | Auth information. |
| <code><a href="#metaflow-blueprints.NATSEventsSource.property.connectionBackoff">connectionBackoff</a></code> | <code><a href="#metaflow-blueprints.Backoff">Backoff</a></code> | ConnectionBackoff holds backoff applied to connection. |
| <code><a href="#metaflow-blueprints.NATSEventsSource.property.filter">filter</a></code> | <code><a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a></code> | Filter. |
| <code><a href="#metaflow-blueprints.NATSEventsSource.property.jsonBody">jsonBody</a></code> | <code>boolean</code> | JSONBody specifies that all event body payload coming from this source will be JSON. |
| <code><a href="#metaflow-blueprints.NATSEventsSource.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata holds the user defined metadata which will passed along the event payload. |
| <code><a href="#metaflow-blueprints.NATSEventsSource.property.queue">queue</a></code> | <code>string</code> | Queue is the name of the queue group to subscribe as if specified. |
| <code><a href="#metaflow-blueprints.NATSEventsSource.property.tls">tls</a></code> | <code><a href="#metaflow-blueprints.TLSConfig">TLSConfig</a></code> | TLS configuration for the nats client. |

---

##### `subject`<sup>Required</sup> <a name="subject" id="metaflow-blueprints.NATSEventsSource.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

Subject holds the name of the subject onto which messages are published.

---

##### `url`<sup>Required</sup> <a name="url" id="metaflow-blueprints.NATSEventsSource.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

URL to connect to NATS cluster.

---

##### `auth`<sup>Optional</sup> <a name="auth" id="metaflow-blueprints.NATSEventsSource.property.auth"></a>

```typescript
public readonly auth: NATSAuth;
```

- *Type:* <a href="#metaflow-blueprints.NATSAuth">NATSAuth</a>

Auth information.

---

##### `connectionBackoff`<sup>Optional</sup> <a name="connectionBackoff" id="metaflow-blueprints.NATSEventsSource.property.connectionBackoff"></a>

```typescript
public readonly connectionBackoff: Backoff;
```

- *Type:* <a href="#metaflow-blueprints.Backoff">Backoff</a>

ConnectionBackoff holds backoff applied to connection.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="metaflow-blueprints.NATSEventsSource.property.filter"></a>

```typescript
public readonly filter: EventSourceFilter;
```

- *Type:* <a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a>

Filter.

---

##### `jsonBody`<sup>Optional</sup> <a name="jsonBody" id="metaflow-blueprints.NATSEventsSource.property.jsonBody"></a>

```typescript
public readonly jsonBody: boolean;
```

- *Type:* boolean

JSONBody specifies that all event body payload coming from this source will be JSON.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="metaflow-blueprints.NATSEventsSource.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata holds the user defined metadata which will passed along the event payload.

---

##### `queue`<sup>Optional</sup> <a name="queue" id="metaflow-blueprints.NATSEventsSource.property.queue"></a>

```typescript
public readonly queue: string;
```

- *Type:* string

Queue is the name of the queue group to subscribe as if specified.

Uses QueueSubscribe logic to subscribe as queue group.
If the queue is empty, uses default Subscribe logic.

---

##### `tls`<sup>Optional</sup> <a name="tls" id="metaflow-blueprints.NATSEventsSource.property.tls"></a>

```typescript
public readonly tls: TLSConfig;
```

- *Type:* <a href="#metaflow-blueprints.TLSConfig">TLSConfig</a>

TLS configuration for the nats client.

---

### NSQEventSource <a name="NSQEventSource" id="metaflow-blueprints.NSQEventSource"></a>

NSQEventSource describes the event source for NSQ PubSub More info at https://godoc.org/github.com/nsqio/go-nsq.

#### Initializer <a name="Initializer" id="metaflow-blueprints.NSQEventSource.Initializer"></a>

```typescript
import { NSQEventSource } from 'metaflow-blueprints'

const nSQEventSource: NSQEventSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.NSQEventSource.property.channel">channel</a></code> | <code>string</code> | Channel used for subscription. |
| <code><a href="#metaflow-blueprints.NSQEventSource.property.hostAddress">hostAddress</a></code> | <code>string</code> | HostAddress is the address of the host for NSQ lookup. |
| <code><a href="#metaflow-blueprints.NSQEventSource.property.topic">topic</a></code> | <code>string</code> | Topic to subscribe to. |
| <code><a href="#metaflow-blueprints.NSQEventSource.property.connectionBackoff">connectionBackoff</a></code> | <code><a href="#metaflow-blueprints.Backoff">Backoff</a></code> | Backoff holds parameters applied to connection. |
| <code><a href="#metaflow-blueprints.NSQEventSource.property.filter">filter</a></code> | <code><a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a></code> | Filter. |
| <code><a href="#metaflow-blueprints.NSQEventSource.property.jsonBody">jsonBody</a></code> | <code>boolean</code> | JSONBody specifies that all event body payload coming from this source will be JSON. |
| <code><a href="#metaflow-blueprints.NSQEventSource.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata holds the user defined metadata which will passed along the event payload. |
| <code><a href="#metaflow-blueprints.NSQEventSource.property.tls">tls</a></code> | <code><a href="#metaflow-blueprints.TLSConfig">TLSConfig</a></code> | TLS configuration for the nsq client. |

---

##### `channel`<sup>Required</sup> <a name="channel" id="metaflow-blueprints.NSQEventSource.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

Channel used for subscription.

---

##### `hostAddress`<sup>Required</sup> <a name="hostAddress" id="metaflow-blueprints.NSQEventSource.property.hostAddress"></a>

```typescript
public readonly hostAddress: string;
```

- *Type:* string

HostAddress is the address of the host for NSQ lookup.

---

##### `topic`<sup>Required</sup> <a name="topic" id="metaflow-blueprints.NSQEventSource.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

Topic to subscribe to.

---

##### `connectionBackoff`<sup>Optional</sup> <a name="connectionBackoff" id="metaflow-blueprints.NSQEventSource.property.connectionBackoff"></a>

```typescript
public readonly connectionBackoff: Backoff;
```

- *Type:* <a href="#metaflow-blueprints.Backoff">Backoff</a>

Backoff holds parameters applied to connection.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="metaflow-blueprints.NSQEventSource.property.filter"></a>

```typescript
public readonly filter: EventSourceFilter;
```

- *Type:* <a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a>

Filter.

---

##### `jsonBody`<sup>Optional</sup> <a name="jsonBody" id="metaflow-blueprints.NSQEventSource.property.jsonBody"></a>

```typescript
public readonly jsonBody: boolean;
```

- *Type:* boolean

JSONBody specifies that all event body payload coming from this source will be JSON.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="metaflow-blueprints.NSQEventSource.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata holds the user defined metadata which will passed along the event payload.

---

##### `tls`<sup>Optional</sup> <a name="tls" id="metaflow-blueprints.NSQEventSource.property.tls"></a>

```typescript
public readonly tls: TLSConfig;
```

- *Type:* <a href="#metaflow-blueprints.TLSConfig">TLSConfig</a>

TLS configuration for the nsq client.

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

### PubSubEventSource <a name="PubSubEventSource" id="metaflow-blueprints.PubSubEventSource"></a>

PubSubEventSource refers to event-source for GCP PubSub related events.

#### Initializer <a name="Initializer" id="metaflow-blueprints.PubSubEventSource.Initializer"></a>

```typescript
import { PubSubEventSource } from 'metaflow-blueprints'

const pubSubEventSource: PubSubEventSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.PubSubEventSource.property.credentialSecret">credentialSecret</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | CredentialSecret references to the secret that contains JSON credentials to access GCP. |
| <code><a href="#metaflow-blueprints.PubSubEventSource.property.deleteSubscriptionOnFinish">deleteSubscriptionOnFinish</a></code> | <code>boolean</code> | DeleteSubscriptionOnFinish determines whether to delete the GCP PubSub subscription once the event source is stopped. |
| <code><a href="#metaflow-blueprints.PubSubEventSource.property.filter">filter</a></code> | <code><a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a></code> | Filter. |
| <code><a href="#metaflow-blueprints.PubSubEventSource.property.jsonBody">jsonBody</a></code> | <code>boolean</code> | JSONBody specifies that all event body payload coming from this source will be JSON. |
| <code><a href="#metaflow-blueprints.PubSubEventSource.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata holds the user defined metadata which will passed along the event payload. |
| <code><a href="#metaflow-blueprints.PubSubEventSource.property.projectID">projectID</a></code> | <code>string</code> | ProjectID is GCP project ID for the subscription. |
| <code><a href="#metaflow-blueprints.PubSubEventSource.property.subscriptionID">subscriptionID</a></code> | <code>string</code> | SubscriptionID is ID of subscription. |
| <code><a href="#metaflow-blueprints.PubSubEventSource.property.topic">topic</a></code> | <code>string</code> | Topic to which the subscription should belongs. |
| <code><a href="#metaflow-blueprints.PubSubEventSource.property.topicProjectID">topicProjectID</a></code> | <code>string</code> | TopicProjectID is GCP project ID for the topic. |

---

##### `credentialSecret`<sup>Optional</sup> <a name="credentialSecret" id="metaflow-blueprints.PubSubEventSource.property.credentialSecret"></a>

```typescript
public readonly credentialSecret: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

CredentialSecret references to the secret that contains JSON credentials to access GCP.

If it is missing, it implicitly uses Workload Identity to access.
https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity

---

##### `deleteSubscriptionOnFinish`<sup>Optional</sup> <a name="deleteSubscriptionOnFinish" id="metaflow-blueprints.PubSubEventSource.property.deleteSubscriptionOnFinish"></a>

```typescript
public readonly deleteSubscriptionOnFinish: boolean;
```

- *Type:* boolean

DeleteSubscriptionOnFinish determines whether to delete the GCP PubSub subscription once the event source is stopped.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="metaflow-blueprints.PubSubEventSource.property.filter"></a>

```typescript
public readonly filter: EventSourceFilter;
```

- *Type:* <a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a>

Filter.

---

##### `jsonBody`<sup>Optional</sup> <a name="jsonBody" id="metaflow-blueprints.PubSubEventSource.property.jsonBody"></a>

```typescript
public readonly jsonBody: boolean;
```

- *Type:* boolean

JSONBody specifies that all event body payload coming from this source will be JSON.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="metaflow-blueprints.PubSubEventSource.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata holds the user defined metadata which will passed along the event payload.

---

##### `projectID`<sup>Optional</sup> <a name="projectID" id="metaflow-blueprints.PubSubEventSource.property.projectID"></a>

```typescript
public readonly projectID: string;
```

- *Type:* string

ProjectID is GCP project ID for the subscription.

Required if you run Argo Events outside
of GKE/GCE. (otherwise, the default value is its project)

---

##### `subscriptionID`<sup>Optional</sup> <a name="subscriptionID" id="metaflow-blueprints.PubSubEventSource.property.subscriptionID"></a>

```typescript
public readonly subscriptionID: string;
```

- *Type:* string

SubscriptionID is ID of subscription.

Required if you use existing subscription. The
default value will be auto generated hash based on this eventsource setting, so the
subscription might be recreated every time you update the setting, which has a
possibility of event loss.

---

##### `topic`<sup>Optional</sup> <a name="topic" id="metaflow-blueprints.PubSubEventSource.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

Topic to which the subscription should belongs.

Required if you want the eventsource to
create a new subscription. If you specify this field along with an existing subscription,
it will be verified whether it actually belongs to the specified topic.

---

##### `topicProjectID`<sup>Optional</sup> <a name="topicProjectID" id="metaflow-blueprints.PubSubEventSource.property.topicProjectID"></a>

```typescript
public readonly topicProjectID: string;
```

- *Type:* string

TopicProjectID is GCP project ID for the topic.

By default, it is same as ProjectID.

---

### PulsarEventSource <a name="PulsarEventSource" id="metaflow-blueprints.PulsarEventSource"></a>

PulsarEventSource describes the event source for Apache Pulsar.

#### Initializer <a name="Initializer" id="metaflow-blueprints.PulsarEventSource.Initializer"></a>

```typescript
import { PulsarEventSource } from 'metaflow-blueprints'

const pulsarEventSource: PulsarEventSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.PulsarEventSource.property.topics">topics</a></code> | <code>string[]</code> | Name of the topics to subscribe to. |
| <code><a href="#metaflow-blueprints.PulsarEventSource.property.url">url</a></code> | <code>string</code> | Configure the service URL for the Pulsar service. |
| <code><a href="#metaflow-blueprints.PulsarEventSource.property.authAthenzParams">authAthenzParams</a></code> | <code>{[ key: string ]: string}</code> | Authentication athenz parameters for the pulsar client. |
| <code><a href="#metaflow-blueprints.PulsarEventSource.property.authAthenzSecret">authAthenzSecret</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | Authentication athenz privateKey secret for the pulsar client. |
| <code><a href="#metaflow-blueprints.PulsarEventSource.property.authTokenSecret">authTokenSecret</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | Authentication token for the pulsar client. |
| <code><a href="#metaflow-blueprints.PulsarEventSource.property.connectionBackoff">connectionBackoff</a></code> | <code><a href="#metaflow-blueprints.Backoff">Backoff</a></code> | Backoff holds parameters applied to connection. |
| <code><a href="#metaflow-blueprints.PulsarEventSource.property.filter">filter</a></code> | <code><a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a></code> | Filter. |
| <code><a href="#metaflow-blueprints.PulsarEventSource.property.jsonBody">jsonBody</a></code> | <code>boolean</code> | JSONBody specifies that all event body payload coming from this source will be JSON. |
| <code><a href="#metaflow-blueprints.PulsarEventSource.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata holds the user defined metadata which will passed along the event payload. |
| <code><a href="#metaflow-blueprints.PulsarEventSource.property.tls">tls</a></code> | <code><a href="#metaflow-blueprints.TLSConfig">TLSConfig</a></code> | TLS configuration for the pulsar client. |
| <code><a href="#metaflow-blueprints.PulsarEventSource.property.tlsAllowInsecureConnection">tlsAllowInsecureConnection</a></code> | <code>boolean</code> | Whether the Pulsar client accept untrusted TLS certificate from broker. |
| <code><a href="#metaflow-blueprints.PulsarEventSource.property.tlsTrustCertsSecret">tlsTrustCertsSecret</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | Trusted TLS certificate secret. |
| <code><a href="#metaflow-blueprints.PulsarEventSource.property.tlsValidateHostname">tlsValidateHostname</a></code> | <code>boolean</code> | Whether the Pulsar client verify the validity of the host name from broker. |
| <code><a href="#metaflow-blueprints.PulsarEventSource.property.type">type</a></code> | <code>string</code> | Type of the subscription. |

---

##### `topics`<sup>Required</sup> <a name="topics" id="metaflow-blueprints.PulsarEventSource.property.topics"></a>

```typescript
public readonly topics: string[];
```

- *Type:* string[]

Name of the topics to subscribe to.

---

##### `url`<sup>Required</sup> <a name="url" id="metaflow-blueprints.PulsarEventSource.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Configure the service URL for the Pulsar service.

---

##### `authAthenzParams`<sup>Optional</sup> <a name="authAthenzParams" id="metaflow-blueprints.PulsarEventSource.property.authAthenzParams"></a>

```typescript
public readonly authAthenzParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Authentication athenz parameters for the pulsar client.

Refer
https://github.com/apache/pulsar-client-go/blob/master/pulsar/auth/athenz.go Either token
or athenz can be set to use auth.

---

##### `authAthenzSecret`<sup>Optional</sup> <a name="authAthenzSecret" id="metaflow-blueprints.PulsarEventSource.property.authAthenzSecret"></a>

```typescript
public readonly authAthenzSecret: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

Authentication athenz privateKey secret for the pulsar client.

AuthAthenzSecret must be
set if AuthAthenzParams is used.

---

##### `authTokenSecret`<sup>Optional</sup> <a name="authTokenSecret" id="metaflow-blueprints.PulsarEventSource.property.authTokenSecret"></a>

```typescript
public readonly authTokenSecret: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

Authentication token for the pulsar client.

Either token or athenz can be set to use auth.

---

##### `connectionBackoff`<sup>Optional</sup> <a name="connectionBackoff" id="metaflow-blueprints.PulsarEventSource.property.connectionBackoff"></a>

```typescript
public readonly connectionBackoff: Backoff;
```

- *Type:* <a href="#metaflow-blueprints.Backoff">Backoff</a>

Backoff holds parameters applied to connection.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="metaflow-blueprints.PulsarEventSource.property.filter"></a>

```typescript
public readonly filter: EventSourceFilter;
```

- *Type:* <a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a>

Filter.

---

##### `jsonBody`<sup>Optional</sup> <a name="jsonBody" id="metaflow-blueprints.PulsarEventSource.property.jsonBody"></a>

```typescript
public readonly jsonBody: boolean;
```

- *Type:* boolean

JSONBody specifies that all event body payload coming from this source will be JSON.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="metaflow-blueprints.PulsarEventSource.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata holds the user defined metadata which will passed along the event payload.

---

##### `tls`<sup>Optional</sup> <a name="tls" id="metaflow-blueprints.PulsarEventSource.property.tls"></a>

```typescript
public readonly tls: TLSConfig;
```

- *Type:* <a href="#metaflow-blueprints.TLSConfig">TLSConfig</a>

TLS configuration for the pulsar client.

---

##### `tlsAllowInsecureConnection`<sup>Optional</sup> <a name="tlsAllowInsecureConnection" id="metaflow-blueprints.PulsarEventSource.property.tlsAllowInsecureConnection"></a>

```typescript
public readonly tlsAllowInsecureConnection: boolean;
```

- *Type:* boolean

Whether the Pulsar client accept untrusted TLS certificate from broker.

---

##### `tlsTrustCertsSecret`<sup>Optional</sup> <a name="tlsTrustCertsSecret" id="metaflow-blueprints.PulsarEventSource.property.tlsTrustCertsSecret"></a>

```typescript
public readonly tlsTrustCertsSecret: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

Trusted TLS certificate secret.

---

##### `tlsValidateHostname`<sup>Optional</sup> <a name="tlsValidateHostname" id="metaflow-blueprints.PulsarEventSource.property.tlsValidateHostname"></a>

```typescript
public readonly tlsValidateHostname: boolean;
```

- *Type:* boolean

Whether the Pulsar client verify the validity of the host name from broker.

---

##### `type`<sup>Optional</sup> <a name="type" id="metaflow-blueprints.PulsarEventSource.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of the subscription.

Only "exclusive" and "shared" is supported. Defaults to
exclusive.

---

### RedisEventSource <a name="RedisEventSource" id="metaflow-blueprints.RedisEventSource"></a>

RedisEventSource describes an event source for the Redis PubSub.

More info at
https://godoc.org/github.com/go-redis/redis#example-PubSub

#### Initializer <a name="Initializer" id="metaflow-blueprints.RedisEventSource.Initializer"></a>

```typescript
import { RedisEventSource } from 'metaflow-blueprints'

const redisEventSource: RedisEventSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.RedisEventSource.property.channels">channels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#metaflow-blueprints.RedisEventSource.property.hostAddress">hostAddress</a></code> | <code>string</code> | HostAddress refers to the address of the Redis host/server. |
| <code><a href="#metaflow-blueprints.RedisEventSource.property.db">db</a></code> | <code>number</code> | DB to use. |
| <code><a href="#metaflow-blueprints.RedisEventSource.property.filter">filter</a></code> | <code><a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a></code> | Filter. |
| <code><a href="#metaflow-blueprints.RedisEventSource.property.jsonBody">jsonBody</a></code> | <code>boolean</code> | JSONBody specifies that all event body payload coming from this source will be JSON. |
| <code><a href="#metaflow-blueprints.RedisEventSource.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata holds the user defined metadata which will passed along the event payload. |
| <code><a href="#metaflow-blueprints.RedisEventSource.property.namespace">namespace</a></code> | <code>string</code> | Namespace to use to retrieve the password from. |
| <code><a href="#metaflow-blueprints.RedisEventSource.property.password">password</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | Password required for authentication if any. |
| <code><a href="#metaflow-blueprints.RedisEventSource.property.tls">tls</a></code> | <code><a href="#metaflow-blueprints.TLSConfig">TLSConfig</a></code> | TLS configuration for the redis client. |
| <code><a href="#metaflow-blueprints.RedisEventSource.property.username">username</a></code> | <code>string</code> | Username required for ACL style authentication if any. |

---

##### `channels`<sup>Required</sup> <a name="channels" id="metaflow-blueprints.RedisEventSource.property.channels"></a>

```typescript
public readonly channels: string[];
```

- *Type:* string[]

---

##### `hostAddress`<sup>Required</sup> <a name="hostAddress" id="metaflow-blueprints.RedisEventSource.property.hostAddress"></a>

```typescript
public readonly hostAddress: string;
```

- *Type:* string

HostAddress refers to the address of the Redis host/server.

---

##### `db`<sup>Optional</sup> <a name="db" id="metaflow-blueprints.RedisEventSource.property.db"></a>

```typescript
public readonly db: number;
```

- *Type:* number

DB to use.

If not specified, default DB 0 will be used.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="metaflow-blueprints.RedisEventSource.property.filter"></a>

```typescript
public readonly filter: EventSourceFilter;
```

- *Type:* <a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a>

Filter.

---

##### `jsonBody`<sup>Optional</sup> <a name="jsonBody" id="metaflow-blueprints.RedisEventSource.property.jsonBody"></a>

```typescript
public readonly jsonBody: boolean;
```

- *Type:* boolean

JSONBody specifies that all event body payload coming from this source will be JSON.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="metaflow-blueprints.RedisEventSource.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata holds the user defined metadata which will passed along the event payload.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="metaflow-blueprints.RedisEventSource.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace to use to retrieve the password from.

It should only be specified if password
is declared

---

##### `password`<sup>Optional</sup> <a name="password" id="metaflow-blueprints.RedisEventSource.property.password"></a>

```typescript
public readonly password: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

Password required for authentication if any.

---

##### `tls`<sup>Optional</sup> <a name="tls" id="metaflow-blueprints.RedisEventSource.property.tls"></a>

```typescript
public readonly tls: TLSConfig;
```

- *Type:* <a href="#metaflow-blueprints.TLSConfig">TLSConfig</a>

TLS configuration for the redis client.

---

##### `username`<sup>Optional</sup> <a name="username" id="metaflow-blueprints.RedisEventSource.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username required for ACL style authentication if any.

---

### RedisStreamEventSource <a name="RedisStreamEventSource" id="metaflow-blueprints.RedisStreamEventSource"></a>

RedisStreamEventSource describes an event source for Redis streams (https://redis.io/topics/streams-intro).

#### Initializer <a name="Initializer" id="metaflow-blueprints.RedisStreamEventSource.Initializer"></a>

```typescript
import { RedisStreamEventSource } from 'metaflow-blueprints'

const redisStreamEventSource: RedisStreamEventSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.RedisStreamEventSource.property.hostAddress">hostAddress</a></code> | <code>string</code> | HostAddress refers to the address of the Redis host/server (master instance). |
| <code><a href="#metaflow-blueprints.RedisStreamEventSource.property.streams">streams</a></code> | <code>string[]</code> | Streams to look for entries. |
| <code><a href="#metaflow-blueprints.RedisStreamEventSource.property.consumerGroup">consumerGroup</a></code> | <code>string</code> | ConsumerGroup refers to the Redis stream consumer group that will be created on all redis streams. |
| <code><a href="#metaflow-blueprints.RedisStreamEventSource.property.db">db</a></code> | <code>number</code> | DB to use. |
| <code><a href="#metaflow-blueprints.RedisStreamEventSource.property.filter">filter</a></code> | <code><a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a></code> | Filter. |
| <code><a href="#metaflow-blueprints.RedisStreamEventSource.property.maxMsgCountPerRead">maxMsgCountPerRead</a></code> | <code>number</code> | MaxMsgCountPerRead holds the maximum number of messages per stream that will be read in each XREADGROUP of all streams Example: if there are 2 streams and MaxMsgCountPerRead=10, then each XREADGROUP may read upto a total of 20 messages. |
| <code><a href="#metaflow-blueprints.RedisStreamEventSource.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata holds the user defined metadata which will passed along the event payload. |
| <code><a href="#metaflow-blueprints.RedisStreamEventSource.property.password">password</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | Password required for authentication if any. |
| <code><a href="#metaflow-blueprints.RedisStreamEventSource.property.tls">tls</a></code> | <code><a href="#metaflow-blueprints.TLSConfig">TLSConfig</a></code> | TLS configuration for the redis client. |
| <code><a href="#metaflow-blueprints.RedisStreamEventSource.property.username">username</a></code> | <code>string</code> | Username required for ACL style authentication if any. |

---

##### `hostAddress`<sup>Required</sup> <a name="hostAddress" id="metaflow-blueprints.RedisStreamEventSource.property.hostAddress"></a>

```typescript
public readonly hostAddress: string;
```

- *Type:* string

HostAddress refers to the address of the Redis host/server (master instance).

---

##### `streams`<sup>Required</sup> <a name="streams" id="metaflow-blueprints.RedisStreamEventSource.property.streams"></a>

```typescript
public readonly streams: string[];
```

- *Type:* string[]

Streams to look for entries.

XREADGROUP is used on all streams using a single consumer
group.

---

##### `consumerGroup`<sup>Optional</sup> <a name="consumerGroup" id="metaflow-blueprints.RedisStreamEventSource.property.consumerGroup"></a>

```typescript
public readonly consumerGroup: string;
```

- *Type:* string

ConsumerGroup refers to the Redis stream consumer group that will be created on all redis streams.

Messages are read through this group. Defaults to 'argo-events-cg'

---

##### `db`<sup>Optional</sup> <a name="db" id="metaflow-blueprints.RedisStreamEventSource.property.db"></a>

```typescript
public readonly db: number;
```

- *Type:* number

DB to use.

If not specified, default DB 0 will be used.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="metaflow-blueprints.RedisStreamEventSource.property.filter"></a>

```typescript
public readonly filter: EventSourceFilter;
```

- *Type:* <a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a>

Filter.

---

##### `maxMsgCountPerRead`<sup>Optional</sup> <a name="maxMsgCountPerRead" id="metaflow-blueprints.RedisStreamEventSource.property.maxMsgCountPerRead"></a>

```typescript
public readonly maxMsgCountPerRead: number;
```

- *Type:* number

MaxMsgCountPerRead holds the maximum number of messages per stream that will be read in each XREADGROUP of all streams Example: if there are 2 streams and MaxMsgCountPerRead=10, then each XREADGROUP may read upto a total of 20 messages.

Same as COUNT option in
XREADGROUP(https://redis.io/topics/streams-intro). Defaults to 10

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="metaflow-blueprints.RedisStreamEventSource.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata holds the user defined metadata which will passed along the event payload.

---

##### `password`<sup>Optional</sup> <a name="password" id="metaflow-blueprints.RedisStreamEventSource.property.password"></a>

```typescript
public readonly password: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

Password required for authentication if any.

---

##### `tls`<sup>Optional</sup> <a name="tls" id="metaflow-blueprints.RedisStreamEventSource.property.tls"></a>

```typescript
public readonly tls: TLSConfig;
```

- *Type:* <a href="#metaflow-blueprints.TLSConfig">TLSConfig</a>

TLS configuration for the redis client.

---

##### `username`<sup>Optional</sup> <a name="username" id="metaflow-blueprints.RedisStreamEventSource.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username required for ACL style authentication if any.

---

### ResourceEventSource <a name="ResourceEventSource" id="metaflow-blueprints.ResourceEventSource"></a>

ResourceEventSource refers to a event-source for K8s resource related events.

#### Initializer <a name="Initializer" id="metaflow-blueprints.ResourceEventSource.Initializer"></a>

```typescript
import { ResourceEventSource } from 'metaflow-blueprints'

const resourceEventSource: ResourceEventSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.ResourceEventSource.property.eventTypes">eventTypes</a></code> | <code>string[]</code> | EventTypes is the list of event type to watch. |
| <code><a href="#metaflow-blueprints.ResourceEventSource.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#metaflow-blueprints.ResourceEventSource.property.namespace">namespace</a></code> | <code>string</code> | Namespace where resource is deployed. |
| <code><a href="#metaflow-blueprints.ResourceEventSource.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#metaflow-blueprints.ResourceEventSource.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#metaflow-blueprints.ResourceEventSource.property.filter">filter</a></code> | <code><a href="#metaflow-blueprints.ResourceFilter">ResourceFilter</a></code> | Filter is applied on the metadata of the resource If you apply filter, then the internal event informer will only monitor objects that pass the filter. |
| <code><a href="#metaflow-blueprints.ResourceEventSource.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata holds the user defined metadata which will passed along the event payload. |

---

##### `eventTypes`<sup>Required</sup> <a name="eventTypes" id="metaflow-blueprints.ResourceEventSource.property.eventTypes"></a>

```typescript
public readonly eventTypes: string[];
```

- *Type:* string[]

EventTypes is the list of event type to watch.

Possible values are - ADD, UPDATE and
DELETE.

---

##### `group`<sup>Required</sup> <a name="group" id="metaflow-blueprints.ResourceEventSource.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="metaflow-blueprints.ResourceEventSource.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace where resource is deployed.

---

##### `resource`<sup>Required</sup> <a name="resource" id="metaflow-blueprints.ResourceEventSource.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="metaflow-blueprints.ResourceEventSource.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `filter`<sup>Optional</sup> <a name="filter" id="metaflow-blueprints.ResourceEventSource.property.filter"></a>

```typescript
public readonly filter: ResourceFilter;
```

- *Type:* <a href="#metaflow-blueprints.ResourceFilter">ResourceFilter</a>

Filter is applied on the metadata of the resource If you apply filter, then the internal event informer will only monitor objects that pass the filter.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="metaflow-blueprints.ResourceEventSource.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata holds the user defined metadata which will passed along the event payload.

---

### ResourceFilter <a name="ResourceFilter" id="metaflow-blueprints.ResourceFilter"></a>

Filter is applied on the metadata of the resource If you apply filter, then the internal event informer will only monitor objects that pass the filter.

ResourceFilter contains K8s ObjectMeta information to further filter resource event
objects

#### Initializer <a name="Initializer" id="metaflow-blueprints.ResourceFilter.Initializer"></a>

```typescript
import { ResourceFilter } from 'metaflow-blueprints'

const resourceFilter: ResourceFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.ResourceFilter.property.afterStart">afterStart</a></code> | <code>boolean</code> | If the resource is created after the start time then the event is treated as valid. |
| <code><a href="#metaflow-blueprints.ResourceFilter.property.createdBy">createdBy</a></code> | <code>string</code> | ISO-8601 formatted timestamp. |
| <code><a href="#metaflow-blueprints.ResourceFilter.property.fields">fields</a></code> | <code><a href="#metaflow-blueprints.Selector">Selector</a>[]</code> | Fields provide field filters similar to K8s field selector (see https://kubernetes.io/docs/concepts/overview/working-with-objects/field-selectors/). Unlike K8s field selector, it supports arbitrary fileds like "spec.serviceAccountName", and the value could be a string or a regex. Same as K8s field selector, operator "=", "==" and "!=" are supported. |
| <code><a href="#metaflow-blueprints.ResourceFilter.property.labels">labels</a></code> | <code><a href="#metaflow-blueprints.Selector">Selector</a>[]</code> | Labels provide listing options to K8s API to watch resource/s. |
| <code><a href="#metaflow-blueprints.ResourceFilter.property.prefix">prefix</a></code> | <code>string</code> | Prefix filter is applied on the resource name. |

---

##### `afterStart`<sup>Optional</sup> <a name="afterStart" id="metaflow-blueprints.ResourceFilter.property.afterStart"></a>

```typescript
public readonly afterStart: boolean;
```

- *Type:* boolean

If the resource is created after the start time then the event is treated as valid.

---

##### `createdBy`<sup>Optional</sup> <a name="createdBy" id="metaflow-blueprints.ResourceFilter.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

ISO-8601 formatted timestamp.

If resource is created before this time then the event is treated as valid.

---

*Example*

```typescript
"2020-01-01T00:00:00Z"
```


##### `fields`<sup>Optional</sup> <a name="fields" id="metaflow-blueprints.ResourceFilter.property.fields"></a>

```typescript
public readonly fields: Selector[];
```

- *Type:* <a href="#metaflow-blueprints.Selector">Selector</a>[]

Fields provide field filters similar to K8s field selector (see https://kubernetes.io/docs/concepts/overview/working-with-objects/field-selectors/). Unlike K8s field selector, it supports arbitrary fileds like "spec.serviceAccountName", and the value could be a string or a regex. Same as K8s field selector, operator "=", "==" and "!=" are supported.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="metaflow-blueprints.ResourceFilter.property.labels"></a>

```typescript
public readonly labels: Selector[];
```

- *Type:* <a href="#metaflow-blueprints.Selector">Selector</a>[]

Labels provide listing options to K8s API to watch resource/s.

Refer
https://kubernetes.io/docs/concepts/overview/working-with-objects/label-selectors/ for
more info. Unlike K8s field selector, multiple values are passed as comma separated
values instead of list of values. Eg: value: value1,value2. Same as K8s label selector,
operator "=", "==", "!=", "exists", "!", "notin", "in", "gt" and "lt" are supported

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="metaflow-blueprints.ResourceFilter.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Prefix filter is applied on the resource name.

---

### S3Artifact <a name="S3Artifact" id="metaflow-blueprints.S3Artifact"></a>

S3Artifact contains information about an S3 connection and bucket.

S3 compliant artifact

#### Initializer <a name="Initializer" id="metaflow-blueprints.S3Artifact.Initializer"></a>

```typescript
import { S3Artifact } from 'metaflow-blueprints'

const s3Artifact: S3Artifact = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.S3Artifact.property.accessKey">accessKey</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | *No description.* |
| <code><a href="#metaflow-blueprints.S3Artifact.property.bucket">bucket</a></code> | <code><a href="#metaflow-blueprints.S3Bucket">S3Bucket</a></code> | *No description.* |
| <code><a href="#metaflow-blueprints.S3Artifact.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#metaflow-blueprints.S3Artifact.property.secretKey">secretKey</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | *No description.* |
| <code><a href="#metaflow-blueprints.S3Artifact.property.caCertificate">caCertificate</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | *No description.* |
| <code><a href="#metaflow-blueprints.S3Artifact.property.events">events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#metaflow-blueprints.S3Artifact.property.filter">filter</a></code> | <code><a href="#metaflow-blueprints.S3Filter">S3Filter</a></code> | *No description.* |
| <code><a href="#metaflow-blueprints.S3Artifact.property.insecure">insecure</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#metaflow-blueprints.S3Artifact.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#metaflow-blueprints.S3Artifact.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="metaflow-blueprints.S3Artifact.property.accessKey"></a>

```typescript
public readonly accessKey: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="metaflow-blueprints.S3Artifact.property.bucket"></a>

```typescript
public readonly bucket: S3Bucket;
```

- *Type:* <a href="#metaflow-blueprints.S3Bucket">S3Bucket</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="metaflow-blueprints.S3Artifact.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `secretKey`<sup>Required</sup> <a name="secretKey" id="metaflow-blueprints.S3Artifact.property.secretKey"></a>

```typescript
public readonly secretKey: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

---

##### `caCertificate`<sup>Optional</sup> <a name="caCertificate" id="metaflow-blueprints.S3Artifact.property.caCertificate"></a>

```typescript
public readonly caCertificate: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

---

##### `events`<sup>Optional</sup> <a name="events" id="metaflow-blueprints.S3Artifact.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="metaflow-blueprints.S3Artifact.property.filter"></a>

```typescript
public readonly filter: S3Filter;
```

- *Type:* <a href="#metaflow-blueprints.S3Filter">S3Filter</a>

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="metaflow-blueprints.S3Artifact.property.insecure"></a>

```typescript
public readonly insecure: boolean;
```

- *Type:* boolean

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="metaflow-blueprints.S3Artifact.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `region`<sup>Optional</sup> <a name="region" id="metaflow-blueprints.S3Artifact.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

### S3Bucket <a name="S3Bucket" id="metaflow-blueprints.S3Bucket"></a>

S3Bucket contains information to describe an S3 Bucket.

#### Initializer <a name="Initializer" id="metaflow-blueprints.S3Bucket.Initializer"></a>

```typescript
import { S3Bucket } from 'metaflow-blueprints'

const s3Bucket: S3Bucket = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.S3Bucket.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#metaflow-blueprints.S3Bucket.property.key">key</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="metaflow-blueprints.S3Bucket.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `key`<sup>Optional</sup> <a name="key" id="metaflow-blueprints.S3Bucket.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

### S3Filter <a name="S3Filter" id="metaflow-blueprints.S3Filter"></a>

S3Filter represents filters to apply to bucket notifications for specifying constraints on objects.

#### Initializer <a name="Initializer" id="metaflow-blueprints.S3Filter.Initializer"></a>

```typescript
import { S3Filter } from 'metaflow-blueprints'

const s3Filter: S3Filter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.S3Filter.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#metaflow-blueprints.S3Filter.property.suffix">suffix</a></code> | <code>string</code> | *No description.* |

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="metaflow-blueprints.S3Filter.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="metaflow-blueprints.S3Filter.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

---

### SASLConfig <a name="SASLConfig" id="metaflow-blueprints.SASLConfig"></a>

SASL configuration for the kafka client.

SASLConfig refers to SASL configuration for a client

#### Initializer <a name="Initializer" id="metaflow-blueprints.SASLConfig.Initializer"></a>

```typescript
import { SASLConfig } from 'metaflow-blueprints'

const sASLConfig: SASLConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.SASLConfig.property.mechanism">mechanism</a></code> | <code>string</code> | SASLMechanism is the name of the enabled SASL mechanism. |
| <code><a href="#metaflow-blueprints.SASLConfig.property.passwordSecret">passwordSecret</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | Password for SASL/PLAIN authentication. |
| <code><a href="#metaflow-blueprints.SASLConfig.property.userSecret">userSecret</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | User is the authentication identity (authcid) to present for SASL/PLAIN or SASL/SCRAM authentication. |

---

##### `mechanism`<sup>Optional</sup> <a name="mechanism" id="metaflow-blueprints.SASLConfig.property.mechanism"></a>

```typescript
public readonly mechanism: string;
```

- *Type:* string

SASLMechanism is the name of the enabled SASL mechanism.

Possible values: OAUTHBEARER,
PLAIN (defaults to PLAIN).

---

##### `passwordSecret`<sup>Optional</sup> <a name="passwordSecret" id="metaflow-blueprints.SASLConfig.property.passwordSecret"></a>

```typescript
public readonly passwordSecret: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

Password for SASL/PLAIN authentication.

---

##### `userSecret`<sup>Optional</sup> <a name="userSecret" id="metaflow-blueprints.SASLConfig.property.userSecret"></a>

```typescript
public readonly userSecret: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

User is the authentication identity (authcid) to present for SASL/PLAIN or SASL/SCRAM authentication.

---

### Selector <a name="Selector" id="metaflow-blueprints.Selector"></a>

Selector represents conditional operation to select K8s objects.

#### Initializer <a name="Initializer" id="metaflow-blueprints.Selector.Initializer"></a>

```typescript
import { Selector } from 'metaflow-blueprints'

const selector: Selector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.Selector.property.key">key</a></code> | <code>string</code> | Key name. |
| <code><a href="#metaflow-blueprints.Selector.property.value">value</a></code> | <code>string</code> | Value. |
| <code><a href="#metaflow-blueprints.Selector.property.operation">operation</a></code> | <code>string</code> | Supported operations like ==, != etc. Defaults to ==. Refer https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors for more info. |

---

##### `key`<sup>Required</sup> <a name="key" id="metaflow-blueprints.Selector.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Key name.

---

##### `value`<sup>Required</sup> <a name="value" id="metaflow-blueprints.Selector.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value.

---

##### `operation`<sup>Optional</sup> <a name="operation" id="metaflow-blueprints.Selector.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

Supported operations like ==, != etc. Defaults to ==. Refer https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors for more info.

---

### Service <a name="Service" id="metaflow-blueprints.Service"></a>

Service is the specifications of the service to expose the event source.

Service holds the service information eventsource exposes

#### Initializer <a name="Initializer" id="metaflow-blueprints.Service.Initializer"></a>

```typescript
import { Service } from 'metaflow-blueprints'

const service: Service = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.Service.property.clusterIP">clusterIP</a></code> | <code>string</code> | clusterIP is the IP address of the service and is usually assigned randomly by the master. |
| <code><a href="#metaflow-blueprints.Service.property.metadata">metadata</a></code> | <code><a href="#metaflow-blueprints.JetstreamMetadata">JetstreamMetadata</a></code> | Metadata sets the pods's metadata, i.e. annotations and labels default={annotations: {}, labels: {}}. |
| <code><a href="#metaflow-blueprints.Service.property.ports">ports</a></code> | <code>metaflow-blueprints.k8s.ServicePort[]</code> | The list of ports that are exposed by this ClusterIP service. |

---

##### `clusterIP`<sup>Optional</sup> <a name="clusterIP" id="metaflow-blueprints.Service.property.clusterIP"></a>

```typescript
public readonly clusterIP: string;
```

- *Type:* string

clusterIP is the IP address of the service and is usually assigned randomly by the master.

If an address is specified manually and is not in use by others, it will be
allocated to the service; otherwise, creation of the service will fail. This field can
not be changed through updates. Valid values are "None", empty string (""), or a valid IP
address. "None" can be specified for headless services when proxying is not required.
More info:
https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="metaflow-blueprints.Service.property.metadata"></a>

```typescript
public readonly metadata: JetstreamMetadata;
```

- *Type:* <a href="#metaflow-blueprints.JetstreamMetadata">JetstreamMetadata</a>

Metadata sets the pods's metadata, i.e. annotations and labels default={annotations: {}, labels: {}}.

---

##### `ports`<sup>Optional</sup> <a name="ports" id="metaflow-blueprints.Service.property.ports"></a>

```typescript
public readonly ports: ServicePort[];
```

- *Type:* metaflow-blueprints.k8s.ServicePort[]

The list of ports that are exposed by this ClusterIP service.

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
| <code><a href="#metaflow-blueprints.SFTPEventSource.property.eventType">eventType</a></code> | <code>string</code> | Type of file operations to watch Refer https://github.com/fsnotify/fsnotify/blob/master/fsnotify.go for more information. |
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

Type of file operations to watch Refer https://github.com/fsnotify/fsnotify/blob/master/fsnotify.go for more information.

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

### SlackEventSource <a name="SlackEventSource" id="metaflow-blueprints.SlackEventSource"></a>

SlackEventSource refers to event-source for Slack related events.

#### Initializer <a name="Initializer" id="metaflow-blueprints.SlackEventSource.Initializer"></a>

```typescript
import { SlackEventSource } from 'metaflow-blueprints'

const slackEventSource: SlackEventSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.SlackEventSource.property.filter">filter</a></code> | <code><a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a></code> | Filter. |
| <code><a href="#metaflow-blueprints.SlackEventSource.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata holds the user defined metadata which will passed along the event payload. |
| <code><a href="#metaflow-blueprints.SlackEventSource.property.signingSecret">signingSecret</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | Slack App signing secret. |
| <code><a href="#metaflow-blueprints.SlackEventSource.property.token">token</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | Token for URL verification handshake. |
| <code><a href="#metaflow-blueprints.SlackEventSource.property.webhook">webhook</a></code> | <code><a href="#metaflow-blueprints.WebhookContext">WebhookContext</a></code> | Webhook holds configuration for a REST endpoint. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="metaflow-blueprints.SlackEventSource.property.filter"></a>

```typescript
public readonly filter: EventSourceFilter;
```

- *Type:* <a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a>

Filter.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="metaflow-blueprints.SlackEventSource.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata holds the user defined metadata which will passed along the event payload.

---

##### `signingSecret`<sup>Optional</sup> <a name="signingSecret" id="metaflow-blueprints.SlackEventSource.property.signingSecret"></a>

```typescript
public readonly signingSecret: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

Slack App signing secret.

---

##### `token`<sup>Optional</sup> <a name="token" id="metaflow-blueprints.SlackEventSource.property.token"></a>

```typescript
public readonly token: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

Token for URL verification handshake.

---

##### `webhook`<sup>Optional</sup> <a name="webhook" id="metaflow-blueprints.SlackEventSource.property.webhook"></a>

```typescript
public readonly webhook: WebhookContext;
```

- *Type:* <a href="#metaflow-blueprints.WebhookContext">WebhookContext</a>

Webhook holds configuration for a REST endpoint.

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

### StorageGridEventSource <a name="StorageGridEventSource" id="metaflow-blueprints.StorageGridEventSource"></a>

StorageGridEventSource refers to event-source for StorageGrid related events.

#### Initializer <a name="Initializer" id="metaflow-blueprints.StorageGridEventSource.Initializer"></a>

```typescript
import { StorageGridEventSource } from 'metaflow-blueprints'

const storageGridEventSource: StorageGridEventSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.StorageGridEventSource.property.apiURL">apiURL</a></code> | <code>string</code> | APIURL is the url of the storagegrid api. |
| <code><a href="#metaflow-blueprints.StorageGridEventSource.property.authToken">authToken</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | Auth token for storagegrid api. |
| <code><a href="#metaflow-blueprints.StorageGridEventSource.property.bucket">bucket</a></code> | <code>string</code> | Name of the bucket to register notifications for. |
| <code><a href="#metaflow-blueprints.StorageGridEventSource.property.topicArn">topicArn</a></code> | <code>string</code> | TopicArn. |
| <code><a href="#metaflow-blueprints.StorageGridEventSource.property.events">events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#metaflow-blueprints.StorageGridEventSource.property.filter">filter</a></code> | <code><a href="#metaflow-blueprints.StorageGridFilter">StorageGridFilter</a></code> | Filter on object key which caused the notification. |
| <code><a href="#metaflow-blueprints.StorageGridEventSource.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata holds the user defined metadata which will passed along the event payload. |
| <code><a href="#metaflow-blueprints.StorageGridEventSource.property.region">region</a></code> | <code>string</code> | S3 region. |
| <code><a href="#metaflow-blueprints.StorageGridEventSource.property.webhook">webhook</a></code> | <code><a href="#metaflow-blueprints.WebhookContext">WebhookContext</a></code> | Webhook holds configuration for a REST endpoint. |

---

##### `apiURL`<sup>Required</sup> <a name="apiURL" id="metaflow-blueprints.StorageGridEventSource.property.apiURL"></a>

```typescript
public readonly apiURL: string;
```

- *Type:* string

APIURL is the url of the storagegrid api.

---

##### `authToken`<sup>Required</sup> <a name="authToken" id="metaflow-blueprints.StorageGridEventSource.property.authToken"></a>

```typescript
public readonly authToken: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

Auth token for storagegrid api.

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="metaflow-blueprints.StorageGridEventSource.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Name of the bucket to register notifications for.

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="metaflow-blueprints.StorageGridEventSource.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

TopicArn.

---

##### `events`<sup>Optional</sup> <a name="events" id="metaflow-blueprints.StorageGridEventSource.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="metaflow-blueprints.StorageGridEventSource.property.filter"></a>

```typescript
public readonly filter: StorageGridFilter;
```

- *Type:* <a href="#metaflow-blueprints.StorageGridFilter">StorageGridFilter</a>

Filter on object key which caused the notification.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="metaflow-blueprints.StorageGridEventSource.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata holds the user defined metadata which will passed along the event payload.

---

##### `region`<sup>Optional</sup> <a name="region" id="metaflow-blueprints.StorageGridEventSource.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

S3 region.

Defaults to us-east-1

---

##### `webhook`<sup>Optional</sup> <a name="webhook" id="metaflow-blueprints.StorageGridEventSource.property.webhook"></a>

```typescript
public readonly webhook: WebhookContext;
```

- *Type:* <a href="#metaflow-blueprints.WebhookContext">WebhookContext</a>

Webhook holds configuration for a REST endpoint.

---

### StorageGridFilter <a name="StorageGridFilter" id="metaflow-blueprints.StorageGridFilter"></a>

Filter on object key which caused the notification.

StorageGridFilter represents filters to apply to bucket notifications for specifying
constraints on objects

#### Initializer <a name="Initializer" id="metaflow-blueprints.StorageGridFilter.Initializer"></a>

```typescript
import { StorageGridFilter } from 'metaflow-blueprints'

const storageGridFilter: StorageGridFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.StorageGridFilter.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#metaflow-blueprints.StorageGridFilter.property.suffix">suffix</a></code> | <code>string</code> | *No description.* |

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="metaflow-blueprints.StorageGridFilter.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="metaflow-blueprints.StorageGridFilter.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

---

### StripeEventSource <a name="StripeEventSource" id="metaflow-blueprints.StripeEventSource"></a>

StripeEventSource describes the event source for stripe webhook notifications More info at https://stripe.com/docs/webhooks.

#### Initializer <a name="Initializer" id="metaflow-blueprints.StripeEventSource.Initializer"></a>

```typescript
import { StripeEventSource } from 'metaflow-blueprints'

const stripeEventSource: StripeEventSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.StripeEventSource.property.apiKey">apiKey</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | APIKey refers to K8s secret that holds Stripe API key. |
| <code><a href="#metaflow-blueprints.StripeEventSource.property.createWebhook">createWebhook</a></code> | <code>boolean</code> | CreateWebhook if specified creates a new webhook programmatically. |
| <code><a href="#metaflow-blueprints.StripeEventSource.property.eventFilter">eventFilter</a></code> | <code>string[]</code> | EventFilter describes the type of events to listen to. |
| <code><a href="#metaflow-blueprints.StripeEventSource.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata holds the user defined metadata which will passed along the event payload. |
| <code><a href="#metaflow-blueprints.StripeEventSource.property.webhook">webhook</a></code> | <code><a href="#metaflow-blueprints.WebhookContext">WebhookContext</a></code> | Webhook holds configuration for a REST endpoint. |

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="metaflow-blueprints.StripeEventSource.property.apiKey"></a>

```typescript
public readonly apiKey: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

APIKey refers to K8s secret that holds Stripe API key.

Used only if CreateWebhook is
enabled.

---

##### `createWebhook`<sup>Optional</sup> <a name="createWebhook" id="metaflow-blueprints.StripeEventSource.property.createWebhook"></a>

```typescript
public readonly createWebhook: boolean;
```

- *Type:* boolean

CreateWebhook if specified creates a new webhook programmatically.

---

##### `eventFilter`<sup>Optional</sup> <a name="eventFilter" id="metaflow-blueprints.StripeEventSource.property.eventFilter"></a>

```typescript
public readonly eventFilter: string[];
```

- *Type:* string[]

EventFilter describes the type of events to listen to.

If not specified, all types of
events will be processed. More info at https://stripe.com/docs/api/events/list

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="metaflow-blueprints.StripeEventSource.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata holds the user defined metadata which will passed along the event payload.

---

##### `webhook`<sup>Optional</sup> <a name="webhook" id="metaflow-blueprints.StripeEventSource.property.webhook"></a>

```typescript
public readonly webhook: WebhookContext;
```

- *Type:* <a href="#metaflow-blueprints.WebhookContext">WebhookContext</a>

Webhook holds configuration for a REST endpoint.

---

### Template <a name="Template" id="metaflow-blueprints.Template"></a>

Template is the pod specification for the event source.

Template holds the information of a deployment template

Template is the pod specification for the sensor

#### Initializer <a name="Initializer" id="metaflow-blueprints.Template.Initializer"></a>

```typescript
import { Template } from 'metaflow-blueprints'

const template: Template = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.Template.property.affinity">affinity</a></code> | <code>metaflow-blueprints.k8s.Affinity</code> | If specified, the pod's scheduling constraints. |
| <code><a href="#metaflow-blueprints.Template.property.container">container</a></code> | <code>metaflow-blueprints.k8s.Container</code> | Container is the main container image to run in the sensor pod. |
| <code><a href="#metaflow-blueprints.Template.property.imagePullSecrets">imagePullSecrets</a></code> | <code>metaflow-blueprints.k8s.LocalObjectReference[]</code> | ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec. |
| <code><a href="#metaflow-blueprints.Template.property.metadata">metadata</a></code> | <code><a href="#metaflow-blueprints.JetstreamMetadata">JetstreamMetadata</a></code> | Metadata sets the pods's metadata, i.e. annotations and labels. |
| <code><a href="#metaflow-blueprints.Template.property.nodeSelector">nodeSelector</a></code> | <code>{[ key: string ]: string}</code> | NodeSelector is a selector which must be true for the pod to fit on a node. |
| <code><a href="#metaflow-blueprints.Template.property.priority">priority</a></code> | <code>number</code> | The priority value. |
| <code><a href="#metaflow-blueprints.Template.property.priorityClassName">priorityClassName</a></code> | <code>string</code> | If specified, indicates the EventSource pod's priority. |
| <code><a href="#metaflow-blueprints.Template.property.securityContext">securityContext</a></code> | <code>metaflow-blueprints.k8s.PodSecurityContext</code> | SecurityContext holds pod-level security attributes and common container settings. |
| <code><a href="#metaflow-blueprints.Template.property.serviceAccountName">serviceAccountName</a></code> | <code>string</code> | ServiceAccountName is the name of the ServiceAccount to use to run sensor pod. |
| <code><a href="#metaflow-blueprints.Template.property.tolerations">tolerations</a></code> | <code>metaflow-blueprints.k8s.Toleration[]</code> | If specified, the pod's tolerations. |
| <code><a href="#metaflow-blueprints.Template.property.volumes">volumes</a></code> | <code>metaflow-blueprints.k8s.Volume[]</code> | Volumes is a list of volumes that can be mounted by containers in a workflow. |

---

##### `affinity`<sup>Optional</sup> <a name="affinity" id="metaflow-blueprints.Template.property.affinity"></a>

```typescript
public readonly affinity: Affinity;
```

- *Type:* metaflow-blueprints.k8s.Affinity

If specified, the pod's scheduling constraints.

---

##### `container`<sup>Optional</sup> <a name="container" id="metaflow-blueprints.Template.property.container"></a>

```typescript
public readonly container: Container;
```

- *Type:* metaflow-blueprints.k8s.Container

Container is the main container image to run in the sensor pod.

---

##### `imagePullSecrets`<sup>Optional</sup> <a name="imagePullSecrets" id="metaflow-blueprints.Template.property.imagePullSecrets"></a>

```typescript
public readonly imagePullSecrets: LocalObjectReference[];
```

- *Type:* metaflow-blueprints.k8s.LocalObjectReference[]

ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec.

If specified, these secrets will
be passed to individual puller implementations for them to use. For example, in the case
of docker, only DockerConfig type secrets are honored. More info:
https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="metaflow-blueprints.Template.property.metadata"></a>

```typescript
public readonly metadata: JetstreamMetadata;
```

- *Type:* <a href="#metaflow-blueprints.JetstreamMetadata">JetstreamMetadata</a>

Metadata sets the pods's metadata, i.e. annotations and labels.

---

##### `nodeSelector`<sup>Optional</sup> <a name="nodeSelector" id="metaflow-blueprints.Template.property.nodeSelector"></a>

```typescript
public readonly nodeSelector: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

NodeSelector is a selector which must be true for the pod to fit on a node.

Selector
which must match a node's labels for the pod to be scheduled on that node. More info:
https://kubernetes.io/docs/concepts/configuration/assign-pod-node/

---

##### `priority`<sup>Optional</sup> <a name="priority" id="metaflow-blueprints.Template.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

The priority value.

Various system components use this field to find the priority of the
EventSource pod. When Priority Admission Controller is enabled, it prevents users from
setting this field. The admission controller populates this field from PriorityClassName.
The higher the value, the higher the priority. More info:
https://kubernetes.io/docs/concepts/configuration/pod-priority-preemption/

---

##### `priorityClassName`<sup>Optional</sup> <a name="priorityClassName" id="metaflow-blueprints.Template.property.priorityClassName"></a>

```typescript
public readonly priorityClassName: string;
```

- *Type:* string

If specified, indicates the EventSource pod's priority.

"system-node-critical" and
"system-cluster-critical" are two special keywords which indicate the highest priorities
with the former being the highest priority. Any other name must be defined by creating a
PriorityClass object with that name. If not specified, the pod priority will be default
or zero if there is no default. More info:
https://kubernetes.io/docs/concepts/configuration/pod-priority-preemption/

---

##### `securityContext`<sup>Optional</sup> <a name="securityContext" id="metaflow-blueprints.Template.property.securityContext"></a>

```typescript
public readonly securityContext: PodSecurityContext;
```

- *Type:* metaflow-blueprints.k8s.PodSecurityContext

SecurityContext holds pod-level security attributes and common container settings.

Optional: Defaults to empty.  See type description for default values of each field.

---

##### `serviceAccountName`<sup>Optional</sup> <a name="serviceAccountName" id="metaflow-blueprints.Template.property.serviceAccountName"></a>

```typescript
public readonly serviceAccountName: string;
```

- *Type:* string

ServiceAccountName is the name of the ServiceAccount to use to run sensor pod.

More info:
https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/

---

##### `tolerations`<sup>Optional</sup> <a name="tolerations" id="metaflow-blueprints.Template.property.tolerations"></a>

```typescript
public readonly tolerations: Toleration[];
```

- *Type:* metaflow-blueprints.k8s.Toleration[]

If specified, the pod's tolerations.

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="metaflow-blueprints.Template.property.volumes"></a>

```typescript
public readonly volumes: Volume[];
```

- *Type:* metaflow-blueprints.k8s.Volume[]

Volumes is a list of volumes that can be mounted by containers in a workflow.

---

### TLSConfig <a name="TLSConfig" id="metaflow-blueprints.TLSConfig"></a>

TLS configuration for the kafka client.

TLSConfig refers to TLS configuration for a client.

TLS configuration for the amqp client.

TLS configuration for the service bus client

TLS configuration for the bitbucketserver client.

TLS configuration for the emitter client.

TLS configuration for the mqtt client.

TLS configuration for the nats client.

TLS configuration for the nsq client.

TLS configuration for the pulsar client.

TLS configuration for the redis client.

TLS configuration for the HTTP client.

TLS configuration for the Kafka producer.

TLS configuration for the NATS producer.

#### Initializer <a name="Initializer" id="metaflow-blueprints.TLSConfig.Initializer"></a>

```typescript
import { TLSConfig } from 'metaflow-blueprints'

const tLSConfig: TLSConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.TLSConfig.property.caCertSecret">caCertSecret</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | CACertSecret refers to the secret that contains the CA cert. |
| <code><a href="#metaflow-blueprints.TLSConfig.property.clientCertSecret">clientCertSecret</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | ClientCertSecret refers to the secret that contains the client cert. |
| <code><a href="#metaflow-blueprints.TLSConfig.property.clientKeySecret">clientKeySecret</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | ClientKeySecret refers to the secret that contains the client key. |
| <code><a href="#metaflow-blueprints.TLSConfig.property.insecureSkipVerify">insecureSkipVerify</a></code> | <code>boolean</code> | If true, skips creation of TLSConfig with certs and creates an empty TLSConfig. |

---

##### `caCertSecret`<sup>Optional</sup> <a name="caCertSecret" id="metaflow-blueprints.TLSConfig.property.caCertSecret"></a>

```typescript
public readonly caCertSecret: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

CACertSecret refers to the secret that contains the CA cert.

---

##### `clientCertSecret`<sup>Optional</sup> <a name="clientCertSecret" id="metaflow-blueprints.TLSConfig.property.clientCertSecret"></a>

```typescript
public readonly clientCertSecret: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

ClientCertSecret refers to the secret that contains the client cert.

---

##### `clientKeySecret`<sup>Optional</sup> <a name="clientKeySecret" id="metaflow-blueprints.TLSConfig.property.clientKeySecret"></a>

```typescript
public readonly clientKeySecret: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

ClientKeySecret refers to the secret that contains the client key.

---

##### `insecureSkipVerify`<sup>Optional</sup> <a name="insecureSkipVerify" id="metaflow-blueprints.TLSConfig.property.insecureSkipVerify"></a>

```typescript
public readonly insecureSkipVerify: boolean;
```

- *Type:* boolean

If true, skips creation of TLSConfig with certs and creates an empty TLSConfig.

(Defaults
to false)

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

Configuration for a REST API webhook HTTP server.

Defines the server settings, authentication, and endpoint details.

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

### WebhookEventSource <a name="WebhookEventSource" id="metaflow-blueprints.WebhookEventSource"></a>

CalendarEventSource describes an HTTP based EventSource.

#### Initializer <a name="Initializer" id="metaflow-blueprints.WebhookEventSource.Initializer"></a>

```typescript
import { WebhookEventSource } from 'metaflow-blueprints'

const webhookEventSource: WebhookEventSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#metaflow-blueprints.WebhookEventSource.property.endpoint">endpoint</a></code> | <code>string</code> | REST API endpoint. |
| <code><a href="#metaflow-blueprints.WebhookEventSource.property.method">method</a></code> | <code>string</code> | Method is HTTP request method that indicates the desired action to be performed for a given resource. |
| <code><a href="#metaflow-blueprints.WebhookEventSource.property.port">port</a></code> | <code>string</code> | Port on which HTTP server is listening for incoming events. |
| <code><a href="#metaflow-blueprints.WebhookEventSource.property.url">url</a></code> | <code>string</code> | URL is the url of the server. |
| <code><a href="#metaflow-blueprints.WebhookEventSource.property.authSecret">authSecret</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | AuthSecret holds a secret selector that contains a bearer token for authentication. |
| <code><a href="#metaflow-blueprints.WebhookEventSource.property.filter">filter</a></code> | <code><a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a></code> | Filter. |
| <code><a href="#metaflow-blueprints.WebhookEventSource.property.maxPayloadSize">maxPayloadSize</a></code> | <code>number</code> | MaxPayloadSize is the maximum webhook payload size that the server will accept. |
| <code><a href="#metaflow-blueprints.WebhookEventSource.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata holds the user defined metadata which will passed along the event payload. |
| <code><a href="#metaflow-blueprints.WebhookEventSource.property.serverCertSecret">serverCertSecret</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | ServerCertPath refers the file that contains the cert. |
| <code><a href="#metaflow-blueprints.WebhookEventSource.property.serverKeySecret">serverKeySecret</a></code> | <code>metaflow-blueprints.k8s.SecretKeySelector</code> | ServerKeyPath refers the file that contains private key. |

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="metaflow-blueprints.WebhookEventSource.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

REST API endpoint.

---

##### `method`<sup>Required</sup> <a name="method" id="metaflow-blueprints.WebhookEventSource.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Method is HTTP request method that indicates the desired action to be performed for a given resource.

See RFC7231 Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content

---

##### `port`<sup>Required</sup> <a name="port" id="metaflow-blueprints.WebhookEventSource.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

Port on which HTTP server is listening for incoming events.

---

##### `url`<sup>Required</sup> <a name="url" id="metaflow-blueprints.WebhookEventSource.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

URL is the url of the server.

---

##### `authSecret`<sup>Optional</sup> <a name="authSecret" id="metaflow-blueprints.WebhookEventSource.property.authSecret"></a>

```typescript
public readonly authSecret: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

AuthSecret holds a secret selector that contains a bearer token for authentication.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="metaflow-blueprints.WebhookEventSource.property.filter"></a>

```typescript
public readonly filter: EventSourceFilter;
```

- *Type:* <a href="#metaflow-blueprints.EventSourceFilter">EventSourceFilter</a>

Filter.

---

##### `maxPayloadSize`<sup>Optional</sup> <a name="maxPayloadSize" id="metaflow-blueprints.WebhookEventSource.property.maxPayloadSize"></a>

```typescript
public readonly maxPayloadSize: number;
```

- *Type:* number

MaxPayloadSize is the maximum webhook payload size that the server will accept.

Requests
exceeding that limit will be rejected with "request too large" response. Default value:
1048576 (1MB).

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="metaflow-blueprints.WebhookEventSource.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata holds the user defined metadata which will passed along the event payload.

---

##### `serverCertSecret`<sup>Optional</sup> <a name="serverCertSecret" id="metaflow-blueprints.WebhookEventSource.property.serverCertSecret"></a>

```typescript
public readonly serverCertSecret: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

ServerCertPath refers the file that contains the cert.

---

##### `serverKeySecret`<sup>Optional</sup> <a name="serverKeySecret" id="metaflow-blueprints.WebhookEventSource.property.serverKeySecret"></a>

```typescript
public readonly serverKeySecret: SecretKeySelector;
```

- *Type:* metaflow-blueprints.k8s.SecretKeySelector

ServerKeyPath refers the file that contains private key.

---



