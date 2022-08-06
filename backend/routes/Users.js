const express = require("express");
const router = express.Router();
const usersCtrl = require("../controller/Users");
const auth = require("../middleware/Auth");

router.post("/login", usersCtrl.login);
router.post("/signup", usersCtrl.signup);
router.get("/getUsersInfos", auth, usersCtrl.getUsersInfos);

module.exports = router;
