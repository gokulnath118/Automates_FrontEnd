import React, { useContext } from 'react';
import { BookingContext } from '../../context/BookingContext';

const BookVehicle = ({ vehicle, currentUser }) => {
  const { addBooking } = useContext(BookingContext);

  const handleBooking = () => {
    const newBooking = {
      id: Date.now(),
      userName: currentUser,
      vehicleName: vehicle.name,
      date: new Date().toISOString().split('T')[0],
      status: 'pending'  
    };
    addBooking(newBooking);
    alert(`Booking request sent for ${vehicle.name}. Waiting for approval.`);
  };

  return (
    <button onClick={handleBooking}>
      Book {vehicle.name}
    </button>
  );
};

export default BookVehicle;
