const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    userId: { type: String, required: true },
    post: { type: String, required: true },
    usersLiked: { type: Array, required: true },
    imageUrl: { type: String, required: true },
});

module.exports = mongoose.model("Posts", postSchema);
