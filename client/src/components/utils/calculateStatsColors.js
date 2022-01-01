import accColors from "./colors/accColors";
import speedColors from "./colors/speedColors";
import timeColors from "./colors/timeColors";

const calculateStatsColors = (scores) => {
  const {
    finalTotalTime,
    averageTime,
    averageAcc,
    averageSpeed,
    averageAccRating,
    averageSpeedRating,
  } = scores;

  const timeColorsValue = timeColors(averageTime, finalTotalTime);
  const speedColorsValue = speedColors(averageSpeed, averageSpeedRating);
  const accColorsValue = accColors(averageAcc, averageAccRating);

  const totalTime = timeColorsValue.totalColor;
  const avgTime = timeColorsValue.averageColor;
  const avgSpeed = speedColorsValue.averageColor;
  const avgSpeedRt = speedColorsValue.ratingColor;
  const avgAcc = accColorsValue.averageColor;
  const avgAccRt = accColorsValue.ratingColor;

  return {
    totalTime,
    avgTime,
    avgSpeed,
    avgAcc,
    avgSpeedRt,
    avgAccRt,
  };
};

export default calculateStatsColors;
