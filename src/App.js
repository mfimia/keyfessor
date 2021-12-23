import { useState, useEffect, useContext } from "react";
import DarkContext from "./context/darkMode/DarkContext";
import ScreenAlert from "./components/layout/modals/ScreenAlert";
import Navbar from "./components/layout/Navbar";
import Main from "./components/Main";
import DarkMode from "./components/DarkMode";
import "./main.css";
import "./css/screenSizes.css";

let enoughFirstSize = window.innerWidth >= 900 && window.innerHeight >= 400;

export default function App() {
  const [wideScreen, setWideScreen] = useState(true);

  const darkContext = useContext(DarkContext);
  const { darkMode } = darkContext;

  const handleResize = () => {
    window.innerWidth <= 900 || window.innerHeight <= 400
      ? setWideScreen(false)
      : setWideScreen(true);
  };

  useEffect(() => {
    if (wideScreen) enoughFirstSize = true;
  }, [wideScreen]);

  useEffect(() => window.addEventListener("resize", handleResize), []);

  return enoughFirstSize && wideScreen ? (
    <div className={darkMode ? "App-dark" : "App"}>
      <Navbar />
      <Main />
      <DarkMode />
    </div>
  ) : (
    <ScreenAlert />
  );
}
