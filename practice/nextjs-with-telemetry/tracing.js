const openTelemetry = require("@opentelemetry/sdk-node")
const {
  getNodeAutoInstrumentations,
} = require("@opentelemetry/auto-instrumentations-node")
const { Resource } = require("@opentelemetry/resources")
const {
  SemanticResourceAttributes,
} = require("@opentelemetry/semantic-conventions")

const sdk = new openTelemetry.NodeSDK({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: "nextjs-with-telemetry",
  })
})

sdk
  .start()
  .then(() => console.log("Tracing initialized"))
  .catch((error) =>
    console.log("Error initializing tracing and starting server", error)
  )
