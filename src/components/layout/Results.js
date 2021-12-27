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
      <ListItem sx={{ p: 0 }} alignItems="flex-start" key={index}>
        <ListItemIcon
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <StarIcon
            sx={{
              fontSize: {
                xs: 16,
                md: 20,
                lg: 22,
                xl: 28,
              },
            }}
          />
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography
              sx={{
                fontSize: {
                  xs: 12,
                  md: 14,
                  lg: 16,
                  xl: 20,
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: 12,
                    md: 14,
                    lg: 16,
                    xl: 20,
                  },
                }}
                component="span"
                fontWeight={700}
              >
                T{index + 1}
              </Typography>
              : {Math.floor(lap.time)}s | {lap.speed} WPM | {lap.accuracy}%
            </Typography>
          }
          secondary={
            <Typography
              sx={{
                fontSize: {
                  xs: 12,
                  md: 14,
                  lg: 16,
                  xl: 20,
                },
              }}
              color="text.secondary"
            >
              Excellent!
            </Typography>
          }
        />
      </ListItem>
    );
  });

  return (
    <Box
      sx={{
        width: {
          xs: "24vw",
        },
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        mt: {
          xs: 4,
          lg: 6,
        },
        mr: 4,
        border: 1,
      }}
    >
      {laps.length !== 0 && (
        <List sx={{ overflow: "auto" }}>{timeResults}</List>
      )}
    </Box>
  );
};

export default Results;
