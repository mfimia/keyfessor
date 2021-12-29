import { useContext } from "react";
import MainContext from "../../context/main/MainContext";
import textArray from "../data/textData";
import calculateTitle from "./calculateTitle";

const CalculateFinalScore = () => {
  const mainContext = useContext(MainContext);
  const { laps } = mainContext;

  const totals = {
    time: 0,
    overall: {
      rating: 0,
      title: {},
    },
    speed: {
      metric: 0,
      rating: 0,
    },
    accuracy: {
      metric: 0,
      rating: 0,
    },
  };

  laps.forEach((lap) => {
    totals.time += lap.time;
    totals.speed.metric += lap.speed;
    totals.accuracy.metric += lap.accuracy;
    totals.accuracy.rating += lap.results.accuracyResult.indRating;
    totals.speed.rating += lap.results.speedResult.indRating;
    totals.overall.rating += lap.results.overview.rating;
  });

  totals.overall.title = calculateTitle(
    Math.round(totals.overall.rating) / textArray.length,
    Math.round(totals.speed.rating) / textArray.length,
    Math.round(totals.accuracy.rating) / textArray.length
  );

  return {
    finalTotalTime: Math.round(totals.time),
    averageTime: Math.round(totals.time) / textArray.length,
    averageAcc: Math.round(totals.accuracy.metric) / textArray.length,
    averageSpeed: Math.round(totals.speed.metric) / textArray.length,
    averageAccRating: Math.round(totals.accuracy.rating) / textArray.length,
    averageSpeedRating: Math.round(totals.speed.rating) / textArray.length,
    overallRating: Math.round(totals.overall.rating) / textArray.length,
    title: totals.overall.title,
  };
};

export default CalculateFinalScore;
