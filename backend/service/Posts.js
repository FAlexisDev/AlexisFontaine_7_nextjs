const Posts = require("../models/Posts");
const { getUsersInfos } = require("./Users");
const fs = require("fs");

exports.getPosts = async (requesterUserId, userRole) => {
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
            isOwner: requesterUserId === post.userId || userRole === 2 ? true : false,
            isAdmin: userInfos.roleId === 2 ? true : false,
        };
    });
    return await Promise.all(newPosts);
};

exports.createPost = async (req) => {
    const imageUrl = req.file === undefined ? "" : `${req.protocol}://${req.get("host")}/${req.file.path}`;
    let postDescription = req.body.description === "" ? " " : req.body.description;
    const { userId } = req.body;

    const post = new Posts({
        description: postDescription,
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
              description: req.body.description,
              imageUrl: `${req.protocol}://${req.get("host")}/${req.file.path}`,
          }
        : { description: req.body.description };

    await Posts.updateOne({ _id: req.params.id }, { ...postObject });
};

exports.deletePost = async (req) => {
    Posts.findOne({ _id: req.params.id })
        .then((res) => {
            let filename = res.imageUrl.split("/images\\")[1];
            fs.unlink(`images/${filename}`, async () => {
                await Posts.deleteOne({ _id: req.params.id });
            });
        })
        .catch((error) => console.error(error));
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
        usersLiked = usersLiked.filter((user) => {
            return user != req.authenticatedUserId;
        });
    }

    await post.updateOne({
        _id: req.params.id,
        usersLiked: usersLiked,
    });
    return await Posts.findOne({ _id: req.params.id });
};
