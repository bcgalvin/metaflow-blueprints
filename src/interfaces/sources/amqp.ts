import { SecretKeySelector } from '../../imports/k8s';
import { Backoff, BasicAuth, EventSourceFilter, TLSConfig } from '../types';

/**
 * QueueDeclare holds the configuration of a queue to hold messages and deliver to
 * consumers. Declaring creates a queue if it doesn't already exist, or ensures that an
 * existing queue matches the same parameters For more information, visit
 * https://pkg.go.dev/github.com/rabbitmq/amqp091-go#Channel.QueueDeclare
 *
 * AMQPQueueDeclareConfig holds the configuration of a queue to hold messages and deliver to
 * consumers. Declaring creates a queue if it doesn't already exist, or ensures that an
 * existing queue matches the same parameters
 */
export interface AMQPQueueDeclareConfig {
  /**
   * Arguments of a queue (also known as "x-arguments") used for optional features and plugins
   */
  readonly arguments?: string;
  /**
   * AutoDelete removes the queue when no consumers are active
   */
  readonly autoDelete?: boolean;
  /**
   * Durable keeps the queue also after the server restarts
   */
  readonly durable?: boolean;
  /**
   * Exclusive sets the queues to be accessible only by the connection that declares them and
   * will be deleted wgen the connection closes
   */
  readonly exclusive?: boolean;
  /**
   * Name of the queue. If empty the server auto-generates a unique name for this queue
   */
  readonly name?: string;
  /**
   * NowWait when true, the queue assumes to be declared on the server
   */
  readonly noWait?: boolean;
}

/**
 * QueueBind holds the configuration that binds an exchange to a queue so that publishings
 * to the exchange will be routed to the queue when the publishing routing key matches the
 * binding routing key For more information, visit
 * https://pkg.go.dev/github.com/rabbitmq/amqp091-go#Channel.QueueBind
 *
 * AMQPQueueBindConfig holds the configuration that binds an exchange to a queue so that
 * publishings to the exchange will be routed to the queue when the publishing routing key
 * matches the binding routing key
 */
export interface AMQPQueueBindConfig {
  /**
   * NowWait false and the queue could not be bound, the channel will be closed with an error
   */
  readonly noWait?: boolean;
}

/**
 * ExchangeDeclare holds the configuration for the exchange on the server For more
 * information, visit
 * https://pkg.go.dev/github.com/rabbitmq/amqp091-go#Channel.ExchangeDeclare
 *
 * AMQPExchangeDeclareConfig holds the configuration for the exchange on the server
 */
export interface AMQPExchangeDeclareConfig {
  /**
   * AutoDelete removes the exchange when no bindings are active
   */
  readonly autoDelete?: boolean;
  /**
   * Durable keeps the exchange also after the server restarts
   */
  readonly durable?: boolean;
  /**
   * Internal when true does not accept publishings
   */
  readonly internal?: boolean;
  /**
   * NowWait when true does not wait for a confirmation from the server
   */
  readonly noWait?: boolean;
}

/**
 * Consume holds the configuration to immediately starts delivering queued messages For more
 * information, visit https://pkg.go.dev/github.com/rabbitmq/amqp091-go#Channel.Consume
 *
 * AMQPConsumeConfig holds the configuration to immediately starts delivering queued messages
 */
export interface AMQPConsumeConfig {
  /**
   * AutoAck when true, the server will acknowledge deliveries to this consumer prior to
   * writing the delivery to the network
   */
  readonly autoAck?: boolean;
  /**
   * ConsumerTag is the identity of the consumer included in every delivery
   */
  readonly consumerTag?: string;
  /**
   * Exclusive when true, the server will ensure that this is the sole consumer from this queue
   */
  readonly exclusive?: boolean;
  /**
   * NoLocal flag is not supported by RabbitMQ
   */
  readonly noLocal?: boolean;
  /**
   * NowWait when true, do not wait for the server to confirm the request and immediately
   * begin deliveries
   */
  readonly noWait?: boolean;
}

/**
 * AMQPEventSource refers to an event-source for AMQP stream events
 */
export interface AMQPEventSource {
  /**
   * Auth hosts secret selectors for username and password
   */
  readonly auth?: BasicAuth;
  /**
   * Backoff holds parameters applied to connection.
   */
  readonly connectionBackoff?: Backoff;
  /**
   * Consume holds the configuration to immediately starts delivering queued messages For more
   * information, visit https://pkg.go.dev/github.com/rabbitmq/amqp091-go#Channel.Consume
   */
  readonly consume?: AMQPConsumeConfig;
  /**
   * ExchangeDeclare holds the configuration for the exchange on the server For more
   * information, visit
   * https://pkg.go.dev/github.com/rabbitmq/amqp091-go#Channel.ExchangeDeclare
   */
  readonly exchangeDeclare?: AMQPExchangeDeclareConfig;
  /**
   * ExchangeName is the exchange name For more information, visit
   * https://www.rabbitmq.com/tutorials/amqp-concepts.html
   */
  readonly exchangeName: string;
  /**
   * ExchangeType is rabbitmq exchange type
   */
  readonly exchangeType: string;
  /**
   * Filter
   */
  readonly filter?: EventSourceFilter;
  /**
   * JSONBody specifies that all event body payload coming from this source will be JSON
   */
  readonly jsonBody?: boolean;
  /**
   * Metadata holds the user defined metadata which will passed along the event payload.
   */
  readonly metadata?: { [key: string]: string };
  /**
   * QueueBind holds the configuration that binds an exchange to a queue so that publishings
   * to the exchange will be routed to the queue when the publishing routing key matches the
   * binding routing key For more information, visit
   * https://pkg.go.dev/github.com/rabbitmq/amqp091-go#Channel.QueueBind
   */
  readonly queueBind?: AMQPQueueBindConfig;
  /**
   * QueueDeclare holds the configuration of a queue to hold messages and deliver to
   * consumers. Declaring creates a queue if it doesn't already exist, or ensures that an
   * existing queue matches the same parameters For more information, visit
   * https://pkg.go.dev/github.com/rabbitmq/amqp091-go#Channel.QueueDeclare
   */
  readonly queueDeclare?: AMQPQueueDeclareConfig;
  /**
   * Routing key for bindings
   */
  readonly routingKey: string;
  /**
   * TLS configuration for the amqp client.
   */
  readonly tls?: TLSConfig;
  /**
   * URL for rabbitmq service
   */
  readonly url?: string;
  /**
   * URLSecret is secret reference for rabbitmq service URL
   */
  readonly urlSecret?: SecretKeySelector;
}
