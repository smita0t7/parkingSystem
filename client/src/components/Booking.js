import React, { useState } from 'react';
import axios from 'axios';

const Booking = () => {
    const [slotId, setSlotId] = useState('');
    const [userId, setUserId] = useState('');

    const handleBooking = async () => {
        try {
            const response = await axios.post('/api/book-slot', { slotId, userId });
            console.log('Booking Successful:', response.data);
        } catch (error) {
            console.error('Booking Error:', error);
        }
    };

    return (
        <div>
            <h2>Book a Slot</h2>
            <input 
                type="text" 
                placeholder="Slot ID" 
                value={slotId} 
                onChange={(e) => setSlotId(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="User ID" 
                value={userId} 
                onChange={(e) => setUserId(e.target.value)} 
            />
            <button onClick={handleBooking}>Book Slot</button>
        </div>
    );
};

export default Booking;
