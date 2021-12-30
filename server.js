const express = require("express");
const app = express();
const path = require("path");

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
app.use(express.json({ extended: false }));

app.use("/api/scores/", require("./routes/scores"));

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
