const express = require('express');
const router = express.Router();
const { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent, searchEvents } = require('../controllers/eventController');
const authMiddleware = require('../middleware/authMiddleware');
const authorize = require('../middleware/authorize');

router.post('/', authMiddleware, authorize(['organization', 'admin']), createEvent);
router.get('/', getAllEvents);
router.get('/:id', getEventById);
router.put('/:id', authMiddleware, authorize(['organization', 'admin']), updateEvent);
router.delete('/:id', authMiddleware, authorize(['organization', 'admin']), deleteEvent);
router.get('/events/search', searchEvents);

module.exports = router;
