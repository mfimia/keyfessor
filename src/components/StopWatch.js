import "../css/StopWatch.css";

export const StopWatch = ({ elapsedTime, laps }) => {
  const timeResults = laps.map((lap, index) => {
    return (
      <div className="stopwatch--lap" key={index}>
        T{index + 1}: {Math.floor(lap.time)}s | {lap.speed} WPM | {lap.accuracy}
        %
      </div>
    );
  });

  return (
    <div className="stopwatch">
      {elapsedTime}
      <div>{timeResults}</div>
    </div>
  );
};
