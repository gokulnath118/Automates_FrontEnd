import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ChoicePage.css';

function SignupChoice() {
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
        <h2>Signup As</h2>
        <div className="roles">
          <div className="role-card" onClick={() => navigate('/owner/signup')}>
            <h3>Owner</h3>
            <p>Register your vehicles and earn by renting them out to trusted users.</p>
          </div>
          <div className="role-card" onClick={() => navigate('/leaser/signup')}>
            <h3>Leaser</h3>
            <p>Find and rent your perfect ride for work, travel, or adventure.</p>
          </div>
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

export default SignupChoice;
