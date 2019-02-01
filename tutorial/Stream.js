var fs = require('fs');
var data = '';

//create readable stream
var readerStream = fs.createReadStream('TestStream.txt');

//set the encoding to the utf8
readerStream.setEncoding('utf8');

//handle stream events - data, end, error
readerStream.on('data', (chunk)=>{
    data += chunk;
});

readerStream.on('end', ()=>{
    console.log(data);
});

readerStream.on('error', (err)=>{
    console.log(err.stack);
});

console.log('read program ended');

//============writing into the file============

var writeData = 'This data is to be written';

//create a wrirtable stream
var writeStream = fs.createWriteStream('TestOutputStream.txt');

//set the encoding to utf8
writeStream.write(writeData, 'utf8');

//mark the end of the stream
writeStream.end();

//handle stream events - finsih and error
writeStream.on('finish', ()=>{
    console.log('Write completed');
});

writeStream.on('err', (err)=>{
    console.log(err.stack);
});

console.log('program ended');