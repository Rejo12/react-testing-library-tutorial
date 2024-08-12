import React from "react";
import { AppProviders } from "./providers/AppProviders";
import "./App.css";
import { Application } from "./component/Greet/application/Application";

import { Skills } from "./component/skills/Skills";
import { MuiMode } from "./component/mui/MuiMode";

function App() {
  const skills = ["HTML", "CSS", "Javascript"];
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
        {/* <Application /> */}
        {/* <Skills skills={skills} /> */}
      </div>
    </AppProviders>
  );
}

export default App;
