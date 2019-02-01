var fs = require('fs');
var buffer = new Buffer(1024);

// read a file fs.open(fd, buffer, offset,buffer length, position, callback function)
//going to open an existing file
fs.open('TestFile.txt', 'r+', (err, data)=>{
    if(err)
        return console.log(eroor.err);
    console.log('file opened successfully');
    console.log('going to read a file');

    fs.read(data, buffer, 0, buffer.length, 0, (err, bytes)=>{
        if(err)
            console.log(error.err);
        console.log(bytes, ' bytes read');

        //print only read file to avoid junk
        if(bytes > 0){
            console.log(buffer.slice(0,bytes).toString());
        }
       
    });
});


