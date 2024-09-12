// src/hooks/useCopyModal.js
import { useState } from 'react';

const useCopyModal = () => {
  const [showModal, setShowModal] = useState(false);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setShowModal(true);
      setTimeout(() => setShowModal(false), 3000); // Esconde o modal após 3 segundos
    } catch (err) {
      console.error('Erro ao copiar para a área de transferência: ', err);
    }
  };

  return {
    showModal,
    copyToClipboard,
  };
};

export default useCopyModal;
