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
router.get('/v1/projects/:slug', get);
router.put('/v1/projects/:slug', update);
router.delete('/v1/projects/:slug', remove);

module.exports = router;
