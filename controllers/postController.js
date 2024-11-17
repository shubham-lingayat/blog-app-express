const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    const post = new Post({
      title,
      body,
    });
    const savedPost = await post.save();

    res.status(200).json({
      success: true,
      data: savedPost,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      data: "Internal Server Error",
      message: err.message,
    });
  }
};

// Get all posts:
exports.getAllposts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("Likes")
      .populate("Comments")
      .exec();

    res.status(200).json({
      success: true,
      data: posts,
      message: "Data Fetched Successfully.",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: "Internal Server Error",
      message: err.message,
    });
  }
};
