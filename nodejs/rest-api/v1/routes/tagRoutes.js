const express = require('express');
const router = express.Router();
const {
  list,
  create,
  get,
  update,
  remove,
} = require('../controllers/tagController');

router.get('/', list);
router.post('/', create);
router.get('/:slug', get);
router.put('/:slu', update);
router.delete('/:slu', remove);

module.exports = router;
