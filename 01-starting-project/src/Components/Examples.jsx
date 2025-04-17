import TapButton from "./TabButton";
import { EXAMPLES } from "../Data";
import { useState } from "react";
export default function Examples() {
  let [selectedTopice, setSelectedTopic] = useState(undefined);
  // let [selectedTopice, setSelectedTopic] = useState("select a button");

  function handleSelect(EXAMPLES) {
    setSelectedTopic(EXAMPLES.toLowerCase());
    //selectedButton => "components" , "jsx" , "props" , "state"

    console.log(selectedTopice);
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TapButton
          isSelected={selectedTopice === "components"}
          onSelect={() => handleSelect("Components")}
        >
          Components
        </TapButton>
        <TapButton
          isSelected={selectedTopice === "jsx"}
          onSelect={() => handleSelect("JSX")}
        >
          JSX
        </TapButton>
        <TapButton
          isSelected={selectedTopice === "props"}
          onSelect={() => handleSelect("Props")}
        >
          Props
        </TapButton>
        <TapButton
          isSelected={selectedTopice === "state"}
          onSelect={() => handleSelect("State")}
        >
          State
        </TapButton>
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
        ) : (
          <p>Please select a topic to see the example.</p>
        )}
      </div>
    </section>
  );
}
