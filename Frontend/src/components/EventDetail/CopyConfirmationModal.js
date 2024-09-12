import React, { useEffect } from 'react';

const CopyConfirmationModal = ({ showModal }) => {
  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        // Logic to hide the modal after a few seconds
      }, 2000); // Ajuste o tempo conforme necessário
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-md shadow-lg">
        <p className="text-gray-800">Link copiado para a área de transferência!</p>
      </div>
    </div>
  );
};

export default CopyConfirmationModal;
