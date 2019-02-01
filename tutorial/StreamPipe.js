var fs = require('fs');

//create a readable stream 
var readStream = fs.createReadStream('PipeInput.txt');

//create a writable stream
var writeStream = fs.createWriteStream('PipeOutput.txt');

//pipe the read and write operations
//read from pipeInput and write into pipeOutput

readStream.pipe(writeStream);
console.log('program ended');