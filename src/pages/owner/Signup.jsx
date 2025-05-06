import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Signup.css';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/owner/dashboard');
  };

  return (
    <div className="signup-page">
      <header className="header">
        <h1 className="app-title">AutoMates</h1>
        <button onClick={() => navigate('/signup')} className="back-button">← Back</button>
      </header>

      <main className="signup-container slideUp">
        <h2>Owner Signup</h2>
        <p className="role-info">
          Owners can list their vehicles for rent, manage bookings, and track earnings easily.
        </p>
        <form onSubmit={handleSubmit} className="signup-form">
          <input type="text" placeholder="Name" required onChange={e => setFormData({ ...formData, name: e.target.value })} />
          <input type="email" placeholder="Email" required onChange={e => setFormData({ ...formData, email: e.target.value })} />
          <input type="password" placeholder="Password" required onChange={e => setFormData({ ...formData, password: e.target.value })} />
          <button type="submit">Sign Up</button>
          <p className="already-account">
            Already have an account? <span className="login-link" onClick={() => navigate('/owner/login')}>Login</span>
          </p>

        </form>
      </main>

      <footer className="footer">
        <p>© 2025 AutoMates. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default Signup;
