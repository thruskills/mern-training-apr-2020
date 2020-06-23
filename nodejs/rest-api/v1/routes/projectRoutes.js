const express = require('express');
const router = express.Router();
const {
  list,
  create,
  get,
  update,
  remove,
} = require('../controllers/projectController');

router.get('/', list);
router.post('/', create);
router.get('/:slug', get);
router.put('/:slug', update);
router.delete('/:slug', remove);

module.exports = router;
