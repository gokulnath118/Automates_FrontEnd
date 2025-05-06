import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import VehicleManagement from './VehicleManagement';
import BookingOversight from './BookingOversight';
import Profile from './Profile';

function OwnerDashboardRoutes() {
  return (
    <Routes>
      <Route path="dashboard" element={<DashboardLayout />} />
      <Route path="vehicles" element={<VehicleManagement />} />
      <Route path="bookings" element={<BookingOversight />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  );
}

export default OwnerDashboardRoutes;
