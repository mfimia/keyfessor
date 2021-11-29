import Keyboard from "./Keyboard";
import Tracker from "./Tracker";
import { StopWatch } from "./StopWatch";

export default function TypingPanel({
  lettersArray,
  advanceText,
  currentLetter,
  addError,
  elapsedTime,
  laps,
  handleStartTimer,
}) {
  const averageLengthWord =
    lettersArray.totalLetters /
    lettersArray.remainingLetters.join("").split(" ").length;
  const minutes = elapsedTime / 60;
  const wordsPerMinute =
    Math.floor(currentLetter / averageLengthWord / minutes) || 0;
  return (
    <>
      <Keyboard
        advanceText={advanceText}
        lettersArray={lettersArray}
        currentLetter={currentLetter}
        addError={addError}
        handleStartTimer={handleStartTimer}
      />
      <StopWatch
        elapsedTime={elapsedTime}
        laps={laps}
        wordsPerMinute={wordsPerMinute}
      />
      <Tracker
        lettersArray={lettersArray}
        currentLetter={currentLetter}
        wordsPerMinute={wordsPerMinute}
      />
    </>
  );
}
