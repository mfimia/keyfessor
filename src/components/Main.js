import Text from "./Text";
import TypingPanel from "./TypingPanel";
import textArray from "./textData";
import { useState } from "react";
import { useStopwatch } from "./timerHook";
let textNumber = 0;

export default function Main() {
  const [currentLetter, setCurrentLetter] = useState(0);
  const [displayedText, setDisplayedText] = useState({
    texts: textArray,
    currentText: 0,
  });
  const [lettersArray, setLettersArray] = useState({
    totalLetters: displayedText.texts[displayedText.currentText]
      .toLowerCase()
      .split("").length,
    remainingLetters: displayedText.texts[displayedText.currentText]
      .toLowerCase()
      .split(""),
    completedLetters: [],
    errors: 0,
  });
  // const [speed, setSpeed] = useState([]);
  // const handleSetSpeed = (wpm) => {
  //   setSpeed((prev) => {
  //     return [...prev, wpm];
  //   });
  // };

  const {
    isRunning,
    addLap,
    stopTimer,
    laps,
    elapsedTime,
    startTimer,
    resetTimer,
  } = useStopwatch();

  const handleStartTimer = () => {
    if (!isRunning) startTimer();
  };

  const advanceText = () => {
    setCurrentLetter((prev) => {
      return prev === lettersArray.totalLetters - 1 ? newText() : prev + 1;
    });
  };

  const newText = () => {
    setDisplayedText((previousText) => {
      return {
        ...previousText,
        currentText: previousText.currentText + 1,
      };
    });
    if (!isRunning) stopTimer();
    addLap();
    resetTimer();
    setCurrentLetter(0);
    newArray();
  };

  const newArray = () => {
    setLettersArray((prev) => {
      textNumber++;
      return {
        ...prev,
        totalLetters: displayedText.texts[textNumber].toLowerCase().split("")
          .length,
        remainingLetters: displayedText.texts[textNumber]
          .toLowerCase()
          .split(""),
        errors: 0,
      };
    });
  };

  const addError = () => {
    setLettersArray((prev) => {
      return {
        ...prev,
        errors: prev.errors + 1,
      };
    });
  };

  return (
    <>
      <Text
        currentLetter={currentLetter}
        displayedText={displayedText.texts[displayedText.currentText]}
      />
      <TypingPanel
        displayedText={displayedText.texts[displayedText.currentText]}
        lettersArray={lettersArray}
        advanceText={advanceText}
        currentLetter={currentLetter}
        addError={addError}
        handleStartTimer={handleStartTimer}
        elapsedTime={elapsedTime}
        laps={laps}
        // handleSetSpeed={handleSetSpeed}
      />
    </>
  );
}
