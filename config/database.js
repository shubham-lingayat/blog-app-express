// Connection with database using mongoose
const mongoose = require("mongoose");

// To feed "env" inside process we need "dotenv" library
require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB connection is successful."))
    .catch((error) => {
      console.log("Error in Connection: ");
      console.error(error);
      process.exit(1);
    });
};

module.exports = dbConnect;
