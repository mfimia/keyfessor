import { useState, useEffect, useContext } from "react";
import DarkContext from "./context/darkMode/DarkContext";
import ScreenAlert from "./components/layout/modals/ScreenAlert";
import Navbar from "./components/layout/Navbar";
import Main from "./components/Main";
import DarkMode from "./components/DarkMode";
import "./main.css";
import "./css/screenSizes.css";

const enoughFirstSize = window.innerWidth >= 900 && window.innerHeight >= 400;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  textAlign: "center",
  p: 4,
};

export default function App() {
  const [wideScreen, setWideScreen] = useState(true);

  const darkContext = useContext(DarkContext);
  const { darkMode } = darkContext;

  const handleResize = () => {
    window.innerWidth <= 900 || window.innerHeight <= 400
      ? setWideScreen(false)
      : setWideScreen(true);
  };

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
