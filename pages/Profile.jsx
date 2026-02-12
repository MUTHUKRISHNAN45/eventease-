import React, { useState, useEffect } from "react";
import "../App.css";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user")) || {
    name: "Muthukrishnan",
    email: "muthuramesh226@gmail.com",
  };

  const [photo, setPhoto] = useState(
    localStorage.getItem("profilePhoto") ||
      "https://cdn-icons-png.flaticon.com/512/149/149071.png"
  );

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("myBookings")) || [];
    setBookings(data);
  }, []);

  // Change profile photo
  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPhoto(url);
      localStorage.setItem("profilePhoto", url);
    }
  };

  // Clear all bookings
  const clearBookings = () => {
    if (window.confirm("Delete all bookings?")) {
      localStorage.removeItem("myBookings");
      setBookings([]);
    }
  };

  const lastBooking = bookings[bookings.length - 1];

  return (
    <div className="page-card" style={{ textAlign: "center" }}>
      {/* Profile Photo */}
      <img
        src={photo}
        alt="profile"
        width="110"
        style={{ borderRadius: "50%", marginBottom: 10 }}
      />

      <br />
      <input
  type="file"
  id="fileUpload"
  accept="image/*"
  onChange={handlePhoto}
  style={{ display: "none" }}
/>

<label
  htmlFor="fileUpload"
  style={{
    display: "inline-block",
    padding: "8px 14px",
    background: "#9f8cb3",
    color: "white",
    borderRadius: "8px",
    cursor: "pointer",
    marginBottom: "10px"
  }}
>
  Choose Photo
</label>

      {/* User Info */}
      <h2>{user.name}</h2>
      <p>{user.email}</p>

      {/* Stats */}
      <hr />
      <h3>Total Bookings: {bookings.length}</h3>

      {lastBooking && (
        <div style={{ marginTop: 10 }}>
          <p><b>Last Event:</b> {lastBooking.title}</p>
          <p>📅 {lastBooking.date}</p>
        </div>
      )}

      {/* Buttons */}
      <div style={{ marginTop: 15 }}>
        <button
          onClick={clearBookings}
          style={{
            padding: 10,
            borderRadius: 8,
            border: "none",
            background: "#ff9800",
            color: "white",
            cursor: "pointer",
            marginRight: 10,
          }}
        >
          Clear Bookings
        </button>

        <button
          onClick={() => {
            localStorage.removeItem("user");
            alert("Logged out");
            window.location.href = "/";
          }}
          style={{
            padding: 10,
            borderRadius: 8,
            border: "none",
            background: "#ff4d4d",
            color: "white",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}