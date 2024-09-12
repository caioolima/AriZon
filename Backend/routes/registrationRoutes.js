const express = require('express');
const router = express.Router();
const { registerForEvent, checkIn } = require('../controllers/registrationController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, registerForEvent);
router.put('/checkin', authMiddleware, checkIn);

module.exports = router;
