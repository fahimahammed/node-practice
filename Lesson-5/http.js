const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){ 
        res.write('hello programmers!');
        res.write('How are you?');
        res.end();
    }
    else if (req.url === '/about'){
        res.write('About page');
        res.end();
    }else{
        res.write('not found');
        res.end();
    }
});

// ignore this
// server.on('connection', () =>{
//     console.log('new connection ...');
// })

server.listen(3000);

console.log("server running on port 3000");