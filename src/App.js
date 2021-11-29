import React from "react";
import "./main.css";
import "./css/colors.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}
