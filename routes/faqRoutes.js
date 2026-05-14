const { Router } = require('express');
const router = Router();

const { obtenerFAQ } = require('../controllers/faqController');

router.get('/', obtenerFAQ);

module.exports = router;


