const express = require("express");
const routes = express();
const controller = require("../controllers/products");


routes.post("/produtcs", controller.addProducts); 
routes.get("/produtcs", controller.listProducts);



module.exports = routes;