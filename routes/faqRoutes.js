const { Router } = require('express');

const { obtenerFAQ } = require('../controllers/faqController');

const router = Router();

router.get('/', obtenerFAQ);

module.exports = router;