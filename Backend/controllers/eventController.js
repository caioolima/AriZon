const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
  try {
    if (req.user.role !== 'organization') {
      return res.status(403).json({ message: 'Acesso negado' });
    }

    // Criar o evento
    const event = new Event({
      ...req.body,
      createdBy: req.user.id,
    });

    await event.save();

    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (event) {
      res.json(event);
    } else {
      res.status(404).json({ message: 'Evento não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Evento não encontrado' });
    }

    if (event.createdBy.toString() !== req.user.id.toString()) {
      return res.status(403).json({ message: 'Você não tem permissão para editar este evento' });
    }

    // Atualizar o evento com novos dados, incluindo o gênero e o banner
    const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.json(updatedEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Evento não encontrado' });
    }

    if (event.createdBy.toString() !== req.user.id.toString()) {
      return res.status(403).json({ message: 'Você não tem permissão para deletar este evento' });
    }

    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: 'Evento deletado' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.searchEvents = async (req, res) => {
  try {
    const { genre, date, location } = req.query;

    // Cria um objeto de filtros com base nas consultas fornecidas
    const filters = {};
    if (genre) filters.genre = genre;
    if (date) filters.date = new Date(date);
    if (location) filters.location = { $regex: new RegExp(location, 'i') };

    const events = await Event.find(filters);
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
