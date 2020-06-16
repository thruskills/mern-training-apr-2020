const http = require('http');
const url = require('url');

http
  .createServer((req, res) => {
    const urlValues = url.parse(req.url, true);
    console.log(urlValues.pathname);
    console.log(`Requested : ${req.url}`);
    // use res header to
    // 1. set the status code = 200
    // 2. Content-Type = text/html

    res.writeHead(200, { 'Content-Type': 'text/html' });
    switch (req.url) {
      case '/':
        res.end(
          `<h1>Home page</h1>
            <img src="https://d1vspk6fa50cdj.cloudfront.net/images/covid-19/21-days-lockdown/day-2-of-21/750/3S0A4409-bangalore-copyright-manohar-negi.jpg" >
          `
        );
        break;
      case '/about':
        res.end(
          `<h1>About Me</h1>
            <p>Hi! This is Manohar</p>
          `
        );
        break;
      default:
        // 404 - Not Found
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(
          `<h1>404 Page Not Found</h1>
            <p>${req.url} is not found</p>
          `
        );
    }
  })
  .listen(3010, () => {
    console.log('Server running on port 3010');
  });
