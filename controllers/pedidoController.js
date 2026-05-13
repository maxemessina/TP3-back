const fs = require("fs");
const path = require("path");

const crearPedido = (req, res) => {
    try {
        const nuevoPedido = req.body;

        const filePath = path.join(__dirname, "../data/pedido.json");

        let pedidos = [];

        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, "utf-8");
            pedidos = data ? JSON.parse(data) : [];
        }

        pedidos.push(nuevoPedido);

        fs.writeFileSync(filePath, JSON.stringify(pedidos, null, 2));

        return res.status(201).json({
            ok: true,
            msg: "Pedido guardado"
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Error al guardar pedido"
        });
    }
};

module.exports = {
    crearPedido
};
