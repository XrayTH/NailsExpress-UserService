const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
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
    }
}, { timestamps: true });

module.exports = mongoose.model('Cliente', clienteSchema);