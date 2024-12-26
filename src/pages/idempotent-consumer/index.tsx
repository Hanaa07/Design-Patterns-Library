import React from "react";
import { PatternPage } from "../../components/PatternPage";


export default function IdempotentConsumer() {
  return (
    <PatternPage
      title="Idempotent Consumer Pattern in Java: Ensuring Reliable Message Processing"
      shortTitle="Idempotent Consumer"
      description="Learn about the Idempotent Consumer pattern in Java. Discover how it ensures reliable and consistent message processing, even in cases of duplicate messages."
      category="Messaging"
      tags={["Messaging", "Fault tolerance", "Event-driven", "Reliability"]}
      alsoKnownAs={[
        "Idempotency Pattern"
      ]}
      intent="The Idempotent Consumer pattern is used to handle duplicate messages in distributed systems, ensuring that multiple processing of the same message does not cause undesired side effects. This pattern guarantees that the same message can be processed repeatedly with the same outcome, which is critical in ensuring reliable communication and data consistency in systems where message duplicates are possible."
      explanation="The Idempotent Consumer pattern prevents duplicate messages from causing unintended side effects by ensuring that processing the same message multiple times results in the same outcome. This makes message processing safe in distributed systems where duplicates may occur."
      programmaticExample={`
//public class RequestService {
    // Idempotent: ensures that the same request is returned if it already exists
    public Request create(UUID uuid) {
        Optional<Request> optReq = requestRepository.findById(uuid);
        if (!optReq.isEmpty()) {
            return optReq.get();  // Return existing request
        }
        return requestRepository.save(new Request(uuid));  // Save and return new request
    }

    public Request start(UUID uuid) {
        Optional<Request> optReq = requestRepository.findById(uuid);
        if (optReq.isEmpty()) {
            throw new RequestNotFoundException(uuid);
        }
        return requestRepository.save(requestStateMachine.next(optReq.get(), Request.Status.STARTED));
    }

    public Request complete(UUID uuid) {
        Optional<Request> optReq = requestRepository.findById(uuid);
        if (optReq.isEmpty()) {
            throw new RequestNotFoundException(uuid);
        }
        return requestRepository.save(requestStateMachine.next(optReq.get(), Request.Status.COMPLETED));
    }
}
RequestStateMachine - Managing Order Transitions
The RequestStateMachine ensures that state transitions occur in a valid order. It handles the progression of an order's status, ensuring the correct sequence (e.g., from PENDING to STARTED to COMPLETED).

public class RequestStateMachine {

  public Request next(Request req, Request.Status nextStatus) {
    String transitionStr = String.format("Transition: %s -> %s", req.getStatus(), nextStatus);
    switch (nextStatus) {
      case PENDING -> throw new InvalidNextStateException(transitionStr);
      case STARTED -> {
        if (Request.Status.PENDING.equals(req.getStatus())) {
          return new Request(req.getUuid(), Request.Status.STARTED);  // Valid transition
        }
        throw new InvalidNextStateException(transitionStr);  // Invalid transition
      }
      case COMPLETED -> {
        if (Request.Status.STARTED.equals(req.getStatus())) {
          return new Request(req.getUuid(), Request.Status.COMPLETED);  // Valid transition
        }
        throw new InvalidNextStateException(transitionStr);  // Invalid transition
      }
      default -> throw new InvalidNextStateException(transitionStr);  // Invalid status
    }
  }
}
Main Application - Running the Idempotent Consumer Example
In the main application, we demonstrate how the RequestService can be used to perform idempotent operations. Whether the order creation or state transition is invoked once or multiple times, the result is consistent and does not produce unexpected side effects.

Request req = requestService.create(UUID.randomUUID());
// Try creating the same Request again with the same UUID (idempotent operation)
requestService.create(req.getUuid());
// Again, try creating the same Request (idempotent operation, no new Request should be created)
requestService.create(req.getUuid());
LOGGER.info("Nb of requests : {}", requestRepository.count()); // 1, processRequest is idempotent
// Attempt to start the Request (the first valid transition)
req = requestService.start(req.getUuid());
// Try to start the Request again, which should throw an exception since it's already started
try {
  req = requestService.start(req.getUuid());
} catch (InvalidNextStateException ex) {
  // Log an error message when trying to start a request twice
  LOGGER.error("Cannot start request twice!");
}
// Complete the Request (valid transition from STARTED to COMPLETED)
req = requestService.complete(req.getUuid());
// Log the final status of the Request to confirm it's been completed
LOGGER.info("Request: {}", req);      
`}
      whenToUse={[
     ]}
      realWorldApplications={[
        "Monitoring and troubleshooting e-commerce platforms.",
        "Performance monitoring in financial transaction systems.",
        "Observability in large-scale SaaS applications."
      ]}
      benefits={[
        "Reliability: Ensures that messages can be processed without unwanted side effects from duplicates.",
        "Consistency: Maintains data integrity by ensuring that duplicate messages do not cause redundant updates or actions.",
        "Fault Tolerance: Handles message retries gracefully, preventing them from causing errors."
      ]}
      tradeoffs={[
        "State Management: Requires storing processed message IDs, which can add memory overhead.",
        "Complexity: Implementing deduplication mechanisms can increase the complexity of the system.",
        "Scalability: In high-throughput systems, maintaining a large set of processed messages can impact performance and resource usage."
      ]}
      references={[
        { name: "Enterprise Integration Patterns: Designing, Building, and Deploying Messaging Solutions", link: "https://amzn.to/4dznP2Y" },
        { name: "Designing Data-Intensive Applications", link: "https://amzn.to/3UADv7Q" },
      ]}
      githubLink="https://github.com/Hanaa07/Microservices-Idempotent-Consumer-Design-Pattern"
    />
  )
}

