const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Import Routes
const blog = require("./routes/blogs");
// Mount all routes to
app.use("/api/v1", blog);

const connectDatabase = require("./config/database");
connectDatabase();

// Start the server
app.listen(PORT, () => {
  console.log(`App is running on ${PORT} Port`);
});
app.get("/", (req, res) => {
  res.send(`<h1>Welcome to Home Page</h1>`);
});
