//let buffer = new Buffer(10);

//let buffer1 = new Buffer([10, 20, 30, 40]);

let buffer2 = new Buffer('This is a buffer 書', 'utf-8');

let buf = new Buffer(256);
let len = buf.write('This is an example of writing to a buffer');

let json = buffer2.toJSON(buffer2);
// console.log(json.data.toString('utf8'));

/*
1. how to createe a buffer
2. how to write to a buffer
*/
