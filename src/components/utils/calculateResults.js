const calculateResults = (speed, accuracy) => {
  const speedResult = calculateSpeedResult(speed);
  const accuracyResult = calculateAccuracyResult(accuracy);
  const overview = calculateOverview(speedResult, accuracyResult);
  return { speedResult, accuracyResult, overview };
};

const calculateSpeedResult = (speed) => {
  if (speed >= 50) {
    return { grade: "great", color: "info.light", indRating: 10 };
  } else if (speed >= 40) {
    return { grade: "good", color: "success.light", indRating: 7.5 };
  } else if (speed >= 30) {
    return { grade: "average", color: "warning.light", indRating: 5 };
  } else {
    return { grade: "bad", color: "error.light", indRating: 0 };
  }
};

const calculateAccuracyResult = (accuracy) => {
  if (accuracy >= 95) {
    return { grade: "great", color: "info.light", indRating: 10 };
  } else if (accuracy >= 90) {
    return { grade: "good", color: "success.light", indRating: 7.5 };
  } else if (accuracy >= 80) {
    return { grade: "average", color: "warning.light", indRating: 5 };
  } else {
    return { grade: "bad", color: "error.light", indRating: 0 };
  }
};

const calculateOverview = (speedResult, accuracyResult) => {
  if (speedResult.grade === "great") {
    switch (accuracyResult.grade) {
      case "great":
        return { sentence: "Excellent!", rating: 5, color: "info.light" };
      case "good":
        return {
          sentence: "Amazing speed!",
          rating: 4.5,
          color: "success.light",
        };
      case "average":
        return {
          sentence: "Great pace!",
          rating: 4,
          color: "success.light",
        };
      default:
        return {
          sentence: "Quick and dirty",
          rating: 3.5,
          color: "warning.light",
        };
    }
  } else if (speedResult.grade === "good") {
    switch (accuracyResult.grade) {
      case "great":
        return {
          sentence: "Amazing precision!",
          rating: 4.5,
          color: "success.light",
        };
      case "good":
        return { sentence: "Great typing!", rating: 4, color: "success.light" };
      case "average":
        return { sentence: "Good pace", rating: 3.5, color: "warning.light" };
      default:
        return {
          sentence: "Reckless",
          rating: 3,
          color: "warning.light",
        };
    }
  } else if (speedResult.grade === "average") {
    switch (accuracyResult.grade) {
      case "great":
        return {
          sentence: "Not bad!",
          rating: 4,
          color: "success.light",
        };
      case "good":
        return { sentence: "O.K.", rating: 3.5, color: "warning.light" };
      case "average":
        return {
          sentence: "Try more fingers!",
          rating: 3,
          color: "warning.light",
        };
      default:
        return { sentence: "Too messy!", rating: 2, color: "error.light" };
    }
  } else if (speedResult.grade === "bad") {
    switch (accuracyResult.grade) {
      case "great":
        return {
          sentence: "Slow",
          rating: 3.5,
          color: "warning.light",
        };
      case "good":
        return { sentence: "Sloooow", rating: 3, color: "warning.light" };
      case "average":
        return {
          sentence: "Try to focus",
          rating: 2,
          color: "error.light",
        };
      default:
        return { sentence: "OMG", rating: 1, color: "error.light" };
    }
  }
};

export default calculateResults;
