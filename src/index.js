const express = require("express");
const app = express();
//require('./config/conexion');//importando la conexion
//nos ayuda a analizar el cuerpo de la solicitud POST​
app.use(express.json());//para recibir en fortmato json
app.use(express.urlencoded({extended: true}));//?
//-- para dar accesos desde cualquier servidor​
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Credentials", "true");
	res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
	res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});
// ruta por defecto
app.get("/", (req, res) => {
    res.send("Bienvenido a la API de NodeJS");
});
//importando las rutas
app.use(require('./routes/routes'));

//puerto de la app
app.listen(3000, () => {
    console.log("Servidor corriendo puerto 3000");
});

module.exports = app;

