import React from "react";
import { PatternPage } from "../../components/PatternPage";


export default function Strategy() {
  return (
    <PatternPage
      title="Strategy Pattern in Java: Streamlining Object Behaviors with Interchangeable Algorithms"
      shortTitle="Strategy"
      description="Explore the Strategy design pattern in Java with a detailed guide and practical examples. Learn how to implement flexible and interchangeable algorithms effectively in your Java applications for enhanced design and maintenance."
      category="Behavioral"
      tags={["Decoupling", "Extensibility", "Gang of Four", "Interface", "Polymorphism"]}
      alsoKnownAs={[
        "Policy"
      ]}
      intent="Define a family of algorithms in Java, encapsulate each one, and make them interchangeable to enhance software development using the Strategy design pattern. Strategy lets the algorithm vary independently of the clients that use it."
      explanation="In computer programming, the strategy pattern (also known as the policy pattern) is a behavioral software design pattern that enables selecting an algorithm at runtime."
      programmaticExample={`
  @Slf4j
public class App {

  private static final String RED_DRAGON_EMERGES = "Red dragon emerges.";
  private static final String GREEN_DRAGON_SPOTTED = "Green dragon spotted ahead!";
  private static final String BLACK_DRAGON_LANDS = "Black dragon lands before you.";

  public static void main(String[] args) {
    // GoF Strategy pattern
    LOGGER.info(GREEN_DRAGON_SPOTTED);
    var dragonSlayer = new DragonSlayer(new MeleeStrategy());
    dragonSlayer.goToBattle();
    LOGGER.info(RED_DRAGON_EMERGES);
    dragonSlayer.changeStrategy(new ProjectileStrategy());
    dragonSlayer.goToBattle();
    LOGGER.info(BLACK_DRAGON_LANDS);
    dragonSlayer.changeStrategy(new SpellStrategy());
    dragonSlayer.goToBattle();

    // Java 8 functional implementation Strategy pattern
    LOGGER.info(GREEN_DRAGON_SPOTTED);
    dragonSlayer = new DragonSlayer(
        () -> LOGGER.info("With your Excalibur you severe the dragon's head!"));
    dragonSlayer.goToBattle();
    LOGGER.info(RED_DRAGON_EMERGES);
    dragonSlayer.changeStrategy(() -> LOGGER.info(
        "You shoot the dragon with the magical crossbow and it falls dead on the ground!"));
    dragonSlayer.goToBattle();
    LOGGER.info(BLACK_DRAGON_LANDS);
    dragonSlayer.changeStrategy(() -> LOGGER.info(
        "You cast the spell of disintegration and the dragon vaporizes in a pile of dust!"));
    dragonSlayer.goToBattle();

    // Java 8 lambda implementation with enum Strategy pattern
    LOGGER.info(GREEN_DRAGON_SPOTTED);
    dragonSlayer.changeStrategy(LambdaStrategy.Strategy.MELEE_STRATEGY);
    dragonSlayer.goToBattle();
    LOGGER.info(RED_DRAGON_EMERGES);
    dragonSlayer.changeStrategy(LambdaStrategy.Strategy.PROJECTILE_STRATEGY);
    dragonSlayer.goToBattle();
    LOGGER.info(BLACK_DRAGON_LANDS);
    dragonSlayer.changeStrategy(LambdaStrategy.Strategy.SPELL_STRATEGY);
    dragonSlayer.goToBattle();
  }
}    
`}
      whenToUse={[
        "You need to use different variants of an algorithm within an object and want to switch algorithms at runtime.",
        "There are multiple related classes that differ only in their behavior.",
        "An algorithm uses data that clients shouldn't know about.",
        "A class defines many behaviors and these appear as multiple conditional statements in its operations."
     ]}
      realWorldApplications={[
        "Java's java.util.Comparator interface is a common example of the Strategy pattern.",
        "In GUI frameworks, layout managers (such as those in Java's AWT and Swing) are strategies."
      ]}
      benefits={[
        "Families of related algorithms are reused.",
        "An alternative to subclassing for extending behavior.",
        "Avoids conditional statements for selecting desired behavior.",
        "Allows clients to choose algorithm implementation."
      ]}
      tradeoffs={[
        "Clients must be aware of different Strategies.",
        "Increase in the number of objects."
      ]}
      references={[
        { name: "Design Patterns: Elements of Reusable Object-Oriented Software", link: "https://amzn.to/3w0pvKI" },
        { name: "Functional Programming in Java", link: "https://amzn.to/3JUIc5Q" },
        { name: "Head First Design Patterns: Building Extensible and Maintainable Object-Oriented Software", link: "https://amzn.to/49NGldq" },
        { name: "Patterns of Enterprise Application Architecture", link: "https://amzn.to/3WfKBPR" },
        { name: "Refactoring to Patterns", link: "https://amzn.to/3VOO4F5" },
      ]}
      githubLink="https://github.com/Hanaa07/Strategy-Design-Pattern"
    />
  )
}

