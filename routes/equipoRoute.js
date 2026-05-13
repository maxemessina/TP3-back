const { Router } = require('express');
const router = Router();

const equipoController = require('../controllers/equipoController');


router.get('/equipo', equipoController.obtenerEquipo);

module.exports = router;