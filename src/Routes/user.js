const express = require("express");
const userController = require("../Controllers/user");

const Router = express.Router();

Router.post("/user", userController.getuserByUsername);
Router.post("/login", userController.loginUser);

module.exports = Router;
