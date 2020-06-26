const express = require('express');
const router = express.Router();
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const tagRoutes = require('./routes/tagRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const projectRoutes = require('./routes/projectRoutes');

const {
  logRequest,
  checkApiKey,
  validateToken,
} = require('./middlewares/authMiddleware');

router.use('/auth', logRequest, checkApiKey, authRoutes);
router.use('/users', logRequest, validateToken, userRoutes);
router.use('/tags', logRequest, validateToken, tagRoutes);
router.use('/categories', logRequest, validateToken, categoryRoutes);
router.use('/projects', logRequest, validateToken, projectRoutes);

module.exports = router;
