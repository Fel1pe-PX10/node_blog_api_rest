

const { conexion } = require("./db/conn");
const express = require("express");
const cors = require("cors");

console.log("Echo")

// Conectar la Base de Datos
conexion();

// Crear servidor node (Express)
const app = express();
const puerto = 3900;

// Configurar cors
app.use(cors());

// Convertir body a objeto js
app.use(express.json())

// Crear rutas
app.get("/", (req, res) => {
    return res.status(200).send(`
        <h1> Aplicación desplegada</h1>
    `)
});

app.get("/probando", (req, res) => {
    console.log("Se ha ejecutado el endpoint probando");

    return res.status(200).json({
        curso: "master en react"
    })
});

// Crear servidor y escuchar peticiones http
app.listen(puerto, () => {
    console.log("Servidor corriendo en el puerto", 3900)
})