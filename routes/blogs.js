const express = require("express");
const router = express.Router();

// Import Controller
const { createLike, unlikePost } = require("../controllers/likeController");
const { createComment } = require("../controllers/commentController");
const { createPost, getAllposts } = require("../controllers/postController");

router.post("/likes/like", createLike);
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllposts);
router.post("/likes/unlike", unlikePost);

// export
module.exports = router;
