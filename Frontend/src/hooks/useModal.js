import { useState } from 'react';

const useModal = () => {
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);

  const openAuthModal = () => setAuthModalOpen(true);
  const closeAuthModal = () => setAuthModalOpen(false);

  return {
    isAuthModalOpen,
    openAuthModal,
    closeAuthModal
  };
};

export default useModal;
