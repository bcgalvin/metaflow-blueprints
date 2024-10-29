<div class="hero-image">
   <img src="/blueprints.png" height="250">
</div>

Metaflow Blueprints provides a collection of production-ready infrastructure constructs that integrate Metaflow with event sources [supported by Argo Events](https://argoproj.github.io/argo-events/concepts/event_source/). Built on top of [cdk8s](https://cdk8s.io/docs/latest/) and [cdktf](https://developer.hashicorp.com/terraform/cdktf), Metaflow Blueprints empowers data teams to write infrastructure as code in any of the supported languages (Python, Go, TypeScript). Some of the key benefits of this toolchain include:

:::: tabs

::: tab Infrastructure as (Real) Code, not DSLs or YAML

Through the use of [jsii](https://github.com/aws/jsii), Metaflow Blueprints allows you to define your event-driven infrastructure as code using TypeScript, Python, Java, Go, or .NET. The library is written in TypeScript and compiled to other languages via jsii, ensuring consistent behavior and type safety across all supported languages.

::: code-group
<<< @/snippets/multi-lang/index.ts [TypeScript]
<<< @/snippets/multi-lang/index.py [Python]
<<< @/snippets/multi-lang/index.go [Go]

:::

::: tab IDE support

Argo Events types are imported from the openapi spec, providing rich documentation and autocompletion in addition to the typed Kubernetes objects:

![IDE Support](/ide-support.png)

:::

::: tab Fully Support Existing Tooling

- Import **any** Terraform Module / Provider or Helm Chart / CRD
- Export as HCL or [Terraform Modules](https://developer.hashicorp.com/terraform/cdktf/concepts/modules) to integrate with existing Terraform workflows
- CDK8s compiles to json/yaml Kubernetes manifests to work with any Kubernetes tooling

:::

::: tab Leverage OOP Abstractions

Allows for building powerful abstractions for Argo Events concepts like [filters](https://argoproj.github.io/argo-events/sensors/filters/intro/) and [trigger conditions](https://argoproj.github.io/argo-events/sensors/trigger-conditions/):

<<< @/snippets/oop-abs.ts [TypeScript]

...while also providing escape hatches for more complex use cases:

<<< @/snippets/escape-hatch.ts [TypeScript]

:::

::::
