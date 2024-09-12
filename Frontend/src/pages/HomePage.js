import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import useFetchEvents from '../hooks/useFetchEvents';
import { formatDate } from '../utils/dateUtils';

const HomePage = () => {
  const { events, loading, error, formatDate } = useFetchEvents();
  const navigate = useNavigate();

  const createSlug = (title) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  const handleEventClick = (event) => {
    const slug = createSlug(event.title);
    if (event._id) {
      // Armazena o ID no estado local e navega
      navigate(`/event/${slug}`, { state: { eventId: event._id } });
    } else {
      console.error("Event ID is missing.");
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-left">Eventos Recentes</h2>
          {loading && <p>Carregando eventos...</p>}
          {error && <p className="text-red-500">{error}</p>}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event._id}
                className="overflow-hidden bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => handleEventClick(event)}
              >
                <img
                  src={event.banner || 'https://via.placeholder.com/300x200'}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4 text-left">
                  <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                  <p className="text-gray-500 mb-1">{formatDate(event.date, event.time)}</p>
                  <p className="text-gray-500">{event.location}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
