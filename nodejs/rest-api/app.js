// import express module
const express = require('express');
const morgan = require('morgan');
const formidable = require('formidable');
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    //cb(null, file.fieldname + '-' + Date.now() + '.jpg');
    cb(null, file.originalname);
  },
});

var upload = multer({ storage });

const fs = require('fs');
const apiV1 = require('./v1/api');
const port = 3030;

//map reduce filter

// create an express app
const app = express();

const mongoose = require('mongoose');
const { json } = require('body-parser');
const url = 'mongodb://localhost:27017/mypofo';
var cors = require('cors');

mongoose.connect(url, { useNewUrlParser: true });
// we will eventually add some more options

// add the middleware
app.use(express.json());

app.use(morgan('dev'));
app.use(cors());

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
  const form = formidable({ multipart: true });

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.json({ error: err.message });
    }

    // we are able to parse the form
    // fields - any input fields you pass
    // files - files uploaded

    if (files.photo) {
      let inputFile = files.photo.path;
      let outputFile = __dirname + `/uploads/${files.photo.name}`;
      console.log(inputFile, outputFile);

      let rawData = fs.readFileSync(inputFile);

      fs.writeFile(outputFile, rawData, (err, data) => {
        if (err) {
          console.log('error writing file');
          res.json({ error: err.message });
        } else {
          console.log('file uploaded successfully');
          res.json({ fields, files });
        }
      });
    }
  });
});

app.post('/multer', upload.single('photo'), (req, res, next) => {
  console.log('file uploaded successfully');
  console.log(req.file);
  console.log(req.body);
  res.json({ status: 'success' });
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
  console.log(`REST API Running on port ${port}`);
});
