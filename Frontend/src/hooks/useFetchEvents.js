// src/hooks/useFetchEvents.js
import { useEffect, useState } from 'react';

const useFetchEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/events');
        if (!response.ok) {
          throw new Error('Erro ao carregar eventos');
        }
        const data = await response.json();
        setEvents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Função para formatar a data e o horário
  const formatDate = (dateStr, timeStr) => {
    const date = new Date(dateStr);

    // Opções para a data
    const dayOptions = { weekday: 'short', day: '2-digit', month: 'short' };
    let formattedDate = new Intl.DateTimeFormat('pt-BR', dayOptions).format(date);

    // Corrigir o formato do dia da semana e remover o ponto após o mês
    formattedDate = formattedDate.toUpperCase().replace('.', '').replace(' SET.', ' SET');

    // Formatação do horário
    const time = new Date(timeStr);
    const hours = time.getUTCHours().toString().padStart(2, '0');
    const formattedTime = `${hours}H`;

    return `${formattedDate} • ${formattedTime}`;
  };

  return { events, loading, error, formatDate };
};

export default useFetchEvents;
