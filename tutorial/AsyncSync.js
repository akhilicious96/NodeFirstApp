var fs = require('fs');

fs.readFile('TestFile.txt', (err, data)=>{
    if(err){
        return console.error(err);
    }
    console.log('Asynchronous read :\n',data.toString() );
});

var data = fs.readFileSync('TestFile.txt');
console.log('Synchronous read :\n', data.toString());

//stats of the file
console.log('going to get file info');
fs.stat('TestFile.txt', (err, stats) =>{
    if(err){
        return console.error(err);
    }
    console.log(stats);
    console.log('gto the file details');

    console.log('is file ? = ', stats.isFile());
    console.log('is directory ? =', stats.isDirectory());
});