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
        width: "22vw",
        height: "70vh",
        display: "flex",
        alignItems: "flex-end",
        flexDirection: "column",
        justifyContent: "space-around",
        mt: 2,
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
