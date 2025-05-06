import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BookingContext } from '../../context/BookingContext';
import './Leaser.css';

function BookingManagement() {
  const { bookings, updateBooking } = useContext(BookingContext);

  const handleCancel = (id) => {
    updateBooking(id, { status: 'cancelled' });
  };

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
          <h2>Your Bookings</h2>
          <section className="booking-section">
            {bookings.length === 0 ? (
              <p>No bookings found.</p>
            ) : (
              bookings.map((booking) => (
                <div key={booking.id} className="booking-card">
                  <p><strong>Vehicle:</strong> {booking.vehicleName}</p>
                  <p><strong>Date:</strong> {booking.date}</p>
                  <p><strong>Status:</strong> {booking.status}</p>

                  {/* Only show cancel button if status is pending */}
                  {booking.status === 'waiting' && (
                    <button className="cancel-btn" onClick={() => handleCancel(booking.id)}>
                      Cancel Request
                    </button>
                  )}
                </div>
              ))
            )}
          </section>
        </div>
      </main>

      <footer className="leaser-footer">
        <p>© 2025 AutoMates. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default BookingManagement;
