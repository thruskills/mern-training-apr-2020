const slugify = require('slugify');
const shortId = require('short-id');
const mongoose = require('mongoose');
const Project = require('../models/Project');
const url =
  'mongodb+srv://admin:adminadmin@mypofo-lfdnq.mongodb.net/mypofo?retryWrites=true&w=majority';

mongoose.connect(url, { useNewUrlParser: true });
// we will eventually add some more options

exports.list = (req, res, next) => {
  const { limit = 10, page = 1 } = req.query;
  // 1. Establish a connection to mongodb
  // 2. List the documents
  // 3. Will prepare the response

  Project.find({}, (err, data) => {
    if (err) {
      res.status(400).json({ error: err1.message });
    } else {
      res.json({ page, limit, total: data.length, data });
    }
  });
};

exports.create = (req, res, next) => {
  const { name, tags, category, description, coverImage } = req.body;
  if (name == '') {
    throw new Error('Name is required...');
  }
  const project = {
    name,
    tags,
    category,
    description,
    coverImage,
    slug: slugify(name).toLowerCase(),
  };

  const projectModel = new Project(project);

  projectModel.save((err, data) => {
    if (err) {
      res.status(400).json({ error: err1.message });
    } else {
      res.json(data);
    }
  });
};

exports.get = (req, res, next) => {
  // 1. get the id from request (path params)
  const slug = req.params.slug;
  // 2. search in the data array

  Project.findOne({ slug }, (err, data) => {
    if (err) {
      res.status(400).json({ error: err1.message });
    } else {
      res.json(data);
    }
  });
  // send the response with 200 OK if found else 404 Not found
};

exports.update = (req, res, next) => {
  // 1. get the id from request (path params)
  const slug = req.params.slug;
  const { name, description, tags, category, coverImage } = req.body;
  //
  const project = { name, description, tags, category, coverImage };

  Project.findOneAndUpdate({ slug }, project, (err, data) => {
    if (err) {
      res.status(400).json({ error: err1.message });
    } else {
      res.json(data);
    }
  });
};

exports.remove = (req, res, next) => {
  // 1. get the id from request (path params)
  const slug = req.params.slug;
  Project.findByIdAndRemove({ slug }, (err, data) => {
    if (err) {
      res.status(400).json({ error: err1.message });
    } else {
      res.json(data);
    }
  });

  // send the response with 200 OK if found else 404 Not found
};
