/* eslint-disable no-undef */
const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutess');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;