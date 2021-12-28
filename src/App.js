import { useState, useEffect, useContext, Fragment } from "react";
import DarkContext from "./context/darkMode/DarkContext";
import ScreenAlert from "./components/layout/modals/ScreenAlert";
import Navbar from "./components/layout/Navbar";
import Main from "./components/Main";
import DarkMode from "./components/DarkMode";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import "./main.css";
import "./css/screenSizes.css";

let enoughFirstSize = window.innerWidth >= 800 && window.innerHeight >= 400;

export default function App() {
  const [wideScreen, setWideScreen] = useState(true);

  const darkContext = useContext(DarkContext);

  const { mode, theme } = darkContext;

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
    <div className={mode === "dark" ? "App-dark" : "App"}>
      <Fragment>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Main />
          <DarkMode />
        </ThemeProvider>
      </Fragment>
    </div>
  ) : (
    <ScreenAlert />
  );
}
