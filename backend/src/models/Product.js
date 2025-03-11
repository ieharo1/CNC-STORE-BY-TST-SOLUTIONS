const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    nombre: String,
    precio: Number,
    foto: String,
    caracteristicas: [String],
});

module.exports = mongoose.model('Product', ProductSchema);