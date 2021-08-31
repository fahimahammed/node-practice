//streaming
const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){ 
        res.write('<html><head><title>Form</title></head></html>');
        res.write('<body><form method = "post" action = "/process"><input name="message"/> </form></body>');
        res.write('How are you?');
        res.end();
    }
    else if (req.url === '/process' && req.method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            console.log('finished');
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
        });
        res.write('About page');
        res.end();
    }else{
        res.write('not found');
        res.end();
    }
});


server.listen(3000);

console.log("server running on port 3000");

// const fs = require('fs');

// const ourReadStrem = fs.createReadStream(`${__dirname}/data.txt`, 'utf-8');

// ourReadStrem.on('data', (data) => {
//     console.log(data);
// })


// console.log('hello programmer'); // print first 