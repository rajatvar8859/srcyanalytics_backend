const router = require('express').Router();
const stockRoutes = require('./stockRoutes');

router.use('/v1/stock', stockRoutes);
module.exports = router;
