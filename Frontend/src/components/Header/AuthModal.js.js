import React, { useEffect } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import useAuthModal from '../../hooks/useAuthModal';

const AuthModal = ({ isOpen, onClose }) => {
  const {
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
  } = useAuthModal(onClose);

  useEffect(() => {
    if (isOpen) {
      setIsLogin(true); // Garantir que o modal abra na aba de login
    }
  }, [isOpen, setIsLogin]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 transition-opacity duration-300">
      <div className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-md transition-transform transform scale-95 sm:scale-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h1 className="text-3xl font-semibold mb-6 text-gray-800">
          {isLogin ? 'Entrar' : 'Cadastro'}
        </h1>
        {isLogin ? (
          <LoginForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            onLogin={handleLogin}
            loading={loading}
            error={error}
          />
        ) : (
          <RegisterForm
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            role={role}
            setRole={setRole}
            cpf={cpf}
            setCpf={setCpf}
            cnpj={cnpj}
            setCnpj={setCnpj}
            onRegister={handleRegister}
            loading={loading}
            error={error}
          />
        )}
        <button
          onClick={toggleAuthMode}
          className="mt-4 text-blue-500 hover:underline focus:outline-none"
        >
          {isLogin ? 'Criar uma conta' : 'Já tem uma conta? Entre'}
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
