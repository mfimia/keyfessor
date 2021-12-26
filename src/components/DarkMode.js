import { useContext } from "react";
import DarkContext from "../context/darkMode/DarkContext";

export default function DarkMode() {
  const darkContext = useContext(DarkContext);
  const { mode, toggleDarkMode } = darkContext;

  return (
    <div className="toggler--container">
      <div
        onClick={toggleDarkMode}
        className={mode === "light" ? "light--toggler" : "dark--toggler"}
      >
        {mode === "dark" ? (
          <i className="far fa-sun"></i>
        ) : (
          <i className="far fa-moon"></i>
        )}
      </div>
    </div>
  );
}
