var fs = require('fs');
var buffer = new Buffer(1024);

//opening an esxisting file
fs.open('Trunc.txt', 'r+', (err, data)=>{
    if(err)
        return console.log(err);

    console.log('file opened');
    console.log('tuncate file after 10 byte');

    //fs.ftruncate(fd, length, callbackl)
    //truncate the opened file
    fs.ftruncate(data, 10, (err)=>{
        if(err)
            console.log(err);
    });

    fs.read(data, buffer, 0, buffer.length, 0, (err, bytes)=>{
        if(err)
            console.log(err);

        if(bytes > 0)
            console.log(buffer.slice(0,bytes).toString());
    });

});