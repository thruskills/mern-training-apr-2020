const http = require('http');
const url = require('url');
const fs = require('fs');

http
  .createServer((req, res) => {
    // read the req url
    const q = url.parse(req.url, true);

    // / . .. relative path absolute path
    /*
      /   root                    nodejs
      .   current directory       nodejs
      ..  parent directory        mern-trraining-apr-2020

      / (absolute path)
      . & .. (relative)

      
    */

    const fileName = `../dom/index.html`;
    console.log(fileName);

    fs.readFile(fileName, (err, data) => {
      if (err) {
        res.writeHead(404, {
          'Content-Type': 'text/html',
        });
        res.end(`<h1>File not found ${fileName}</h1>`);
      }
      if (fileName.endsWith('.jpg')) {
        res.writeHead(200, {
          'Content-Type': 'image/jpg',
        });
        // streaming - video
        // image formats
        // pdf
        // html
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html',
        });
      }
      res.write(data);
      res.end();
    });
  })
  .listen(3010, () => {
    console.log('Server is running on port 3010');
  });
