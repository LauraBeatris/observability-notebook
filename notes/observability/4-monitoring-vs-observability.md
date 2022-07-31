# Monitoring and Observability 

> Observability is a superset of the capabilities that monitoring would provide, thus they are not synonymous 

Monitoring in the past was used in a way that engineers you get too caught in visual representations and presume things, trying to figure out when something has broken, troubleshooting by intuition, but not necessarily being able to answer why

People had considered for a long time, "I've used my monitors to tell you something has gone wrong, and I used my logs to figure out what happens", but this didn't scale when the industry started to adapt to complex distributed systems, logging wasn't saving anymore since it takes forever to search through, it doesn't give you causality of what caused what

> Traditional monitoring is more reactive, getting alerted and only seeing side effects of certain things happening, while observability is more investigative

Along the years, observability started to push towards a move data-driven, hypothesis-driven approach, scientific approach to troubleshooting

Setting goals for user experience, or service-level objectives (SLOs), allows you to alert only in those and not necessarily on every metric you collect

When you have your SLOs, you define what an acceptable level of success is, eg: 
- SLO: "We aim for a ingest pipeline to be 99.99% reliable, that means no more than one in 10,000 packets of the upcoming telemetry are dropped"
- Emergency situation: But if we start seeing an elevated error rate, for instance, a hundred thousand of packets are being dropped per hour, and it's only allowed to drop 1 million of telemetry packets per month, so that means that we're going to exhaust that

SLOs allows to differentiate between **expected levels of errors and unexpected levels of errors**

You need observability to understand from the bottom-up what's happening, and you need SLOs to understand from top-down, whether or not you should care

> No matter how much data you have, you can't practice observability if you don't analyze and slice and dice it in real time

The key difference between monitoring and observability is moving from “We have to push new code to understand things" to actually "We've already added the right instrumentation to debug things that we never anticipated would be a problem when we wrote the instrumentation”
