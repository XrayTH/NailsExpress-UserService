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
        unique: true
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
            type: Number,
        },
        lng: {
            type: Number,
            required: true
        }
    }
}, { timestamps: true });

module.exports = mongoose.model('Profesional', profesionalSchema);
