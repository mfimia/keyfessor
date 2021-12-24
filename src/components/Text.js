import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import MainContext from "../context/main/MainContext";
import "../css/Text.css";

export default function Text() {
  const mainContext = useContext(MainContext);
  const { displayedText, currentLetter } = mainContext;
  console.log(displayedText);

  const dynamicText = displayedText.texts[displayedText.currentText]
    .split("")
    .map((letter, index) => {
      return (
        <Typography
          component="span"
          key={index}
          sx={{ fontFamily: "Special Elite" }}
          color={index >= currentLetter ? "green" : "pink"}
        >
          {letter}
        </Typography>
      );
    });

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        width: "50vw",
        height: "60%",
        alignItems: "center",
        border: 1,
      }}
    >
      <Typography component="p">{dynamicText}</Typography>
    </Box>
  );
}
