const shortId = require('short-id');
const User = require('../models/User');

exports.list = (req, res, next) => {
  const { limit = 10, page = 1 } = req.query;
  // 1. Establish a connection to mongodb
  // 2. List the documents
  // 3. Will prepare the sresponse

  User.find({})
    .populate('createdBy', '_id name username')
    .select('_id name username createdBy')
    .exec((err, data) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else {
        res.json({ page, limit, total: data.length, data });
      }
    });
};

exports.create = (req, res, next) => {
  console.log(req.user);
  const { name, email, password } = req.body;
  if (name == '') {
    throw new Error('Name is required...');
  }
  const user = {
    name,
    email,
    hashedPassword: Buffer.from(password).toString('base64'),
    username: shortId.generate().toLowerCase(),
    apiKey: shortId.generate(),
    createdBy: req.user._id, // this is not added
  };

  const userModel = new User(user);

  userModel.save((err, data) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.json(data);
    }
  });
};

exports.get = (req, res, next) => {
  // 1. get the id from request (path params)
  const username = req.params.username;
  // 2. search in the data array

  User.findOne({ username }, (err, data) => {
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
  const username = req.params.username;
  const { name, email } = req.body;
  //
  const user = { name, email };

  User.findOneAndUpdate({ username }, user, (err, data) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.json(data);
    }
  });
};

exports.remove = (req, res, next) => {
  // 1. get the id from request (path params)
  const username = req.params.username;
  User.findOneAndDelete({ username }, (err, data) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(200).json({ message: 'deleted' });
    }
  });

  // send the response with 200 OK if found else 404 Not found
};
