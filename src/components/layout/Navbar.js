import { useState, useContext } from "react";
import Pointer from "./Pointer";
import { StopWatch } from "../utils/StopWatch";
import MainContext from "../../context/main/MainContext";
import DarkContext from "../../context/darkMode/DarkContext";
import lightLogo from "../../assets/keyfessor-white-logo.png";
import darkLogo from "../../assets/keyfessor-black-logo.png";
import useEventListener from "@use-it/event-listener";
import { Box } from "@mui/system";
import { Typography, AppBar } from "@mui/material";

export default function Navbar() {
  const mainContext = useContext(MainContext);
  const { firstLetter, isRunning } = mainContext;

  const darkContext = useContext(DarkContext);
  const { mode } = darkContext;

  const [onLoad, setOnLoad] = useState(true);

  const startApp = () => {
    if (onLoad) {
      setOnLoad(false);
    }
  };

  useEventListener("keydown", startApp);

  return (
    <AppBar
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        pl: 6,
        pr: 12,
        backgroundColor: "transparent",
        backgroundImage: "none",
        boxShadow: "none",
        height: "10vh",
      }}
      position="static"
    >
      <Box
        component="img"
        sx={{ height: 36, width: 30 }}
        src={mode === "dark" ? lightLogo : darkLogo}
      ></Box>

      {!isRunning && (
        <Typography
          color="text.primary"
          fontSize={22}
          fontFamily="Righteous"
          sx={{
            position: "relative",
            ml: 6,
            fontSize: {
              xs: 22,
              xl: 28,
            },
          }}
        >
          Type "{firstLetter}" <Pointer /> to start
        </Typography>
      )}
      <StopWatch />
    </AppBar>
  );
}
