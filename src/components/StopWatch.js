import { useStopwatch } from "./timerHook";

export const StopWatch = () => {
  const {
    laps,
    addLap,
    isRunning,
    elapsedTime,
    startTimer,
    stopTimer,
    resetTimer,
  } = useStopwatch();

  const handleStartStop = () => {
    isRunning ? stopTimer() : startTimer();
  };

  const handleLapOrReset = () => {
    isRunning ? addLap() : resetTimer();
  };

  return (
    <div className="stopwatch">
      {elapsedTime}s
      <button className="stopwatch--starter" onClick={handleStartStop}>
        Start/Stop
      </button>
    </div>
  );
};
