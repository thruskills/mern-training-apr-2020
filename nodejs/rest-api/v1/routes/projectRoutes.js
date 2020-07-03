const express = require('express');
const router = express.Router();
const {
  search,
  list,
  create,
  get,
  update,
  remove,
  createWithImage,
  getImage,
  getPhoto,
  searchProjects,
} = require('../controllers/projectController');

router.get('/find', search);
router.get('/:slug', get);
router.put('/:slug', update);
router.delete('/:slug', remove);

router.post('/createWithImage', createWithImage);

router.get('/search', searchProjects);

router.get('/', list);
router.post('/', create);

module.exports = router;
