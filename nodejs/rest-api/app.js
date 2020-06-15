// import express module
const express = require('express');
const slugify = require('slugify');
const shortId = require('short-id');
const morgan = require('morgan');
const { json } = require('express');
const port = 3000;
let data = [];
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
app.get('/v1/projects', (req, res, next) => {
  const { limit = 10, page = 1 } = req.query;
  res.status(200).json({
    page,
    limit,
    total: data.length,
    data,
  });
});

/**
 * @function create project
 * @param {*} req - http request object
 * @param {*} res - http response object
 */
app.post('/v1/projects', (req, res, next) => {
  const { name, tags, category, description, coverrImage } = req.body;
  if (name == '') {
    throw new Error('Name is required...');
  }
  const project = {
    id: shortId.generate(),
    name,
    tags,
    category,
    description,
    coverrImage,
    slug: slugify(name).toLowerCase(),
  };
  data.push(project);
  res.status(201).json(project);
});

/**
 * Get a project detail
 */
app.get('/v1/projects/:id', (req, res, next) => {
  // 1. get the id from request (path params)
  const id = req.params.id;
  console.log('id ==> ' + id);
  // 2. search in the data array
  if (data) {
    const project = data.find((p) => p.id === id);
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ status: 'Error', message: 'page not found' });
    }
  } else {
    res.status(404).json({ status: 'Error', message: 'page not found' });
  }
  // send the response with 200 OK if found else 404 Not found
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
