import DarkContext from "./DarkContext";
import { useState } from "react";

const DarkState = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <DarkContext.Provider value={{ darkMode, toggleDarkMode }}>
      {props.children}
    </DarkContext.Provider>
  );
};

export default DarkState;
