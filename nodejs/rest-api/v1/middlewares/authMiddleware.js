const User = require('../models/User');
exports.checkApiKey = (req, res, next) => {
  // where do we get the api key
  // check req header for 'x-api-key'
  const apiKey = req.headers['x-api-key'];
  if (apiKey) {
    // validate this with the user table
    // get the user id
    // set the userid in req object

    // getByApiKey(apiKey) - handle the reponse
    // callback mechanism
    // promises
    // async await
    User.findOne({ apiKey }, (err, data) => {
      if (err || data == null) {
        res.status(401).json({ error: 'Invalid API Credentials' });
      } else {
        // if i get the user
        req.user = data;
        next();
      }
    });
  } else {
    res.status(401).json({ error: 'Invalid API Credentials' });
  }
};

// delaing with these conditions
/*
1. check for the api key
2. validate api key with the db
3. multiple mechanisms you can use, // standar, userid/password, basic auth
4. Bearer token 
  How do we generate
    token that identified who the user is
    generate a random number/string shortid (store user info .... somewhere)
    token will have some expiry date/time
  JWT (JSON Web Token )
5. API key V/s token
*/
