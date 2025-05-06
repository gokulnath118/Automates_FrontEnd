import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import SearchBooking from './SearchBooking';
import BookingManagement from './BookingManagement';
import Profile from './Profile';

function LeaserRoutes(){
  return (
    <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="vehicles" element={<SearchBooking />} />
        <Route path="bookings" element={<BookingManagement />} />
        <Route path="profile" element={<Profile />} />
    </Routes>
  );
}

export default LeaserRoutes;
