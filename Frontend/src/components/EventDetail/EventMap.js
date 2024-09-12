import React from 'react';

const EventMap = ({ location }) => (
  <div className="mt-8">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Localização</h2>
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      <iframe
        title="Local do Evento"
        src={`https://www.google.com/maps?q=${encodeURIComponent(location)}&output=embed`}
        width="100%"
        height="100%"
        className="border-0"
      ></iframe>
    </div>
  </div>
);

export default EventMap;
