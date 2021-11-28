import Text from "./Text";
import TypingPanel from "./TypingPanel";
import textArray from "./textData";
import { useState } from "react";
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
      />
    </>
  );
}
