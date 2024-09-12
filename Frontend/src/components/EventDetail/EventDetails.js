import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EventDetails = ({ date, time, location, description, copyToClipboard }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-medium text-gray-700 mb-1">
            <span className="font-semibold">Data:</span> {date}
          </p>
          <p className="text-lg font-medium text-gray-700 mb-1">
            <span className="font-semibold">Horário:</span> {time}
          </p>
          <p className="text-lg font-medium text-gray-700">
            <span className="font-semibold">Local:</span> {location}
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-primary text-white px-4 py-2 rounded-md shadow-md hover:bg-primary-hover transition">
            Participar
          </button>
          <button
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md shadow-md hover:bg-gray-300 transition"
            onClick={() => copyToClipboard(window.location.href)}
          >
            Compartilhar
          </button>
        </div>
      </div>

      {/* Descrição com formatação */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Descrição do Evento</h2>
        <p className={`text-gray-700 leading-relaxed whitespace-pre-wrap ${isExpanded ? 'block' : 'line-clamp-3'}`}>
          {description}
        </p>
        <button
          className="text-primary mt-2"
          onClick={handleToggleDescription}
        >
          {isExpanded ? 'Ver Menos' : 'Ver Mais'}
        </button>
      </div>
    </div>
  );
};

EventDetails.propTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  copyToClipboard: PropTypes.func.isRequired,
};

export default EventDetails;
