import React,{useState,useEffect} from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import MyBookings from "./pages/MyBookings";
import Profile from "./pages/Profile";
import EventDetails from "./pages/EventDetails";
import Payment from "./pages/Payments";
import "./App.css";
import BottomNav from "./components/BottomNav";
import Loading from "./pages/Loading";


function App() {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  setTimeout(() => {
    setLoading(false);
  }, 2500); // 2.5 seconds loading
}, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home />} />
        
        <Route path="/profile" element={<Profile />} />
        <Route path="/event-details/:id" element={<EventDetails />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/my-bookings" element={<MyBookings />} />

        
      </Routes>
      <BottomNav/>
    </BrowserRouter>
  );
}

export default App;