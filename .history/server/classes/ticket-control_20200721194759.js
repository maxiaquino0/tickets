class TicketControl {
    constructor() {
        this.ultimo = 0;
        this.hoy = new Date().getDate();

        let data = require('../data/data.json');
        console.log(data);

        if (data.hoy === this.hoy) {

        } else {

        }
    }

    reiniciarConteo() {
        let jsonData = {
            ultimo: this.ultimo,
            hoy: this.hoy
        };
    }
}

module.exports = {
    TicketControl
}