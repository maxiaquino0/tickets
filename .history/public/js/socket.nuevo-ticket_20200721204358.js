// Comando para establecer la conexion
var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Conectado al server');
});

socket.on('disconnect', function() {
    console.log('Se desconecto del server');
});

$('#newTicket').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        $
    });
})