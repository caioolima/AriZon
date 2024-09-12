const Registration = require('../models/Registration');
const Event = require('../models/Event');

exports.registerForEvent = async (req, res) => {
  try {
    const { eventId } = req.body;
    
    // Verificar se o evento existe
    const event = await Event.findById(eventId);
    if (!event) return res.status(404).json({ message: 'Evento não encontrado' });

    // Criar uma nova inscrição
    const registration = new Registration({
      user: req.user.id,  // Certifique-se de que req.user.id está definido corretamente
      event: eventId,
    });

    await registration.save();
    res.status(201).json(registration);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.checkIn = async (req, res) => {
  try {
    const { registrationId } = req.body;

    // Atualizar a inscrição para marcar como presente
    const registration = await Registration.findByIdAndUpdate(registrationId, { checkedIn: true }, { new: true });
    if (registration) {
      res.json(registration);
    } else {
      res.status(404).json({ message: 'Inscrição não encontrada' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
