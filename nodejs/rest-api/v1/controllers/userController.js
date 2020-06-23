const shortId = require('short-id');
const User = require('../models/User');

exports.signup = (req, res, next) => {
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

exports.getByApiKey = (apiKey) => {
  User.findOne({ apiKey }, (err, data) => {
    if (err) {
      res.status(400).json({ error: err1.message });
    } else {
      res.json(data);
    }
  });
};
