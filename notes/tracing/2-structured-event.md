# Structured Events

A structured event is a fundamental data type for telemetry and its necessary to build an observable system

In an observable system, you must be able to iteratively explore system aspects ranging from high-level aggregate performance all the way down to the raw data used in individual requests

The technical requirement making that possible starts with the data format needed for observability: the arbitrarily wide structured event

> An event is a record of everything that occurred while one particular request interacted with your service

### How events are created

To create that record, you start by initializing an empty map right at the beginning, when the request first enters your service. During the lifetime of that request, any interesting details about what occurred—unique IDs, variable values, headers, every parameter passed by the request, the execution time, any calls made to remote services, the execution time of those remote calls, or any other bit of context that may later be valuable in debugging—get appended to that map

Then, when the request is about to exit or error, that entire map is captured as a rich record of what just happened. The data written to that map is organized and formatted, as key-value pairs, so that it’s easily searchable: in other words, the data should be structured. That’s a structured event

### Debugging with structured events

As you debug problems in your service, you will compare structured events to one another to find anomalies. When some events behave significantly differently from others, you will then work to identify what those outliers have in common

Exploring those outliers requires filtering and grouping by different dimensions—and combinations of dimensions—contained within those events that might be relevant to your investigation

Information that is helpful for investigators may have runtime information not specific to any given request (such as
container information or versioning information), as well as information about each request that passes through the service (such as shopping cart ID, user ID, or session token). Both types of data are useful for debugging

### Useful properties for debugging

When using structured events to understand service behavior, remember that the model is to initialize an empty blob and record anything that may be relevant for later debugging. That can mean pre-populating the blob with data known **as the request enters** your service: request parameters, environmental information, runtime internals, host/container statistics, etc

**As the request is executing**, other valuable information may be discovered: user ID, shopping cart ID, other remote services to be called to render a result, or any various bits of information that may help you find and identify this request in the future

**As the request exits your service**, or returns an error, there are several bits of data about how the unit of work was performed: duration, response code, error messages, etc

If a spike of errors occurs, you may need to slice across various event dimensions to find out what they all have in common. To make those correlations, your observability solution will need the ability to handle fields with [high cardinality](../observability/5-cardinality-and-dimensionality.md)

For example, to get to the source of an issue, you may need to create a query that finds “all Canadian users, running iOS11 version 11.0.4, using the French language pack, who installed the app last Tuesday, running firmware version 1.4.101, who are storing photos on shard3 in region us-west-1.” Every single one of those constraints is a high-cardinality dimension
