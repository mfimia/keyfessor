import DarkContext from "./DarkContext";
import { useState, useEffect } from "react";

const DarkState = (props) => {
  const darkPref = JSON.parse(localStorage.getItem("darkModePref-keyfessor"));

  const [mode, setMode] = useState(darkPref || "light");

  const toggleDarkMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("darkModePref-keyfessor", JSON.stringify(mode));
  }, [mode]);

  return (
    <DarkContext.Provider value={{ mode, toggleDarkMode }}>
      {props.children}
    </DarkContext.Provider>
  );
};

export default DarkState;
