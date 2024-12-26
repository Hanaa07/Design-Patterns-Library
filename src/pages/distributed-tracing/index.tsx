import React from "react";
import { PatternPage } from "../../components/PatternPage";


export default function DistributedTracing() {
  return (
    <PatternPage
      title="Microservices Distributed Tracing Pattern: Enhancing Visibility in Service Communication"
      shortTitle="Distributed Tracing in Microservices"
      description="Learn how the Distributed Tracing pattern enhances visibility into service communication across microservices. Discover its benefits, implementation examples, and best practices."
      category="Integration"
      tags={["Distributed tracing", "Microservices architecture", "Service communication", "Performance monitoring", "Observability", "Scalability"]}
      alsoKnownAs={[
        "Distributed Request Tracing",
        "End-to-End Tracing"
      ]}
      intent="Distributed tracing aims to monitor and track requests as they flow through different services in a microservices architecture, providing insights into performance, dependencies, and failures."
      explanation="Distributed tracing allows you to follow a request's journey through all the services it interacts with, providing insights into system performance and aiding in debugging."
      programmaticExample={`
//Here's the Order microservice implementation.

@Slf4j
@RestController
public class OrderController {

    private final OrderService orderService;

    public OrderController(final OrderService orderService) {
        this.orderService = orderService;
    }
    
    @PostMapping("/order")
    public ResponseEntity<String> processOrder(@RequestBody(required = false) String request) {
        LOGGER.info("Received order request: {}", request);
        var result = orderService.processOrder();
        LOGGER.info("Order processed result: {}", result);
        return ResponseEntity.ok(result);
    }
}
@Slf4j
@Service
public class OrderService {

    private final RestTemplateBuilder restTemplateBuilder;

    public OrderService(final RestTemplateBuilder restTemplateBuilder) {
        this.restTemplateBuilder = restTemplateBuilder;
    }

    public String processOrder() {
        if (validateProduct() && processPayment()) {
            return "Order processed successfully";
        }
        return "Order processing failed";
    }
    
    Boolean validateProduct() {
        try {
            ResponseEntity<Boolean> productValidationResult = restTemplateBuilder
                    .build()
                    .postForEntity("http://localhost:30302/product/validate", "validating product",
                            Boolean.class);
            LOGGER.info("Product validation result: {}", productValidationResult.getBody());
            return productValidationResult.getBody();
        } catch (ResourceAccessException | HttpClientErrorException e) {
            LOGGER.error("Error communicating with product service: {}", e.getMessage());
            return false;
        }
    }

    Boolean processPayment() {
        try {
            ResponseEntity<Boolean> paymentProcessResult = restTemplateBuilder
                    .build()
                    .postForEntity("http://localhost:30301/payment/process", "processing payment",
                            Boolean.class);
            LOGGER.info("Payment processing result: {}", paymentProcessResult.getBody());
            return paymentProcessResult.getBody();
        } catch (ResourceAccessException | HttpClientErrorException e) {
            LOGGER.error("Error communicating with payment service: {}", e.getMessage());
            return false;
        }
    }
}
//Here's the Payment microservice implementation.

@Slf4j
@RestController
public class PaymentController {

    @PostMapping("/payment/process")
    public ResponseEntity<Boolean> payment(@RequestBody(required = false) String request) {
        LOGGER.info("Received payment request: {}", request);
        boolean result = true;
        LOGGER.info("Payment result: {}", result);
        return ResponseEntity.ok(result);
    }
}
//Here's the Product microservice implementation.

/**
 * Controller for handling product validation requests.
 */
@Slf4j
@RestController
public class ProductController {

    /**
     * Validates the product based on the request.
     *
     * @param request the request body containing product information (can be null)
     * @return ResponseEntity containing the validation result (true)
     */
    @PostMapping("/product/validate")
    public ResponseEntity<Boolean> validateProduct(@RequestBody(required = false) String request) {
        LOGGER.info("Received product validation request: {}", request);
        boolean result = true;
        LOGGER.info("Product validation result: {}", result);
        return ResponseEntity.ok(result);
    }
}      `}
      whenToUse={[
        "When you have a microservices architecture and need to monitor the flow of requests across multiple services.",
        "When troubleshooting performance issues or errors in a distributed system.",
        "When you need to gain insights into system bottlenecks and optimize overall performance."
      ]}
      realWorldApplications={[
        "Monitoring and troubleshooting e-commerce platforms.",
        "Performance monitoring in financial transaction systems.",
        "Observability in large-scale SaaS applications."
      ]}
      benefits={[
        "Provides end-to-end visibility into requests.",
        "Helps in identifying performance bottlenecks.",
        "Aids in debugging and troubleshooting complex systems."
      ]}
      tradeoffs={[
        "Adds overhead to each request due to tracing data.",
        "Requires additional infrastructure (e.g., Zipkin, Jaeger) for collecting and visualizing traces.",
        "Can become complex to manage in large-scale systems."
      ]}
      references={[
        { name: "Building Microservices", link: "https://amzn.to/3UACtrU" },
        { name: "OpenTelemetry Documentation", link: "https://opentelemetry.io/docs/" },
        { name: "Distributed tracing (microservices.io)", link: "https://microservices.io/patterns/observability/distributed-tracing.html" },
      ]}
      githubLink="https://github.com/Hanaa07/Microservices-Distributed-Tracing-Design-Pattern"
    />
  )
}

