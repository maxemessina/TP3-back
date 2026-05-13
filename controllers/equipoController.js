const equipoModel = require('../models/equipoModel');

class EquipoController {

    async obtenerEquipo(req, res) {

        try {

            const equipo = await equipoModel.leerTodos();

            res.status(200).json(equipo);

        } catch (error) {

            console.log(error);

            res.status(500).json({
                error: 'Error al obtener el equipo'
            });
        }
    }
}

module.exports = new EquipoController();