import React, { useState } from 'react';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Basic validation (you'll replace this with actual authentication)
    if (email === 'user@example.com' && password === 'password123') {
      alert('Login successful!');
      setError(''); // Clear any previous errors
      // In a real application, you'd typically redirect or set a user context here
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="text-center mb-4">
          <img src="path/to/your/logo.png" alt="Logo" className="rounded-logo" />
          <h5 className="card-title mt-2">Welcome to New Market Management System</h5>
        </div>
        <form onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger" role="alert">{error}</div>}
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              placeholder="name@example.com"
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
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="mt-3 text-center">
          Don't have an account? <a href="#">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
