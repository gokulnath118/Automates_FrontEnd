import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Leaser Pages
import LeaserLogin from './pages/leaser/Login';
import LeaserSignup from './pages/leaser/Signup';
import LeaserRoutes from './pages/leaser/LeaserRoutes';
// Owner Pages
import OwnerLogin from './pages/owner/Login';
import OwnerSignup from './pages/owner/Signup';
import OwnerDashboardRoutes from './pages/owner/OwnerDashboardRoutes';
// Admin Pages
import Login from './pages/admin/Login';

// import AdminRoutes from './pages/admin/AdminRoutes';
// Common
import MainDashboard from './components/MainDashboard';
import SignupChoice from './components/SignupChoice';
import LoginChoice from './components/LoginChoice';

// Contexts
import { VehicleProvider } from './context/VehicleContext';
import { BookingProvider } from './context/BookingContext';
import AdminRoutes from './pages/admin/AdminRoutes';

function App() {
  return (
    <BrowserRouter>
      <VehicleProvider>
        <BookingProvider>
          <Routes>
            {/* Main Components */}
            <Route path="/" element={<MainDashboard />} />
            <Route path="/signup" element={<SignupChoice />} />
            <Route path="/login" element={<LoginChoice />} />

            {/* Leaser Routes */}
            <Route path="/leaser/login" element={<LeaserLogin />} />
            <Route path="/leaser/signup" element={<LeaserSignup />} />
            <Route path="/leaser/*" element={<LeaserRoutes />} />

            {/* Owner Routes */}
            <Route path="/owner/login" element={<OwnerLogin />} />
            <Route path="/owner/signup" element={<OwnerSignup />} />
            <Route path="/owner/*" element={<OwnerDashboardRoutes />} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/*" element={<AdminRoutes />} />
          </Routes>
        </BookingProvider>
      </VehicleProvider>
    </BrowserRouter>
  );
}

export default App;
