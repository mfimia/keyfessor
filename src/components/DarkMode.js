export default function DarkMode({ darkMode, toggleDarkMode }) {
  const darkTogglerClass = darkMode ? "light--toggler" : "dark--toggler";
  return (
    <div className="toggler--container">
      <div onClick={toggleDarkMode} className={darkTogglerClass}>
        {darkMode ? (
          <i className="far fa-sun"></i>
        ) : (
          <i className="far fa-moon"></i>
        )}
      </div>
    </div>
  );
}
