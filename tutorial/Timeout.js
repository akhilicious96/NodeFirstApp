require('timers');
console.log('function will be called after 2 seconds');
function printHello(arg1, arg2){
    console.log('hello', arg1, arg2);
}
var t = setTimeout(printHello, 2000, 'akhil', 'ahuja');
clearTimeout(t);