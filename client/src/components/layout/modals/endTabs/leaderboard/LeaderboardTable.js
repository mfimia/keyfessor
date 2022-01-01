import { useEffect, useContext } from "react";
import ScoresContext from "../../../../../context/scores/ScoresContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const LeaderboardTable = () => {
  const scoresContext = useContext(ScoresContext);
  const { scores, getScores } = scoresContext;

  useEffect(() => {
    getScores();
    // eslint-disable-next-line
  }, []);

  return (
    <TableContainer sx={{ my: 4 }} elevation={3} component={Paper}>
      <Table aria-label="Leaderboard table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Rating</TableCell>
            <TableCell align="right">Speed&nbsp;(WPM)</TableCell>
            <TableCell align="right">Accuracy&nbsp;(%)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {scores &&
            scores.map((score, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {score.nickname}
                </TableCell>
                <TableCell align="right">{score.overallRating}</TableCell>
                <TableCell align="right">{score.averageSpeed}</TableCell>
                <TableCell align="right">{score.averageAcc}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LeaderboardTable;
