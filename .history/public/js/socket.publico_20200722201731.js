var socket = io();

socket.on('connect', function() {
    console.log('Conectado al server');
});

socket.on('disconnect', function() {
    console.log('Se desconecto del server');
});

socket.on('estadoActual', function(data) {
    console.log(data);
})