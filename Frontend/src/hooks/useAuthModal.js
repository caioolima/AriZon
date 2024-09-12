import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const useAuthModal = (onClose) => {
  const { login, register } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('user'); // Ajuste conforme necessário
  const [cpf, setCpf] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      await login(email, password);
      onClose(); // Fecha o modal após o login
    } catch (err) {
      setError('Falha no login. Verifique suas credenciais.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    setLoading(true);
    setError('');
    try {
      await register(name, email, password, role, cpf, cnpj);
      onClose(); // Fecha o modal após o registro
    } catch (err) {
      setError('Falha no registro. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  // Reseta os campos de login e registro
  const resetFields = () => {
    setEmail('');
    setPassword('');
    setName('');
    setRole('user');
    setCpf('');
    setCnpj('');
  };

  // Alterna entre login e registro
  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    resetFields();
  };

  return {
    isLogin,
    setIsLogin,
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    role,
    setRole,
    cpf,
    setCpf,
    cnpj,
    setCnpj,
    handleLogin,
    handleRegister,
    loading,
    error,
    toggleAuthMode,
  };
};

export default useAuthModal;
