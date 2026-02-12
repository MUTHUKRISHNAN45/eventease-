import React from "react";
import "../styles/Loading.css";


export default function Loading() {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <h2>EventEase</h2>
      <p>Loading...</p>
    </div>
  );
}