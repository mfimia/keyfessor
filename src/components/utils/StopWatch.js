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
      sx={{
        display: "inline-block",
        fontSize: {
          xs: 26,
          xl: 30,
        },
      }}
    >
      {elapsedTime}
    </Typography>
  );
};
