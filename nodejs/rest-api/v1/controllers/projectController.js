const slugify = require('slugify');
const shortId = require('short-id');
let data = [];

exports.list = (req, res, next) => {
  const { limit = 10, page = 1 } = req.query;
  res.status(200).json({
    page,
    limit,
    total: data.length,
    data,
  });
};

exports.create = (req, res, next) => {
  const { name, tags, category, description, coverrImage } = req.body;
  if (name == '') {
    throw new Error('Name is required...');
  }
  const project = {
    id: shortId.generate(),
    name,
    tags,
    category,
    description,
    coverrImage,
    slug: slugify(name).toLowerCase(),
  };
  data.push(project);
  res.status(201).json(project);
};

exports.get = (req, res, next) => {
  // 1. get the id from request (path params)
  const id = req.params.id;
  console.log('id ==> ' + id);
  // 2. search in the data array
  if (data) {
    const project = data.find((p) => p.id === id);
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ status: 'Error', message: 'page not found' });
    }
  } else {
    res.status(404).json({ status: 'Error', message: 'page not found' });
  }
  // send the response with 200 OK if found else 404 Not found
};

exports.update = (req, res, next) => {
  // 1. get the id from request (path params)
  const id = req.params.id;
  console.log('id ==> ' + id);
  // 2. search in the data array
  if (data) {
    const index = data.findIndex((p) => p.id === id);

    //const project = data[index];

    // -1 if not found
    if (index > -1) {
      // will read the values from the req and update them
      const { name, description, tags, category, coverImage } = req.body;
      data[index] = { id, name, description, tags, category, coverImage };
      // we will not always update everything... selective merge.. you will learn how to do that
      // one more library for that _ ...
      res.json(data[index]);
    } else {
      res.status(404).json({ status: 'Error', message: 'page not found' });
    }
  } else {
    res.status(404).json({ status: 'Error', message: 'page not found' });
  }
  // send the response with 200 OK if found else 404 Not found
};

exports.remove = (req, res, next) => {
  // 1. get the id from request (path params)
  const id = req.params.id;
  console.log('id ==> ' + id);
  // 2. search in the data array
  if (data) {
    const index = data.findIndex((p) => p.id === id);
    // -1 if not found
    if (index > -1) {
      data.splice(index, 1);
      res.json({ message: `${id} Deleted successfully` });
    } else {
      res.status(404).json({ status: 'Error', message: 'page not found' });
    }
  } else {
    res.status(404).json({ status: 'Error', message: 'page not found' });
  }
  // send the response with 200 OK if found else 404 Not found
};
