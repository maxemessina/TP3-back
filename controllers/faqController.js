
const fs = require('fs').promises;
const path = require('path');

const obtenerFAQ = async (req, res) => {
  try {
    const ruta = path.join(__dirname, '../data/faq.json');
    const data = await fs.readFile(ruta, 'utf-8');
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ msg: 'Error al leer FAQ' });
  }
};

module.exports = { obtenerFAQ };
