import { useState, Fragment, useContext } from "react";
import DarkContext from "../../context/darkMode/DarkContext";
import lightLogo from "../../assets/keyfessor-white-logo.png";
import darkLogo from "../../assets/keyfessor-black-logo.png";
import useEventListener from "@use-it/event-listener";
import "../../css/Navbar.css";

export default function Navbar() {
  const darkContext = useContext(DarkContext);
  const { darkMode } = darkContext;

  const [onLoad, setOnLoad] = useState(true);

  const startApp = () => {
    if (onLoad) {
      setOnLoad(false);
    }
  };

  useEventListener("keydown", startApp);

  return (
    <Fragment>
      <img
        alt="Keyfessor logo"
        className="header--logo"
        src={darkMode ? lightLogo : darkLogo}
      />
    </Fragment>
  );
}
