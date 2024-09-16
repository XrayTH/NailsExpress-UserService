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
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email address']
    },
    contraseña: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Admin', adminSchema);
