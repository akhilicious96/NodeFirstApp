const EventEmitter = require('events');

class Logger extends EventEmitter{
    log(message){
        //send http request
        console.log(message);

        //raise the event
        this.emit('messagelogged0', { id: 1, url: 'http://'});
    }
}
module.exports = Logger;