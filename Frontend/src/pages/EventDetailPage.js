import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import useFetchEventById from '../hooks/useFetchEventById';
import Layout from '../components/Layout';
import { formatDate } from '../utils/dateUtils';
import useCopyModal from '../hooks/useCopyModal';
import CopyConfirmationModal from '../components/EventDetail/CopyConfirmationModal';
import EventBanner from '../components/EventDetail/EventBanner';
import EventDetails from '../components/EventDetail/EventDetails';
import EventMap from '../components/EventDetail/EventMap';

const EventDetailPage = () => {
  const { eventName } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [eventId, setEventId] = useState(location.state?.eventId || null);
  const { showModal, copyToClipboard } = useCopyModal();

  useEffect(() => {
    if (!eventId) {
      console.error("No event ID found.");
      navigate('/');
    }
  }, [eventId, navigate]);

  const { event, loading, error } = useFetchEventById(eventId);

  if (!eventId) {
    return <p className="text-red-500">Erro ao carregar o evento. ID não encontrado.</p>;
  }

  if (loading) return <p className="text-gray-500">Carregando evento...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!event) return <p className="text-gray-500">Evento não encontrado.</p>;

  const { formattedDate, formattedTime } = formatDate(event.date, event.time);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <EventBanner bannerUrl={event.banner} title={event.title} />
        
        <EventDetails 
          date={formattedDate} 
          time={formattedTime} 
          location={event.location}
          description={event.description} // Passa a descrição para o EventDetails
          copyToClipboard={copyToClipboard}
        />

        <EventMap location={event.location} />
        
        <CopyConfirmationModal showModal={showModal} />
      </div>
    </Layout>
  );
};

export default EventDetailPage;
