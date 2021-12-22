import { useContext } from "react";
import MainContext from "../../context/main/MainContext";
import "../css/ProgressBar.css";

export default function ProgressBar() {
  const mainContext = useContext(MainContext);
  const { displayedText, currentLetter } = mainContext;

  const progressBarMaxValue =
    displayedText.texts[displayedText.currentText].split("").length;
  const value = (currentLetter / progressBarMaxValue) * progressBarMaxValue;

  return (
    <progress
      className="text--progress"
      value={value}
      max={progressBarMaxValue}
    />
  );
}
