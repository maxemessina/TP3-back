const fs = require('fs').promises;
const path = require('path');

class FAQModel {
  constructor() {
    this.path = path.join(__dirname, '../data/faq.json');
  }

  async leerTodos() {
    const data = await fs.readFile(this.path, 'utf-8');
    return JSON.parse(data);
  }
}

module.exports = FAQModel;
