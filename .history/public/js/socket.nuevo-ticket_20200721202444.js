// Comando para establecer la conexion
var socket = io();

socket.on('connect', function() {
    console.log('Conectado al server');
});

socket.on('disconnect', function() {
    console.log('Se desconecto del server');
});

$('#newTicket').on('click', function() {
    console.log('Nuevo tkt');
})