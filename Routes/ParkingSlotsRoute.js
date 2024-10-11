const express = require('express');
const router = express.Router();
const ParkingSlot = require('../models/ParkingSlots');

// Get all parking slots
router.get('/api/parking-slots', async (req, res) => {
    try {
        const parkingSlots = await ParkingSlot.find();
        res.status(200).json(parkingSlots);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching parking slots data' });
    }
});

// POST route to add a new parking slot
router.post('/', async (req, res) => {
    try {
        const newSlot = new ParkingSlot(req.body);
        const savedSlot = await newSlot.save();
        res.status(201).json(savedSlot);
    } catch (error) {
        console.error('Error adding parking slot:', error);  // Log the detailed error to the console
        res.status(500).json({ message: 'Error adding parking slot', error: error.message });
    }
});

// Update a parking slot's status
router.put('/api/parking-slots/:id', async (req, res) => {
    try {
        const updatedSlot = await ParkingSlot.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedSlot);
    } catch (error) {
        res.status(500).json({ message: 'Error updating parking slot' });
    }
});

// Delete a parking slot
router.delete('/api/parking-slots/:id', async (req, res) => {
    try {
        await ParkingSlot.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Parking slot deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting parking slot' });
    }
});

module.exports = router;
