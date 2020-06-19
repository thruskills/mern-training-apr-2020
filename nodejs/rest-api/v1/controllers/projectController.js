const slugify = require('slugify');
const shortId = require('short-id');
const MongoDbClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'mypofo';
let data = [];

exports.list = (req, res, next) => {
  const { limit = 10, page = 1 } = req.query;
  // 1. Establish a connection to mongodb
  // 2. List the documents
  // 3. Will prepare the response

  MongoDbClient.connect(url, function (err, client) {
    if (err) {
      console.log('Error: ' + error);
      res.status(400).json({ error: err.message });
    } else {
      console.log('Connected successfully to server');
      const db = client.db(dbName);
      const collection = db.collection('projects');
      collection.find({}).toArray(function (err1, docs) {
        if (err1) {
          res.status(400).json({ error: err1.message });
        }
        client.close();
        res.json({ page, limit, total: docs.length, data: docs });
      });
    }
  });
};

exports.create = (req, res, next) => {
  const { name, tags, category, description, coverrImage } = req.body;
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

  MongoDbClient.connect(url, function (err, client) {
    if (err) {
      console.log('Error: ' + error);
      res.status(400).json({ error: err.message });
    } else {
      console.log('Connected successfully to server');
      const db = client.db(dbName);
      const collection = db.collection('projects');
      collection.insertOne(project, function (err1, data) {
        if (err1) {
          res.status(400).json({ error: err1.message });
        }
        client.close();
        res.json(data);
      });
    }
  });
};

exports.get = (req, res, next) => {
  // 1. get the id from request (path params)
  const slug = req.params.slug;
  // 2. search in the data array

  MongoDbClient.connect(url, function (err, client) {
    if (err) {
      console.log('Error: ' + error);
      res.status(400).json({ error: err.message });
    } else {
      console.log('Connected successfully to server');
      const db = client.db(dbName);
      const collection = db.collection('projects');
      collection.findOne({ slug }, function (err1, data) {
        console.log(data);
        if (err1) {
          res.status(400).json({ error: err1.message });
        } else if (data == null) {
          res.status(404).json({ error: 'project not found' });
        } else {
          client.close();
          res.json(data);
        }
      });
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

  MongoDbClient.connect(url, function (err, client) {
    if (err) {
      console.log('Error: ' + error);
      res.status(400).json({ error: err.message });
    } else {
      console.log('Connected successfully to server');
      const db = client.db(dbName);
      const collection = db.collection('projects');
      collection.findOneAndUpdate({ slug }, { $set: project }, function (
        err1,
        data
      ) {
        if (err1) {
          res.status(400).json({ error: err1.message });
        }
        client.close();
        res.json(data);
      });
    }
  });
};

exports.remove = (req, res, next) => {
  // 1. get the id from request (path params)
  const slug = req.params.slug;
  MongoDbClient.connect(url, function (err, client) {
    if (err) {
      console.log('Error: ' + error);
      res.status(400).json({ error: err.message });
    } else {
      console.log('Connected successfully to server');
      const db = client.db(dbName);
      const collection = db.collection('projects');
      collection.findOneAndDelete({ slug }, function (err1, data) {
        if (err1) {
          res.status(400).json({ error: err1.message });
        }
        client.close();
        res.json(data);
      });
    }
  });
  // send the response with 200 OK if found else 404 Not found
};
