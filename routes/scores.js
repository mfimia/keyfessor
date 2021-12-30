const { MongoClient } = require("mongodb");
const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");

// Allows us to use environment variables
dotenv.config();

const uri = process.env.REACT_APP_MONGO_URI;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Avoiding CORS policy errors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
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
    const { nickname, overallRating, averageSpeed, averageAcc, unixDate } =
      await req.body;

    const newScore = {
      nickname,
      overallRating,
      averageSpeed,
      averageAcc,
      unixDate,
    };

    client.connect(async () => {
      const db = client.db("Keyfessor");
      await db.collection("Leaderboard").insertOne(newScore);
      client.close();
      res.json(newScore);
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
