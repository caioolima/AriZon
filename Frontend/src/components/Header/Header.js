import React from 'react';
import { Link } from 'react-router-dom';
import AuthModal from './AuthModal.js'; // Importando o modal de autenticação
import useModal from '../../hooks/useModal';

const Header = () => {
  const {
    isAuthModalOpen,
    openAuthModal,
    closeAuthModal
  } = useModal();

  return (
    <header className="bg-black text-white py-6 px-4 relative">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo no canto esquerdo */}
        <Link to="/" className="text-5xl font-bold hover:text-gray-300">
          AriZon
        </Link>
        <div className="flex space-x-4">
          <button
            onClick={openAuthModal}
            className="text-white py-2 px-4 rounded-md font-bold hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            Login
          </button>
        </div>
      </div>
      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
    </header>
  );
};

export default Header;
