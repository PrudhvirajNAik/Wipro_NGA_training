const express = require('express');
const router = express.Router();

// You can store appointments in memory or use a real database
let appointments = [];

router.post('/', (req, res) => {
    const appointment = req.body;
    appointments.push(appointment);
    res.status(201).json({ message: 'Appointment booked successfully' });
});

module.exports = router;