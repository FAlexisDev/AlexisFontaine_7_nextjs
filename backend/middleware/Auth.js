const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, "3v3rNsUcu3xZ5he86nE6UJn2796r2HFfTZWVUCx88Re3s6Jm");
        console.log(decodedToken.role);
        const userId = decodedToken.userId;
        if (decodedToken.role != 2 || (req.body.userId && req.body.userId !== userId)) {
            throw "User ID non valable";
        } else {
            next();
        }
    } catch (error) {
        console.error(error);
        res.status(403).json({ message: "Unauthorized request" });
    }
};
