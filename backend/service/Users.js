const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Users = require("../models/Users");

exports.signup = async ({ password, email, name, lastName }) => {
    // Ajouter le salt
    const hashedPassword = await bcrypt.hash(password, 10);
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
        const token = jwt.sign({ userId: user._id, role: user.roleId }, "3v3rNsUcu3xZ5he86nE6UJn2796r2HFfTZWVUCx88Re3s6Jm", { expiresIn: "24h" });
        return { userId: user._id, token: token };
    } else {
        throw new Error("Mot de passe incrorect");
    }
};
