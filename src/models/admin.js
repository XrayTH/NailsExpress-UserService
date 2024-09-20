const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    usuario: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Por favor ingresa un correo electrónico válido']
    },
    contraseña: {
        type: String,
        required: true
    },
    activo: { type: Boolean, default: true } // Nuevo atributo
}, { timestamps: true });

module.exports = mongoose.model('Admin', adminSchema);

