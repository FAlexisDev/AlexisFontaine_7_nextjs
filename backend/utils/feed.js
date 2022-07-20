const roleModel = require("../models/Roles");
const mongoose = require("mongoose");

exports.addRoles = async () => {
    await mongoose.connection.collection("roles").drop();

    const adminRole = new roleModel({
        id: 2,
        name: "ADMIN",
    });
    const userRole = new roleModel({
        id: 1,
        name: "USER",
    });

    await adminRole.save();
    await userRole.save();
};
