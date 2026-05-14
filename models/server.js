// ./models: En esta carpeta vamos a tener un archivo por clase. Para poder empezar el servidor de la API siempre vamos a tener el archivo ‘server.js’.
const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;

        // nombres de las rutas (endpoints)
        this.paths = {
            index:     '/api/index',
            servicios: '/api/servicios',
            equipo:    '/api/equipo',
<<<<<<< HEAD
            perfil:  '/api/perfil',
            usuarios:  '/api/usuarios',
            auth:      '/api/auth',
            pedido:    '/api/pedido',
            contacto: '/api/contacto',
            faq:      '/api/faq'
=======
            pedido:    '/api/pedido',
            contacto: '/api/contacto',
            faq: '/api/faq',
            usuarios: '/api',
>>>>>>> ef6af73de1a2201b81eb5de40d394968485d6061
        };

        this.middlewares();
        

        this.routes();
    }

    middlewares() {
        this.app.use(cors()); // permite que el github pages se comunique con el render

        this.app.use(express.json()); // lee datos en formato JSON de peticiones
    }

    routes() {
        // archivos de rutas tienen que ir siendo creados
        this.app.use(this.paths.index, require('../routes/indexRoute'));
        this.app.use(this.paths.servicios, require('../routes/serviciosRoutes'));
        this.app.use(this.paths.usuarios, require('../routes/usuariosRoute'));
        this.app.use(this.paths.equipo,    require('../routes/equipoRoute'));
        this.app.use(this.paths.pedido, require('../routes/pedidosroutes'));
        this.app.use(this.paths.contacto, require('../routes/contactoRoute'));
        this.app.use(this.paths.faq, require('../routes/faqRoutes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto: ${this.port}`);
        });
    }
}
module.exports = Server;
