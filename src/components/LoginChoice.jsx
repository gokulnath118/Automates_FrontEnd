import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './ChoicePage.css';

function LoginChoice() {
  const navigate = useNavigate();

  return (
    <div className='LogChoice'>
      {/* Header */}
      <header className="choice-header">
        <h1 className="logo">AutoMates</h1>
        <button className="back-btn" onClick={() => navigate('/')}>← Back</button>
      </header>

      {/* Content */}
      <main className="choice-container">
        <h2>Login As</h2>
        <div className="roles">
          <Link to="/owner/login" className="role-card-link">
            <div className="role-card">
              <h3>Owner</h3>
              <p>Manage your vehicles, bookings, and rental earnings.</p>
            </div>
          </Link>
          <Link to="/leaser/login" className="role-card-link">
            <div className="role-card">
              <h3>Leaser</h3>
              <p>Access and manage your rentals and ride history.</p>
            </div>
          </Link>
          <Link to="/admin/login" className="role-card-link">
            <div className="role-card">
              <h3>Admin</h3>
              <p>Monitor user activity, manage content, and analyze platform data.</p>
            </div>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="choice-footer">
        <p>&copy; 2025 AutoMates. All rights reserved.</p>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default LoginChoice;
