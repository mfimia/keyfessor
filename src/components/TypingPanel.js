import Keyboard from "./Keyboard";
import Tracker from "./Tracker";

export default function TypingPanel({
  displayedText,
  lettersArray,
  moveText,
  currentLetter,
}) {
  return (
    <>
      <Keyboard
        moveText={moveText}
        displayedText={displayedText}
        lettersArray={lettersArray}
      />
      <Tracker
        displayedText={displayedText}
        lettersArray={lettersArray}
        currentLetter={currentLetter}
      />
    </>
  );
}
