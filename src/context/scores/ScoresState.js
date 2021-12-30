import ScoresContext from "./ScoresContext";
import { useState } from "react";

const ScoresState = (props) => {
  const [scores, setScores] = useState(null);

  // Get Scores from database
  const getScores = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/scores/");
      const scores = await res.json();
      setScores(scores);
    } catch (error) {
      console.log(error);
    }
  };

  // Add score to database
  const addScore = async (
    nickname,
    overallRating,
    averageSpeed,
    averageAcc
  ) => {
    const score = {
      overallRating,
      averageSpeed,
      averageAcc,
      unixDate: new Date().getTime(),
      nickname,
    };
    try {
      const res = await fetch("http://localhost:5000/api/scores/", {
        method: "POST",
        body: JSON.stringify(score),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScoresContext.Provider value={{ scores, addScore, getScores }}>
      {props.children}
    </ScoresContext.Provider>
  );
};

export default ScoresState;