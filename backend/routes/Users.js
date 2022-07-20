const express = require("express");
const router = express.Router();
const usersCtrl = require("../controller/Users");

router.post("/login", usersCtrl.login);
router.post("/signup", usersCtrl.signup);

module.exports = router;
