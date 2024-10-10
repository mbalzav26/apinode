const conexion = require('../config/db');
const express = require('express');
const ruta = express();
const bodyParser = require('body-parser');
ruta.use(bodyParser.json());

//obtener tabla orders
ruta.get('/orders', (req, res) => {
    const sql = 'SELECT * FROM orders order by orderNumber';
    conexion.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('No hay resultados');
        }
    });
});

// obtener orderdetails de una order
ruta.get('/orders/:orderNumber/orderdetails', (req, res) => {
    const { orderNumber } = req.params;
    const sql = `SELECT * FROM orderdetails WHERE orderNumber = ${orderNumber}`;
    conexion.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('No hay resultados');
        }
    });
});

// metodo para sumar todas las ordenes SUM(quantityOrdered*priceEach), de la orden 
ruta.get('/orders/total/:orderNumber', (req, res) => {
    const { orderNumber } = req.params;
    const sql = `SELECT SUM(quantityOrdered*priceEach) as total FROM orderdetails WHERE orderNumber = ${orderNumber}`;
    conexion.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('No hay resultados');
        }
    });
});

module.exports = ruta;