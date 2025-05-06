import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './admin.css'; // Make sure to import the stylesheet

function AdminDashboard() {
  const navigate = useNavigate();
  const [totalRentals, setTotalRentals] = useState(0);
  const [totalLeasers, setTotalLeasers] = useState(0);
  const [totalOwners, setTotalOwners] = useState(0);
  const [totalVehicles, setTotalVehicles] = useState(0);

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/admin/login');
    }

    // Mock data or API calls to fetch admin stats
    setTotalRentals(150); // Example value
    setTotalLeasers(50); // Example value
    setTotalOwners(30); // Example value
    setTotalVehicles(120); // Example value
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

      <div className="admin-dashboard-stats">
        <h3>Admin Dashboard Stats</h3>
        <div className="admin-stats">
          <div className="admin-stat-item">
            <h4>Total Rentals</h4>
            <p>{totalRentals}</p>
          </div>
          <div className="admin-stat-item">
            <h4>Total Leasers</h4>
            <p>{totalLeasers}</p>
          </div>
          <div className="admin-stat-item">
            <h4>Total Owners</h4>
            <p>{totalOwners}</p>
          </div>
          <div className="admin-stat-item">
            <h4>Total Vehicles</h4>
            <p>{totalVehicles}</p>
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

export default AdminDashboard;
