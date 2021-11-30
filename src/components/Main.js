import Text from "./Text";
import TypingPanel from "./TypingPanel";
import textArray from "./textData";
import { useEffect, useState } from "react";
import { useStopwatch } from "./timerHook";
import EndScreen from "./EndScreen";
// let textNumber = 0;

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

  const averageLengthWord =
    lettersArray.totalLetters /
    lettersArray.remainingLetters.join("").split(" ").length;
  const minutes = elapsedTime / 60;
  const wordsPerMinute =
    Math.floor(currentLetter / averageLengthWord / minutes) || 0;

  const accuracy = Math.floor(
    100 - (lettersArray.errors / currentLetter) * 100
  );

  const handleStartTimer = () => {
    if (!isRunning) startTimer();
  };

  const advanceText = () => {
    setCurrentLetter((prev) => {
      return prev === 5 ? newText() : prev + 1;
    });
  };
  // lettersArray.totalLetters - 1
  const newText = () => {
    setDisplayedText((previousText) => {
      return {
        ...previousText,
        currentText: previousText.currentText + 1,
      };
    });

    if (!isRunning) stopTimer();
    addLap(wordsPerMinute, accuracy);
    resetTimer();
    setCurrentLetter(0);
  };

  useEffect(() => {
    if (displayedText.currentText) {
      setLettersArray((prev) => {
        return {
          ...prev,
          totalLetters: displayedText.texts[displayedText.currentText]
            .toLowerCase()
            .split("").length,
          remainingLetters: displayedText.texts[displayedText.currentText]
            .toLowerCase()
            .split(""),
          errors: 0,
        };
      });
    }
  }, [displayedText.texts, displayedText.currentText]);

  const addError = () => {
    setLettersArray((prev) => {
      return {
        ...prev,
        errors: prev.errors + 1,
      };
    });
  };

  // const resetGame = () => {
  //   setCurrentLetter(0);
  //   setDisplayedText((prevText) => {
  //     return {
  //       ...prevText,
  //       currentText: 0,
  //     };
  //   });
  //   setLettersArray(prevArray => {
  //     return {

  //     }
  //   })
  // };

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
        isRunning={isRunning}
      />
      <EndScreen laps={laps} />
    </>
  );
}
