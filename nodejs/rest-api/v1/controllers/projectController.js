const slugify = require('slugify');
const Project = require('../models/Project');

exports.list = (req, res, next) => {
  const { limit = 10, page = 1 } = req.query;
  // 1. Establish a connection to mongodb
  // 2. List the documents
  // 3. Will prepare the sresponse

  Project.find({})
    .populate('category', '_id name slug')
    .populate('createdBy', '_id name username')
    .populate('tags', '_id name slug')
    .exec((err, data) => {
      if (err) {
        res.status(400).json({ error: err1.message });
      } else {
        res.json({ page, limit, total: data.length, data });
      }
    });
};

exports.create = (req, res, next) => {
  const { name, tags, category, description, coverImage } = req.body;
  const tagsArray = tags.split(',');
  if (name == '') {
    throw new Error('Name is required...');
  }
  const project = {
    name,
    tags: tagsArray,
    category,
    description,
    coverImage,
    slug: slugify(name).toLowerCase(),
    createdBy: req.user._id,
  };

  const projectModel = new Project(project);

  projectModel.save((err, data) => {
    if (err) {
      res.status(400).json({ error: err.message });
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

// .populate('categories', '_id name slug')
// .populate('tags', '_id name slug')
// .populate('postedBy', '_id name username profile')
// .sort({createdAt: -1})s
// .skip(skip)
// .limit(limit)
// .select('_id name slug category tags createdBy createdAt updatedAt')
// .exec((err, data) => {
