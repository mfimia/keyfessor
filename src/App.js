import React, { useState, useEffect } from "react";
import "./main.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import DarkMode from "./components/DarkMode";
import "./css/screenSizes.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [wideScreen, setWideScreen] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleResize = () => {
    window.innerWidth <= 900 || window.innerHeight <= 750
      ? setWideScreen(false)
      : setWideScreen(true);
  };

  useEffect(() => window.addEventListener("resize", handleResize), []);

  const appClass = darkMode ? "App-dark" : "App";
  return wideScreen ? (
    <div className={appClass}>
      <Navbar darkMode={darkMode} />
      <Main darkMode={darkMode} />
      <DarkMode toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </div>
  ) : (
    <div className="small--screen--alert">
      Your screen is too small! Please use a larger screen or expand your
      current one
    </div>
  );
}
