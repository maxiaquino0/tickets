// Comando para establecer la conexion
var socket = io();

socket.on('connect', function() {
    console.log('Conectado al server');
})