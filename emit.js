const  EventEmitter = require('events');

//create instance
const emitter = new EventEmitter();

//register the listener
emitter.on('message logged', function(arg){
    console.log('event raise and executed msg log', arg);
});

emitter.on(hello(), (arg)=>{
    console.log('event raise and executed hello', arg);
});

emitter.on(add(4,5), (arg)=>{
    console.log('Function add ->', (4+5));
});

//raise the event
emitter.emit('message logged', { id: 1, url: 'http://', name: 'akhil', college: 'TSEC'});

emitter.emit(hello(),'+Node Js+');

emitter.emit(add(4,5), 'addition completed');

//functions
function hello(){
    console.log('hello function called');
}

function add(x, y){
    console.log((x+y)+' in add function');
}