const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('../routes/productRoutes');

const app = express();
const PORT = 3001;

// Conectar a MongoDB (sin opciones obsoletas)
mongoose.connect('mongodb://localhost:27017/cnc-store')
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error conectando a MongoDB:', err));

// Middleware para parsear JSON
app.use(express.json());
app.use(cors());

// Usar las rutas de productos
app.use('/api', productRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
