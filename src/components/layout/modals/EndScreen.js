import { useContext } from "react";
import MainContext from "../../../context/main/MainContext";
import CalculateFinalScore from "../../utils/CalculateFinalScore";
import List from "@mui/material/List";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import ResultItem from "./endTabs/ResultItem";
import AdvancedStats from "./endTabs/AdvancedStats";
import EndTitle from "./endTabs/EndTitle";
import Leaderboard from "./endTabs/leaderboard/Leaderboard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "50%",
    md: "40%",
    xl: "35%",
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

  const timeResults = laps.map((lap, index) => (
    <ResultItem lap={lap} key={index} index={index} />
  ));

  return (
    <Modal
      open={true}
      aria-labelledby="end-screen-modal-title"
      aria-describedby="end-screen-modal-description"
    >
      <Box component="div" sx={style}>
        <EndTitle finalScore={finalScore} />
        <Box sx={{ my: 4 }}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="Final-results"
            >
              <Typography fontFamily="Righteous">Results</Typography>
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
              <Typography fontFamily="Righteous">Advanced Stats</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <AdvancedStats
                finalScore={finalScore}
                totalAppLetters={totalAppLetters}
              />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="Leaderboard"
            >
              <Typography fontFamily="Righteous">Leaderboard</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Leaderboard finalScore={finalScore} />
            </AccordionDetails>
          </Accordion>
        </Box>
        <Button sx={{ mt: 1 }} onClick={resetGame} size="large">
          <Typography fontFamily="Righteous">Restart</Typography>
        </Button>
      </Box>
    </Modal>
  );
};

export default EndScreen;
