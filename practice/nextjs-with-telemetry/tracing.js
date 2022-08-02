const openTelemetry = require("@opentelemetry/sdk-node")
const { getNodeAutoInstrumentations } = require("@opentelemetry/auto-instrumentations-node")
const { Resource } = require("@opentelemetry/resources")
const { SemanticResourceAttributes } = require("@opentelemetry/semantic-conventions");
const { OTLPTraceExporter } = require("@opentelemetry/exporter-trace-otlp-http");

const traceExporter = new OTLPTraceExporter({
  url: 'http://localhost:3000/api/traces',
});

const sdk = new openTelemetry.NodeSDK({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: "nextjs-with-telemetry",
  }),
  traceExporter,
  instrumentations: [getNodeAutoInstrumentations({
    "@opentelemetry/instrumentation-http": {
      requestHook: (span, request) => {
        span.setAttributes({
          name: `${request.method} ${request.url || request.path}`,
        })
      },
      startIncomingSpanHook: (request) => {
        return {
          name: `${request.method} ${request.url || request.path}`,
          "request.path": request.url || request.path,
        }
      },
    }
  })]
})

sdk
  .start()
  .then(() => console.log("Tracing initialized"))
  .catch((error) =>
    console.log("Error initializing tracing and starting server", error)
  )
