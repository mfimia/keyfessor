import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import MainState from "./context/main/MainState";
import DarkState from "./context/darkMode/DarkState";

ReactDOM.render(
  <MainState>
    <DarkState>
      <App />
    </DarkState>
  </MainState>,
  document.getElementById("root")
);
