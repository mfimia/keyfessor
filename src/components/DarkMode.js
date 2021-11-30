export default function DarkMode({ darkMode, toggleDarkMode }) {
  const darkTogglerClass = darkMode ? "light--toggler" : "dark--toggler";
  return (
    <div onClick={toggleDarkMode} className={darkTogglerClass}>
      {darkMode ? "☀" : "🌙"}
    </div>
  );
}
