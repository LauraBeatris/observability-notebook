# Implementing Observability

There are some steps in order to start implementing observability:

1. **Foundational understanding of what observability is and isn't**: Adding a new tool doesn't necessarily solve things unless people understand the motivation and understand how they are going to use it  
2. **Add OpenTelemetry SDK to your application**: OpenTelemetry is a vendor neutral open source SDK that allows you generate this telemetry data whether the metrics formatter, logs formatter or tracer formatter. The idea is that it is a common language for being able to produce this data, to transmit it around, and to propagate that state and context between different microservices

When you add OpenTelemetry to your application, you're not locking yourself into any pick or solution you're making an investment in your future. In general, it does a good job of handling kind of that automatic generation of trace span for your application based off of the frameworks that you're using, so you can have kind of this rich data about what requests are flowing

1. **Pick a place to send that data:** There are a wide number of options, like open-source solutions such as Jaeger, however the problem with some open-source solutions is that they are great for visualising individual traces, but that it's not necessarily going to provide a comprehensive replacement for your existing monitoring workflows, because people often need to understand what's the aggregate view of my system as a whole, and then zoom into that trace and Jaeger can fulfil this image of the trace development
    
    Basically, any backend that supports OpenTelemetry is going to be a place that you can send that data to, since it's vendor neutral, you can actually send to more than one provider at the same and see which one you like
