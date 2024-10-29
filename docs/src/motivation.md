---
prev:
  text: 'Introduction'
  link: '/'
---

# Motivation

Events have been foundational to Metaflow's success story. When the [`@schedule`](https://docs.metaflow.org/production/scheduling-metaflow-flows/introduction) decorator was introduced in the 2.1.0 release in mid 2020, it provided a powerful abstraction that allowed data scientists to easily transform a prototype on their laptop to a scheduled workflow with a single decorator and cli command.

Metaflow expanded its [event-driven capabilities](https://docs.metaflow.org/production/event-triggering) a few years laterwith the addition of the `@trigger` and `@trigger_on_finish` decorators. These extend the pattern to flow orchestration, enabling teams to build modular workflows that can trigger one another. This also opened up new opportunities for data scientists to author generic reusable flows that can be used across teams and projects.

Metaflow's story with *internal* events aligns really well with the classic Rich Hickey Simple Made Easy talk. Through clean abstractions like `@schedule` and `@trigger_on_finish`, data scientists can compose sophisticated event-driven workflows without wrestling with orchestration complexity.

Yet a significant gap remains when it comes to *external* events. While Metaflow technically supports external triggers, it is up to the developer to create the Argo Events resources and wire them up to any external systems. This is neither simple nor easy, and there are no examples to follow or best practices to guide developers through the process. This makes sense; it is really hard to anticipate all of the different ways teams can configure Kubernetes, cloud infrastructure, and handle permissions for external systems.

---

The goal of Metaflow Blueprints is to address this gap by providing a set of rock-solid primitives that connect external events to Metaflow, independent of the core Metaflow repository. As mentioned in the [toolchain](/#fully-support-existing-tooling) section, users can use their preferred programming language and selectively export just the Kubernetes manifests to set up Argo Events resources or the resulting Terraform module / HCL to integrate with existing Terraform workflows.

Since we can leverage any existing Terraform provider and Argo Events provides generic event sources, we can support a wide variety of external systems. Some examples include:

| Provider | Event Source | Pattern |
|----------|--------------|---------|
| dbt Cloud | Webhook | Job completion events |
| Snowflake | Webhook | Data changes in tables/views |
| Fivetran | Webhook | Data changes in Fivetran connector |
| AWS S3 | SQS | New files in S3 |
| AWS DynamoDB | SQS | New items in DynamoDB |
| GCP PubSub | PubSub | New messages in PubSub |
|...|...|...|

Said another way, the goal of Metaflow Blueprints is to provide the necessary pencils and instructions to make it easier for the Metaflow community to draw the owl.

![How to draw an owl](/how-to-draw-an-owl.jpg)
