// src/context/BookingContext.js
import React, { createContext, useState } from 'react';

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  // Add a new booking
  const addBooking = (booking) => {
    setBookings((prevBookings) => [...prevBookings, booking]);
  };

  // Update booking by ID (used for approve/reject/cancel)
  const updateBooking = (id, updatedFields) => {
    setBookings((prevBookings) =>
      prevBookings.map((booking) =>
        booking.id === id ? { ...booking, ...updatedFields } : booking
      )
    );
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking, updateBooking }}>
      {children}
    </BookingContext.Provider>
  );
};
