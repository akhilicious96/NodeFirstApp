var fs = require('fs');
var zlib = require('zlib');

//compress the TestFile.txt
fs.createReadStream('TestFile.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('TestFile.txt.gz'));

console.log('file comperessed');