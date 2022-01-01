const timeColors = (average, total) => {
  let averageColor = "",
    totalColor = "";

  if (average <= 60) {
    averageColor = "success.main";
  } else if (average <= 90) {
    averageColor = "warning.main";
  } else {
    averageColor = "error.main";
  }

  if (total <= 600) {
    totalColor = "success.main";
  } else if (total <= 720) {
    totalColor = "warning.main";
  } else {
    totalColor = "error.main";
  }

  return { averageColor, totalColor };
};

export default timeColors;
