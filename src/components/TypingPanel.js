import Keyboard from "./Keyboard";
import Tracker from "./Tracker";
import { StopWatch } from "./StopWatch";
import { useStopwatch } from "./timerHook";

export default function TypingPanel({
  lettersArray,
  advanceText,
  currentLetter,
  addError,
}) {
  const {
    laps,
    addLap,
    isRunning,
    elapsedTime,
    startTimer,
    stopTimer,
    resetTimer,
  } = useStopwatch();

  const handleStartTimer = () => {
    if (!isRunning) startTimer();
  };

  const handleStopTimer = () => {
    if (isRunning) stopTimer();
  };

  const handleResetTimer = () => {
    resetTimer();
  };

  const handleAddLap = () => {
    addLap();
  };

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
      <Tracker lettersArray={lettersArray} currentLetter={currentLetter} />
    </>
  );
}
