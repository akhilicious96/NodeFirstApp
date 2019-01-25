var logFunction = function(){
    console.log('log file -> logFunction');
    console.log('45');
}
module.exports.log = logFunction();

var temp = function(){
    console.log('temporary');
}
temp();
console.log('temp'+temp);
console.log(temp);
console.log(temp());

var undefinedVar = function(){
console.log('undefined variable')
}
console.log(undefinedVar());

function display(message){
    console.log(message);
    console.log("log's Display function");
}
module.exports = display;