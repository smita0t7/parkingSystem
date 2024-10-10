import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ParkingLot = () => {
    const [parkingSlots, setParkingSlots] = useState([]);

    useEffect(() => {
        const fetchParkingSlots = async () => {
            const response = await axios.get('/api/parking-slots');
            setParkingSlots(response.data);
        };
        fetchParkingSlots();
    }, []);

    return (
        <div className="container parking-lot-container">
            <h2>Parking Lot</h2>
            <ul className="parking-lot-list">
                {parkingSlots.map((slot) => (
                    <li key={slot.id}>
                        {slot.number} - {slot.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default ParkingLot;
