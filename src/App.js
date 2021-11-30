import React from "react";
import "./main.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import DarkMode from "./components/DarkMode";
import { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const appClass = darkMode ? "App-dark" : "App";
  return (
    <div className={appClass}>
      <Navbar />
      <Main />
      <DarkMode toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </div>
  );
}
