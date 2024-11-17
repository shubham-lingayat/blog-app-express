// import Mongoose
const mongoose = require("mongoose");

// Route handler
const commentSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "post", // Reference to post Model
  },
  user: {
    type: String,
    required: true,
    maxLength: 20,
  },
  body: {
    type: String,
    required: true,
    maxLength: 150,
  },
});

// Export
module.exports = mongoose.model("Comment", commentSchema);
