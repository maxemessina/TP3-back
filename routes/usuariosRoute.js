const { Router } = require('express');
const { login, registro, getPerfil } = require('../controllers/usuariosController');

const router = Router();

router.post('/login', login);

router.post('/registro', registro);

router.get('/perfil/:id', getPerfil);

module.exports = router;