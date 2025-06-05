import React, { useState } from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

import { NavLink } from 'react-router-dom';


import JumbiImage from '../images/Jumbi-Image.jpg'; 
import KwereImage from '..//images/Kwere_Image.jpg'; 

const markets = [
  {
    id: 1,
    title: 'Jumbi Market',
    image: JumbiImage, 
  },
  {
    id: 2,
    title: 'Mwanakwerekwe Market',
    image: KwereImage, 
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
        <main className="flex-grow-1" style={{ backgroundColor: '#f8f9fa' }}>

          {/* NEW: Hero Section Kwenye Browse Market */}
          <section
            className="py-5 text-center text-white position-relative overflow-hidden animate__animated animate__fadeIn" // Added fade-in animation
            style={{
              backgroundImage: `url(${J})`, // Tumia picha ya Jumbi kwa background ya hero
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '350px', // Urefu mkubwa zaidi kwa muonekano bora
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              // Overlay nyeusi kidogo kwa kusomeka vizuri
              boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.4)',
            }}
          >
            <div className="container px-2">
              <h1 className="display-4 fw-bold mb-3 animate__animated animate__fadeInDown" // Kichwa kikubwa na chenye animation
                style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)", letterSpacing: "0.5px" }}
              >
                Gundua Masoko Bora Karibu Nawe!
              </h1>
              <p className="lead fs-5 mb-4 animate__animated animate__fadeInUp" // Maelezo mafupi na animation
                style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.7)", maxWidth: "700px" }}
              >
                Chunguza masoko yenye kupendeza, pata bidhaa za kipekee, na hifadhi vibanda vyako kwa urahisi.
              </p>
            </div>
          </section>

          {/* Sehemu ya Maudhui Mengine - Sasa ndani ya kontena la Bootstrap */}
          <div className="container py-5">
            <h2 className="mb-4 text-center text-primary fw-bold animate__animated animate__fadeInUp">Masoko Yanayopatikana</h2>
            <p className="lead text-center text-muted mb-5 animate__animated animate__fadeInUp" style={{ animationDelay: '0.2s' }}>
              Tafuta soko lako lijalo au hazina ya bidhaa za ndani.
            </p>

            {/* Search Bar iliyoboreshwa */}
            <input
              type="text"
              placeholder="Tafuta soko kwa jina..."
              className="form-control form-control-lg mb-5 shadow-sm animate__animated animate__zoomIn" // Ukubwa mkubwa, kivuli, na animation
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            {/* Gridi ya Kadi za Masoko - Responsive na Hover Effect */}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center"> {/* Gridi ya Bootstrap kwa responsiveness */}
              {filteredMarkets.length > 0 ? (
                filteredMarkets.map((market, index) => (
                  <div key={market.id} className="col animate__animated animate__fadeInUp" style={{ animationDelay: `${0.1 * index}s` }}>
                    <div
                      className="card h-100 shadow-sm border-0 market-card-hover" // Class mpya kwa hover effect
                      style={{ borderRadius: '12px', overflow: 'hidden' }} // Border-radius kubwa kidogo
                    >
                      <img
                        src={market.image}
                        className="card-img-top"
                        alt={market.title}
                        style={{ height: '220px', objectFit: 'cover' }} // Urefu mkubwa zaidi kwa picha
                      />
                      <div className="card-body d-flex flex-column justify-content-between p-3">
                        <h5 className="card-title fw-bold mb-2">{market.title}</h5>
                        <NavLink
                          to="/booking"
                          className="btn btn-primary btn-lg mt-auto fw-bold" // Kitufe kikubwa na cheye nguvu
                          style={{ borderRadius: '8px' }}
                        >
                          Book Now <i className="bi bi-arrow-right-circle-fill ms-1"></i>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12 text-center">
                  <p className="text-muted fs-5">Hakuna soko lililopatikana linalolingana na utafutaji wako. Jaribu jina tofauti.</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default BrowseMarket;