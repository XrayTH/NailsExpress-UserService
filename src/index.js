const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const profesionalRoutes = require('./routes/profesionalRoutes');
const adminRoutes = require('./routes/adminRoutes');
require('dotenv').config();

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware
app.use(cors()); // Habilitar CORS para permitir solicitudes desde otros dominios
app.use(express.json()); // Habilitar el análisis de JSON en las solicitudes

// Rutas
app.use('/userService/users', userRoutes); // Rutas para operaciones CRUD de usuarios

app.use('/userService/clientes', clienteRoutes);

app.use('/userService/profesional', profesionalRoutes);

app.use('/userService/admin', adminRoutes);

// Manejo de rutas no encontradas
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));