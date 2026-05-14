const fs = require('fs').promises;
const path = require('path');

class equipoModel {
    constructor() {
        this.path = path.join(__dirname, '../data/equipo.json');
    }

    async leerTodos() {
        // lectura asíncrona 
        const data = await fs.readFile(this.path, 'utf-8');
        return JSON.parse(data);
    }
}

module.exports = new equipoModel();