import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import MainState from "./context/main/MainState";

ReactDOM.render(
  <MainState>
    <App />
  </MainState>,
  document.getElementById("root")
);
