const mongoose = require('mongoose');

const profesionalSchema = new mongoose.Schema({
    usuario: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Por favor ingresa un correo electrónico válido'] // Validación de correo
    },
    contraseña: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    nombreLocal: {
        type: String,
        required: true
    },
    ubicacion: {
        lat: {
            type: Number
        },
        lng: {
            type: Number,
            required: true
        }
    },
    activo: { type: Boolean, default: true } // Nuevo atributo
}, { timestamps: true });

module.exports = mongoose.model('Profesional', profesionalSchema);

