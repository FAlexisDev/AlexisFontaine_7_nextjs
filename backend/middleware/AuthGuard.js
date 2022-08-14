const getPost = require("../service/Posts");
module.exports = async (req, res, next) => {
    try {
        const postUserId = (await getPost.getPost(req)).userId;
        if (req.authenticatedUserId === postUserId || req.userRole === 2) {
            next();
        }
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: "You are not allowed to continue" });
    }
};
