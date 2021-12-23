import "../../css/StopWatch.css";
import MainContext from "../../context/main/MainContext";
import { Fragment, useContext } from "react";

const Results = () => {
  const mainContext = useContext(MainContext);
  const { laps } = mainContext;

  const timeResults = laps.map((lap, index) => {
    return (
      <div className="stopwatch--lap" key={index}>
        <b>T{index + 1}</b>: {Math.floor(lap.time)}s | {lap.speed} WPM |{" "}
        {lap.accuracy}%
      </div>
    );
  });

  return (
    <Fragment>
      {laps.length !== 0 && (
        <fieldset className="stopwatch--results">{timeResults}</fieldset>
      )}
    </Fragment>
  );
};

export default Results;
