const { Router } = require('express');
const router = Router();
const { getIndex } = require('../controllers/indexController');

// ruta GET
router.get('/', getIndexContent);

module.exports = router;