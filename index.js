// Primero crear el servidor
const express = require ("express");

// Para tener los Websockets
const socketio = require('socket.io'); // LLamo a una clase 


// Modulo HTTP
const http = require("http")


// Instanciando el servidor
const app = express();
// Creando el servidor con el modulo http
const server = http.createServer(app);
// Websockets
const io = socketio(server) // La instancio


io.on("conection" , (socket) => {
    console.log(`Un nuevo usuario conectado`);
});


// Llamo a la carpeta html para que muestre algo
app.use(express.static("public"));

// El server empieza a escuchar
server.listen(3000, () =>{
    console.log("Server On port 3000")
    console.log(typeof(express))
});