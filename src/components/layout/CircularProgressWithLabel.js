import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Fragment } from "react";

const CircularProgressWithLabel = ({ value, unit, percentage, title }) => {
  return (
    <Fragment>
      <Typography component="h5" variant="h6">
        {title}:
      </Typography>
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          size={64}
          variant="determinate"
          value={percentage ? percentage : value}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            fontSize={20}
            variant="caption"
            component="div"
            color="text.secondary"
          >
            {unit === "WPM" ? (
              <Typography fontSize={10} component="span">
                <Typography fontSize={20} component="span">
                  {value !== Infinity || NaN ? Math.round(value) : 0}
                </Typography>{" "}
                WPM
              </Typography>
            ) : (
              `${Math.round(value)}%`
            )}
          </Typography>
        </Box>
      </Box>
    </Fragment>
  );
};

export default CircularProgressWithLabel;
