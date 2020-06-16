const fs = require('fs');
const zlib = require('zlib');

fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('inp.txt'));

console.log('gunzipped...');

// youtube
// facebook live
