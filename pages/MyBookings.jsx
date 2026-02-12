import React, { useEffect, useState } from "react";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("myBookings")) || [];
    setBookings(data);
  }, []);

  if (bookings.length === 0) {
    return <h2 style={{ padding: 40 }}>No Bookings Yet</h2>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>My Bookings</h2>

      {bookings.map((b) => (
        <div
          key={b.id}
          style={{
            border: "1px solid #ddd",
            padding: 10,
            marginBottom: 10,
            borderRadius: 8,
          }}
        >
          <img src={b.image} alt="" width="100%" />

          <h3>{b.title}</h3>
          <p>📅 {b.date}</p>
          <p>⏰ {b.time}</p>
          <p>📍 {b.location}</p>
          <p>Seats: {b.seats}</p>
          <p>Total: ₹{b.total}</p>

          {/* Download Ticket */}
          <button
            onClick={() =>
              alert("Ticket Downloaded 🎟 (Demo)")
            }
            style={{
              padding: 8,
              background: "#1976d2",
              color: "white",
              border: "none",
              borderRadius: 6,
            }}
          >
            Download Ticket
          </button>
        </div>
      ))}
    </div>
  );
}