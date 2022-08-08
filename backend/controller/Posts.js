const postsServices = require("../service/Posts");

exports.getPosts = async (req, res) => {
    try {
        const requesterUserId = req.authenticatedUserId;
        const posts = await postsServices.getPosts(requesterUserId);
        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        res.status(404).json({ error });
    }
};

exports.createPost = async (req, res) => {
    try {
        await postsServices.createPost(req);
        res.status(200).json({ message: "Post created ! " });
    } catch (error) {
        res.status(409).json({ message: "Failed to create the post", error: error.message });
    }
};

exports.getPost = async (req, res) => {
    try {
        const post = await postsServices.getPost(req);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: "Post not found", error });
    }
};

exports.modifyPost = async (req, res) => {
    try {
        await postsServices.modifyPost(req);
        res.status(200).json({ message: "Post modified " });
    } catch (error) {
        res.status(409).json({ message: "Failed to modify the post", error });
    }
};

exports.deletePost = async (req, res) => {
    try {
        await postsServices.deletePost(req);
        res.status(200).json({ message: "Post deleted !" });
    } catch (error) {
        res.status(400).json({ message: "Failed to delete the post", error });
    }
};

exports.likePost = async (req, res) => {
    try {
        const response = await postsServices.likePost(req);

        res.status(200).json({ message: "Like updated !  ", data: { likeCount: response.usersLiked.length } });
    } catch (error) {
        console.error(error);
        res.status(409).json({ message: "Failed to update the like", error: error });
    }
};
