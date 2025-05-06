import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resultMessage, setResultMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const adminEmail = 'gokuladmin@automates.com';
    const adminPassword = '111';

    if (email === adminEmail && password === adminPassword) {
      localStorage.setItem('isAdmin', 'true');  
      navigate('/admin/dashboard');
    } else {
      setResultMessage('Incorrect username or password');
    }
  };

  return (
    <div className="admin-login-page">
      <header className="header">
        <h1 className="app-title">AutoMates</h1>
        <button onClick={() => navigate('/login')} className="back-button">← Back</button>
      </header>

      <main className="admin-login-container slideUp">
        <h2>Admin Login</h2>
        <p className="role-info">Admins oversee all operations including users, vehicles, bookings, and analytics.</p>

        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          {resultMessage && <p className="result">{resultMessage}</p>}
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

export default Login;
