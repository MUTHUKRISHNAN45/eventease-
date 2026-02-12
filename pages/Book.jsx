import "../styles/Book.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function Book() {
  const { state: event } = useLocation();
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState([]);

  if (!event) {
    navigate("/home");
    return null;
  }

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else if (selectedSeats.length < 5) {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const total = selectedSeats.length * event.price;

  return (
    <div className="booking-page">
      <img src={event.image} alt={event.title} />
      <h2>{event.title}</h2>
      <p>{event.time}</p>

      <div className="seat-layout">
        {[...Array(event.totalSeats)].map((_, i) => {
          const seat = i + 1;
          return (
            <button
              key={seat}
              className={`seat ${
                selectedSeats.includes(seat) ? "selected" : ""
              }`}
              onClick={() => toggleSeat(seat)}
            >
              {seat}
            </button>
          );
        })}
      </div>

      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default Book;