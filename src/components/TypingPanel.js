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
  return (
    <>
      <Keyboard
        advanceText={advanceText}
        lettersArray={lettersArray}
        currentLetter={currentLetter}
        addError={addError}
        handleStartTimer={handleStartTimer}
      />
      <StopWatch elapsedTime={elapsedTime} laps={laps} />
      <Tracker
        lettersArray={lettersArray}
        currentLetter={currentLetter}
        laps={laps}
        elapsedTime={elapsedTime}
      />
    </>
  );
}
