import Header from "./Components/Header/Header.jsx";
import CoreConcept from "./Components/CoreConcept";
import { CORE_CONCEPTS, EXAMPLES } from "./Data.js";
import TapButton from "./Components/TabButton.jsx";
import { Component, useState } from "react";

function App() {
  let [selectedTopice, setSelectedTopic] = useState(undefined);
  // let [selectedTopice, setSelectedTopic] = useState("select a button");

  function handleSelect(EXAMPLES) {
    setSelectedTopic(EXAMPLES.toLowerCase());
    //selectedButton => "components" , "jsx" , "props" , "state"

    console.log(selectedTopice);
  }
  return (
    <div>
      <Header />

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (<CoreConcept key={conceptItem.title} {...conceptItem}/>))}
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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TapButton isSelected={selectedTopice === "components"} onSelect={() => handleSelect("Components")}>
              Components
            </TapButton>
            <TapButton isSelected={selectedTopice === "jsx"} onSelect={() => handleSelect("JSX") }>JSX</TapButton>
            <TapButton isSelected={selectedTopice === "props"} onSelect={() => handleSelect("Props")}>Props</TapButton>
            <TapButton  isSelected={selectedTopice === "state"}  onSelect={() => handleSelect("State")}>State</TapButton>
          </menu>
          <div id="tab-content">
            {selectedTopice ? (
              <>
              <h3>{EXAMPLES[selectedTopice].title}</h3>
              <p>{EXAMPLES[selectedTopice].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopice].code}</code>
              </pre>
              </>
            ) : <p>Please select a topic to see the example.</p>}
            
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
