const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    roleId: { type: Number, required: true },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Users", userSchema);
