// Import event module
var events = require('events');

//create an event emitter object
var eventEmitter = new events.EventEmitter();

//Define handler
var eventHandler = function(){
    console.log('hello tp');
}

// Bind an event handler with an event
eventEmitter.on('eventName', eventHandler);

//fire an event
eventEmitter.emit('eventName');