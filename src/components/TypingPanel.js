import Keyboard from "./Keyboard";
import Tracker from "./Tracker";

export default function TypingPanel({ displayedText, wordsArray, moveText }) {
  return (
    <>
      <Keyboard
        moveText={moveText}
        displayedText={displayedText}
        wordsArray={wordsArray}
      />
      <Tracker displayedText={displayedText} wordsArray={wordsArray} />
    </>
  );
}
