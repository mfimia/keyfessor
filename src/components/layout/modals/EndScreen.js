import { useContext } from "react";
import MainContext from "../../../context/main/MainContext";
import CalculateFinalScore from "../../utils/CalculateFinalScore";
import { Box } from "@mui/system";
import List from "@mui/material/List";
import StarIcon from "@mui/icons-material/Star";
import Rating from "@mui/material/Rating";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Typography, ListItemText, ListItem } from "@mui/material";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

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

const titleBreakpoints = {
  xs: "20px",
  md: "22px",
  lg: "24px",
  xl: "28px",
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "50%",
    md: "40%",
    lg: "35%",
    xl: "30%",
  },
  height: "90vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  textAlign: "center",
  overflow: "auto",
  p: 4,
};

const EndScreen = () => {
  const mainContext = useContext(MainContext);
  const { resetGame, laps, totalAppLetters } = mainContext;

  const finalScore = CalculateFinalScore();
  const {
    finalTotalTime,
    averageAcc,
    averageAccRating,
    averageSpeed,
    averageSpeedRating,
    averageTime,
    title,
    overallRating,
  } = finalScore;
  console.log(typeof title);

  const { scoreTitle, titleColor } = title;

  const timeResults = laps.map((lap, index) => {
    const { speed, accuracy, results, time } = lap;
    const { speedResult, accuracyResult, overview } = results;
    const { sentence, rating } = overview;

    return (
      <ListItem sx={{ p: 0, mb: 1 }} alignItems="flex-start" key={index}>
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
    <Modal
      open={true}
      aria-labelledby="end-screen-modal-title"
      aria-describedby="end-screen-modal-description"
    >
      <Box component="div" sx={style}>
        <Typography
          fontFamily="Righteous"
          id="end-screen-modal-title"
          variant="h3"
          component="h3"
        >
          Great stuff!
        </Typography>
        <Typography
          fontFamily="Righteous"
          id="end-screen-modal-description"
          sx={{ my: 2 }}
        >
          Your Keyfessor title is:
        </Typography>
        <Typography
          sx={{ fontSize: titleBreakpoints }}
          fontFamily="Righteous"
          color={titleColor}
          fontWeight={700}
          letterSpacing={2}
        >
          {scoreTitle.toUpperCase()}
        </Typography>
        <Rating
          sx={iconStyle}
          precision={0.1}
          name="Title-score"
          value={overallRating}
          readOnly
          emptyIcon={<StarIcon style={{ opacity: 0.1 }} sx={iconStyle} />}
        />
        <Box sx={{ my: 4 }}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="Final-results"
            >
              <Typography fontFamily="Righteous">
                See detailed results
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List sx={{ pl: 2 }}>{timeResults}</List>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="Advanced-stats"
            >
              <Typography fontFamily="Righteous">See advanced stats</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ px: 4, m: 2 }}>
                You have typed a total of {totalAppLetters} characters in{" "}
                {finalTotalTime} seconds
              </Typography>
              <Typography sx={{ mb: 2 }}>
                Average time {averageTime} seconds per text
              </Typography>
              <Typography sx={{ mb: 2 }}>
                Average speed {averageSpeed} WPM
              </Typography>
              <Typography sx={{ mb: 2 }}>
                Average accuracy {averageAcc}%
              </Typography>
              <Typography sx={{ mb: 2 }}>
                Average speed rating {averageSpeedRating}/10 points
              </Typography>
              <Typography sx={{ mb: 2 }}>
                Average accuracy rating {averageAccRating}/10 points
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Button sx={{ mt: 1 }} onClick={resetGame} size="large">
          <Typography fontFamily="Righteous">Go again?</Typography>
        </Button>
      </Box>
    </Modal>
  );
};

export default EndScreen;
