import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './admin.css';

function Analytics() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalBookings: 250,
    peakArea: 'Coimbatore',
    totalRevenue: '₹1,20,000',
    preferredVehicle: 'Bike',
  });

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/admin/login');
    }

    // If using API, replace the hardcoded values with fetch calls here
  }, [navigate]);

  return (
    <div className="admin-container">
      <header className="admin-header">
        <div className="admin-header-content">
          <h1 className="admin-logo">AutoMates</h1>
          <nav className="admin-nav-links">
            <button onClick={() => navigate('/admin/dashboard')}>Home</button>
            <button onClick={() => navigate('/admin/users')}>User Management</button>
            <button onClick={() => navigate('/admin/vehicles')}>Vehicle Oversight</button>
            <button onClick={() => navigate('/admin/analytics')}>Analytics</button>
            <button onClick={() => navigate('/')}>Logout</button>
          </nav>
        </div>
      </header>

      <div className="admin-analytics-content">
        <h3>Platform Analytics Overview</h3>
        <div className="admin-analytics-stats">
          <div className="admin-analytics-card">
            <h4>Total Bookings</h4>
            <p>{stats.totalBookings}</p>
          </div>
          <div className="admin-analytics-card">
            <h4>Peak Booking Area</h4>
            <p>{stats.peakArea}</p>
          </div>
          <div className="admin-analytics-card">
            <h4>Total Revenue</h4>
            <p>{stats.totalRevenue}</p>
          </div>
          <div className="admin-analytics-card">
            <h4>Preferred Vehicle Type</h4>
            <p>{stats.preferredVehicle}</p>
          </div>
        </div>
      </div>

      <footer className="admin-footer">
        <div className="admin-footer-content">
          <p>&copy; 2025 AutoMates. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Analytics;
