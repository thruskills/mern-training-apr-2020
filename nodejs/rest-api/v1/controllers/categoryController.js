const slugify = require('slugify');
const Category = require('../models/Category');

exports.list = (req, res, next) => {
  const { limit = 10, page = 1 } = req.query;
  Category.find({})
    .populate('createdBy', '_id name username')
    .select('_id name slug createdBy')
    .exec((err, data) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else {
        res.json({ page, limit, total: data.length, data });
      }
    });
};

exports.create = (req, res, next) => {
  console.log(req.user._id);
  const { name, description } = req.body;
  if (name == '') {
    throw new Error('Name is required...');
  }
  const category = {
    name,
    description,
    slug: slugify(name),
    createdBy: req.user._id, // this is not added
  };

  const categoryModel = new Category(category);

  categoryModel.save((err, data) => {
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

  Category.findOne({ slug })
    .populate('createdBy', '_id name username')
    .exec((err, data) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else {
        res.json(data);
      }
    });
  // send the response with 200 OK if found else 404 Not found
};

exports.update = (req, res, next) => {
  // 1. get the id from request (path params)
  const slug = req.params.slug;
  const { name, email } = req.body;
  //
  const category = { name, email };

  Category.findOneAndUpdate({ slug }, category, (err, data) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.json(data);
    }
  });
};

exports.remove = (req, res, next) => {
  // 1. get the id from request (path params)
  const slug = req.params.slug;
  Category.findByIdAndRemove({ slug }, (err, data) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.json(data);
    }
  });

  // send the response with 200 OK if found else 404 Not found
};
