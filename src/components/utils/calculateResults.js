const calculateResults = (speed, accuracy) => {
  const speedResult = calculateSpeedResult(speed);
  const accuracyResult = calculateAccuracyResult(accuracy);
  const overview = calculateOverview(speedResult, accuracyResult);
  return { speedResult, accuracyResult, overview };
};

const calculateSpeedResult = (speed) => {
  if (speed >= 50) {
    return { grade: "great", color: "info.light" };
  } else if (speed >= 40) {
    return { grade: "good", color: "success.light" };
  } else if (speed >= 30) {
    return { grade: "average", color: "warning.light" };
  } else {
    return { grade: "bad", color: "error.light" };
  }
};

const calculateAccuracyResult = (accuracy) => {
  if (accuracy >= 95) {
    return { grade: "great", color: "info.light" };
  } else if (accuracy >= 90) {
    return { grade: "good", color: "success.light" };
  } else if (accuracy >= 80) {
    return { grade: "average", color: "warning.light" };
  } else {
    return { grade: "bad", color: "error.light" };
  }
};

const calculateOverview = (speedResult, accuracyResult) => {
  if (speedResult.grade === "great") {
    switch (accuracyResult.grade) {
      case "great":
        return { sentence: "Maestro", rating: 5, color: "info.light" };
      case "good":
        return {
          sentence: "Fast & Furious!",
          rating: 4.5,
          color: "success.light",
        };
      case "average":
        return {
          sentence: "Speedy Gonzalez",
          rating: 4,
          color: "success.light",
        };
      default:
        return {
          sentence: "Fast and Reckless",
          rating: 3.5,
          color: "warning.light",
        };
    }
  } else if (speedResult.grade === "good") {
    switch (accuracyResult.grade) {
      case "great":
        return { sentence: "Mr. Grammar", rating: 4.5, color: "success.light" };
      case "good":
        return { sentence: "Nice typing!", rating: 4, color: "success.light" };
      case "average":
        return { sentence: "Good pace", rating: 3.5, color: "warning.light" };
      default:
        return {
          sentence: "Reckless typing",
          rating: 3,
          color: "warning.light",
        };
    }
  } else if (speedResult.grade === "average") {
    switch (accuracyResult.grade) {
      case "great":
        return {
          sentence: "Slow and Steady",
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
          sentence: "Mr. Two Fingers",
          rating: 3.5,
          color: "warning.light",
        };
      case "good":
        return { sentence: "Too slow!", rating: 3, color: "warning.light" };
      case "average":
        return {
          sentence: "Drunk and typing",
          rating: 2,
          color: "error.light",
        };
      default:
        return { sentence: "Wth you doing?!", rating: 1, color: "error.light" };
    }
  }
};

export default calculateResults;
