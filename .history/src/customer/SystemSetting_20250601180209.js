 import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const SystemSettings = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    address: '',
    password: '',
    image: null, // For file input
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('System Settings Submitted:', formData);
    // Here you would typically send formData to an API
    alert('Settings saved!');
    // Optional: Reset form after submission if needed
    // setFormData({
    //   name: '',
    //   username: '',
    //   email: '',
    //   address: '',
    //   password: '',
    //   image: null,
    // });
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <main className="flex-grow-1 p-4" style={{ backgroundColor: '#f8f9fa' }}>
          <h2>System Settings</h2>
          <p>Update your system configuration and personal details here.</p>

          <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded bg-white">
            <h4>General Settings</h4>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="address" className="form-label">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="form-control"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="image" className="form-label">Profile Image</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  className="form-control"
                  onChange={handleChange}
                  accept="image/*" // Restrict to image files
                />
              </div>
            </div>

            <div className="d-flex justify-content-end mt-4">
              <button type="submit" className="btn btn-primary">Save Settings</button>
            </div>
          </form>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default SystemSettings;