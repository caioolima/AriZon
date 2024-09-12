const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { name, email, password, role, cpf, cnpj } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    if (!['individual', 'organization'].includes(role)) {
      return res.status(400).json({ message: 'Papel inválido' });
    }

    // Verificar se CPF ou CNPJ já existe
    if (role === 'individual' && cpf) {
      const existingCpf = await User.findOne({ cpf });
      if (existingCpf) {
        return res.status(400).json({ message: 'CPF já cadastrado' });
      }
    }
    
    if (role === 'organization' && cnpj) {
      const existingCnpj = await User.findOne({ cnpj });
      if (existingCnpj) {
        return res.status(400).json({ message: 'CNPJ já cadastrado' });
      }
    }

    // Verificar se o e-mail já existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Usuário já existe' });
    }

    const user = new User({ name, email, password, role, cpf, cnpj });
    await user.save();

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(201).json({ message: 'Usuário registrado com sucesso', token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Usuário não encontrado' });
    }

    const isMatch = await user.matchPassword(password);
    if (isMatch) {
      const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Senha incorreta' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
