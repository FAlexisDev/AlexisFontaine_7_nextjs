const express = require("express");
const router = express.Router();
const postsCtrl = require("../controller/Posts");
const auth = require("../middleware/Auth");
const authGuard = require("../middleware/AuthGuard");
const multer = require("../middleware/multer");

router.get("/posts", auth, postsCtrl.getPosts);
router.post("/posts", auth, multer, postsCtrl.createPost);
router.get("/posts/:id", auth, postsCtrl.getPost);
router.put("/posts/:id", auth, authGuard, multer, postsCtrl.modifyPost);
router.delete("/posts/:id", auth, authGuard, postsCtrl.deletePost);
router.get("/posts/:id/like", auth, postsCtrl.likePost);

module.exports = router;
