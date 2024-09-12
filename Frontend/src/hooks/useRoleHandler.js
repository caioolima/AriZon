// hooks/useRoleHandler.js
import { useState } from 'react';

const useRoleHandler = () => {
  const [role, setRole] = useState('');
  const [cpf, setCpf] = useState('');
  const [cnpj, setCnpj] = useState('');

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);
    if (selectedRole === 'pessoa_fisica') {
      setCnpj('');
    } else if (selectedRole === 'pessoa_juridica') {
      setCpf('');
    }
  };

  return {
    role,
    cpf,
    cnpj,
    setRole,
    setCpf,
    setCnpj,
    handleRoleChange
  };
};

export default useRoleHandler;
