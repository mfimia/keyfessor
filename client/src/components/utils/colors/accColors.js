const accColors = (average, rating) => {
  let averageColor = "",
    ratingColor = "";

  if (average >= 90) {
    averageColor = "success.main";
  } else if (average >= 80) {
    averageColor = "warning.main";
  } else {
    averageColor = "error.main";
  }

  if (rating >= 8) {
    ratingColor = "success.main";
  } else if (rating >= 6) {
    ratingColor = "warning.main";
  } else {
    ratingColor = "error.main";
  }

  return { averageColor, ratingColor };
};

export default accColors;
