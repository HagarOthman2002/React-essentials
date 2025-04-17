import Header from "./Components/Header/Header.jsx";
import CoreConcept from "./Components/CoreConcept";
import { CORE_CONCEPTS, EXAMPLES } from "./Data.js";
import TapButton from "./Components/TabButton.jsx";
import { Component, useState } from "react";
import CoreConcepts from "./Components/CoreConcepts.jsx"
import Examples from "./Components/Examples.jsx";

function App() {
  
  return (
    <div>
      <Header />

      <main>
        <CoreConcepts/>
        
        <Examples/>
      </main>
    </div>
  );
}

export default App;
