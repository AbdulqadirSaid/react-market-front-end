import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const CustomerDashboard = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <main className="flex-grow-1 p-4" style={{ backgroundColor: '#f8f9fa' }}>
          <h2 className="mb-4 text-center text-primary" style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
            Explore Vibrant Markets!
          </h2>
          <p className="lead text-center text-secondary mb-5">
            Discover the best of Jumbi and Mwanakwerekwe markets – your gateway to fresh produce, unique goods, and cultural delights.
          </p>

          {/* Jumbi Market Section */}
          <div className="card mb-5 shadow-lg border-0 rounded-lg overflow-hidden">
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  src="https://via.placeholder.com/600x400/FF5733/FFFFFF?text=Jumbi+Market+Vibes" // Replace with an actual Jumbi Market image URL
                  className="img-fluid rounded-start w-100 h-100 object-cover"
                  alt="Jumbi Market"
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
              </div>
              <div className="col-md-6">
                <div className="card-body p-4 d-flex flex-column justify-content-center">
                  <h3 className="card-title text-success mb-3" style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                    Jumbi Market: Freshness Unleashed!
                  </h3>
                  <p className="card-text text-muted mb-4" style={{ fontSize: '1.1rem' }}>
                    Nestled in the heart of Zanzibar, Jumbi Market is a bustling hub where local farmers bring their freshest harvests daily. Experience vibrant colors, enticing aromas, and the genuine warmth of community.
                  </p>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> **Daily Fresh Produce:** Seasonal fruits, vegetables, and herbs.</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> **Artisan Crafts:** Handmade souvenirs and local artistry.</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> **Friendly Vendors:** Experience authentic local interactions.</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> **Sustainable Practices:** Support local, ethical farming.</li>
                  </ul>
                  <a href="/browse-market" className="btn btn-outline-success btn-lg mt-3 align-self-start">
                    Discover Spaces at Jumbi <i className="bi bi-arrow-right-circle-fill ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mwanakwerekwe Market Section */}
          <div className="card mb-5 shadow-lg border-0 rounded-lg overflow-hidden">
            <div className="row g-0 flex-md-row-reverse"> {/* Reverse order for alternating layout */}
              <div className="col-md-6">
                <img
                  src="https://via.placeholder.com/600x400/3498DB/FFFFFF?text=Mwanakwerekwe+Market+Buzz" // Replace with an actual Mwanakwerekwe Market image URL
                  className="img-fluid rounded-end w-100 h-100 object-cover"
                  alt="Mwanakwerekwe Market"
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
              </div>
              <div className="col-md-6">
                <div className="card-body p-4 d-flex flex-column justify-content-center">
                  <h3 className="card-title text-info mb-3" style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                    Mwanakwerekwe Market: Cultural Kaleidoscope!
                  </h3>
                  <p className="card-text text-muted mb-4" style={{ fontSize: '1.1rem' }}>
                    As Zanzibar's largest and most famous market, Mwanakwerekwe offers an unforgettable journey through spices, textiles, and a rich tapestry of island life. It's more than a market; it's an experience!
                  </p>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2"><i className="bi bi-star-fill text-warning me-2"></i> **Spice Capital:** Aromatic spices, vanilla, cloves, and more.</li>
                    <li className="mb-2"><i className="bi bi-star-fill text-warning me-2"></i> **Textile Treasures:** Vibrant kanga and traditional fabrics.</li>
                    <li className="mb-2"><i className="bi bi-star-fill text-warning me-2"></i> **Bargain Hunting:** Find unique items at competitive prices.</li>
                    <li className="mb-2"><i className="bi bi-star-fill text-warning me-2"></i> **Food Stalls:** Delicious local street food and snacks.</li>
                  </ul>
                  <a href="/browse-market" className="btn btn-outline-info btn-lg mt-3 align-self-start">
                    Explore Mwanakwerekwe Now <i className="bi bi-arrow-right-circle-fill ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action section */}
          <div className="text-center bg-light p-5 rounded-lg shadow-sm">
            <h3 className="text-dark mb-3">Ready to find your perfect market spot?</h3>
            <p className="lead mb-4">Our platform makes booking a breeze. Browse, compare, and secure your space today!</p>
            <a href="/browse-market" className="btn btn-primary btn-lg custom-btn-glow">
              <i className="bi bi-calendar-check-fill me-2"></i> Start Your Booking Journey
            </a>
          </div>

        </main>
      </div>
      <Footer />
    </div>
  );
};

export default CustomerDashboard;