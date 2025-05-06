import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './admin.css';

function VehicleOversight() {
  const navigate = useNavigate();
  const [vehicles, setVehicles] = useState([]);
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/admin/login');
    }

    // Mock data
    setVehicles([
      { id: 1, name: 'Honda Activa', type: 'bike' },
      { id: 2, name: 'Suzuki Gixxer', type: 'bike' },
      { id: 3, name: 'Maruti Swift', type: 'car' },
      { id: 4, name: 'Hyundai Creta', type: 'car' },
    ]);
  }, [navigate]);

  const handleDelete = (id) => {
    setVehicles(prev => prev.filter(vehicle => vehicle.id !== id));
  };

  const filteredVehicles = selectedType === 'all'
    ? vehicles
    : vehicles.filter(v => v.type === selectedType);

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

      <div className="admin-vehicle-oversight">
        <h3>Vehicle Oversight</h3>

        <div className="admin-select-type">
          <label>Filter by Type: </label>
          <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
            <option value="all">All</option>
            <option value="bike">Bike</option>
            <option value="car">Car</option>
          </select>
        </div>

        <div className="admin-vehicle-list">
          {filteredVehicles.map(vehicle => (
            <div key={vehicle.id} className="admin-vehicle-item">
              <p><strong>ID:</strong> {vehicle.id}</p>
              <p><strong>Name:</strong> {vehicle.name}</p>
              <p><strong>Type:</strong> {vehicle.type}</p>
              <button onClick={() => handleDelete(vehicle.id)}>Delete</button>
            </div>
          ))}
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

export default VehicleOversight;
