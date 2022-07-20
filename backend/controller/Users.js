const usersService = require("../service/Users");

exports.signup = async (req, res) => {
    try {
        await usersService.signup(req.body);
        res.status(200).json({ message: "Utilisateur crée" });
    } catch (error) {
        res.status(400).json({ message: "Utilisateur non crée", error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const response = await usersService.login(req, res);
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};
