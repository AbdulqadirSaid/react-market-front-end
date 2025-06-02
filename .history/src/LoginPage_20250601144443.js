// src/components/Auth/LoginPage.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send these credentials to your backend for authentication
    // For demonstration, let's mock a login
    if (email === 'admin@example.com' && password === 'password') {
      login({ id: '1', name: 'Admin User', role: 'admin' });
      navigate('/admin-dashboard');
    } else if (email === 'customer@example.com' && password === 'password') {
      login({ id: '2', name: 'Customer User', role: 'customer' });
      navigate('/customer-dashboard');
    } else if (email === 'marketowner@example.com' && password === 'password') {
      login({ id: '3', name: 'Market Owner', role: 'marketowner' });
      navigate('/marketowner-dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card p-4" style={{ width: '400px' }}>
        <h2 className="card-title text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <p className="mt-3 text-center">
          * For demo: use `admin@example.com`, `customer@example.com`, or `marketowner@example.com` with password `password`
        </p>
      </div>
    </div>
  );
};

export default LoginPage;