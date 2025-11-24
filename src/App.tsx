import React from "react";
import BasicInfo from "./components/sections/BasicInfo";
import Work from "./components/sections/Work";
import Skills from "./components/sections/Skills";
import Resources from "./components/sections/Resources";
import DeveloperSetup from "./components/sections/DeveloperSetup";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sunrise Nguyen's Portfolio</h1>
      </header>
      <main>
        <BasicInfo />
        <Work />
        <Skills />
        <Resources />
        <DeveloperSetup />
      </main>
    </div>
  );
};

export default App;
