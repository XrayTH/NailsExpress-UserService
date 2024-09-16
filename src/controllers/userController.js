const Cliente = require('../models/cliente');
const Profesional = require('../models/profesional');
const Admin = require('../models/admin');

// Función para agregar el campo 'tipo'
const addTipoField = (users, tipo) => users.map(user => ({ ...user.toObject(), tipo }));

// Obtener todos los usuarios (clientes, profesionales y admins)
const getAllUsers = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        const profesionales = await Profesional.find();
        const admins = await Admin.find();

        const allUsers = [
            ...addTipoField(clientes, 'cliente'),
            ...addTipoField(profesionales, 'profesional'),
            ...addTipoField(admins, 'admin')
        ];

        res.json(allUsers);
    } catch (error) {
        console.error(error); // Agregar un console.error para depurar el error
        res.status(500).json({ message: 'Error al obtener todos los usuarios' });
    }
};

// Obtener usuario por ID
const getUserById = async (req, res) => {
    try {
        const id = req.params.id;

        const cliente = await Cliente.findById(id);
        const profesional = await Profesional.findById(id);
        const admin = await Admin.findById(id);

        const user = cliente ? { ...cliente.toObject(), tipo: 'cliente' } :
                      profesional ? { ...profesional.toObject(), tipo: 'profesional' } :
                      admin ? { ...admin.toObject(), tipo: 'admin' } : null;

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.json(user);
    } catch (error) {
        console.error(error); // Agregar un console.error para depurar el error
        res.status(500).json({ message: 'Error al obtener usuario por ID' });
    }
};

// Obtener usuario por usuario
const getUserByUsuario = async (req, res) => {
    try {
        const usuario = req.params.usuario;

        const cliente = await Cliente.findOne({ usuario });
        const profesional = await Profesional.findOne({ usuario });
        const admin = await Admin.findOne({ usuario });

        const user = cliente ? { ...cliente.toObject(), tipo: 'cliente' } :
                      profesional ? { ...profesional.toObject(), tipo: 'profesional' } :
                      admin ? { ...admin.toObject(), tipo: 'admin' } : null;

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.json(user);
    } catch (error) {
        console.error(error); // Agregar un console.error para depurar el error
        res.status(500).json({ message: 'Error al obtener usuario por nombre de usuario' });
    }
};

// Obtener usuario por email
const getUserByEmail = async (req, res) => {
    try {
        const email = req.params.email;

        const cliente = await Cliente.findOne({ email });
        const profesional = await Profesional.findOne({ email });
        const admin = await Admin.findOne({ email });

        const user = cliente ? { ...cliente.toObject(), tipo: 'cliente' } :
                      profesional ? { ...profesional.toObject(), tipo: 'profesional' } :
                      admin ? { ...admin.toObject(), tipo: 'admin' } : null;

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.json(user);
    } catch (error) {
        console.error(error); // Agregar un console.error para depurar el error
        res.status(500).json({ message: 'Error al obtener usuario por email' });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    getUserByUsuario,
    getUserByEmail
};



