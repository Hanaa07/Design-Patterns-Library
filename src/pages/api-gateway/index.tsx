import { PatternPage } from "../../components/PatternPage";

export default function ApiGateway() {
  return (
    <PatternPage
      title="Microservices API Gateway Pattern in Java: Simplifying Service Access with a Unified Endpoint"
      shortTitle="Microservice API Gateway"
      description="Learn how the API Gateway pattern simplifies client-side development, enhances security, and optimizes communication in microservices architecture. Explore examples, benefits, and best practices."
      category="Integration"
      tags={["API design", "Cloud distributed", "Decoupling", "Enterprise patterns", "Integration", "Microservices", "Scalability", "Security"]}
      alsoKnownAs={[
        "Event Channel",
        "Event Central",
        "Message Hub"
      ]}
      intent="The API Gateway design pattern aims to provide a unified interface to a set of microservices within a microservices architecture. It acts as a single entry point for clients, routing requests to the appropriate microservices and aggregating results, thereby simplifying the client-side code."
      explanation="In a large e-commerce platform, an API Gateway is used as the single entry point for all client requests, simplifying client-side development. When a user visits the site or uses the mobile app, their requests for product information, user authentication, order processing, and payment are all routed through the API Gateway. The API Gateway handles tasks such as user authentication, rate limiting to prevent abuse, and logging for monitoring purposes, enhancing overall security optimization. This setup simplifies the client interface and ensures that all backend microservices can evolve independently without affecting the client directly, thereby enhancing microservices communication. This also enhances security by providing a centralized point to enforce policies and monitor traffic."
      programmaticExample={`
//Here's the Image microservice implementation.

public interface ImageClient {
    String getImagePath();
}

public class ImageClientImpl implements ImageClient {
    @Override
    public String getImagePath() {
        var httpClient = HttpClient.newHttpClient();
        var httpGet = HttpRequest.newBuilder()
                .GET()
                .uri(URI.create("http://localhost:50005/image-path"))
                .build();

        try {
            var httpResponse = httpClient.send(httpGet, BodyHandlers.ofString());
            return httpResponse.body();
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }

        return null;
    }
}

//Here's the Price microservice implementation.

public interface PriceClient {
    String getPrice();
}

public class PriceClientImpl implements PriceClient {

    @Override
    public String getPrice() {
        var httpClient = HttpClient.newHttpClient();
        var httpGet = HttpRequest.newBuilder()
                .GET()
                .uri(URI.create("http://localhost:50006/price"))
                .build();

        try {
            var httpResponse = httpClient.send(httpGet, BodyHandlers.ofString());
            return httpResponse.body();
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }

        return null;
    }
}

//Here we can see how API Gateway maps the requests to the microservices.

public class ApiGateway {

    @Resource
    private ImageClient imageClient;

    @Resource
    private PriceClient priceClient;

    @RequestMapping(path = "/desktop", method = RequestMethod.GET)
    public DesktopProduct getProductDesktop() {
        var desktopProduct = new DesktopProduct();
        desktopProduct.setImagePath(imageClient.getImagePath());
        desktopProduct.setPrice(priceClient.getPrice());
        return desktopProduct;
    }

    @RequestMapping(path = "/mobile", method = RequestMethod.GET)
    public MobileProduct getProductMobile() {
        var mobileProduct = new MobileProduct();
        mobileProduct.setPrice(priceClient.getPrice());
        return mobileProduct;
    }
}
      `}
      whenToUse={[
        "When building a microservices architecture, and there's a need to abstract the complexity of microservices from the client.",
        "When multiple microservices need to be consumed in a single request.",
        "For authentication, authorization, and security enforcement at a single point.",
        "To optimize communication between clients and services, especially in a cloud environment."
      ]}
      realWorldApplications={[
        "E-commerce platforms where multiple services (product info, pricing, inventory) are aggregated for a single view.",
        "Mobile applications that consume various backend services but require a simplified interface for ease of use.",
        "Cloud-native applications that leverage multiple microservices architectures."
      ]}
      benefits={[
        "Decoupling: By centralizing event handling, the Event Aggregator minimizes direct interaction between components, leading to a more modular and easier-to-manage system.",
        "Improves Flexibility and Scalability: Adding new publishers or subscribers involves less effort since the central aggregator handles all routing.",
        "Simplifies Component Interface: Components need to know only about the Event Aggregator, not about other components.",
        "Centralizes event management: Makes the system easier to maintain."
      ]}
      tradeoffs={[
        "Introduces a single point of failure, although this can be mitigated with high availability setups.",
        "Can become a bottleneck if not properly scaled.",
        "Adds complexity in terms of deployment and management."
      ]}
      references={[
        { name: "Building Microservices", link: "https://amzn.to/3UACtrU" },
        { name: "Cloud Native Patterns: Designing change-tolerant software", link: "https://amzn.to/3uV12WN" },
        { name: "Designing Data-Intensive Applications", link: "https://amzn.to/3PfRk7Y"},
        { name: "Microservices Patterns: With examples in Java", link: "https://amzn.to/3UyWD5O"},
        { name: "API Gateway (microservices.io)", link: "http://microservices.io/patterns/apigateway.html"},
        { name: "Building Microservices: Using an API Gateway (nginx)", link: "https://www.nginx.com/blog/building-microservices-using-an-api-gateway/"},
      ]}
      githubLink="https://github.com/yourusername/event-aggregator-example"
    />
  )
}

