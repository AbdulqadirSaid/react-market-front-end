import React, { useState } from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const BrowseMarket = () => {
  // Removed searchQuery state and related filtering
  const [formData, setFormData] = useState({
    marketName: '',
    marketSpaceType: '',
    quantity: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      marketName: '',
      marketSpaceType: '',
      quantity: '',
      startDate: '',
      endDate: '',
    });
  };

  const handleCancel = () => {
    // Reset form on cancel
    setFormData({
      marketName: '',
      marketSpaceType: '',
      quantity: '',
      startDate: '',
      endDate: '',
    });
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <main className="flex-grow-1 p-4" style={{ backgroundColor: '#f8f9fa' }}>
          <h2>Booking Dashboard</h2>
          {/* Removed the paragraph about "List of Available Markets" as there's no list now */}
          {/* Removed the search input field */}

          {/* Form for creating a new market */}
          <form onSubmit={handleSubmit} className="mb-4">
            <h4>Please fill all required</h4>
            <div className="mb-3">
              <label htmlFor="marketName" className="form-label">Market Name</label>
              <input
                type="text"
                id="marketName"
                name="marketName"
                className="form-control"
                value={formData.marketName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="marketSpaceType" className="form-label">Market Space Type</label>
              <input
                type="text"
                id="marketSpaceType"
                name="marketSpaceType"
                className="form-control"
                value={formData.marketSpaceType}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">Quantity</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                className="form-control"
                value={formData.quantity}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="startDate" className="form-label">Start Date</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                className="form-control"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="endDate" className="form-label">End Date</label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                className="form-control"
                value={formData.endDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-flex justify-content-between">
              <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default BrowseMarket;