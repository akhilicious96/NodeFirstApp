const Fs = require('fs');

const akhil = Fs.readdirSync('./');
console.log(akhil); // prints files

const files = Fs.readdirSync('../');
console.log(files); // prints folder

Fs.readdir('./', function(err, f){
    if(err)
        console.log('Error ->' + err);
    else
        console.log('Result ->', files);
});

console.log(files);