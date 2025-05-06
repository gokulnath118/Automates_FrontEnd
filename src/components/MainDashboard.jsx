import React from 'react';
import { Link } from 'react-router-dom';
import './MainDashboard.css';

function MainDashboard() {
  return (
    <div className='MainDashboard'>
      {/* HEADER */}
      <header className="header">
        <h1 className="logo">AutoMates</h1>
        <nav>
          <Link to="/signup" className="nav-btn">Signup</Link>
          <Link to="/login" className="nav-btn">Login</Link>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="main-dashboard">
        <h2>Welcome to AutoMates</h2>
        <p>
          AutoMates is a user-friendly platform designed to simplify the process of renting and leasing vehicles. 
          Whether you're a vehicle owner looking to earn or a rider in search of your perfect ride, AutoMates 
          brings everything you need under one digital roof.
        </p>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>&copy; 2025 AutoMates. All rights reserved.</p>
        <div className="social-links">
          <a href="#" target="_blank" rel="noreferrer">Facebook</a>
          <a href="#" target="_blank" rel="noreferrer">Twitter</a>
          <a href="#" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default MainDashboard;
