const { Router } = require('express');
const router = Router();
const { getIndexContent } = require('../controllers/indexController');

// ruta GET
router.get('/', getIndexContent);

module.exports = router;