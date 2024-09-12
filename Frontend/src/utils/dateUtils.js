export const formatDate = (dateStr, timeStr) => {
  const date = new Date(dateStr);
  
  // Opções para a data
  const dateOptions = { weekday: 'short', day: '2-digit', month: 'short' };
  let formattedDate = new Intl.DateTimeFormat('pt-BR', dateOptions).format(date);

  // Corrige o formato do dia da semana e remove o ponto após o mês
  formattedDate = formattedDate.toUpperCase().replace('.', '').replace(' SET.', ' SET');

  // Formata o horário
  const time = new Date(timeStr);
  const hours = time.getUTCHours().toString().padStart(2, '0');
  const minutes = time.getUTCMinutes().toString().padStart(2, '0');
  const formattedTime = `${hours}:${minutes}H`;

  return { formattedDate, formattedTime };
};
