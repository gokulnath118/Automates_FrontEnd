// BookingOversight.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BookingContext } from '../../context/BookingContext';
import './OwnerDashboard.css';

function BookingOversight() {
  const { bookings, updateBooking } = useContext(BookingContext);

  const handleStatusChange = (id, newStatus) => {
    updateBooking(id, { status: newStatus });
  };

  const pendingBookings = bookings.filter((b) => b.status === 'waiting');
  const processedBookings = bookings.filter(
    (b) => b.status === 'approved' || b.status === 'rejected'
  );

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
        <div className="booking-oversight-section">
          <h2>Booking Oversight</h2>
          <p>📅 View who booked what and when</p>
          <p>✅ Approve or reject bookings (manual mode)</p>

          <section className="booking-section">
            <h3>Pending Bookings</h3>
            {pendingBookings.length === 0 ? (
              <p>No pending bookings.</p>
            ) : (
              pendingBookings.map((booking) => (
                <div key={booking.id} className="booking-card">
                  <h4>{booking.userName}</h4>
                  <p>
                    <strong>Vehicle:</strong> {booking.vehicleName}
                  </p>
                  <p>
                    <strong>Date:</strong> {booking.date}
                  </p>
                  <p>
                    <strong>Status:</strong> {booking.status}
                  </p>
                  <div className="booking-actions">
                    <button
                      className="approve-btn"
                      onClick={() => handleStatusChange(booking.id, 'approved')}
                    >
                      Approve
                    </button>
                    <button
                      className="reject-btn"
                      onClick={() => handleStatusChange(booking.id, 'rejected')}
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))
            )}
          </section>

          <section className="booking-section">
            <h3>Processed Bookings</h3>
            {processedBookings.length === 0 ? (
              <p>No processed bookings.</p>
            ) : (
              processedBookings.map((booking) => (
                <div key={booking.id} className="booking-card">
                  <h4>{booking.userName}</h4>
                  <p>
                    <strong>Vehicle:</strong> {booking.vehicleName}
                  </p>
                  <p>
                    <strong>Date:</strong> {booking.date}
                  </p>
                  <p>
                    <strong>Status:</strong> {booking.status}
                  </p>
                </div>
              ))
            )}
          </section>
        </div>
      </main>

      <footer className="owner-footer">
        <p>© 2025 AutoMates. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default BookingOversight;
