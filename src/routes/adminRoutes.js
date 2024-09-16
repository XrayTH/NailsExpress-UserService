const express = require('express');
const router = express.Router();
const { 
    getAdmins,
    createAdmin, 
    updateAdmin, 
    deleteAdmin 
} = require('../controllers/adminController');

// Obtener todos los admins
router.get('/', getAdmins);

// Crear nuevo admin
router.post('/', createAdmin);

// Actualizar admin
router.put('/:id', updateAdmin);

// Eliminar admin
router.delete('/:id', deleteAdmin);

module.exports = router;
