import Keyboard from "./Keyboard";
import Tracker from "./Tracker";

export default function TypingPanel({
  displayedText,
  lettersArray,
  advanceText,
  currentLetter,
  addError,
}) {
  return (
    <>
      <Keyboard
        advanceText={advanceText}
        lettersArray={lettersArray}
        currentLetter={currentLetter}
        addError={addError}
      />
      <Tracker lettersArray={lettersArray} currentLetter={currentLetter} />
    </>
  );
}
