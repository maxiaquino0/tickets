var socket = io();

var searchParams = new URLSearchParams(window.location.search);

socket.on('connect', function() {
    console.log('Conectado al server');
});

socket.on('disconnect', function() {
    console.log('Se desconecto del server');
});