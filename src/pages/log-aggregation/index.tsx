import React from "react";
import { PatternPage } from "../../components/PatternPage";


export default function LogAggregator() {
  return (
    <PatternPage
      title="Microservices Log Aggregation Pattern in Java: Centralizing Logs for Enhanced Monitoring"
      shortTitle="Microservices Log Aggregation"
      description="Learn about the Microservices Log Aggregation pattern, a method for centralizing log collection and analysis to enhance monitoring, debugging, and operational intelligence in distributed systems."
      category="Integration"
      tags={["Data processing", "Fault tolerance", "Enterprise patterns", "Messaging", "Microservices", "Performance", "Scalability"]}
      alsoKnownAs={[
        "Centralized Logging",
        "Log Management"
      ]}
      intent="Log Aggregation is a crucial microservices design pattern that centralizes the collection, storage, and analysis of logs from multiple sources, facilitating efficient monitoring, debugging, and operational intelligence."
      explanation="The Log Aggregation design pattern centralizes the collection and analysis of log data from multiple applications or services to simplify monitoring and troubleshooting."
      programmaticExample={`
public class CentralLogStore {

  private final List<LogEntry> logs = new ArrayList<>();

  public void storeLog(LogEntry logEntry) {
    logs.add(logEntry);
  }

  public void displayLogs() {
    logs.forEach(System.out::println);
  }
}
The LogAggregator collects logs from various services and stores them in the CentralLogStore. It filters logs based on their log level.

public class LogAggregator {

  private final CentralLogStore centralLogStore;
  private final LogLevel minimumLogLevel;

  public LogAggregator(CentralLogStore centralLogStore, LogLevel minimumLogLevel) {
    this.centralLogStore = centralLogStore;
    this.minimumLogLevel = minimumLogLevel;
  }

  public void collectLog(LogEntry logEntry) {
    if (logEntry.getLogLevel().compareTo(minimumLogLevel) >= 0) {
      centralLogStore.storeLog(logEntry);
    }
  }
}
The LogProducer represents a service that generates logs. It sends the logs to the LogAggregator.

public class LogProducer {

  private final String serviceName;
  private final LogAggregator logAggregator;

  public LogProducer(String serviceName, LogAggregator logAggregator) {
    this.serviceName = serviceName;
    this.logAggregator = logAggregator;
  }

  public void generateLog(LogLevel logLevel, String message) {
    LogEntry logEntry = new LogEntry(serviceName, logLevel, message, LocalDateTime.now());
    logAggregator.collectLog(logEntry);
  }
}
The main application creates services, generates logs, aggregates, and finally displays the logs.

public class App {

  public static void main(String[] args) throws InterruptedException {
    final CentralLogStore centralLogStore = new CentralLogStore();
    final LogAggregator aggregator = new LogAggregator(centralLogStore, LogLevel.INFO);

    final LogProducer serviceA = new LogProducer("ServiceA", aggregator);
    final LogProducer serviceB = new LogProducer("ServiceB", aggregator);

    serviceA.generateLog(LogLevel.INFO, "This is an INFO log from ServiceA");
    serviceB.generateLog(LogLevel.ERROR, "This is an ERROR log from ServiceB");
    serviceA.generateLog(LogLevel.DEBUG, "This is a DEBUG log from ServiceA");

    centralLogStore.displayLogs();
  }
}      
`}
      whenToUse={[
        "Microservices log aggregation is essential in distributed systems for better management and analysis of log data.",
        "Applicable in environments where compliance and auditing require consolidated log data.",
        "Beneficial in systems that require high availability and resilience, ensuring that log data is preserved and accessible despite individual component failures."
     ]}
      realWorldApplications={[
        "Java applications using frameworks like Log4j2 or SLF4J with centralized log management tools such as the ELK stack or Splunk benefit from microservices log aggregation.",
        "Microservices architectures where each service outputs logs that are aggregated into a single system to provide a unified view of the system's health and behavior."
      ]}
      benefits={[
        "Centralizing logs in a microservices environment improves debuggability and traceability across multiple services.",
        "Enhances monitoring capabilities by providing a centralized platform for log analysis.",
        "Facilitates compliance with regulatory requirements for log retention and auditability."
      ]}
      tradeoffs={[
        "Introduces a potential single point of failure if the log aggregation system is not adequately resilient.",
        "Can lead to high data volumes requiring significant storage and processing resources."
      ]}
      references={[
        { name: "Cloud Native Java: Designing Resilient Systems with Spring Boot, Spring Cloud, and Cloud Foundry", link: "https://amzn.to/44vDTat" },
        { name: "Logging in Action: With Fluentd, Kubernetes and more", link: "https://amzn.to/3JQLzdT" },
        { name: "Release It! Design and Deploy Production-Ready Software", link: "https://amzn.to/3Uul4kF" },
        { name: "Pattern: Log aggregation (microservices.io)", link: "https://microservices.io/patterns/observability/application-logging.html" },
      ]}
      githubLink="https://github.com/Hanaa07/Microservices-Log-Aggregation-Design-Pattern"
    />
  )
}

