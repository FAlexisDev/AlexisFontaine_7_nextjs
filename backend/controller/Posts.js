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
        res.status(200).json({ message: "Post crée! " });
    } catch (error) {
        res.status(400).json({ message: "Post non crée", error: error.message });
    }
};

exports.getPost = async (req, res) => {
    try {
        const post = await postsServices.getPost(req);
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({ message: "Post non trouvé", error });
    }
};

exports.modifyPost = async (req, res) => {
    try {
        await postsServices.modifyPost(req);
        res.status(200).json({ message: "Post modifié! " });
    } catch (error) {
        res.status(400).json({ message: "Post non modifié", error });
    }
};

exports.deletePost = async (req, res) => {
    try {
        await postsServices.deletePost(req);
        res.status(200).json({ message: "Post supprimé! " });
    } catch (error) {
        res.status(400).json({ message: "Post non supprimé", error });
    }
};

exports.likePost = async (req, res) => {
    try {
        const response = await postsServices.likePost(req);

        res.status(200).json({ message: "Like mis à jour! ", data: { likeCount: response.usersLiked.length } });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Like non mis à jour", error: error });
    }
};
