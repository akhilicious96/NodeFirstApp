const EventEmitter = require('events');

const Logger = require('./testClass2');
const logger = new Logger(); 

//register a listener
logger.on('messagelogged0',(arg) =>{
    console.log('listener called', arg);
});

logger.log('messagelogged1');