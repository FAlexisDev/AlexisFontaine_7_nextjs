const Posts = require("../models/Posts");

exports.getPosts = async () => {
    return await Posts.find();
};

exports.createPost = async (req) => {
    const imageUrl = req.file === undefined ? "" : `${req.protocol}://${req.get("host")}/${req.file.path}`;
    const { description, userId } = req.body;

    const post = new Posts({
        description: description,
        userId: userId,
        usersLiked: [],
        imageUrl: imageUrl,
    });
    console.log(post);

    return await post.save();
};

exports.getPost = async (req) => {
    return await Posts.findOne({ _id: req.params.id });
};

exports.modifyPost = async (req) => {
    const postObject = req.file
        ? {
              ...req.body,
              imageUrl: `${req.protocol}://${req.get("host")}/${req.file.path}`,
          }
        : { ...req.body };
    await Posts.updateOne({ _id: req.params.id }, { ...postObject });
};

exports.deletePost = async (req) => {
    await Posts.deleteOne({ _id: req.params.id });
};

exports.likePost = async (req) => {
    const post = await Posts.findOne({ _id: req.params.id });

    switch (req.body.like) {
        case true:
            if (post.usersLiked.includes(req.body.userId)) {
                post.usersLiked.splice(0, 1);
            }
            post.usersLiked.push(req.body.userId);

            break;

        case false:
            post.usersLiked = post.usersLiked.filter((user) => {
                return user != req.body.userId;
            });
            break;
    }
    console.log(post.usersLiked);
    return await post.updateOne({
        _id: req.params.id,
        usersLiked: post.usersLiked,
    });
};
