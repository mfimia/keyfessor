const express = require("express");
const app = express();

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

app.use("/api/scores", require("./routes/scores"));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
