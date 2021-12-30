import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import MainState from "./context/main/MainState";
import DarkState from "./context/darkMode/DarkState";
import ScoresState from "./context/scores/ScoresState";

ReactDOM.render(
  <MainState>
    <ScoresState>
      <DarkState>
        <App />
      </DarkState>
    </ScoresState>
  </MainState>,
  document.getElementById("root")
);
