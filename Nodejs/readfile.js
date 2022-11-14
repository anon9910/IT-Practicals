const fs = require('fs');

// Non-blocking mode - doesn't wait for response
// fs.readFile('./file.txt', function (err, data) {
//     console.log(data.toString());
// });

// Blocking mode - waits until file is ready
const buff = fs.readFileSync('./file.txt');
console.log(buff.toString());

console.log('Reached end');