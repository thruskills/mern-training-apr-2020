const shortId = require('short-id');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
  console.log(req.user.id);
  const { name, email, password } = req.body;
  // validate
  if (email == '') {
    throw new Error('Email is required...');
  }
  if (password == '') {
    throw new Error('Password is required...');
  }
  const user = {
    name,
    email,
    hashedPassword: Buffer.from(password).toString('base64'),
    username: shortId.generate().toLowerCase(),
    apiKey: shortId.generate(),
    createdBy: req.user.id,
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

exports.signin = (req, res, next) => {
  const { email, password } = req.body;
  // validate
  if (email == '') {
    throw new Error('Email is required...');
  }
  if (password == '') {
    throw new Error('Password is required...');
  }

  const hashedPassword = Buffer.from(password).toString('base64');

  User.findOne({ email, hashedPassword }, (err, user) => {
    if (err || user == null) {
      res.status(400).json({ error: 'Invalid user credentials' });
    } else {
      // create a token
      const token = jwt.sign({ id: user._id }, 'secret');
      res.json({ token, user });
    }
  });
};
