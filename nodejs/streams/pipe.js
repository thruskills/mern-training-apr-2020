const fs = require('fs');

// reader stream
const readerStream = fs.createReadStream('input.txt');

// writer stream
const writerStream = fs.createWriteStream('output.txt');

// pipe these streams
// read from readerStream and pipe it to writerStrream

readerStream.pipe(writerStream);

console.log('done!');
