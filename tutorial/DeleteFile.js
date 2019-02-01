var fs = require('fs');

console.log('going to delete the file');

//fs.unlink(path, callback);
fs.unlink('delete.txt', (err)=>{
    if(err)
        return console.log(err);
    console.log('file deleted.');
});