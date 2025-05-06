import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { VehicleContext } from '../../context/VehicleContext';
import { BookingContext } from '../../context/BookingContext';
import './OwnerDashboard.css';

function DashboardLayout() {
  const { vehicles } = useContext(VehicleContext);
  const { bookings, setBookings } = useContext(BookingContext);

  const currentOwnerId = 'owner1'; // Replace with dynamic auth later
  
  const [myVehicles, setMyVehicles] = useState([]);

  // On load, filter vehicles belonging to the current owner
  useEffect(() => {
    const vehiclesForOwner = vehicles.filter(vehicle => vehicle.ownerId === currentOwnerId);
    setMyVehicles(vehiclesForOwner);
  }, [vehicles, currentOwnerId]);

  // Filter bookings for this owner's vehicles
  const myBookingRequests = bookings.filter(
    b => myVehicles.some(v => v.id === b.vehicleId) && b.status === 'pending'
  );

  // Stats
  const totalBookings = bookings.filter(
    b => myVehicles.some(v => v.id === b.vehicleId)
  ).length;

  const totalIncome = bookings
    .filter(b => myVehicles.some(v => v.id === b.vehicleId) && b.status === 'completed')
    .reduce((sum, b) => sum + (b.amount || 0), 0);

  // Booking status update
  const updateStatus = (id, status) => {
    const updated = bookings.map(b =>
      b.id === id ? { ...b, status } : b
    );
    setBookings(updated);
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
        <h2>Owner Dashboard</h2>

        <div className="dashboard-section">
          <h3>📊 Booking & Income Stats</h3>
          <p><strong>Total Bookings:</strong> {totalBookings}</p>
          <p><strong>Total Income:</strong> ₹{totalIncome}</p>
        </div>

        <div className="dashboard-section">
          <h3>🚗 Your Vehicles</h3>
          {myVehicles.length === 0 ? (
            <p>No vehicles found.</p>
          ) : (
            <ul>
              {myVehicles.map(vehicle => (
                <li key={vehicle.id}>
                  {vehicle.name} — <span className={vehicle.available ? 'available' : 'unavailable'}>
                    {vehicle.available ? 'available' : 'unavailable'}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="dashboard-section">
          <h3>🔔 Booking Requests</h3>
          {myBookingRequests.length === 0 ? (
            <p>No pending requests at the moment.</p>
          ) : (
            <ul>
              {myBookingRequests.map(req => (
                <li key={req.id}>
                  {req.userName} requested <strong>{req.vehicleName}</strong> on {req.date} — 
                  <button onClick={() => updateStatus(req.id, 'accepted')}>Accept</button>{' '}
                  <button onClick={() => updateStatus(req.id, 'rejected')}>Reject</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>

      <footer className="owner-footer">
        <p>© 2025 AutoMates. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default DashboardLayout;
