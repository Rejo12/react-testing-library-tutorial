import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Application } from "./component/Greet/application/Application";
import { Skills } from "./component/skills/Skills";

function App() {
  const skills = ["HTML", "CSS", "Javascript"];
  return (
    <div className="App">
      {/* <Application /> */}
      <Skills skills={skills} />
    </div>
  );
}

export default App;
