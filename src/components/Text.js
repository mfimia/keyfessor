import { useContext } from "react";
import MainContext from "../context/main/MainContext";
import "../css/Text.css";

export default function Text() {
  const mainContext = useContext(MainContext);
  const { displayedText, currentLetter } = mainContext;
  console.log(displayedText);

  const dynamicText = displayedText.texts[displayedText.currentText]
    .split("")
    .map((letter, index) => {
      return (
        <span
          key={index}
          className={
            index >= currentLetter ? "remaining--letter" : "previous--letter"
          }
        >
          {letter}
        </span>
      );
    });

  return (
    <div className="text">
      <p>{dynamicText}</p>
    </div>
  );
}
