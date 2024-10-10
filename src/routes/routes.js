const route = require("express").Router();
const rutacliente =  require("../controllers/customerController");
// Routes​
route.use("/", rutacliente);//http://localhost:3300/
module.exports=route;