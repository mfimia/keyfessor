import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import MainContext from "../context/main/MainContext";
import "../css/Text.css";

export default function Text() {
  const mainContext = useContext(MainContext);
  const { displayedText, currentLetter, mainText } = mainContext;

  const dynamicText = displayedText.texts[displayedText.currentText]
    .split("")
    .map((letter, index) => {
      return (
        <Typography
          component="span"
          key={index}
          sx={{
            fontFamily: "Special Elite",
            fontSize: 26,
            lineHeight: 2.4,
          }}
          color={index >= currentLetter ? "text.secondary" : "text.primary"}
          fontWeight={index >= currentLetter ? 300 : 700}
        >
          {letter}
        </Typography>
      );
    });

  return (
    <Box
      ref={mainText}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        width: "45vw",
        height: "60%",
        alignItems: "center",
        pt: 4,
        overflow: "hidden",
      }}
    >
      <Typography component="p">{dynamicText}</Typography>
    </Box>
  );
}
