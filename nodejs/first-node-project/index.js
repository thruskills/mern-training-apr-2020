const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log(req);
  res.setHeader('Content-Type', 'text/plain');
  res.send(`
    <h1>Hello World</h1>
    <img src="https://d1vspk6fa50cdj.cloudfront.net/images/covid-19/21-days-lockdown/day-2-of-21/750/3S0A4409-bangalore-copyright-manohar-negi.jpg" >
  `);
});

app.listen(port, () =>
  console.log(`Your app is running at http://localhost:${port}`)
);
console.log('App started');

// web server
// apache http
// nginx

// application server
// tomcat (conatiners)

// Web Server => Application Servers

// NGINX -> NodeJs
// Apache http
// IIS

/*
project api
---------------------------------------------------------
GET         get the list of project, detail of a specific project
POST        create a new project
PUT         update a project
// PATCH       update a prroject
DELETE      delete a project


CRUD - create retreive update delete

browser     ->              http://localhost:300
            <- response     server
            status
            100 

            200 OK 201 204 

            X 300 301 302 temporary or permanent redirection

            400 404 page not found 400 (bad request), 401 - authentication, 403 - forbidden
                client specific errors

            500x 500 internal server error
                server specific errors 

build a rest api
    N number of status codes
    6-7 status codes you will use
    too many also create problem


*/
