// src/customer/BookingSpaces.js
import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

// Data ya mfano ya nafasi za masoko
// Kila nafasi ina 'marketId' ili kuunganisha na soko husika
const allMarketSpaces = [
  { id: 101, marketId: 1, name: 'Stall J-A1', size: '10x10 ft', price: 50000, description: 'Nafasi nzuri karibu na lango kuu la Jumbi.', available: true },
  { id: 102, marketId: 1, name: 'Stall J-B2', size: '8x10 ft', price: 45000, description: 'Inafaa kwa bidhaa za chakula Jumbi.', available: true },
  { id: 103, marketId: 1, name: 'Stall J-C3', size: '12x12 ft', price: 60000, description: 'Nafasi kubwa Jumbi, tayari kwa mapambo.', available: false }, // Haijapatikana
  { id: 201, marketId: 2, name: 'Stall M-X1', size: '10x10 ft', price: 55000, description: 'Nafasi ya kwanza Mwanakwerekwe, karibu na barabara.', available: true },
  { id: 202, marketId: 2, name: 'Stall M-Y2', size: '8x8 ft', price: 40000, description: 'Nafasi ndogo Mwanakwerekwe, bei nafuu.', available: true },
  { id: 203, marketId: 2, name: 'Stall M-Z3', size: '15x10 ft', price: 70000, description: 'Nafasi pana Mwanakwerekwe, inafaa kwa biashara kubwa.', available: true },
];

const BookingSpaces = () => {
  const { marketId } = useParams(); // Tunapokea marketId kutoka URL
  const [spaces, setSpaces] = useState([]);
  const [marketName, setMarketName] = useState('');

  // Tumia useEffect kuchuja nafasi zinazohusiana na marketId
  useEffect(() => {
    const selectedMarketId = parseInt(marketId); // Convert string to integer
    const filtered = allMarketSpaces.filter(space => space.marketId === selectedMarketId);
    setSpaces(filtered);

    // Pata jina la soko kwa display
    // Tutahitaji pia data ya masoko hapa ili kupata jina
    const market = [
      { id: 1, title: 'Jumbi Market' },
      { id: 2, title: 'Mwanakwerekwe Market' },
    ].find(m => m.id === selectedMarketId);
    setMarketName(market ? market.title : 'Selected Market');

  }, [marketId]); // Run this effect whenever marketId changes

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <main className="flex-grow-1 p-4" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container py-4">
            <h2 className="mb-4 text-center text-primary fw-bold">Nafasi za Soko: {marketName}</h2>
            <p className="lead text-center text-muted mb-5">
              Chagua nafasi inayokufaa na uendelee na uhifadhi.
            </p>

            <NavLink to="/browse-market" className="btn btn-secondary mb-4">
              <i className="bi bi-arrow-left-circle-fill me-2"></i> Rudi Kwenye Masoko
            </NavLink>

            {spaces.length > 0 ? (
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {spaces.map(space => (
                  <div key={space.id} className="col animate__animated animate__fadeInUp">
                    <div
                      className="card h-100 shadow-sm border-0"
                      style={{ borderRadius: '12px', overflow: 'hidden' }}
                    >
                      <div className="card-body d-flex flex-column justify-content-between p-3">
                        <h5 className="card-title fw-bold mb-2">{space.name} ({space.size})</h5>
                        <p className="card-text text-muted mb-1">{space.description}</p>
                        <p className="card-text mb-3">
                          <strong className="text-success">Bei: TZS {space.price.toLocaleString()}</strong>
                        </p>
                        {space.available ? (
                          <NavLink
                            to={`/confirm-booking/${space.id}`} // Hii itakuwa ni route ya kuhifadhi nafasi halisi
                            className="btn btn-success btn-lg mt-auto fw-bold"
                            style={{ borderRadius: '8px' }}
                          >
                            Hifadhi Sasa
                          </NavLink>
                        ) : (
                          <button className="btn btn-warning btn-lg mt-auto fw-bold" disabled>
                            Haijapatikana
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center mt-5">
                <p className="fs-4 text-warning">Hakuna nafasi zilizopatikana kwa soko hili kwa sasa.</p>
              </div>
            )}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default BookingSpaces;