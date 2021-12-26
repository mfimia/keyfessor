import "../../css/StopWatch.css";
import MainContext from "../../context/main/MainContext";
import { useContext } from "react";
import { Typography } from "@mui/material";

export const StopWatch = () => {
  const mainContext = useContext(MainContext);
  const { elapsedTime } = mainContext;

  return (
    <Typography
      color="text.primary"
      fontSize={26}
      sx={{ display: "inline-block" }}
    >
      {elapsedTime}
    </Typography>
  );
};
