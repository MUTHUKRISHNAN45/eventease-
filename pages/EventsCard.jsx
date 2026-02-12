import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/EventsCard.css";

 export default function EventsCard({ event }) {
  const navigate = useNavigate();
  
  const handleBook = () => {
    console.log("Sending event:", event);   // debug
    navigate("/event-details", { state: { event } });
  };

  return (
    <div className="event-card">
      <img src={event.image} alt={event.title} />

      <h3 className="event-title">{event.title}</h3>

      {/* TIME + PRICE + LOCATION */}
      <div className="event-tags">
        <span className="tag time-tag">
          Date: {event.date}
        </span>

        <span className="tag price-tag">
          Price : ₹{event.price}
        </span>
      </div>

      <div className="event-location">
        📍 {event.location}
      </div>

      <button
       
 onClick={() => navigate(`/event-details/${event.id}`)}>
  Book Now

      </button>
    </div>
  );
}

