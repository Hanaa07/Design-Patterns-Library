import React from "react";
import { PatternPage } from "../../components/PatternPage";


export default function Factory() {
  return (
    <PatternPage
      title="Factory Pattern in Java: Streamlining Object Creation"
      shortTitle="Factory"
      description="Learn the Factory Design Pattern in Java with detailed examples and explanations. Understand how to create flexible and scalable code using the Factory Pattern. Ideal for developers looking to improve their object-oriented design skills."
      category="Creational"
      tags={["Abstraction", "Encapsulation", "Gang of Four", "Instantiation", "Polymorphism"]}
      alsoKnownAs={[
        "Centralized Logging",
        "Log Management"
      ]}
      intent="The Factory Design Pattern in Java is a creational pattern that defines an interface for creating an object but allows subclasses to alter the type of objects that will be created. This pattern promotes flexibility and scalability in your codebase."
      explanation="Factory is an object for creating other objects – formally a factory is a function or method that returns objects of a varying prototype or class."
      programmaticExample={`
public interface Coin {
  String getDescription();
}
public class GoldCoin implements Coin {

  static final String DESCRIPTION = "This is a gold coin.";

  @Override
  public String getDescription() {
    return DESCRIPTION;
  }
}
public class CopperCoin implements Coin {
   
  static final String DESCRIPTION = "This is a copper coin.";

  @Override
  public String getDescription() {
    return DESCRIPTION;
  }
}
Enumeration below represents types of coins that we support (GoldCoin and CopperCoin).

@RequiredArgsConstructor
@Getter
public enum CoinType {

  COPPER(CopperCoin::new),
  GOLD(GoldCoin::new);

  private final Supplier<Coin> constructor;
}
Then we have the static method getCoin to create coin objects encapsulated in the factory class CoinFactory.

public class CoinFactory {

  public static Coin getCoin(CoinType type) {
    return type.getConstructor().get();
  }
}
Now, in the client code, we can generate various types of coins using the factory class.

public static void main(String[] args) {
    LOGGER.info("The alchemist begins his work.");
    var coin1 = CoinFactory.getCoin(CoinType.COPPER);
    var coin2 = CoinFactory.getCoin(CoinType.GOLD);
    LOGGER.info(coin1.getDescription());
    LOGGER.info(coin2.getDescription());
}    
`}
      whenToUse={[
        "Use the Factory Design Pattern in Java when the class does not know beforehand the exact types and dependencies of the objects it needs to create.",
        "When a method returns one of several possible classes that share a common super class and wants to encapsulate the logic of which object to create.",
        "The pattern is commonly used when designing frameworks or libraries to give the best flexibility and isolation from concrete class types."
     ]}
      realWorldApplications={[
        "Java applications using frameworks like Log4j2 or SLF4J with centralized log management tools such as the ELK stack or Splunk benefit from microservices log aggregation.",
        "Microservices architectures where each service outputs logs that are aggregated into a single system to provide a unified view of the system's health and behavior."
      ]}
      benefits={[
        "Implementing the Factory Pattern in your Java application reduces coupling between the implementation and the classes it uses.",
        "Supports the Open/Closed Principle, as the system can introduce new types without changing existing code."
      ]}
      tradeoffs={[
        "The code can become more complicated due to the introduction of multiple additional classes.",
        "Overuse can make the code less readable if the underlying complexity of the object creation is low or unnecessary."
      ]}
      references={[
        { name: "Design Patterns: Elements of Reusable Object-Oriented Software", link: "https://amzn.to/3w0pvKI" },
        { name: "Effective Java", link: "https://amzn.to/4cGk2Jz" },
        { name: "Head First Design Patterns: Building Extensible and Maintainable Object-Oriented Software", link: "https://amzn.to/49NGldq" },
      ]}
      githubLink="https://github.com/Hanaa07/Factory-Design-Pattern"
    />
  )
}

