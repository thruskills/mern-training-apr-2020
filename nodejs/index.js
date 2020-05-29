const http = require("http");

http
  .createServer((req, res) => {
    console.log(`Requested : ${req.url}`);
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("<p>Hello World!</p>");
  })
  .listen(3010,() => {
    console.log('Server running on port 3010')
  });