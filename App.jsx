import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="logo">
            <img src="/logo.png" alt="Logo" className="logo-image" />
            <span className="logo-name">MyWebsite</span>
          </div>
          <nav className="nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/aboutus" className="nav-link">About Us</Link>
            <Link to="/contactus" className="nav-link">Contact Us</Link>
          </nav>
        </header>
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/contactus" element={<Contactus />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
