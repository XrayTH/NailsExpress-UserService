const express = require('express');
const router = express.Router();
const { 
    getProfesionales, 
    getProfesionalById, 
    getProfesionalByEmail, 
    getProfesionalByUsername, 
    createProfesional, 
    updateProfesional, 
    deleteProfesional 
} = require('../controllers/profesionalController');

// Obtener todos los profesionales
router.get('/', getProfesionales);

// Obtener profesional por ID
router.get('/:id', getProfesionalById);

// Obtener profesional por email
router.get('/email/:email', getProfesionalByEmail);

// Obtener profesional por nombre de usuario
router.get('/username/:username', getProfesionalByUsername);

// Crear nuevo profesional
router.post('/', createProfesional);

// Actualizar profesional
router.put('/:id', updateProfesional);

// Eliminar profesional
router.delete('/:id', deleteProfesional);

module.exports = router;
