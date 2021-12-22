import "../../css/Navbar.css";
import lightLogo from "../../assets/keyfessor-white-logo.png";
import darkLogo from "../../assets/keyfessor-black-logo.png";
import useEventListener from "@use-it/event-listener";
import { useState } from "react";

export default function Navbar({ darkMode }) {
  const [onLoad, setOnLoad] = useState(true);

  const startApp = () => {
    if (onLoad) {
      setOnLoad(false);
    }
  };

  useEventListener("keydown", startApp);

  return (
    <>
      <img
        alt="Keyfessor logo"
        className="header--logo"
        src={darkMode ? lightLogo : darkLogo}
      />
    </>
  );
}
