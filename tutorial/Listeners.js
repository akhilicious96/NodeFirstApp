var event = require('events');
var EventEmitter = new event.EventEmitter();

//Listener 1
var listener_1 = function(){
    console.log('Listener 1 executed');
}

//Listener 2
var listener_2 = function(){
    console.log('Listener 2 executed');
}

//Bind connection with listener 1 function
EventEmitter.addListener('connection', listener_1);

//Bind connection with listener 2 function
EventEmitter.on('connection', listener_2);

//counting listeners
var eventListeners = require('events').EventEmitter.listenerCount(EventEmitter, 'connection');
console.log(`${eventListeners} listeners's are lsitening to the connection`);

//fire the connection event
EventEmitter.emit('connection');

//removing the binding of  listener 1 function
EventEmitter.removeListener('connection', listener_1);
console.log('Listener 1 will not listen now');

// fire the connection event
EventEmitter.emit('connection');

//counting listeners
eventListeners = require('events').EventEmitter.listenerCount(EventEmitter, 'connection');
console.log(`${eventListeners} listeners's are listeneing to the connection`);

console.log('program ended');