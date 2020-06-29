// import express module
const express = require('express');
const morgan = require('morgan');
var bodyParser = require('body-parser');

const { json } = require('express');
const apiV1 = require('./v1/api');
const port = 3000;

//map reduce filter

// create an express app
const app = express();

const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/mypofo';

mongoose.connect(url, { useNewUrlParser: true });
// we will eventually add some more options

app.use(bodyParser.urlencoded({ extended: false }));

// add the middleware
app.use(express.json());

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

app.use('/v1/', apiV1);

app.post('/upload', (req, res) => {
  console.log('image upload');
  console.log(req.files);
  res.send('image upload');
});

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
