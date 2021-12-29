const { MongoClient } = require("mongodb");
const express = require("express");
const router = express.Router();

const uri =
  "mongodb+srv://mfimia:aT..Su8yi9AXWKz@mfimia.seces.mongodb.net/Keyfessor?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// This route allows us to get top scores
// @route   GET api/scores
// desc     Get top scores
// @access  Private
router.get("/", async (req, res) => {
  try {
    client.connect(async () => {
      const db = client.db("Keyfessor");
      const scores = await db.collection("Leaderboard").find().toArray();
      console.log(scores);
      client.close();
      res.json(scores);
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// This route will allow to add a score
// @route   POST api/score
// desc     Add new score
// @access  Private
router.post("/", async (req, res) => {
  try {
    const {
      nickname,
      overallRating,
      finalTotalTime,
      averageSpeedRating,
      averageSpeed,
      averageTime,
      averageAccRating,
      averageAcc,
      totalAppLetters,
    } = await req.body;

    const newScore = {
      nickname,
      overallRating,
      finalTotalTime,
      averageSpeedRating,
      averageSpeed,
      averageTime,
      averageAccRating,
      averageAcc,
      totalAppLetters,
      date: new Date(),
    };

    client.connect(async () => {
      const db = client.db("Keyfessor");
      await db.collection("Leaderboard").insertOne(newScore);
      client.close();
      res.json(newScore);
    });
  } catch (err) {
    console.log(err);
    console.log("Error occurred");
    client.close();
  }
});

module.exports = router;
