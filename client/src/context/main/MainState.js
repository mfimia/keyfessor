import MainContext from "./MainContext";
import { useState, useRef, useEffect } from "react";
import { useStopwatch } from "../../components/utils/timerHook";
import textArray from "../../components/data/textData";

let totalAppLetters = 0;
textArray.forEach((text) => text.split("").forEach(() => totalAppLetters++));

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
    elapsedTime,
    laps,
    addLap,
    stopTimer,
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
      return prev === 5 ? newText() : prev + 1;
    });
  };

  // lettersArray.totalLetters - 1
  const newText = () => {
    if (displayedText.currentText === textArray.length - 1) {
      endGame.current = true;
      addLap(wordsPerMinute, accuracy);
      resetTimer();
      setCurrentLetter(0);
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

  // If it's possible, scrolls the text down as user types
  useEffect(() => {
    const moveBlock = (mainText.current.scrollHeight / 100) * 10;
    if (currentLetter % 50 === 0) {
      mainText.current.scrollTop += moveBlock;
      if (currentLetter === 0) {
        mainText.current.scrollTop = 0;
      }
    }
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
        mainText,
        totalAppLetters,
        addError,
        advanceText,
        handleStartTimer,
        resetGame,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainState;
