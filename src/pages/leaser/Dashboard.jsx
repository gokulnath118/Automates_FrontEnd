import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BookingContext } from '../../context/BookingContext';
import './Leaser.css';

function Dashboard() {
  const { bookings } = useContext(BookingContext);

  const currentUserId = 'leaser1'; // Replace with actual user ID from auth

  // Accepted (approved) rides
  const acceptedRidesCount = bookings.filter(
    booking => booking.userId === currentUserId && booking.status === 'approved'
  ).length;

  // Past bookings (completed or rejected)
  const myPastBookings = bookings.filter(
    booking => booking.userId === currentUserId &&
    (booking.status === 'approved' || booking.status === 'cancelled')
  );

  const announcements = [
    '🔥 Summer Offer: 20% off on all bikes until May 10!',
    '🚗 New cars added in Bangalore and Coimbatore!',
  ];

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
          <h2>Welcome to your Dashboard</h2>
          <p>Track your bookings and stay informed.</p>
          <p><strong>✅ Total Rides Accepted:</strong> {acceptedRidesCount}</p>

          <section className="dashboard-section">
            <h3>📅 Your Past Bookings</h3>
            {myPastBookings.length === 0 ? (
              <p>No completed or rejected bookings yet.</p>
            ) : (
              <div className="rental-list">
                {myPastBookings.map(booking => (
                  <div key={booking.id} className="rental-card">
                    <p><strong>Vehicle:</strong> {booking.vehicleName}</p>
                    <p><strong>Date:</strong> {booking.date}</p>
                    <p><strong>Status:</strong> {booking.status}</p>
                  </div>
                ))}
              </div>
            )}
          </section>

          <section className="dashboard-section">
            <h3>📢 Announcements</h3>
            <ul className="announcement-list">
              {announcements.map((msg, index) => (
                <li key={index}>{msg}</li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <footer className="leaser-footer">
        <p>© 2025 AutoMates. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Dashboard;
