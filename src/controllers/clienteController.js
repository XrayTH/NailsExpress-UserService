const Cliente = require('../models/cliente');

const getClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener clientes' });
    }
};

const getClienteById = async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id);
        if (!cliente) return res.status(404).json({ message: 'Cliente no encontrado' });
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener cliente' });
    }
};

const getClienteByEmail = async (req, res) => {
    try {
        const cliente = await Cliente.findOne({ email: req.params.email });
        if (!cliente) return res.status(404).json({ message: 'Cliente no encontrado' });
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener cliente' });
    }
};

const getClienteByUsername = async (req, res) => {
    try {
        const cliente = await Cliente.findOne({ username: req.params.username });
        if (!cliente) return res.status(404).json({ message: 'Cliente no encontrado' });
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener cliente' });
    }
};

const createCliente = async (req, res) => {
    try {
        const newCliente = new Cliente(req.body);
        await newCliente.save();
        res.status(201).json(newCliente);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear cliente' });
    }
};

const updateCliente = async (req, res) => {
    try {
        const updatedCliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedCliente);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar cliente' });
    }
};

const deleteCliente = async (req, res) => {
    try {
        await Cliente.findByIdAndDelete(req.params.id);
        res.json({ message: 'Cliente eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar cliente' });
    }
};

// Cambiar estado de activo
const toggleActiveStatus = async (req, res) => {
    try {
        const { email } = req.params;
        const cliente = await Cliente.findOne({ email });

        if (!cliente) return res.status(404).json({ message: 'Cliente no encontrado' });

        cliente.activo = !cliente.activo; // Cambiar el estado
        await cliente.save();

        res.status(200).json({ message: 'Estado actualizado', activo: cliente.activo });
    } catch (error) {
        res.status(500).json({ message: 'Error al cambiar el estado', error });
    }
};


module.exports = {
    getClientes,
    getClienteById,
    getClienteByEmail,
    getClienteByUsername,
    createCliente,
    updateCliente,
    deleteCliente,
    toggleActiveStatus
};

