const fs = require('fs');


// write file
// fs.writeFileSync('file.txt', 'Hello, Fahim.');
// fs.appendFileSync('file.txt', ' How are you?');

//read file

// way to sync
const data = fs.readFileSync('file.txt');

console.log(data);  // output buffer data
console.log(data.toString());  // output string type

//way to aync
fs.readFile('file.txt', (err, data) => {
    console.log(data.toString());
})