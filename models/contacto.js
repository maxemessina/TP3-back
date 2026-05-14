const fs = require('fs').promises;
const path = require('path');

class ContactoModel {
    constructor() {
        this.path = path.join(__dirname, '../data/contacto.json');
    }

    async leerTodos() {
        
        const data = await fs.readFile(this.path, 'utf-8');
        return JSON.parse(data);
    }
}

module.exports = new ContactoModel();