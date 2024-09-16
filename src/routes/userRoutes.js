// routes/userRoutes.js
const express = require('express');
const router = express.Router();

const {
    getAllUsers,
    getUserById,
    getUserByUsuario,
    getUserByEmail
} = require('../controllers/userController');

// Ruta para obtener todos los usuarios (clientes, profesionales y admins)
router.get('/', getAllUsers);

// Ruta para obtener un usuario por ID
router.get('/:id', getUserById);

// Ruta para obtener un usuario por nombre de usuario
router.get('/usuario/:usuario', getUserByUsuario);

// Ruta para obtener un usuario por email
router.get('/email/:email', getUserByEmail);

module.exports = router;



