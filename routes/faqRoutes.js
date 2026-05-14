const { Router } = require('express');
const router = Router();

const { obtenerFAQ } = require('../controllers/faqController');

// Ruta base: /api/faq
router.get('/', obtenerFAQ);

module.exports = router;