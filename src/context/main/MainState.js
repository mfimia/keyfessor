import MainContext from "./MainContext";
import { useState, useRef, useEffect } from "react";
import { useStopwatch } from "../../components/utils/timerHook";
import textArray from "../../components/data/textData";

const MainState = (props) => {
  const [currentLetter, setCurrentLetter] = useState(0);
  const [displayedText, setDisplayedText] = useState({
    texts: textArray,
    currentText: 0,
  });
  const [lettersArray, setLettersArray] = useState({
    totalLetters:
      displayedText.texts[displayedText.currentText].split("").length,
    remainingLetters: displayedText.texts[displayedText.currentText].split(""),
    errors: 0,
  });
  const restarted = useRef(false);
  const endGame = useRef(false);

  const firstLetter = displayedText.texts[displayedText.currentText][0];

  const mainText = useRef();

  const {
    isRunning,
    addLap,
    stopTimer,
    laps,
    elapsedTime,
    startTimer,
    resetTimer,
    resetLaps,
  } = useStopwatch();

  const averageLengthWord =
    lettersArray.totalLetters /
    lettersArray.remainingLetters.join("").split(" ").length;
  const minutes = elapsedTime / 60;
  const wordsPerMinute =
    Math.floor(currentLetter / averageLengthWord / minutes) || 0;

  let accuracy = 100;
  if (isRunning) {
    accuracy =
      lettersArray.errors > currentLetter
        ? 0
        : Math.floor((1 - lettersArray.errors / currentLetter) * 100);
  }

  const handleStartTimer = () => {
    if (!isRunning) startTimer();
  };

  const advanceText = () => {
    setCurrentLetter((prev) => {
      return prev === lettersArray.totalLetters - 1 ? newText() : prev + 1;
    });
  };

  const newText = () => {
    if (displayedText.currentText === textArray.length - 1) {
      endGame.current = true;
    } else {
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
    }
  };

  useEffect(() => {
    if (displayedText.currentText || restarted.current) {
      restarted.current = false;
      setLettersArray((prev) => {
        return {
          ...prev,
          totalLetters:
            displayedText.texts[displayedText.currentText].split("").length,
          remainingLetters:
            displayedText.texts[displayedText.currentText].split(""),
          errors: 0,
        };
      });
    }
  }, [displayedText.texts, displayedText.currentText]);

  // Moves the text down as user types
  useEffect(() => {
    mainText.current.scrollTop += 5;
  }, [currentLetter]);

  const addError = () => {
    setLettersArray((prev) => {
      return {
        ...prev,
        errors: prev.errors + 1,
      };
    });
  };

  const resetGame = () => {
    restarted.current = true;
    setCurrentLetter(0);
    setDisplayedText((prevText) => {
      return {
        ...prevText,
        currentText: 0,
      };
    });
    resetTimer();
    resetLaps();
    endGame.current = false;
  };

  return (
    <MainContext.Provider
      value={{
        displayedText,
        lettersArray,
        currentLetter,
        firstLetter,
        endGame,
        elapsedTime,
        laps,
        wordsPerMinute,
        accuracy,
        isRunning,
        addError,
        advanceText,
        handleStartTimer,
        resetGame,
        mainText,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainState;
