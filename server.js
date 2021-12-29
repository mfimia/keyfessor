const express = require("express");
const app = express();

// Init Middleware
app.use(express.json({ extended: false }));

app.use("/api/scores", require("./routes/scores"));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
