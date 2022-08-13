const usersService = require("../service/Users");

exports.signup = async (req, res) => {
    try {
        await usersService.signup(req.body);
        res.status(200).json({ message: "User created" });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Failed to create the user", error: error.message });
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

exports.getUsersInfos = async (req, res) => {
    try {
        const userId = req.authenticatedUserId;
        const response = await usersService.getUsersInfos(userId);

        res.status(200).json({ name: response.name, lastName: response.lastName });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};
