# Metrics

> Scalar values collected to represent system state, with tags optionally appended for grouping and searching those numbers

Metrics are the staple upon which **traditional monitoring** of software systems has been built

The main limitation of a metric is that it's an pre-aggregated measure. The numerical values generated by a metric reflect an aggregated report of system state over a predefined period of time

Those metrics represent measures that aren't connected with each other, which makes it harder to reconstruct executions of what exactly happened during the same request

As aggregate numerical representations of predefined relationships over predefined periods of time, metrics serve as only one narrow view of one system property. Their granularity is too large and their ability to present system state in alternate views is too rigid to achieve observability. Metrics are too limiting to serve as the fundamental building block of observability
