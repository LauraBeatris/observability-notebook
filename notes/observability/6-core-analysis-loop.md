# Core Analysis Loop 

Observability really helps you form and test hypotheses really quickly, because if you're trying to debug an incident, and the error budget has gone off, then one of the things you might start asking is what's special about the requests that are failing

It gives you the power to see on requests that failed to correlate which properties were most associated, instead of looking at a wall of graphs to figure out which lines wiggle at the same time

Try and experiment, analyze and slice your data in particular way, and you'll get your result, if it doesn't work out, try again, and then ultimately at the end of the day, you can visualize this in either kind of aggregated metrics, like what's the distribution is, or you can go and look at the raw data and see it kind of in a tabular log like format of what are each of the fields and the relevant queries that matched, or you can look at it as a trace waterfall

So it starts with forming your hypothesis, narrowing down the data, and then looking at the data to confirm your hypothesis, until you find the root cause or a proximate set of triggers that may have tipped the system over the edge
