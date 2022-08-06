const Posts = require("../models/Posts");
const { getUsersInfos } = require("./Users");

exports.getPosts = async (requesterUserId) => {
    const posts = await Posts.find();

    const newPosts = posts.map(async (post) => {
        const userInfos = await getUsersInfos(post.userId);
        return {
            id: post._id,
            userId: post.userId,
            imageUrl: post.imageUrl,
            description: post.description,
            like: post.usersLiked.length,
            isLiked: post.usersLiked.includes(requesterUserId),
            name: userInfos.name,
            lastName: userInfos.lastName,
            createdAt: post.createdAt,
        };
    });
    return await Promise.all(newPosts);
};

exports.createPost = async (req) => {
    const imageUrl = req.file === undefined ? "" : `${req.protocol}://${req.get("host")}/${req.file.path}`;
    const { description, userId } = req.body;

    const post = new Posts({
        description: description,
        userId: userId,
        usersLiked: [],
        imageUrl: imageUrl,
        createdAt: Date.now(),
    });

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
    let usersLiked = post.usersLiked;
    let likeStatus = false;

    if (usersLiked.includes(req.authenticatedUserId)) {
        likeStatus = true;
    }

    if (!likeStatus) {
        usersLiked.push(req.authenticatedUserId);
    } else {
        console.log("test");
        usersLiked = usersLiked.filter((user) => {
            return user != req.authenticatedUserId;
        });
    }
    console.log(usersLiked);

    await post.updateOne({
        _id: req.params.id,
        usersLiked: usersLiked,
    });
    return await Posts.findOne({ _id: req.params.id });
};
