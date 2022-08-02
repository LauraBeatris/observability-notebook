# Distributed Tracing

> Tracing is a fundamental software debugging technique wherein various bits of information are logged throughout a program’s execution for the purpose of diagnosing problems

Distributed tracing is a method of tracking the progression of a single request—called a trace as it is handled by various services that make up an application

Tracing in this sense is “distributed” because in order to fulfill its functions, a singular request must often traverse process, machine, and network boundaries

The popularity of microservice architectures has led to a sharp increase in debugging techniques that pinpoint where failures occur along that route and what might be contributing to poor performance

But anytime a request traverses boundaries—such as from onpremises to cloud infrastructure, or from infrastructure you control to SaaS services you don’t, and back again—distributed tracing can be incredibly useful to diagnose problems, optimize code, and build more reliable services

Traces help you understand system interdependencies. Those interdependencies can obscure problems and make them particularly difficult to debug unless the relationships between them are clearly understood

For example, if a downstream database service experiences performance bottlenecks, that latency can cumulatively stack up. By the time that latency is detected three or four layers upstream, identifying which component of the system is the root of the problem can be incredibly difficult because now that same latency is being seen in dozens of other services
