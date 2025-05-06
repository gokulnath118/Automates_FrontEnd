import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { VehicleContext } from '../../context/VehicleContext';
import { BookingContext } from '../../context/BookingContext';
import './Leaser.css';

function SearchBooking() {
  const { vehicles } = useContext(VehicleContext);
  const { addBooking } = useContext(BookingContext);

  const [filters, setFilters] = useState({ location: '', date: '', type: '' });
  const [selectedDate, setSelectedDate] = useState('');
  const [bookingMessage, setBookingMessage] = useState('');

  const handleInputChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleBooking = (vehicle) => {
    if (!selectedDate) {
      setBookingMessage('❌ Please select a date before booking.');
      return;
    }

    const newBooking = {
      id: Date.now(), // unique booking ID
      vehicleId: vehicle.id,
      vehicleName: vehicle.name,
      userId: 'leaser1', // replace with real user ID if integrated
      userName: 'Leaser One', // optional: use for display in owner view
      date: selectedDate,
      status: 'waiting', // changed from 'booked' to 'waiting'
    };

    addBooking(newBooking);
    setBookingMessage(`✅ Booking request sent for ${vehicle.name} on ${selectedDate}`);
    setTimeout(() => setBookingMessage(''), 3000);
  };

  const filteredVehicles = vehicles.filter(vehicle => {
    return (
      vehicle.availability === 'available' &&
      (filters.location === '' || vehicle.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (filters.type === '' || vehicle.type === filters.type)
    );
  });

  return (
    <div className="leaser-dashboard">
      <header className="leaser-header">
        <h1 className="logo">AutoMates</h1>
        <nav className="leaser-nav">
          <Link to="/leaser/dashboard">Home</Link>
          <Link to="/leaser/vehicles">Search & Booking</Link>
          <Link to="/leaser/bookings">Bookings</Link>
          <Link to="/leaser/profile">Profile</Link>
        </nav>
      </header>

      <main className="leaser-content">
        <div>
          <h2>Search and Book Vehicles</h2>
          <p>Search by location, date, or type, and send booking requests.</p>

          <div className="filters">
            <input type="text" name="location" placeholder="Enter location" value={filters.location} onChange={handleInputChange} />
            <select name="type" value={filters.type} onChange={handleInputChange}>
              <option value="">All Types</option>
              <option value="bike">Bike</option>
              <option value="car">Car</option>
            </select>
            <input
              type="date"
              name="date"
              value={filters.date}
              onChange={(e) => {
                handleInputChange(e);
                setSelectedDate(e.target.value);
              }}
            />
          </div>

          <div className="vehicle-list">
            {filteredVehicles.length === 0 ? (
              <p>No vehicles match your criteria.</p>
            ) : (
              filteredVehicles.map(vehicle => (
                <div key={vehicle.id} className="vehicle-card">
                  <img src={vehicle.image} alt={vehicle.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                  <h4>{vehicle.name}</h4>
                  <p><strong>Type:</strong> {vehicle.type}</p>
                  <p><strong>Location:</strong> {vehicle.location}</p>
                  <p><strong>Mileage:</strong> {vehicle.mileage} km/l</p>
                  <p><strong>Price/Day:</strong> ₹{vehicle.rate}</p>
                  <p>{vehicle.description}</p>
                  <button onClick={() => handleBooking(vehicle)}>Send Booking Request</button>
                </div>
              ))
            )}
          </div>

          {bookingMessage && <p className="booking-message">{bookingMessage}</p>}
        </div>
      </main>

      <footer className="leaser-footer">
        <p>© 2025 AutoMates. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default SearchBooking;
