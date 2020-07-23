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

$('#atenderTicket').on('click', function() {
    socket.emit('atenderTicket', { escritorio: escritorio }, function(resp) {
        console.log(resp);
        if (resp === 'No hay tickets') {
            label.text(resp);
            return;
        }
        // audio = new Audio('audio/new-ticket.mp3');
        // audio.play();
        label.text('Ticket ' + resp.numero);
    });
});