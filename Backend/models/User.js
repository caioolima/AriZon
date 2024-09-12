const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['individual', 'organization'],
    required: true,
  },
  cpf: {
    type: String,
    default: '',
    unique: true, // Adicionando índice único para CPF
  },
  cnpj: {
    type: String,
    default: '',
    unique: true, // Adicionando índice único para CNPJ
  },
});

// Hash da senha antes de salvar o usuário
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Método para comparar senha
userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
