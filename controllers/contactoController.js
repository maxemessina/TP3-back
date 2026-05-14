const contactoModel = require('../models/contactoModel');

class ContactoController {
    async obtenerContacto(req, res) {
        try {
            const datos = await contactoModel.leerTodos();
            res.json(datos);
        } catch (error) {
            console.error('Error al leer contacto.json:', error);

            res.status(500).json({
                error: 'No se pudieron obtener los datos de contacto'
            });
        }
    }
}

module.exports = new ContactoController();