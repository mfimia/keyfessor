const { MongoClient } = require("mongodb");
const express = require("express");
const router = express.Router();
const app = express();
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const client = new MongoClient(process.env.REACT_APP_MONGO_URI, {
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

// Init Middleware
// This lets us read the request in our POST request from client
app.use(express.json({ extended: false }));

// Here we declare the routes that we are using
app.use("/api/scores/", router);

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

// Serve static assets (React) in production
// It checks if the environment is in production
if (process.env.NODE_ENV === "production") {
  // If it's in production, it loads the build folder
  app.use(express.static("client/build"));

  // If this route is hit, it will load the index.html in the build/ folder
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// module.exports = client;
