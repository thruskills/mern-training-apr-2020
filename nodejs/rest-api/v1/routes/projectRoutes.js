const express = require('express');
const router = express.Router();
const {
  list,
  create,
  get,
  update,
  remove,
  createWithImage,
  getImage,
  getPhoto,
} = require('../controllers/projectController');

router.get('/', list);
router.post('/', create);
router.get('/:slug', get);
router.put('/:slug', update);
router.delete('/:slug', remove);

router.post('/createWithImage', createWithImage);
router.get('/:slug/image', getImage);
router.get('/:slug/photo', getPhoto);

module.exports = router;
