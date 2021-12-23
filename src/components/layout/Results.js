import "../../css/StopWatch.css";
import MainContext from "../../context/main/MainContext";
import { Fragment, useContext } from "react";
import { Box } from "@mui/system";

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
      <Box
        sx={{
          width: "25vw",
          height: "70vh",
        }}
      >
        {laps.length !== 0 && (
          <fieldset className="stopwatch--results">{timeResults}</fieldset>
        )}
      </Box>
    </Fragment>
  );
};

export default Results;
