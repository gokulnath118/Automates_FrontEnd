import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { VehicleContext } from '../../context/VehicleContext';
import './OwnerDashboard.css';

function VehicleManagement() {
  const { vehicles, setVehicles } = useContext(VehicleContext);
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    type: 'car',
    location: '',
    rate: '',
    availability: 'available',
    image: '',
    mileage: '',
    description: '',
    imageFile: null
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const file = files[0];
      setFormData({ ...formData, imageFile: file, image: URL.createObjectURL(file) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setVehicles(vehicles.map(v => v.id === formData.id ? formData : v));
      setIsEditing(false);
    } else {
      setVehicles([...vehicles, { ...formData, id: Date.now() }]);
    }
    setFormData({
      id: null,
      name: '',
      type: 'car',
      location: '',
      rate: '',
      availability: 'available',
      image: '',
      mileage: '',
      description: '',
      imageFile: null
    });
  };

  const handleEdit = (vehicle) => {
    setFormData(vehicle);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setVehicles(vehicles.filter(v => v.id !== id));
  };

  return (
    <div className="owner-dashboard">
      <header className="owner-header">
        <h1 className="logo">AutoMates</h1>
        <nav className="owner-nav">
          <Link to="/owner/dashboard">Home</Link>
          <Link to="/owner/vehicles">Vehicle Management</Link>
          <Link to="/owner/bookings">Booking Oversight</Link>
          <Link to="/owner/profile">Profile</Link>
        </nav>
      </header>

      <main className="owner-content">
        <div className="vehicle-management-section">
          <h2>Vehicle Management</h2>

          <form className="vehicle-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Vehicle Name" required value={formData.name} onChange={handleChange} />
            <select name="type" value={formData.type} onChange={handleChange}>
              <option value="car">Car</option>
              <option value="bike">Bike</option>
            </select>
            <input type="text" name="location" placeholder="Location" required value={formData.location} onChange={handleChange} />
            <input type="number" name="rate" placeholder="Rental Rate (₹/day)" required value={formData.rate} onChange={handleChange} />
            <input type="text" name="mileage" placeholder="Mileage (km/l)" value={formData.mileage} onChange={handleChange} />
            
            {/* File Upload */}
            <input type="file" name="image" accept="image/*" onChange={handleChange} />
            
            <textarea name="description" placeholder="Vehicle Description" value={formData.description} onChange={handleChange} />
            <select name="availability" value={formData.availability} onChange={handleChange}>
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </select>
            <button type="submit">{isEditing ? 'Update' : 'Add'} Vehicle</button>
          </form>

          <div className="vehicle-list grid-view">
            {vehicles.length === 0 ? (
              <p>No vehicles added.</p>
            ) : (
              vehicles.map(vehicle => (
                <div key={vehicle.id} className="vehicle-card">
                  {vehicle.image && (
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                    />
                  )}
                  <h3>{vehicle.name}</h3>
                  <p>Type: {vehicle.type}</p>
                  <p>Location: {vehicle.location}</p>
                  <p>Rate: ₹{vehicle.rate} / day</p>
                  <p>Mileage: {vehicle.mileage} km/l</p>
                  <p>{vehicle.description}</p>
                  <p>Status: {vehicle.availability}</p>
                  <div className="vehicle-actions">
                    <button onClick={() => handleEdit(vehicle)}>Edit</button>
                    <button className="delete-btn" onClick={() => handleDelete(vehicle.id)}>Delete</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>

      <footer className="owner-footer">
        <p>© 2025 AutoMates. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default VehicleManagement;
