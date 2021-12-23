import DarkContext from "../context/darkMode/DarkContext";

export default function DarkMode() {
  const darkContext = useContext(DarkContext);
  const { darkMode, toggleDarkMode } = darkContext;

  return (
    <div className="toggler--container">
      <div
        onClick={toggleDarkMode}
        className={darkMode ? "light--toggler" : "dark--toggler"}
      >
        {darkMode ? (
          <i className="far fa-sun"></i>
        ) : (
          <i className="far fa-moon"></i>
        )}
      </div>
    </div>
  );
}
