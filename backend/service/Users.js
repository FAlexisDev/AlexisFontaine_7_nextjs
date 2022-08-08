const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Users = require("../models/Users");
require("dotenv").config();

exports.signup = async ({ password, email, name, lastName }) => {
    // Ajouter le salt
    const hashedPassword = await bcrypt.hash(password, process.env.SALT);
    const newUser = new Users({
        email: email,
        password: hashedPassword,
        name: name,
        lastName: lastName,
        roleId: 1,
    });
    return await newUser.save();
};

exports.login = async (req, res) => {
    const user = await Users.findOne({ email: req.body.email });
    const bcryptResult = await bcrypt.compare(req.body.password, user.password);

    if (bcryptResult) {
        const token = jwt.sign({ userId: user._id, role: user.roleId }, process.env.TOKEN, { expiresIn: "24h" });
        res.cookie("access_token", token, { domain: "localhost" });
        return { userId: user._id, token: token };
    } else {
        throw new Error("Mot de passe incrorect");
    }
};

exports.getUsersInfos = async (userId) => {
    return await Users.findOne({ _id: userId });
};
