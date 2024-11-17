// import mongoose
const mongoose = require("mongoose");

// Route Handler
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 50,
  },
  body: {
    type: String,
    required: true,
    maxLength: 300,
  },
  Likes: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Like",
  },
  Comments: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
  },
});

// Export Module
module.exports = mongoose.model("Post", postSchema);
