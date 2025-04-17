import { CORE_CONCEPTS } from "../Data";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
        {/* <CoreConcept {...CORE_CONCEPTS[0]} />
                    <CoreConcept
                      image={CORE_CONCEPTS[1].image}
                      title={CORE_CONCEPTS[1].title}
                      description={CORE_CONCEPTS[1].description}
                    />
                    <CoreConcept
                      image={CORE_CONCEPTS[2].image}
                      title={CORE_CONCEPTS[2].title}
                      description={CORE_CONCEPTS[2].description}
                    />
                    <CoreConcept
                      image={CORE_CONCEPTS[3].image}
                      title={CORE_CONCEPTS[3].title}
                      description={CORE_CONCEPTS[3].description}
                    /> */}
      </ul>
    </section>
  );
}
