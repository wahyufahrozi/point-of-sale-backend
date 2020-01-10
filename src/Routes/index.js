const express = require("express");
const product = require("../Routes/product");
const user = require("../Routes/user");
const order = require("../Routes/order");
const Router = express.Router();

Router.use("/product", product);
Router.use("/user", user);
Router.use("/order", order);

module.exports = Router;
