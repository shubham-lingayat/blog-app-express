// import Model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

// Business Logic
exports.createComment = async (req, res) => {
  try {
    // Creating entry to the database through mongoose
    // instaed we can use 'create' function from mongoose
    const { post, user, body } = req.body;
    // create a comment Object
    const comment = new Comment({ post, user, body });

    // Save the new comment object into DB
    const savedComment = await comment.save();

    // find the post by ID, add the new comment Object
    // to its comments array
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { Comments: savedComment._id } },
      { new: true }
    ) // If we use Populate it will return whole 'Comment' object 
      // instaed of writing comment only.
      .populate("Comments") // Populate the comment array with comment documents
      .exec();

    res.status(200).json({
      success: true,
      post: updatedPost,
      message: "Comment created suceesfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "Internal Server Error",
      message: err.message,
    });
  }
};
