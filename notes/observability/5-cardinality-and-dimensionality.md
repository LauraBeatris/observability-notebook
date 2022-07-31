# Cardinality and Dimensionality 

**Cardinality** is the uniqueness of a particular value, eg: Customer ID or transaction ID, those have very high cardinality cause they are very unique

When you're instrumenting your code, you should feel free to add as many attributes, add as many key-value pairs as you like to really explain, as you go along, what's going on in your code and kind of leave those breadcrumbs

The reason why people have hesitated to do that in the past, at least with kind traditional monitoring systems, is that monitoring systems bill you by the number of distinct key-value pairs that occur on each metric that you were recording, so that's caused people to either emit these key-value pairs to logs where they get lost or to not record them at all

When we think about **high dimensionally**, it's about being encouraged to sprinkle these annotations throughout your code and to encode as many keys are you like

However, even if you reduce the number of keys in a metrics-based system, it turns out that if you have a lot of distinct values like user ID, then your metric system has to create a time series for each distinct user and track it forever even if that user has only appeared once, therefore metric systems penalize you for a having a high cardinality dimension 

One of the main pieces of push back against wide events in observability was this idea of scaling linearly in the amount of traffic my service receives, however that's where another innovation comes into play which is sampling, about how you can have it not scale linearly with the size of the service

> The problem with high cardinality is, if a combination of values only appears once, you're paying all this overhead to sore the name of the index

Being able to gather all telemetry data, and having a data store that can handle that is the most important step, however there might be some things that you need to do at scale, like sampling

> If we start with an outcome, what we're getting at is "data-driven debugging" and we're stepping away fro, debugging by intuition" and going towards "debugging by hypothesis”

So in a nutshell:
- **Cardinality**: The number of distinct values per key
- **Dimensionality**: The number of distinct keys

An ideal system that supports observability should allow these basically unlimited cardinality and need a high amount of dimensionality  
