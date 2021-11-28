import React from "react";
import "./main.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { StopWatch } from "./components/StopWatch";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <StopWatch />
      <Main />
    </div>
  );
}
