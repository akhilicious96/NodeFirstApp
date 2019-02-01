var fs = require('fs');

console.log('reading a directory');

//fs.readdir(path, callback)
fs.readdir('./tmp', (err, files)=>{
    if(err)
        return console.log(err);
    console.log('directory read successfully');

    files.forEach((element) => {
        console.log(element);
    });
});