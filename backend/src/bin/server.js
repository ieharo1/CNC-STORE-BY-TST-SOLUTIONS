// backend/src/bin/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('../models/User');

const app = express();
const PORT = 3001;

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/cnc-store')
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error conectando a MongoDB:', err));

// Middleware para parsear JSON
app.use(express.json());
app.use(cors());

// Ruta para guardar usuarios
app.post('/api/users', async (req, res) => {
    const { email, name, role } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(200).json(existingUser);
        }

        const newUser = await User.create({ email, name, role });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Error al guardar el usuario' });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});