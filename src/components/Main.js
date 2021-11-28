import Text from "./Text";
import TypingPanel from "./TypingPanel";
import textArray from "./textData";
import { useState, useEffect } from "react";

export default function Main() {
  const randomNumber = Math.floor(Math.random() * textArray.length);
  const [displayedText, setDisplayedText] = useState(textArray[randomNumber]);
  const [currentLetter, setCurrentLetter] = useState(0);
  const [lettersArray, setLettersArray] = useState({
    totalLetters: displayedText.toLowerCase().split("").length,
    remainingLetters: displayedText.toLowerCase().split(""),
    completedLetters: [],
    errors: 0,
  });

  const advanceText = () => {
    setCurrentLetter((prev) => prev + 1);
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
      <Text currentLetter={currentLetter} displayedText={displayedText} />
      <TypingPanel
        displayedText={displayedText}
        lettersArray={lettersArray}
        advanceText={advanceText}
        currentLetter={currentLetter}
        addError={addError}
      />
    </>
  );
}
