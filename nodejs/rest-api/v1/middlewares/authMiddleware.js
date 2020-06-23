const { getByApiKey } = require('../controllers/userController');
exports.checkApiKey = (req, res, next) => {
  // where do we get the api key
  // check req header for 'x-api-key'
  const apiKey = req.headers['x-api-key'];
  if (apiKey) {
    // validate this with the user table
    // get the user id
    // set the userid in req object
    req.apiKey = apiKey;
    // getByApiKey(apiKey) - handle the reponse
    // callback mechanism
    // promises
    // async await
    // asynchronous
    next();
  } else {
    res.status(401).json({ error: 'Invalid API Credentials' });
  }
};
