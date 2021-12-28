import DarkContext from "./DarkContext";
import { useState, useEffect, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

const DarkState = (props) => {
  const darkPref = JSON.parse(localStorage.getItem("darkModePref-keyfessor"));

  const [mode, setMode] = useState(darkPref || "light");

  const toggleDarkMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("darkModePref-keyfessor", JSON.stringify(mode));
  }, [mode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: { mode },
      }),
    [mode]
  );

  return (
    <DarkContext.Provider value={{ mode, toggleDarkMode, theme }}>
      {props.children}
    </DarkContext.Provider>
  );
};

export default DarkState;
