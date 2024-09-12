// models/Registration.js
const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  checkedIn: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Registration', registrationSchema);
