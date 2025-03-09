const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Ruta para obtener todos los productos
router.get('/products', productController.getProducts);

// Ruta para agregar un nuevo producto
router.post('/products', productController.addProduct);

// Ruta para eliminar un producto por ID
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;