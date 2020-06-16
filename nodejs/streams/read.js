const fs = require('fs');
const readStream = fs.createReadStream('input.txt');

let data = '';

readStream.setEncoding('UTF8');

readStream.on('data', (chunk) => {
  console.log('reading chunk.....');
  data = data + chunk;
});

readStream.on('end', () => {
  console.log(data);
});

readStream.on('error', (err) => {
  console.log(err);
});
