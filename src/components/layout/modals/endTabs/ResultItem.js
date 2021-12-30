import { Box } from "@mui/system";
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
  xs: "14px",
  md: "16px",
  lg: "18px",
  xl: "20px",
};

const ResultItem = ({ lap, index }) => {
  const { speed, accuracy, results, time } = lap;
  const { speedResult, accuracyResult, overview } = results;
  const { sentence, rating } = overview;

  return (
    <ListItem sx={{ p: 0, mb: 1 }} alignItems="flex-start">
      <ListItemText
        primary={
          <Typography component="div" sx={{ fontSize: fontBreakpoints }}>
            <Typography
              sx={{ fontSize: fontBreakpoints }}
              component="span"
              fontWeight={700}
            >
              Text {index + 1}
            </Typography>{" "}
            -{" "}
            <Typography
              sx={{ fontSize: fontBreakpoints, color: "text.primary" }}
              component="span"
            >
              {Math.floor(time)} s
            </Typography>{" "}
            |{" "}
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
            >
              <Box component="span" sx={{ mr: 1 }}>
                <Typography
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
                emptyIcon={<StarIcon style={{ opacity: 0.1 }} sx={iconStyle} />}
              />
            </Box>
          </Typography>
        }
      />
    </ListItem>
  );
};

export default ResultItem;
