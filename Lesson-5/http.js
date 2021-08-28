const http = require('http');

const server = http.createServer();

server.listen(3000);

console.log("server running on port 3000");