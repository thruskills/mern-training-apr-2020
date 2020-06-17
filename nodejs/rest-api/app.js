// import express module
const express = require('express');
const morgan = require('morgan');
const { json } = require('express');
const projectRoutes = require('./v1/routes/projectRoutes');
const port = 3000;

//map reduce filter

// create an express app
const app = express();

// add the middleware
app.use(express.json());
// bodyparser

app.use(morgan('dev'));

// defining the routes
app.all('/', (req, res, next) => {
  // eventually we will add api documentation here
  res.status(201).json({ status: 'success', message: 'Welcome to rest API' });
});

/**
 * @function list projects
 * @description List all the projects
 * @param {*} req - http request object
 * @param {*} res - http response object
 */

app.use('/', projectRoutes);

// app.use() -- to be continued
app.use((req, res) => {
  res.status(404).json({ status: 'Error', message: 'page not found' });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ status: 'Error', message: err.message });
});

// start the server
app.listen(port, () => {
  console.log('REST API Running on port 3000');
});