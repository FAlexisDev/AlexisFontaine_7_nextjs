const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const roleSchema = mongoose.Schema({
    id: { type: Number, required: true, unique: true, min: 1 },
    name: { type: String, required: true },
});

roleSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Roles", roleSchema);
