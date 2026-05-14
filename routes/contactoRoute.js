const express = require('express');
const router = express.Router();

const contacto = require('../data/contacto.json');

router.get('/', (req, res) => {
  res.json(contacto);
});

module.exports = router;