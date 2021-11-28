import "../css/Text.css";
import TypingPanel from "./TypingPanel";
import textArray from "./textData";
import { useState, useEffect } from "react";

export default function Main() {
  const randomNumber = Math.floor(Math.random() * textArray.length);
  const [displayedText, setDisplayedText] = useState(textArray[randomNumber]);
  const [currentLetter, setCurrentLetter] = useState(0);
  const [wordsArray, setWordsArray] = useState({
    totalWords: displayedText.toLowerCase().split(" ").length,
    remainingWords: displayedText.toLowerCase().split(" "),
    completedWords: [],
    errors: 0,
  });
  const dynamicText = displayedText.split("").map((letter, index) => {
    return (
      <span
        key={index}
        className={
          index === currentLetter ? "current--letter" : "normal--letter"
        }
      >
        {letter}
      </span>
    );
  });

  const advanceText = () => {
    setCurrentLetter((prev) => prev + 1);
  };

  return (
    <>
      <div className="text">
        <p>{dynamicText}</p>
      </div>
      <TypingPanel
        displayedText={displayedText}
        wordsArray={wordsArray}
        moveText={advanceText}
      />
    </>
  );
}
