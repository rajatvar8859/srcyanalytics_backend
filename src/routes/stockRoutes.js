const router = require('express').Router();
const stockController = require('../controller/stockController');

router.get('/fetch', stockController.fetchStockData);
router.post('/create', stockController.createStockData);
module.exports = router;
