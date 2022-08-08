const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports = async (req, res, next) => {
    try {
        await jwt.verify(req.cookies.access_token, process.env.TOKEN);
        req.authenticatedUserId = jwt.decode(req.cookies.access_token).userId;
        req.userRole = jwt.decode(req.cookies.access_token).role;
        next();
    } catch (error) {
        res.status(401).json({ message: "Unauthorized request", error: error });
    }
};
