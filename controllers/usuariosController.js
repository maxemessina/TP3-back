const fs = require('fs').promises;
const path = require('path');

const dataPath = path.join(__dirname, '../data/usuarios.json');

// /api/login
const login = async (req, res) => {
    console.log("Ejecutando endpoint POST /api/login");
    try {
        const { email, password } = req.body;
        
        const data = await fs.readFile(dataPath, 'utf-8');
        const usuarios = JSON.parse(data);

        const usuario = usuarios.find(u => u.email === email && u.password === password);

        if (!usuario) {
            console.log("Credenciales incorrectas");
            return res.status(401).json({ msg: "Credenciales incorrectas, o usuario no registrado" });
        }

        console.log(`Login exitoso para el usuario ID: ${usuario.id}`);
        // devuelve la estructura esperada por login.js
        res.json({
            usuario: {
                id: usuario.id,
                nombre: usuario.nombre,
                email: usuario.email
            }
        });
    } catch (error) {
        console.error("Error en el login:", error);
        res.status(500).json({ msg: "Error interno del servidor al procesar el login" });
    }
};

// /api/registro
const registro = async (req, res) => {
    console.log("Ejecutando endpoint POST /api/registro");
    try {
        const nuevoUsuarioReq = req.body;
        
        const data = await fs.readFile(dataPath, 'utf-8');
        const usuarios = JSON.parse(data);

        // valida que el email no este ya registrado
        const existeEmail = usuarios.find(u => u.email === nuevoUsuarioReq.email);
        if (existeEmail) {
            console.log("🚩 [FLAG] Registro denegado: El email ya existe");
            return res.status(400).json({ msg: "El correo electrónico ya se encuentra registrado" });
        }

        // extrae confirm_password para no guardarlo
        const { confirm_password, ...datosUsuario } = nuevoUsuarioReq;

        const nuevoUsuario = {
            id: Date.now().toString(),
            nombre: datosUsuario.nombre || "Socio ON Gym",
            ...datosUsuario,
            miembroDesde: "Mayo 2026",
            pedidos: []
        };

        // modifica el JSON con los datos actualizados
        usuarios.push(nuevoUsuario);
        await fs.writeFile(dataPath, JSON.stringify(usuarios, null, 2), 'utf-8');

        console.log(`Nuevo socio creado con ID ${nuevoUsuario.id}`);
        res.status(201).json({ msg: "Registro exitoso" });
    } catch (error) {
        console.error("Error en el registro:", error);
        res.status(500).json({ msg: "Error interno del servidor al registrar el usuario" });
    }
};

// /api/perfil/:id
const getPerfil = async (req, res) => {
    console.log(`Ejecutando endpoint GET /api/perfil/${req.params.id}`);
    try {
        const { id } = req.params;
        
        const data = await fs.readFile(dataPath, 'utf-8');
        const usuarios = JSON.parse(data);

        const usuario = usuarios.find(u => u.id === id);

        if (!usuario) {
            console.log("Perfil no encontrado");
            return res.status(404).json({ msg: "Usuario no encontrado" });
        }

        console.log(`Enviando datos de perfil del socio: ${usuario.nombre}`);
        res.json({
            nombre: usuario.nombre,
            email: usuario.email,
            miembroDesde: usuario.miembroDesde || "Mayo 2026",
            objetivo: usuario.objetivo || "Entrenamiento general",
            pedidos: usuario.pedidos || []
        });
    } catch (error) {
        console.error("Error al cargar perfil:", error);
        res.status(500).json({ msg: "Error interno del servidor al obtener los datos del perfil" });
    }
};

module.exports = {
    login,
    registro,
    getPerfil
};