import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Login.css';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === 'leaser@gmail.com' && password === 'leaser123') {
      navigate('/leaser/dashboard');
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
        <h2>Leaser Login</h2>
        <p className="role-info">Leasers can browse and book vehicles, and manage their rentals.</p>
        <form className="login-form" onSubmit={handleLogin}>
          <input type="email" name="email" placeholder="Leaser Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <p className="already-account">
            Already have an account? <span className="login-link" onClick={() => navigate('/leaser/Signup')}>Sign Up</span>
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
