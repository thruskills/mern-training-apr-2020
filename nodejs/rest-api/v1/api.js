const express = require('express');
const router = express.Router();
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const tagRoutes = require('./routes/tagRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const projectRoutes = require('./routes/projectRoutes');

const { getImage, getPhoto } = require('./controllers/projectController');

const {
  logRequest,
  checkApiKey,
  validateToken,
} = require('./middlewares/authMiddleware');

router.use('/auth', logRequest, checkApiKey, authRoutes);
router.use('/users', logRequest, checkApiKey, userRoutes);
router.use('/tags', logRequest, checkApiKey, tagRoutes);
router.use('/categories', logRequest, checkApiKey, categoryRoutes);
router.get('/projects/:slug/image', getImage);
router.get('/projects/:slug/photo', getPhoto);

router.use('/projects', logRequest, checkApiKey, projectRoutes);

module.exports = router;
