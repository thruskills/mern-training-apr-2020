const fs = require('fs');
const zlib = require('zlib');

fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));

// images uses different types of compression
// JPG (uncompressed) vs JPEG (compressed) ??
// compress images ...
// Nodejs module/library sharp (x) - image resize
// jpg/png -> webp (3MB -> 1MB)

console.log('file gzipped and saved...');
