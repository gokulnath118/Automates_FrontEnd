import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Signup.css';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobile: '',
    countryCode: '',
    country: '',
    state: '',
    district: '',
    pinCode: '',
    gender: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/leaser/dashboard');
  };

  return (
    <div className="signup-page">
      <header className="header">
        <h1 className="app-title">AutoMates</h1>
        <button onClick={() => navigate('/signup')} className="back-button">← Back</button>
      </header>

      <main className="signup-container slideUp">
        <h2>Leaser Signup</h2>
        <p className="role-info">
          Leasers can browse vehicles, book rentals, and track ride history seamlessly.
        </p>
        <form onSubmit={handleSubmit} className="signup-form">
        <input type="text" placeholder="Name" required onChange={e => setFormData({ ...formData, name: e.target.value })} />
        <select required onChange={e => setFormData({ ...formData, gender: e.target.value })}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input type="email" placeholder="Email" required onChange={e => setFormData({ ...formData, email: e.target.value })} />
        <input type="password" placeholder="Password" required onChange={e => setFormData({ ...formData, password: e.target.value })} />
        <input type="text" placeholder="Country Code (e.g. +91)" required onChange={e => setFormData({ ...formData, countryCode: e.target.value })} />
        <input type="number" placeholder="Mobile Number" required onChange={e => setFormData({ ...formData, mobile: e.target.value })} />
        <input type="text" placeholder="Country" required onChange={e => setFormData({ ...formData, country: e.target.value })} />
        <input type="text" placeholder="State" required onChange={e => setFormData({ ...formData, state: e.target.value })} />
        <input type="text" placeholder="District" required onChange={e => setFormData({ ...formData, district: e.target.value })} />
        <input type="text" placeholder="Pin Code" required onChange={e => setFormData({ ...formData, pinCode: e.target.value })} />

        
          <button type="submit">Sign Up</button>
          <p className="already-account">
            Already have an account? <span className="login-link" onClick={() => navigate('/leaser/login')}>Login</span>
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
