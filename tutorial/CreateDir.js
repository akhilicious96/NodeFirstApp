var fs = require('fs');

console.log('going to create a directory');

//fs.mkdir(path, callback);
fs.mkdir('c:/akhil/tools/node/tutorial/tmp', (err)=>{
    if(err)
        return console.log(err);
    console.log('directory created');   
});