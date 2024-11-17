// Import Mongoose
const mongoose = require("mongoose");

// Route Handler
const likeSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post", // Reference to the Post Model
  },
  user: {
    type: String,
    required: true,
    maxLength: 20,
  },
});

// Export
module.exports = mongoose.model("Like", likeSchema);
