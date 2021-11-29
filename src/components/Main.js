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

  const {
    isRunning,
    addLap,
    stopTimer,
    laps,
    elapsedTime,
    startTimer,
    resetTimer,
  } = useStopwatch();

  // We can probably change this function to Typing Panel with a useEffect hook
  const averageLengthWord =
    lettersArray.totalLetters /
    lettersArray.remainingLetters.join("").split(" ").length;
  const minutes = elapsedTime / 60;
  const wordsPerMinute =
    Math.floor(currentLetter / averageLengthWord / minutes) || 0;
  // This one too
  const accuracy = Math.floor(
    100 - (lettersArray.errors / lettersArray.totalLetters) * 100
  );

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
    // Some of this logic can be moved so we don't have to calculate everything on this component
    // We can use a useeffect hook that listents to "displayedText.currentText"
    if (!isRunning) stopTimer();
    addLap(wordsPerMinute, accuracy);
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
        wordsPerMinute={wordsPerMinute}
        accuracy={accuracy}
      />
    </>
  );
}
