const fs = require('fs').promises;
const path = require('path');

const getServicios = async (req, res) => {
    try {
        const dataPath = path.join(__dirname, '../data/data.json');
        const data = await fs.readFile(dataPath, 'utf-8');
        const servicios = JSON.parse(data);
        res.json(servicios);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor al leer los datos' });
    }
};

const getServicioById = async (req, res) => {
    try {
        const { id } = req.params;
        const dataPath = path.join(__dirname, '../data/data.json');
        const data = await fs.readFile(dataPath, 'utf-8');
        const servicios = JSON.parse(data);
        
        const servicio = servicios.find(s => s.id === parseInt(id));

        if (!servicio) {
            return res.status(404).json({ msg: 'Servicio no encontrado' });
        }
        
        res.json(servicio);
    } catch (error) {
        res.status(500).json({ msg: 'Error al buscar el servicio' });
    }
};

module.exports = {
    getServicios,
    getServicioById
};