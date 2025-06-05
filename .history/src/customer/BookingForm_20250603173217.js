import React, { useState } from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const BrowseMarket = () => {
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
    console.log('Form submitted:', formData);
    setFormData({
      marketName: '',
      marketSpaceType: '',
      quantity: '',
      startDate: '',
      endDate: '',
    });
  };

  const handleCancel = () => {
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
          <form onSubmit={handleSubmit} className="mb-4">
            <h4>Please fill all required</h4>
            <div className="row mb-3"> {/* Use row for horizontal alignment */}
              <div className="col-md-6"> {/* First column, takes half width on medium screens and up */}
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
              <div className="col-md-6"> {/* Second column, takes half width on medium screens and up */}
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
            </div>
            <div className="row mb-3"> {/* New row for the next two fields */}
              <div className="col-md-6">
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
              <div className="col-md-6">
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
            </div>
            <div className="row mb-3"> {/* New row for the last field (you can add another if needed) */}
              <div className="col-md-6">
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

export default Book;