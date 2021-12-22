import "../css/StopWatch.css";
import MainContext from "../../context/main/MainContext";
import { useContext } from "react";

export const StopWatch = () => {
  const mainContext = useContext(MainContext);
  const { elapsedTime, laps } = mainContext;

  const timeResults = laps.map((lap, index) => {
    return (
      <div className="stopwatch--lap" key={index}>
        <b>T{index + 1}</b>: {Math.floor(lap.time)}s | {lap.speed} WPM |{" "}
        {lap.accuracy}%
      </div>
    );
  });

  return (
    <>
      <div className="stopwatch">{elapsedTime}</div>
      {laps.length !== 0 && (
        <fieldset className="stopwatch--results">{timeResults}</fieldset>
      )}
    </>
  );
};
