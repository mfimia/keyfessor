import "../../css/StopWatch.css";
import MainContext from "../../context/main/MainContext";
import { useContext } from "react";
import { Box } from "@mui/system";
import List from "@mui/material/List";
import StarIcon from "@mui/icons-material/Star";
import {
  ListItemIcon,
  Typography,
  ListItemText,
  ListItem,
} from "@mui/material";

const Results = () => {
  const mainContext = useContext(MainContext);
  const { laps } = mainContext;

  const timeResults = laps.map((lap, index) => {
    return (
      <ListItem alignItems="flex-start" key={index}>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography>
              <Typography component="span" fontWeight={700}>
                T{index + 1}
              </Typography>
              : {Math.floor(lap.time)}s | {lap.speed} WPM | {lap.accuracy}%
            </Typography>
          }
          secondary="Excellent!"
        />
      </ListItem>
    );
  });

  return (
    <Box
      sx={{
        width: "22vw",
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        mt: 4,
        mr: 6,
      }}
    >
      {laps.length !== 0 && (
        <List sx={{ overflow: "auto" }}>{timeResults}</List>
      )}
    </Box>
  );
};

export default Results;
