import React, { useState } from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

import { NavLink } from 'react-router-dom';

// ***************************************************************
// MUHIMU: Hakikisha njia hizi ni sahihi kulingana na mahali picha zako zilipo!
// Kama picha zako ziko ndani ya 'src/assets/' au 'src/images/', tumia import kama hivi:
import JumbiImage from '../imagesJumbi-Image.jpg'; // Badilisha path kama inavyohitajika
import KwereImage from '../Kwere_Image.jpg'; // Badilisha path kama inavyohitajika
// ***************************************************************

const markets = [
  {
    id: 1,
    title: 'Jumbi Market',
    // Tumia variable ya picha uliyoi-import
    image: JumbiImage,
    // AU kama picha zako ziko kwenye 'public' folder: '/Jumbi-Image.jpg',
  },
  {
    id: 2,
    title: 'Mwanakwerekwe Market',
    // Tumia variable ya picha uliyoi-import
    image: KwereImage,
    // AU kama picha zako ziko kwenye 'public' folder: '/Kwere_Image.jpg',
  },
];

const BrowseMarket = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter markets based on the search query
  const filteredMarkets = markets.filter(market =>
    market.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                  src={market.image} // Sasa inatumia picha zako
                  className="card-img-top"
                  alt={market.title}
                  style={{ height: '150px', objectFit: 'cover', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} // Reduced height
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title" style={{ fontSize: '1rem' }}>{market.title}</h5> {/* Reduced font size */}
                  <NavLink to="/booking" className="btn btn-primary mt-2">Book Now</NavLink> {/* Kitufe cha Booking kipo */}
                </div>
              </div>
            ))}
            {filteredMarkets.length === 0 && (
              <p className="text-muted">No markets found matching your search.</p>
            )}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default BrowseMarket;