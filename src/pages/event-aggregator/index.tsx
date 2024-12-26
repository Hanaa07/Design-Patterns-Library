import React from "react";
import { PatternPage } from "../../components/PatternPage";


export default function EventAggregator() {
  return (
    <PatternPage
      title="Microservices Aggregator Pattern in Java: Building Efficient Composite Services in Java"
      shortTitle="Microservices Aggregator"
      description="Learn about the Microservices Aggregator Design Pattern with Java examples. Understand its intent, real-world applications, benefits, and trade-offs for scalable system design."
      category="Architectural"
      tags={["Decoupling", "API design", "Client-server", "Data processing", "Reactive", "Integration", "Microservices", "Scalability"]}
      alsoKnownAs={[
        "API Composition",
      ]}
      intent="The Microservices Aggregator pattern helps aggregate responses from multiple microservices into a single unified response, optimizing client-server interactions in scalable systems."
      explanation="In a travel booking platform, an Aggregator Microservice consolidates data from flights, hotels, and car rentals microservices, providing a seamless user experience and enhancing scalability. Instead of the user making separate requests to each service, the platform employs an Aggregator Microservice. This microservice calls each of these services, collects their responses, and then consolidates the information into a single, unified response that is sent back to the user. This simplifies the user experience by providing all necessary travel details in one place and reduces the number of direct interactions the user needs to have with the underlying services."
      programmaticExample={`
//Let's start from the data model. Here's our Product.

public class Product {
    private String title;
    private int productInventories;
    // Other properties and methods...
}

//Next we can introduce our Aggregator microservice. It contains clients ProductInformationClient and ProductInventoryClient for calling respective microservices.

@RestController
public class Aggregator {

    @Resource
    private ProductInformationClient informationClient;

    @Resource
    private ProductInventoryClient inventoryClient;

    @RequestMapping(path = "/product", method = RequestMethod.GET)
    public Product getProduct() {

        var product = new Product();
        var productTitle = informationClient.getProductTitle();
        var productInventory = inventoryClient.getProductInventories();

        //Fallback to error message
        product.setTitle(requireNonNullElse(productTitle, "Error: Fetching Product Title Failed"));

        //Fallback to default error inventory
        product.setProductInventories(requireNonNullElse(productInventory, -1));

        return product;
    }
}

//Here's the essence of information microservice implementation. Inventory microservice is similar, it just returns inventory counts.

@RestController
public class InformationController {
    @RequestMapping(value = "/information", method = RequestMethod.GET)
    public String getProductTitle() {
        return "The Product Title.";
    }
}
//Now calling our Aggregator REST API returns the product information.

# Example bash call
curl http://localhost:50004/product

# Example output
{"title":"The Product Title.","productInventories":5}
      `}
      whenToUse={[
        "The Microservices Aggregator pattern is ideal for scenarios requiring composite responses from multiple microservices, such as in e-commerce and dashboard applications where aggregated data enhances user experience and system efficiency."
      ]}
      realWorldApplications={[
        "Microservices Aggregator collects pieces of data from various microservices and returns an aggregate for processing."
      ]}
      benefits={[
        "Simplified Client: Clients interact with just one service rather than managing calls to multiple microservices, which simplifies client-side logic.",
        "Reduced Latency: By aggregating responses, the number of network calls is reduced, which can improve the application's overall latency.",
        "Decoupling: Clients are decoupled from the individual microservices, allowing for more flexibility in changing the microservices landscape without impacting clients.",
        "Centralized Logic: Aggregation allows for centralized transformation and logic application on the data collected from various services, which can be more efficient than handling it in the client or spreading it across multiple services."
      ]}
      tradeoffs={[
        "Single Point of Failure: The aggregator service can become a bottleneck or a single point of failure if not designed with high availability and scalability in mind.",
        "Complexity: Implementing an aggregator can introduce complexity, especially in terms of data aggregation logic and error handling when dealing with multiple services."
      ]}
      references={[
        { name: "Building Microservices: Designing Fine-Grained Systems", link: "https://amzn.to/43aGpSR" },
        { name: "Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems", link: "https://amzn.to/3y6yv1z" },
        { name: "Designing Distributed Systems: Patterns and Paradigms for Scalable, Reliable Services", link: "https://amzn.to/3T9g9Uj" },
        { name: "Microservice Architecture: Aligning Principles, Practices, and Culture", link: "https://amzn.to/3T9jZNi" },
        { name: "Microservices Patterns: With examples in Java", link: "https://amzn.to/4a5LHkP" },
        { name: "Pattern: API Composition", link: "https://microservices.io/patterns/data/api-composition.html" },
        { name: "Production-Ready Microservices: Building Standardized Systems Across an Engineering Organization", link: "https://amzn.to/4a0Vk4c" },
        { name: "Microservice Design Patterns (Arun Gupta)", link: "http://web.archive.org/web/20190705163602/http://blog.arungupta.me/microservice-design-patterns/" },
      ]}
      githubLink="https://github.com/Hanaa07/Microservices-Aggregrator-Design-Pattern"
    />
  )
}

