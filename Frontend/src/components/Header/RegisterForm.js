import React from 'react';

const RegisterForm = ({ name, setName, email, setEmail, password, setPassword, role, setRole, cpf, setCpf, cnpj, setCnpj, onRegister, loading, error }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Nome:</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Email:</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Senha:</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Tipo de Usuário:</span>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="" disabled>Selecione</option>
          <option value="pessoa_fisica">Pessoa Física</option>
          <option value="pessoa_juridica">Pessoa Jurídica</option>
        </select>
      </label>
      {role === 'pessoa_fisica' && (
        <label className="block mb-4">
          <span className="text-gray-700 font-medium">CPF:</span>
          <input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required={role === 'pessoa_fisica'}
          />
        </label>
      )}
      {role === 'pessoa_juridica' && (
        <label className="block mb-4">
          <span className="text-gray-700 font-medium">CNPJ:</span>
          <input
            type="text"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required={role === 'pessoa_juridica'}
          />
        </label>
      )}
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        disabled={loading}
      >
        {loading ? 'Carregando...' : 'Cadastrar'}
      </button>
    </form>
  );
};

export default RegisterForm;
