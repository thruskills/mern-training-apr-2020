const { createReadStream } = require('fs');

let chunkIndex = 0;
const readStream = createReadStream('../7.jpg');

readStream.on('open', () => {
  console.log('Started Reading...');
});

readStream.on('end', () => {
  console.log('Completed Reading...');
});

readStream.on('data', (chunk) => {
  console.log('Chunk: ' + ++chunkIndex);
  console.log('-----------------------------------------');
  console.log(chunk);
  console.log('\n');
});

/*

Webapp
  |
upload Image
  |
read in the server side
  |
store it some where

image (7.jpg) => converted into buffer => (binary data) => you can either dump it into FS, stream, store in the DB
mongodb(in practice never store images in DB) 
image store ...

*/
/*

V8 Heap ? Heap memory
Nodejs(v8 engine) = process it gets allocated some memory

heap memory - which is normally kept outside the process
// new Object();

stack 

FILO

function init_a(a) {
  a = a;
}

function init(a, b){
  init_a(a);
  b = 20;
}

function add(a, b) {
  init(a, b);
  console.log(a, b);
}

add(10, 20);

add -> init -> init_a
*/
