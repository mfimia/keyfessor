import "../css/Text.css";
import TypingPanel from "./TypingPanel";
import textArray from "./textData";
import { useState } from "react";

export default function Main() {
  const randomNumber = Math.floor(Math.random() * textArray.length);
  const [displayedText, setDisplayedText] = useState(textArray[randomNumber]);
  return (
    <>
      <div className="text">
        <p>{displayedText}</p>
      </div>
      <TypingPanel displayedText={displayedText} />
    </>
  );
}
