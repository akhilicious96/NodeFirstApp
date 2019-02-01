const http = require('http');

var count = 0;

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        count++;
        res.write('hello world');
        res.end();
        console.log('New connection', count++);
    }

    if(req.url === '/api/courses'){
        res.write('hello world');
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
        console.log('New connection', count++);
    }

});

server.listen(3000);

console.log('listening on port 3000..');
