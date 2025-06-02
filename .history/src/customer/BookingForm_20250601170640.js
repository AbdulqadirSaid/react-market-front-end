import React, { useState } from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const markets = [
  {
    id: 1,
    title: 'Fresh Farmers Market',
    image: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    title: 'Organic Goods Market',
    image: 'https://images.unsplash.com/photo-1574226516831-e1dff420e38e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    title: 'Local Craft Market',
    image: 'https://images.unsplash.com/photo-1542838687-d7bb3a46d1a1?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    title: 'Artisan Food Market',
    image: 'https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    title: 'Vintage Market',
    image: 'https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=600&q=80',
  },
];

const ooki = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({
    marketName: '',
    marketSpaceType: '',
    quantity: '',
    startDate: '',
    endDate: '',
  });

  // Filter markets based on the search query
  const filteredMarkets = markets.filter(market =>
    market.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          <h2>Browse Market Dashboard</h2>
          <p>List of Available Markets</p>
          <input
            type="text"
            placeholder="Search for a market..."
            className="form-control mb-4"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          
          {/* Form for creating a new market */}
          <form onSubmit={handleSubmit} className="mb-4">
            <h4>Create New Market</h4>
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

          <div
            className="d-flex flex-wrap gap-3"
            style={{ justifyContent: 'start' }}
          >
            {filteredMarkets.map(market => (
              <div
                key={market.id}
                className="card"
                style={{
                  flex: '0 0 calc(33.33% - 1rem)', // Adjusted to fit 3 cards per row
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  marginBottom: '1rem',
                  borderRadius: '8px', // Added border radius for a softer look
                }}
              >
                <img
                  src={market.image}
                  className="card-img-top"
                  alt={market.title}
                  style={{ height: '150px', objectFit: 'cover', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} // Reduced height
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title" style={{ fontSize: '1rem' }}>{market.title}</h5> {/* Reduced font size */}
                  <button className="btn btn-primary mt-2">Book Now</button> {/* Adjusted margin */}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default BrowseMarket;
