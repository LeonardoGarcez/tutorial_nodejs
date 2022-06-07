const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('welcome to my homepage');
    }
    else if(req.url === '/about'){
        res.end('Here is a test about');
    }
    else {
        res.end('<h1> Oooops </h1>');
    }
});

server.listen(5000);