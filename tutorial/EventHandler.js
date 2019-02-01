// Import event module
var event = require('events');

//create an event emitter object
var eventEmitter = new event.EventEmitter();

//define handler
var connectionHandler = function connected(){
    console.log('Connection successful');
    
    //fire another event for receiving data
    console.log('next event emitting')
    eventEmitter.emit('DataReceived');
}

//bind receiving data event handler with an event
eventEmitter.on('DataReceived',()=>{
    console.log('next event emitted..');
    console.log('program ended');
});
//bind an event handler with an event
eventEmitter.on('ConnectionEvent', connectionHandler);

eventEmitter.emit('ConnectionEvent');