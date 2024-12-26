import React from "react";
import { PatternPage } from "../../components/PatternPage";


export default function Builder() {
  return (
    <PatternPage
      title="Builder Pattern in Java: Crafting Custom Objects with Clarity"
      shortTitle="Builder"
      description="Discover the Builder design pattern in Java, a powerful creational pattern that simplifies object construction. Learn how to separate the construction of a complex object from its representation with practical examples and use cases."
      category="Creational"
      tags={["Gang of Four", "Object composition", "Instanciation"]}
      alsoKnownAs={[
      ]}
      intent="The Builder design pattern in Java, a fundamental creational pattern, allows for the step-by-step construction of complex objects. It separates the construction of a complex object from its representation so that the same construction process can create different representations."
      explanation="The Java Builder pattern is particularly useful in scenarios where object creation involves numerous parameters. It allows you to create different flavors of an object while avoiding constructor pollution. Useful when there could be several flavors of an object. Or when there are a lot of steps involved in creation of an object."
      programmaticExample={`
  public static void main(String[] args) {

    var mage = new Hero.Builder(Profession.MAGE, "Riobard")
            .withHairColor(HairColor.BLACK)
            .withWeapon(Weapon.DAGGER)
            .build();
    LOGGER.info(mage.toString());

    var warrior = new Hero.Builder(Profession.WARRIOR, "Amberjill")
            .withHairColor(HairColor.BLOND)
            .withHairType(HairType.LONG_CURLY).withArmor(Armor.CHAIN_MAIL).withWeapon(Weapon.SWORD)
            .build();
    LOGGER.info(warrior.toString());

    var thief = new Hero.Builder(Profession.THIEF, "Desmond")
            .withHairType(HairType.BALD)
            .withWeapon(Weapon.BOW)
            .build();
    LOGGER.info(thief.toString());
}    
`}
      whenToUse={[
        "The Builder pattern is ideal for Java applications requiring complex object creation.",
        "The algorithm for creating a complex object should be independent of the parts that make up the object and how they're assembled.",
        "The construction process must allow different representations for the object that's constructed.",
        "It's particularly useful when a product requires a lot of steps to be created and when these steps need to be executed in a specific sequence."
     ]}
      realWorldApplications={[
        "StringBuilder in Java for constructing strings.",
        "java.lang.StringBuffer used to create mutable string objects."
      ]}
      benefits={[
        "More control over the construction process compared to other creational patterns.",
        "Supports constructing objects step-by-step, defer construction steps or run steps recursively.",
        "Can construct objects that require a complex assembly of sub-objects. The final product is detached from the parts that make it up, as well as their assembly process.",
        "Single Responsibility Principle. You can isolate complex construction code from the business logic of the product"
      ]}
      tradeoffs={[
        "The overall complexity of the code can increase since the pattern requires creating multiple new classes.",
        "May increase memory usage due to the necessity of creating multiple builder objects."
      ]}
      references={[
        { name: "Design Patterns: Elements of Reusable Object-Oriented Software", link: "https://amzn.to/3UACtrU" },
        { name: "Effective Java", link: "https://amzn.to/4cGk2Jz" },
        { name: "Head First Design Patterns: Building Extensible and Maintainable Object-Oriented Software", link: "https://amzn.to/49NGldq" },
        { name: "Refactoring to Patterns", link: "https://amzn.to/3VOO4F5" },
      ]}
      githubLink="https://github.com/Hanaa07/Builder-Design-Pattern"
    />
  )
}

