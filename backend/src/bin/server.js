// backend/src/bin/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Role = require('../models/Role'); // Importar el modelo de roles

const app = express();
const PORT = 3001;

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/cnc-store')
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error conectando a MongoDB:', err));

// Middleware para parsear JSON
app.use(express.json());
app.use(cors());

// Ruta para obtener el rol del usuario
app.get('/api/role/:email', async (req, res) => {
  const { email } = req.params;

  try {
    const role = await Role.findOne({ email });
    if (role) {
      res.status(200).json({ role: role.role });
    } else {
      res.status(200).json({ role: 'cliente' }); // Rol predeterminado si no se encuentra
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el rol' });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});