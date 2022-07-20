const postsServices = require("../service/Posts");

exports.getPosts = async (req, res) => {
    try {
        const posts = await postsServices.getPosts();
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ error });
    }
};

exports.createPost = async (req, res) => {
    try {
        await postsServices.createPost(req);
        res.status(200).json({ message: "Post crée! " });
    } catch (error) {
        res.status(400).json({ message: "Post non crée", error });
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
