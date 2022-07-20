const Posts = require("../models/Posts");

exports.getPosts = async () => {
    await Posts.find();
};

exports.createPost = async (req) => {
    const post = new Posts({
        ...req.body.post,
        like: 0,
        usersLiked: [],
    });
    await post.save();
};

exports.getPost = async (req) => {
    await Posts.findOne({ _id: req.params.id });
};

exports.modifyPost = async (req) => {
    await Posts.updateOne({ _id: req.params.id }, { ...req.body });
};

exports.deletePost = async (req) => {
    await Posts.deleteOne({ _id: req.params.id });
};
