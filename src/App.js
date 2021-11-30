import React, { useState } from "react";
import "./main.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import DarkMode from "./components/DarkMode";
import "./css/screenSizes.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const appClass = darkMode ? "App-dark" : "App";
  return (
    <div className={appClass}>
      <Navbar darkMode={darkMode} />
      <Main />
      <DarkMode toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </div>
  );
}
