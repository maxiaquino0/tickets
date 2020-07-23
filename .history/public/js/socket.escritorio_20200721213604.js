var socket = io();

var searchParams = new URLSearchParams(window.location.search);
var label = $('small');

socket.on('connect', function() {
    console.log('Conectado al server');
});

socket.on('disconnect', function() {
    console.log('Se desconecto del server');
});

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');
console.log(escritorio);
$('h1').text('Escritorio ' + escritorio);

$('button').on('click', fuunction() {

});