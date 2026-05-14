const indexModel = require('../models/index');

const getIndexContent = async (req, res) => {
    try {
        const content = await indexModel.leerTodos();
        // flags en consola
        console.log('GET /api/index - Contenido principal cargado');
        res.status(200).json(content);
    } catch (error) {
        console.error('Error en getIndexContent:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

module.exports = { getIndexContent };