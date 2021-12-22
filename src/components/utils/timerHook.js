import { useState, useEffect } from "react";

export const useTimer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(
        () => setElapsedTime((prevElapsedTime) => prevElapsedTime + 0.1),
        100
      );
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return {
    isRunning,
    setIsRunning,
    elapsedTime,
    setElapsedTime,
  };
};

export const useStopwatch = () => {
  const [laps, setLaps] = useState([]);
  const { isRunning, setIsRunning, elapsedTime, setElapsedTime } = useTimer();

  const handleReset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  const handleAddLap = (wpm, acc) => {
    isRunning &&
      setLaps([...laps, { time: elapsedTime, speed: wpm, accuracy: acc }]);
  };

  return {
    elapsedTime: elapsedTime.toFixed(1),
    laps,
    addLap: (wpm, acc) => handleAddLap(wpm, acc),
    resetTimer: () => handleReset(),
    startTimer: () => setIsRunning(true),
    stopTimer: () => setIsRunning(false),
    resetLaps: () => setLaps([]),
    isRunning,
  };
};
