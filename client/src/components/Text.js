import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import MainContext from "../context/main/MainContext";

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
            fontFamily: "Cutive",
            fontSize: {
              xs: 26,
              xl: 32,
            },
            lineHeight: 2.4,
          }}
          color={index >= currentLetter ? "text.secondary" : "primary"}
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
        width: {
          xs: "50vw",
          lg: "45vw",
        },
        height: "60%",
        alignItems: "center",
        pt: 4,
        overflow: "hidden",
      }}
    >
      <Typography textAlign="center" component="p">
        {dynamicText}
      </Typography>
    </Box>
  );
}
