var fs = require('fs');

console.log('removing the directory');

//fs.mkdir(path, callback)
fs.mkdir('./tmp/temp', (err)=>{
    if(err)
        return console.log(err);
    console.log('new dirctory added..');
});
console.log('about to remove new directory');
//fs.rmdir(path, callback)
fs.rmdir('./tmp/temp', (err)=>{
    if(err)
        console.log(err);
    console.log('directory removed..');
});

//readig the directory
fs.readdir('./tmp/temp', (err, files)=>{
    if(err)
        console.log(err);
    if(files.length > 0)
        files.forEach((element)=>{
            console.log(element);
        });
    else    
        console.log('no files found');
    
});

console.log('program ended');