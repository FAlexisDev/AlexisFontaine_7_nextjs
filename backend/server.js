const express = require("express");
const mongoose = require("mongoose");
const usersRouter = require("./routes/Users");
const postsRouter = require("./routes/Posts");
const utils = require("./utils/feed");
const path = require("path");
const cookieParser = require("cookie-parser");
const PORT = 4200;
const app = express();

require("dotenv").config();

app.use(cookieParser());
// Connexion to MongoDB Atlas
mongoose
    .connect(process.env.MONGOOSE, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB : Connexion sucess"))
    .then(() => utils.addRoles())
    .catch(() => console.log("MongoDB : Connexion failed"));

app.listen(PORT, (error) => {
    if (error) console.error(error);
    console.log(`Server started on port ${PORT}->  ${process.env.URL}`);
});

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", process.env.URL);
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    next();
});

app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/auth", usersRouter);
app.use("/api", postsRouter);
