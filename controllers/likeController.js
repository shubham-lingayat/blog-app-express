// Import models
const Post = require("../models/postModel");
const Like = require("../models/likeModel");

exports.createLike = async (req, res) => {
  try {
    const { post, user } = req.body;
    const like = new Like({
      post,
      user,
    });
    const savedLike = await like.save();

    // Update Post Collection basis on id of the post
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { Likes: savedLike._id } },
      { new: true }
    )
      .populate("Likes")
      .exec();

    res.status(200).json({
      success: true,
      data: updatedPost,
      message: "Entryu Created Successfully.",
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

// Unlike a post
exports.unlikePost = async (req, res) => {
  try {
    const { post, like } = req.body;
    // Find and Delete the Like fromlike collection
    // 'findOneAndDelete' mngoose function which delete first data from db
    const deletedLike = await Like.findOneAndDelete({ post: post, _id: like });

    //  Update the Post Collection
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $pull: { Likes: deletedLike._id } },
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: updatedPost,
      message: "Like Deleted Successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      data: "Internal Server Error",
      message: err.message,
    });
  }
};
