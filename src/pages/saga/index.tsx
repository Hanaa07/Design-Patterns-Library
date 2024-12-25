import React from "react";
import { PatternPage } from "../../components/PatternPage";


export default function Saga() {
  return (
    <PatternPage
      title="Saga Pattern in Java: Mastering Long-Running Transactions in Distributed Systems"
      shortTitle="Saga"
      description="Explore the Saga pattern in Java for managing distributed transactions across microservices with resilience and fault tolerance. Learn how the Saga pattern ensures data consistency without locking resources."
      category="Resilience"
      tags={["Decoupling", "Asynchronous", "Client-server", "Fault tolerance", "Transactions", "Integration", "Microservices"]}
      alsoKnownAs={[
      ]}
      intent="To manage and coordinate distributed transactions across multiple services in a fault-tolerant and reliable manner."
      explanation="The Saga pattern in Java coordinates distributed transactions across microservices using a sequence of events and compensating actions to ensure data consistency and fault tolerance."
      programmaticExample={`
//The SagaApplication class has a main method for running the example.

@Slf4j
public class SagaApplication {

  public static void main(String[] args) {
    var sd = serviceDiscovery();
    var service = sd.findAny();
    var goodOrderSaga = service.execute(newSaga("good_order"));
    var badOrderSaga = service.execute(newSaga("bad_order"));
    LOGGER.info("orders: goodOrder is {}, badOrder is {}",
        goodOrderSaga.getResult(), badOrderSaga.getResult());
  }

  private static Saga newSaga(Object value) {
    return Saga
        .create()
        .chapter("init an order").setInValue(value)
        .chapter("booking a Fly")
        .chapter("booking a Hotel")
        .chapter("withdrawing Money");
  }

  private static ServiceDiscoveryService serviceDiscovery() {
    var sd = new ServiceDiscoveryService();
    return sd
        .discover(new OrderService(sd))
        .discover(new FlyBookingService(sd))
        .discover(new HotelBookingService(sd))
        .discover(new WithdrawMoneyService(sd));
  }
}      
  `}
      whenToUse={[
        "When you have a complex transaction that spans multiple microservices.",
        "When you need to ensure data consistency across services without using a traditional two-phase commit.",
        "When you need to handle long-running transactions in an asynchronous manner."
      ]}
      realWorldApplications={[
        "E-commerce platforms managing orders, inventory, and payment services.",
        "Banking systems coordinating between account debits and credits across multiple services.",
        "Travel booking systems managing flights, hotels, and car rentals across multiple services."
      ]}
      benefits={[
        "Improved fault tolerance and reliability.",
        "Scalability due to decoupled services.",
        "Flexibility in handling complex transactions."
      ]}
      tradeoffs={[
        "Increased complexity in handling compensating transactions.",
        "Requires careful design to handle partial failures and rollback scenarios.",
        "Potential latency due to asynchronous nature."
      ]}
      references={[
        { name: "Design Patterns: Elements of Reusable Object-Oriented Software", link: "https://amzn.to/3UACtrU" },
      ]}
      githubLink="https://github.com/yourusername/event-aggregator-example"
    />
  )
}

