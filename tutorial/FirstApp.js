var http = require('http');
var fs = require('fs');

var port = process.env.PORT || 8081;
//creation of server
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hello World');
}).listen(port);

console.log(`Server listening at ${port}..`);

// reading contents from a file - Blocking Code Example

    var data = fs.readFileSync('TestFile.txt');
    console.log(data.toString());
    console.log('Blocking code completed');


// reading contents from a file - Non-Blocking Code Example

    fs.readFile('TestFile.txt', (err, data) => {
        if(err)
            return console.error(err);
        console.log(data.toString());
    });
    console.log('Non blocking code completed');