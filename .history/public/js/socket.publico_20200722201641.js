var socket = io();

socket.on('connect', function() {
    console.log('Conectado al server');
});

socket.on('disconnect', function() {
    console.log('Se desconecto del server');
});

socket.on('estadoActul', function(data) {
    console.log(data);
})