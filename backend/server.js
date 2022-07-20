const express = require("express");
const mongoose = require("mongoose");
const usersRouter = require("./routes/Users");
const postsRouter = require("./routes/Posts");
const utils = require("./utils/feed");

const PORT = 4200;
const app = express();
mongoose
    .connect("mongodb+srv://admin:admin@piiquantedb.txoybyd.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB : Connexion sucess"))
    .then(() => utils.addRoles())
    .catch(() => console.log("MongoDB : Connexion failed"));

app.listen(PORT, (error) => {
    if (error) console.error(error);
    console.log(`Server started on port ${PORT}->  http://localhost:${PORT}`);
});

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    next();
});

app.use(express.json());

app.use("/api/auth", usersRouter);
app.use("/api", postsRouter);
