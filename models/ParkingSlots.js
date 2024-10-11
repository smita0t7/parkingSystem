const mongoose = require('mongoose');

const ParkingSlotSchema = new mongoose.Schema({
    number: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['Available', 'Occupied'],
        default: 'Available',
    },
});

const ParkingSlot = mongoose.model('ParkingSlot', ParkingSlotSchema);

module.exports = ParkingSlot;
