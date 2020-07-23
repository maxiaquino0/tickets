const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control');

const ticketControl = new TicketControl();

io.on('connection', (client) => {

    client.on('siguienteTicket', (data, callback) => {
        let siguienteTicket = ticketControl.siguiente();
        console.log('Sig Ticket desde el server', siguienteTicket);
        callback(siguienteTicket);
    });

    client.emit('estadoActual', {
        actual: ticketControl.geetUltimoTicket()
    });

    client.on('atenderTicket', (data, callback) => {
        if (!data.escritorio) {
            return callback({
                err: true,
                mensaje: 'El escritorio es necesario'
            });
        }

        let atenderTicket = ticketControl.atenderTicket(data.escritorio);
        callback(atenderTicket);

        // Aca emitiremos el evento para notificar los ultimos 4
    });

});