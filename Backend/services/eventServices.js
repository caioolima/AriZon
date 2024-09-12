const Event = require('../models/Event');

const createEvent = async (data) => {
  const event = new Event(data);
  await event.save();
  return event;
};

const getAllEvents = async () => {
  return await Event.find();
};

const getEventById = async (id) => {
  return await Event.findById(id);
};

const updateEvent = async (id, data) => {
  return await Event.findByIdAndUpdate(id, data, { new: true });
};

const deleteEvent = async (id) => {
  return await Event.findByIdAndDelete(id);
};

module.exports = { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent };
