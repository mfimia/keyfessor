import "../css/Navbar.css";
import lightLogo from "../assets/keyfessor-white-logo.png";
import darkLogo from "../assets/keyfessor-black-logo.png";
import useEventListener from "@use-it/event-listener";
import Pointer from "./Pointer";
import { useState } from "react";

export default function Navbar({ darkMode }) {
  const [onLoad, setOnLoad] = useState(true);

  const startApp = ({ key }) => {
    if (key === "m" && onLoad) {
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
      {onLoad && (
        <div
          id="start--text"
          className={darkMode ? "start--typing--dark" : "start--typing"}
        >
          Press{" "}
          <span>
            "m"
            <Pointer darkMode={darkMode} />
          </span>{" "}
          to start
        </div>
      )}
    </>
  );
}
