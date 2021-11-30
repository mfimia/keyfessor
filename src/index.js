import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

if (window.innerWidth >= 625) {
  ReactDOM.render(<App />, document.getElementById("root"));
} else {
  alert("Your screen is too small! Please use a larger screen");
}
