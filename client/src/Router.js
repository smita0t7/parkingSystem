import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ParkingLot from './components/ParkingLot';
import Booking from './components/Booking';
import History from './components/History';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/parking-lot" element={<ParkingLot />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/history" element={<History />} />
            
            
            </Routes>
        </Router>
    );
}

export default AppRouter;
