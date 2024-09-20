const Admin = require('../models/admin');

const getAdmins = async (req, res) => {
    try {
        const admins = await Admin.find();
        res.json(admins);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener admins' });
    }
};

const createAdmin = async (req, res) => {
    try {
        const newAdmin = new Admin(req.body);
        await newAdmin.save();
        res.status(201).json(newAdmin);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear admin' });
    }
};

const updateAdmin = async (req, res) => {
    try {
        const updatedAdmin = await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedAdmin);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar admin' });
    }
};

const deleteAdmin = async (req, res) => {
    try {
        await Admin.findByIdAndDelete(req.params.id);
        res.json({ message: 'Admin eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar admin' });
    }
};

const Admin = require('../models/admin');

// Cambiar estado de activo
exports.toggleActiveStatus = async (req, res) => {
    try {
        const { email } = req.params;
        const admin = await Admin.findOne({ email });

        if (!admin) return res.status(404).json({ message: 'Administrador no encontrado' });

        admin.activo = !admin.activo; // Cambiar el estado
        await admin.save();

        res.status(200).json({ message: 'Estado actualizado', activo: admin.activo });
    } catch (error) {
        res.status(500).json({ message: 'Error al cambiar el estado', error });
    }
};

module.exports = {
    getAdmins,
    createAdmin,
    updateAdmin,
    deleteAdmin
};
