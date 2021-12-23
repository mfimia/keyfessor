import { useState, useEffect, useContext, Fragment } from "react";
import DarkContext from "./context/darkMode/DarkContext";
import ScreenAlert from "./components/layout/modals/ScreenAlert";
import Navbar from "./components/layout/Navbar";
import Main from "./components/Main";
import DarkMode from "./components/DarkMode";
import Keyboard from "./components/layout/Keyboard";
import "./main.css";
import "./css/screenSizes.css";

let enoughFirstSize = window.innerWidth >= 800 && window.innerHeight >= 400;

export default function App() {
  const [wideScreen, setWideScreen] = useState(true);

  const darkContext = useContext(DarkContext);
  const { darkMode } = darkContext;

  const handleResize = () => {
    window.innerWidth <= 800 || window.innerHeight <= 400
      ? setWideScreen(false)
      : setWideScreen(true);
  };

  useEffect(() => {
    if (wideScreen) enoughFirstSize = true;
  }, [wideScreen]);

  useEffect(() => window.addEventListener("resize", handleResize), []);

  return enoughFirstSize && wideScreen ? (
    <div className={darkMode ? "App-dark" : "App"}>
      <Fragment>
        <Navbar />
        <Main />
        <Keyboard />
        <DarkMode />
      </Fragment>
    </div>
  ) : (
    <ScreenAlert />
  );
}
