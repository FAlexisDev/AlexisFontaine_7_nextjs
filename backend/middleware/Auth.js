const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    try {
        await jwt.verify(req.cookies.access_token, "3v3rNsUcu3xZ5he86nE6UJn2796r2HFfTZWVUCx88Re3s6Jm");
        next();
    } catch (error) {
        res.status(401).json({ message: "Veuillez vous authentifiez", error: error });
    }
};
