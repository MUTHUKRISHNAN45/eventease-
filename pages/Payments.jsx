import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();

  const { event, seats, total } = location.state || {};

  if (!event) {
    return <h2 style={{ padding: 40 }}>No Payment Data ❌</h2>;
  }

  const handlePayment = () => {
    // Save booking in localStorage
    const oldBookings =
      JSON.parse(localStorage.getItem("myBookings")) || [];

    const newBooking = {
      id: Date.now(),
      title: event.title,
      image: event.image,
      date: event.date,
      time: event.time,
      location: event.location,
      seats,
      total,
    };

    localStorage.setItem(
      "myBookings",
      JSON.stringify([...oldBookings, newBooking])
    );

    // Success popup
    alert("🎉 Booking Successful!");

    // Go MyBookings
    navigate("/my-bookings");
  };

  return (
    <div style={{ padding: 20, textAlign: "center",paddingBottom:"160px"}}>
      <h2>Payment</h2>

      <img src={event.image} alt="" width="90%" />

      <h3>{event.title}</h3>
      <p>Seats: {seats}</p>
      <p>Total: ₹{total}</p>

      <button
        onClick={handlePayment}
        style={{
         
          padding: 12,
          width: "100%",
          background: "green",
          color: "white",
          border: "none",
          borderRadius: 8,
          fontSize: 16,
          
         
        }}
      >
        Pay Now
      </button>
    </div>
  );
}