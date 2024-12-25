import React from "react";
import { PatternPage } from "../../components/PatternPage";


export default function Facade() {
  return (
    <PatternPage
      title="Facade Pattern in Java: Simplifying Complex System Interfaces"
      shortTitle="Facade"
      description="Learn how to implement the Facade Design Pattern in Java to create a unified interface for complex subsystems. Simplify your code and enhance maintainability with practical examples and use cases."
      category="Structural"
      tags={["Abstraction", "Encapsulation", "Gang of Four", "S$Decoupling", "Object composition", "Interface", "Code simplification"]}
      alsoKnownAs={[]}
      intent="The Facade Design Pattern provides a unified interface to a set of interfaces in a subsystem. This Java design pattern simplifies complex system interactions."
      explanation="Facade pattern provides a simplified interface to a complex subsystem."
      programmaticExample={`
@Slf4j
public abstract class DwarvenMineWorker {

    public void goToSleep() {
        LOGGER.info("{} goes to sleep.", name());
    }

    public void wakeUp() {
        LOGGER.info("{} wakes up.", name());
    }

    public void goHome() {
        LOGGER.info("{} goes home.", name());
    }

    public void goToMine() {
        LOGGER.info("{} goes to the mine.", name());
    }

    private void action(Action action) {
        switch (action) {
            case GO_TO_SLEEP -> goToSleep();
            case WAKE_UP -> wakeUp();
            case GO_HOME -> goHome();
            case GO_TO_MINE -> goToMine();
            case WORK -> work();
            default -> LOGGER.info("Undefined action");
        }
    }

    public void action(Action... actions) {
        Arrays.stream(actions).forEach(this::action);
    }

    public abstract void work();

    public abstract String name();

    enum Action {
        GO_TO_SLEEP, WAKE_UP, GO_HOME, GO_TO_MINE, WORK
    }
}
Then we have the concrete dwarf classes DwarvenTunnelDigger, DwarvenGoldDigger and DwarvenCartOperator:

@Slf4j
public class DwarvenTunnelDigger extends DwarvenMineWorker {

    @Override
    public void work() {
        LOGGER.info("{} creates another promising tunnel.", name());
    }

    @Override
    public String name() {
        return "Dwarven tunnel digger";
    }
}

@Slf4j
public class DwarvenGoldDigger extends DwarvenMineWorker {

    @Override
    public void work() {
        LOGGER.info("{} digs for gold.", name());
    }

    @Override
    public String name() {
        return "Dwarf gold digger";
    }
}

@Slf4j
public class DwarvenCartOperator extends DwarvenMineWorker {

    @Override
    public void work() {
        LOGGER.info("{} moves gold chunks out of the mine.", name());
    }

    @Override
    public String name() {
        return "Dwarf cart operator";
    }
}
To operate all these goldmine workers we have the DwarvenGoldmineFacade:

public class DwarvenGoldmineFacade {

    private final List<DwarvenMineWorker> workers;

    public DwarvenGoldmineFacade() {
        workers = List.of(
                new DwarvenGoldDigger(),
                new DwarvenCartOperator(),
                new DwarvenTunnelDigger());
    }

    public void startNewDay() {
        makeActions(workers, DwarvenMineWorker.Action.WAKE_UP, DwarvenMineWorker.Action.GO_TO_MINE);
    }

    public void digOutGold() {
        makeActions(workers, DwarvenMineWorker.Action.WORK);
    }

    public void endDay() {
        makeActions(workers, DwarvenMineWorker.Action.GO_HOME, DwarvenMineWorker.Action.GO_TO_SLEEP);
    }

    private static void makeActions(Collection<DwarvenMineWorker> workers,
                                    DwarvenMineWorker.Action... actions) {
        workers.forEach(worker -> worker.action(actions));
    }
}
Now let's use the facade:

public static void main(String[] args) {
    var facade = new DwarvenGoldmineFacade();
    facade.startNewDay();
    facade.digOutGold();
    facade.endDay();
}    
`}
      whenToUse={[
        "You want to provide a simple interface to a complex subsystem.",
        "Subsystems are getting more complex and depend on multiple classes, but most clients only need a part of the functionality.",
        "There is a need to layer your subsystems. Use a facade to define an entry point to each subsystem level.",
        "You want to reduce dependencies and enhance code readability in Java development."
     ]}
      realWorldApplications={[
        "Java libraries such as java.net.URL and javax.faces.context.FacesContext use Facade to simplify complex underlying classes.",
        "In many Java frameworks, facades are used to simplify the usage of APIs by providing a simpler interface to more complex underlying code structures."
      ]}
      benefits={[
        "Isolates clients from subsystem components, making it easier to use and reducing dependencies.",
        "Promotes weak coupling between the subsystem and its clients.",
        "Often simplifies the API of complex systems."
      ]}
      tradeoffs={[
        "A facade can become a god object coupled to all classes of an app if not implemented correctly."
      ]}
      references={[
        { name: "Design Patterns: Elements of Reusable Object-Oriented Software", link: "https://amzn.to/3UACtrU" },
      ]}
      githubLink="https://github.com/yourusername/event-aggregator-example"
    />
  )
}

