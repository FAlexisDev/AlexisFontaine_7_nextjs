const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    userId: { type: String, required: true },
    description: { type: String, required: true },
    usersLiked: { type: Array, required: true },
    imageUrl: { type: String, required: false },
    createdAt: { type: Date, required: false },
});

module.exports = mongoose.model("Posts", postSchema);
