import "../css/ProgressBar.css";

export default function ProgressBar() {
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
