import { Fragment } from "react";
import { Typography } from "@mui/material";

const AdvancedStats = ({ finalScore, totalAppLetters }) => {
  const {
    finalTotalTime,
    averageAcc,
    averageAccRating,
    averageSpeed,
    averageSpeedRating,
    averageTime,
  } = finalScore;

  return (
    <Fragment>
      <Typography sx={{ px: 4, m: 2 }}>
        You have typed a total of {totalAppLetters} characters in{" "}
        {finalTotalTime} seconds
      </Typography>
      <Typography sx={{ mb: 2 }}>
        Average time {averageTime} seconds per text
      </Typography>
      <Typography sx={{ mb: 2 }}>Average speed {averageSpeed} WPM</Typography>
      <Typography sx={{ mb: 2 }}>Average accuracy {averageAcc}%</Typography>
      <Typography sx={{ mb: 2 }}>
        Average speed rating {averageSpeedRating}/10 points
      </Typography>
      <Typography sx={{ mb: 2 }}>
        Average accuracy rating {averageAccRating}/10 points
      </Typography>
    </Fragment>
  );
};

export default AdvancedStats;
