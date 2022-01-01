import { Typography, Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import calculateStatsColors from "../../../utils/calculateStatsColors";

const types = {
  mb: 2,
  fontFamily: "Ropa Sans",
};

const AdvancedStats = ({ finalScore, totalAppLetters }) => {
  const {
    finalTotalTime,
    averageAcc,
    averageAccRating,
    averageSpeed,
    averageSpeedRating,
    averageTime,
  } = finalScore;

  const colors = calculateStatsColors(finalScore);

  const { totalTime, avgTime, avgSpeed, avgAcc, avgSpeedRt, avgAccRt } = colors;

  const averages = [
    {
      stat: "Time (per text)",
      rating: averageTime,
      unit: " s",
      color: avgTime,
    },
    { stat: "Speed", rating: averageSpeed, unit: " WPM", color: avgSpeed },
    { stat: "Accuracy", rating: averageAcc, unit: "%", color: avgAcc },
    {
      stat: "Speed Rating",
      rating: averageSpeedRating,
      unit: "/10",
      color: avgSpeedRt,
    },
    {
      stat: "Accuracy Rating",
      rating: averageAccRating,
      unit: "/10",
      color: avgAccRt,
    },
  ];

  return (
    <Box component="div" textAlign="left">
      <Typography sx={types}>
        You have typed a total of{" "}
        <Typography fontStyle="italic" fontFamily="Ropa Sans" component="span">
          {totalAppLetters}{" "}
        </Typography>
        characters in{" "}
        <Typography color={totalTime} fontFamily="Ropa Sans" component="span">
          {finalTotalTime}
        </Typography>{" "}
        seconds
      </Typography>
      <Box component="div">
        <Typography
          sx={{ my: 1 }}
          textAlign="center"
          component="h2"
          variant="h6"
        >
          Averages
        </Typography>
      </Box>
      <TableContainer
        elevation={3}
        sx={{ width: "60%", margin: "0 auto" }}
        component={Paper}
      >
        <Table>
          <TableBody>
            {averages.map((average) => (
              <TableRow
                key={average.stat}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Typography fontFamily="Ropa Sans">{average.stat}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography color={average.color} fontFamily="Ropa Sans">
                    {average.rating}
                    {average.unit}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AdvancedStats;
