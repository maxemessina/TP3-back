const { Router } = require('express');
const router = Router();

const equipoController = require('../controllers/equipoController');


router.get('/', equipoController.obtenerEquipo);
console.log("EQUIPO ROUTE CARGADO");
module.exports = router;