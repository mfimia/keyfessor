import { useContext } from "react";
import MainContext from "../../context/main/MainContext";
import CircularProgressWithLabel from "./CircularProgressWithLabel";
import { Box } from "@mui/material";

export default function Tracker() {
  const mainContext = useContext(MainContext);
  const { lettersArray, currentLetter, wordsPerMinute, accuracy } = mainContext;

  const amountTyped = (currentLetter / lettersArray.totalLetters) * 100;
  const speedPercentage = (wordsPerMinute / 75) * 100;

  return (
    <Box
      sx={{
        width: {
          xs: "12vw",
          lg: "20vw",
        },
        height: {
          xs: "50vh",
        },
        display: "flex",
        alignItems: "flex-end",
        flexDirection: "column",
        justifyContent: "space-around",
        mt: {
          xs: 12,
        },
        mr: 4,
      }}
    >
      <CircularProgressWithLabel title="Typed" value={amountTyped} unit="%" />
      <CircularProgressWithLabel
        title="Speed"
        value={wordsPerMinute}
        unit="WPM"
        percentage={speedPercentage}
      />
      <CircularProgressWithLabel title="Accuracy" value={accuracy} unit="%" />
    </Box>
  );
}
