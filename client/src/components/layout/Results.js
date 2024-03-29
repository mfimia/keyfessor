import MainContext from "../../context/main/MainContext";
import { useContext } from "react";
import { Box } from "@mui/system";
import List from "@mui/material/List";
import StarIcon from "@mui/icons-material/Star";
import Rating from "@mui/material/Rating";

import { Typography, ListItemText, ListItem } from "@mui/material";

const iconStyle = {
  fontSize: {
    xs: "16px",
    md: "20px",
    lg: "22px",
    xl: "28px",
  },
  color: "goldenrod",
  p: 0,
};

const fontBreakpoints = {
  xs: "12px",
  md: "14px",
  lg: "16px",
  xl: "20px",
};

const Results = () => {
  const mainContext = useContext(MainContext);

  const { laps } = mainContext;

  const timeResults = laps.map((lap, index) => {
    const { speed, accuracy, results } = lap;
    const { speedResult, accuracyResult, overview } = results;
    const { sentence, rating } = overview;

    return (
      <ListItem
        component="div"
        sx={{ p: 0, mb: 1 }}
        alignItems="flex-start"
        key={index}
      >
        <ListItemText
          primary={
            <Typography component="div" sx={{ fontSize: fontBreakpoints }}>
              <Typography
                sx={{ fontSize: fontBreakpoints }}
                component="span"
                fontWeight={700}
              >
                T{index + 1}
              </Typography>{" "}
              -{" "}
              <Typography
                sx={{ fontSize: fontBreakpoints, color: speedResult.color }}
                component="span"
              >
                {speed} WPM
              </Typography>{" "}
              |{" "}
              <Typography
                sx={{ fontSize: fontBreakpoints, color: accuracyResult.color }}
                component="span"
              >
                {accuracy}%
              </Typography>
            </Typography>
          }
          secondary={
            <Typography component="div">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
                component="div"
              >
                <Box component="span" sx={{ mr: 1 }}>
                  <Typography
                    component="span"
                    sx={{ fontSize: fontBreakpoints }}
                    color={overview.color}
                  >
                    {sentence}
                  </Typography>
                </Box>
                <Rating
                  sx={iconStyle}
                  precision={0.5}
                  name="Result-overview"
                  value={rating}
                  readOnly
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.1 }} sx={iconStyle} />
                  }
                />
              </Box>
            </Typography>
          }
        />
      </ListItem>
    );
  });

  return (
    <Box
      component="div"
      sx={{
        width: {
          xs: "24vw",
          xl: "22vw",
        },
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        mt: {
          xs: 4,
          lg: 6,
        },
        ml: {
          xs: 2,
          xl: 4,
        },
      }}
    >
      {laps.length !== 0 && (
        <List sx={{ overflow: "auto" }}>{timeResults}</List>
      )}
    </Box>
  );
};

export default Results;
