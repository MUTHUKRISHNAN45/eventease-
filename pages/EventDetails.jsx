import React, { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import events from "../data/events";
import "../styles/EventDetails.css";

export default function EventDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  // Get event from state OR find using id
  let event = location.state?.event;
  if (!event && id) {
    event = events.find(e => String(e.id) === String(id));
  }

  // Seats state
  const [seats, setSeats] = useState(1);

  // If event not found
  if (!event) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>No Event Data ❌</h2>
        <button onClick={() => navigate("/home")}>Go Back</button>
      </div>
    );
  }

  // Total price (safe)
  const total = seats * (event?.price || 0);

  return (
    <div className="details-page">

      {/* Event Image */}
      <img
        className="details-img"
        src={event?.image}
        alt={event?.title}
      />

      {/* Title */}
      <h2>{event?.title}</h2>

      {/* Info */}
      <div className="info-card">
        <p>📅 {event?.date}</p>
        <p>⏰ {event?.time}</p>
        <p>📍 {event?.location}</p>
      </div>

      {/* Seat Selection */}
      <div className="box">
        <h4>Select Seats</h4>

        <div className="seat-row">
          <button
            onClick={() => setSeats(seats - 1)}
            disabled={seats <= 1}
          >
            -
          </button>

          <span className="seat-count">{seats}</span>

          <button
            onClick={() => setSeats(seats + 1)}
            disabled={seats >= 5}
          >
            +
          </button>
        </div>

        <p className="limit">(Max 5 seats)</p>
      </div>

      {/* Total */}
      <h3 className="total">Total: ₹{total}</h3>

      {/* Proceed */}
      <button
  className="confirm-btn"
  onClick={() =>
    navigate("/payment", {
      state: {
        event,
        seats,
        total,
      },
    })
  }
>
  Proceed to Pay
</button>

    </div>
  );
}