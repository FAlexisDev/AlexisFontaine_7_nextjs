const express = require("express");
const router = express.Router();
const postsCtrl = require("../controller/Posts");
const auth = require("../middleware/Auth");

router.get("/posts", postsCtrl.getPosts);
router.post("/posts", auth, postsCtrl.createPost);
router.get("/posts/:id", auth, postsCtrl.getPost);
router.put("/posts/:id", auth, postsCtrl.modifyPost);
router.delete("/posts/:id", auth, postsCtrl.deletePost);
router.post("/posts/:id/like");

module.exports = router;
