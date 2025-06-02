import React from 'react';

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

const BrowseMarket = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <main className="flex-grow-1 p-4" style={{ backgroundColor: '#f8f9fa' }}>
          <h2>BrowseMarket Dashboard</h2>
          <p>U explore.</p>
          <div
            className="d-flex flex-wrap gap-4 mt-4"
            style={{ justifyContent: 'start' }}
          >
            {markets.map(market => (
              <div
                key={market.id}
                className="card"
                style={{
                  flex: '0 0 calc(50% - 1rem)',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  marginBottom: '1rem',
                }}
              >
                <img
                  src={market.image}
                  className="card-img-top"
                  alt={market.title}
                  style={{ height: '180px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{market.title}</h5>
                  <button className="btn btn-primary mt-3">Book Now</button>
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

