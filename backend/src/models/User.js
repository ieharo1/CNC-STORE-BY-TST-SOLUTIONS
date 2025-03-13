// backend/src/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  role: { type: String, default: 'cliente' }, // Rol predeterminado: cliente
});

module.exports = mongoose.model('User', userSchema);