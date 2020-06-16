const express = require('express');
const router = express.Router();
const {
  list,
  create,
  get,
  update,
  remove,
} = require('../controllers/projectController');

router.get('/v1/projects', list);
router.post('/v1/projects', create);
router.get('/v1/projects/:id', get);
router.put('/v1/projects/:id', update);
router.delete('/v1/projects/:id', remove);

module.exports = router;
