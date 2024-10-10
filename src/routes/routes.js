const route = require("express").Router();
const rutacliente =  require("../controllers/customerController");
const rutaorder = require("../controllers/orderDetails");
// Routes​
route.use("/", rutacliente);//http://localhost:3300/
route.use("/", rutaorder);//http://localhost:3300/

module.exports=route;