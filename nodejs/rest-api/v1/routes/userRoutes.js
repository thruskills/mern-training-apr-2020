const express = require('express');
const router = express.Router();
const {
  list,
  create,
  get,
  update,
  remove,
} = require('../controllers/userController');

router.get('/', list);
router.post('/', create);
router.get('/:username', get);
router.put('/:username', update);
router.delete('/:username', remove);

module.exports = router;
