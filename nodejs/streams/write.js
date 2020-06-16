const fs = require('fs');
// let or var ??
let data = 'This is an example of write stream...';

const writerStream = fs.createWriteStream('sample.txt');
writerStream.write(data, 'utf8');
writerStream.end();

writerStream.on('finish', () => {
  console.log('done with writing stream check sample.txt file');
});
