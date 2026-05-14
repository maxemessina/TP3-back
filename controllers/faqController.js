const fs = require('fs').promises;
const path = require('path');


const obtenerFAQ = async (req, res) => {


    try {


        const ruta = path.join(__dirname, '../data/faq.json');


        const data = await fs.readFile(ruta, 'utf-8');


        const faq = JSON.parse(data);


        res.json(faq);


    } catch (error) {


        res.status(500).json({
            mensaje: 'Error al obtener FAQ'
        });


    }


};


module.exports = { obtenerFAQ };
