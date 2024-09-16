const express = require('express');
const router = express.Router();
const { 
    getClientes, 
    getClienteById, 
    getClienteByEmail, 
    getClienteByUsername, 
    createCliente, 
    updateCliente, 
    deleteCliente 
} = require('../controllers/clienteController');

// Obtener todos los clientes
router.get('/', getClientes);

// Obtener cliente por ID
router.get('/:id', getClienteById);

// Obtener cliente por email
router.get('/email/:email', getClienteByEmail);

// Obtener cliente por nombre de usuario
router.get('/username/:username', getClienteByUsername);

// Crear nuevo cliente
router.post('/', createCliente);

// Actualizar cliente
router.put('/:id', updateCliente);

// Eliminar cliente
router.delete('/:id', deleteCliente);

module.exports = router;
