// app.js: Es nuestro archivo inicial y lo que Node.js va a
require('dotenv').config();

const Server = require('./models/server');

const server = new Server();

server.listen();