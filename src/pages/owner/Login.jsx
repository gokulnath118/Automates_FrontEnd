import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Login.css';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === 'owner@gmail.com' && password === 'owner123') {
      navigate('/owner/dashboard');
    } else {
      document.getElementById('login-msg').textContent = 'Incorrect email or password';
    }
  };

  return (
    <div className="role-login-page">
      <header className="choice-header">
        <h1 className="logo">AutoMates</h1>
        <button onClick={() => navigate('/login')} className="back-btn">← Back</button>
      </header>

      <main className="login-main">
        <h2>Owner Login</h2>
        <p className="role-info">Owners can manage their vehicle listings and monitor bookings.</p>
        <form className="login-form" onSubmit={handleLogin}>
          <input type="email" name="email" placeholder="Owner Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <p className="no-account">
            Don't have an account? <span className="signup-link" onClick={() => navigate('/owner/signup')}>Sign Up</span>
          </p> 
          <p id="login-msg" className="login-message"></p>
        </form>
      </main>

      <footer className="choice-footer">
        <p>© 2025 AutoMates. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Login;
