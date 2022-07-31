const Posts = require("../models/Posts");

exports.getPosts = async () => {
    return await Posts.find();
};

exports.createPost = async (req) => {
    const { description, userId } = req.body;

    const post = new Posts({
        description: description,
        userId: userId,
        usersLiked: [],
        imageUrl: `${req.protocol}://${req.get("host")}/${req.file.path}`,
    });
    console.log(post);

    return await post.save();
};

exports.getPost = async (req) => {
    return await Posts.findOne({ _id: req.params.id });
};

exports.modifyPost = async (req) => {
    await Posts.updateOne({ _id: req.params.id }, { ...req.body });
};

exports.deletePost = async (req) => {
    await Posts.deleteOne({ _id: req.params.id });
};
