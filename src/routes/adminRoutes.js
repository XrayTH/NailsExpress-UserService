const express = require('express');
const router = express.Router();
const { 
    getAdmins,
    createAdmin, 
    updateAdmin, 
    deleteAdmin,
    toggleActiveStatus 
} = require('../controllers/adminController');

// Obtener todos los admins
router.get('/', getAdmins);

router.get('/:email', adminController.getAdminByEmail);

// Crear nuevo admin
router.post('/', createAdmin);

// Actualizar admin
router.put('/:id', updateAdmin);

// Eliminar admin
router.delete('/:id', deleteAdmin);

router.patch('/:email/toggle-active', toggleActiveStatus);

module.exports = router;
