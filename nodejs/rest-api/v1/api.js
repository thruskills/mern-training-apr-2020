const express = require('express');
const router = express.Router();
const projectRoutes = require('./routes/projectRoutes');
const authRoutes = require('./routes/authRoutes');
const { checkApiKey } = require('./middlewares/authMiddleware');

router.use('/', checkApiKey, authRoutes);
router.use('/projects/', checkApiKey, projectRoutes);

module.exports = router;
