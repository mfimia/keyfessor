import { Fragment, useState, useContext } from "react";
import ScoresContext from "../../../../../context/scores/ScoresContext";
import { Typography, Button, TextField } from "@mui/material";
import LeaderboardTable from "./LeaderboardTable";

const Leaderboard = ({ finalScore }) => {
  const scoresContext = useContext(ScoresContext);
  const { addScore, getScores } = scoresContext;

  const [nickname, setNickname] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { overallRating, averageSpeed, averageAcc } = finalScore;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nickname && nickname.length >= 3 && nickname.length <= 12) {
      setNickname("");
      setSubmitted(false);
      addScore(nickname, overallRating, averageSpeed, averageAcc);
      setTimeout(() => getScores(), 3000);
    } else {
      console.log("Add valid nickname");
    }
  };

  const handleChange = (e) => setNickname(e.target.value);

  return (
    <Fragment>
      {!submitted && (
        <TextField
          onChange={handleChange}
          label={
            <Typography fontFamily="Righteous" component="span">
              Nickname
            </Typography>
          }
          variant="standard"
          name="nickname"
          value={nickname}
          required
          size="small"
          autoComplete="false"
        />
      )}
      <LeaderboardTable />
      {!submitted && (
        <Button onClick={handleSubmit} size="large">
          <Typography fontFamily="Righteous">Submit score</Typography>
        </Button>
      )}
    </Fragment>
  );
};

export default Leaderboard;
