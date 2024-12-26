import { PatternPage } from "../../components/PatternPage";

export default function CircuitBreaker() {
  return (
    <PatternPage
      title="Circuit Breaker Pattern in Java: Enhancing System Resilience"
      shortTitle="Circuit Breaker"
      description="Learn about the Circuit Breaker pattern in Java design, which ensures fault tolerance and prevents cascading failures in distributed systems and microservices architectures."
      category="Resilience"
      tags={["Cloud distributed", "Fault tolerance", "Microservices", "Retry"]}
      alsoKnownAs={[
        "Fault Tolerance Switch"
      ]}
      intent="The Circuit Breaker pattern is a critical Java design pattern that helps ensure fault tolerance and resilience in microservices and distributed systems. Using Circuit Breaker, it is possible to prevent a system from repeatedly trying to execute an operation likely to fail, allowing it to recover from faults and prevent cascading failures."
      explanation="Circuit Breaker allows graceful handling of failed remote services. It's especially useful when all parts of our application are highly decoupled from each other, and failure of one component doesn't mean the other parts will stop working."
      programmaticExample={`
public static void main(String[] args) {

    var serverStartTime = System.nanoTime();

    var delayedService = new DelayedRemoteService(serverStartTime, 5);
    var delayedServiceCircuitBreaker = new DefaultCircuitBreaker(delayedService, 3000, 2,
        2000 * 1000 * 1000);

    var quickService = new QuickRemoteService();
    var quickServiceCircuitBreaker = new DefaultCircuitBreaker(quickService, 3000, 2,
        2000 * 1000 * 1000);

    //Create an object of monitoring service which makes both local and remote calls
    var monitoringService = new MonitoringService(delayedServiceCircuitBreaker,
        quickServiceCircuitBreaker);

    //Fetch response from local resource
    LOGGER.info(monitoringService.localResourceResponse());

    //Fetch response from delayed service 2 times, to meet the failure threshold
    LOGGER.info(monitoringService.delayedServiceResponse());
    LOGGER.info(monitoringService.delayedServiceResponse());

    //Fetch current state of delayed service circuit breaker after crossing failure threshold limit
    //which is OPEN now
    LOGGER.info(delayedServiceCircuitBreaker.getState());

    //Meanwhile, the delayed service is down, fetch response from the healthy quick service
    LOGGER.info(monitoringService.quickServiceResponse());
    LOGGER.info(quickServiceCircuitBreaker.getState());

    //Wait for the delayed service to become responsive
    try {
      LOGGER.info("Waiting for delayed service to become responsive");
      Thread.sleep(5000);
    } catch (InterruptedException e) {
      LOGGER.error("An error occurred: ", e);
    }
    //Check the state of delayed circuit breaker, should be HALF_OPEN
    LOGGER.info(delayedServiceCircuitBreaker.getState());

    //Fetch response from delayed service, which should be healthy by now
    LOGGER.info(monitoringService.delayedServiceResponse());
    //As successful response is fetched, it should be CLOSED again.
    LOGGER.info(delayedServiceCircuitBreaker.getState());
}
      `}
      whenToUse={[
        "In distributed systems where individual service failures can lead to cascading system-wide failures.",
        "For applications that interact with third-party services or databases that might become unresponsive or slow",
        "In microservices architectures where the failure of one service can affect the availability of others."
      ]}
      realWorldApplications={[
        "Cloud-based services to gracefully handle the failure of external services.",
        "E-commerce platforms to manage high volumes of transactions and dependency on external APIs.",
        "Microservices architectures for maintaining system stability and responsiveness."
      ]}
      benefits={[
        "Prevents the system from performing futile operations that are likely to fail, thus saving resources.",
        "Helps in maintaining the system stability and performance of the application during partial system failures.",
        "Facilitates faster system recovery by avoiding the overwhelming of failing services with repeated requests."
      ]}
      tradeoffs={[
        "The complexity of the system increases as the pattern requires additional logic to detect failures and manage the state of the circuit breaker.",
        "May lead to system degradation if not properly configured, as legitimate requests might be blocked if the circuit is open.",
        "Requires careful tuning of thresholds and timeout periods to balance between responsiveness and protection."
      ]}
      references={[
        { name: "Building Microservices: Designing Fine-Grained Systems", link: "https://amzn.to/43Dx86g" },
        { name: "Microservices Patterns: With examples in Java", link: "https://amzn.to/3xaZwk0" },
        { name: "Release It! Design and Deploy Production-Ready Software", link: "https://amzn.to/4aqTNEP"},
        { name: "Understand CircuitBreaker Design Pattern with Simple Practical Example (ITNEXT)", link: "https://itnext.io/understand-circuitbreaker-design-pattern-with-simple-practical-example-92a752615b42"},
        { name: "Circuit Breaker (Martin Fowler)", link: "https://martinfowler.com/bliki/CircuitBreaker.html"},
        { name: "Fault tolerance in a high volume, distributed system (Netflix)", link: "https://medium.com/netflix-techblog/fault-tolerance-in-a-high-volume-distributed-system-91ab4faae74a"},
        { name: "Circuit Breaker pattern (Microsoft)", link: "https://docs.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker"},
      ]}
      githubLink="https://github.com/Hanaa07/Circuit-Breaker-Design-Pattern"
    />
  )
}

