// controllers/profesionalController.js
const Profesional = require('../models/profesional');

const getProfesionales = async (req, res) => {
    try {
        const profesionales = await Profesional.find();
        res.json(profesionales);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener profesionales' });
    }
};

const getProfesionalById = async (req, res) => {
    try {
        const profesional = await Profesional.findById(req.params.id);
        if (!profesional) return res.status(404).json({ message: 'Profesional no encontrado' });
        res.json(profesional);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener profesional' });
    }
};

const getProfesionalByEmail = async (req, res) => {
    try {
        const profesional = await Profesional.findOne({ email: req.params.email });
        if (!profesional) return res.status(404).json({ message: 'Profesional no encontrado' });
        res.json(profesional);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener profesional' });
    }
};

const getProfesionalByUsername = async (req, res) => {
    try {
        const profesional = await Profesional.findOne({ username: req.params.username });
        if (!profesional) return res.status(404).json({ message: 'Profesional no encontrado' });
        res.json(profesional);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener profesional' });
    }
};

const createProfesional = async (req, res) => {
    try {
        const newProfesional = new Profesional(req.body);
        await newProfesional.save();
        res.status(201).json(newProfesional);
    } catch (error) {
        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map(err => err.message);
            res.status(400).json({ message: 'Error de validación', errors });
        } else if (error.code === 11000) {
            const field = Object.keys(error.keyValue).join(', ');
            res.status(409).json({ message: `El campo ${field} ya está en uso` });
        } else {
            res.status(500).json({ message: `Error al crear profesional: ${error.message}` });
        }
    }
};

const updateProfesional = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: 'ID de profesional no válido' });
        }
        const updatedProfesional = await Profesional.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedProfesional) {
            return res.status(404).json({ message: 'Profesional no encontrado' });
        }
        res.json(updatedProfesional);
    } catch (error) {
        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map(err => err.message);
            res.status(400).json({ message: 'Error de validación', errors });
        } else if (error.code === 11000) {
            const field = Object.keys(error.keyValue).join(', ');
            res.status(409).json({ message: `El campo ${field} ya está en uso` });
        } else {
            res.status(500).json({ message: `Error al actualizar profesional: ${error.message}` });
        }
    }
};


const deleteProfesional = async (req, res) => {
    try {
        await Profesional.findByIdAndDelete(req.params.id);
        res.json({ message: 'Profesional eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar profesional' });
    }
};

// Cambiar estado de activo
const toggleActiveStatus = async (req, res) => {
    try {
        const { email } = req.params;
        const profesional = await Profesional.findOne({ email });

        if (!profesional) return res.status(404).json({ message: 'Profesional no encontrado' });

        profesional.activo = !profesional.activo; // Cambiar el estado
        await profesional.save();

        res.status(200).json({ message: 'Estado actualizado', activo: profesional.activo });
    } catch (error) {
        res.status(500).json({ message: 'Error al cambiar el estado', error });
    }
};

module.exports = {
    getProfesionales,
    getProfesionalById,
    getProfesionalByEmail,
    getProfesionalByUsername,
    createProfesional,
    updateProfesional,
    deleteProfesional,
    toggleActiveStatus
};

