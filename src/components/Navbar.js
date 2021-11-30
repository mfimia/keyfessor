import "../css/Navbar.css";
// import PlayButton from "./PlayButton";
import lightLogo from "../assets/keyfessor-white-logo.png";
import darkLogo from "../assets/keyfessor-black-logo.png";

export default function Navbar({ darkMode }) {
  return (
    <img
      alt="Keyfessor logo"
      className="header--logo"
      src={darkMode ? lightLogo : darkLogo}
    />
  );
}
