const express = require("express");
const orderController = require("../Controllers/order");
const Router = express.Router();

Router.get("/", orderController.getTransaction);
Router.post("/", orderController.postTransaction);

module.exports = Router;
