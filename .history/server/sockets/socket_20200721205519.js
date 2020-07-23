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

});