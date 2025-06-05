import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom'; // Import NavLink for navigation

const CustomerDashboard = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <main className="flex-grow-1" style={{ backgroundColor: '#f8f9fa' }}>

          {/* Hero Section: Main Welcome */}
          <section className="py-5 text-center text-white bg-primary position-relative overflow-hidden"
            style={{
              backgroundImage: 'url("https://via.placeholder.com/1500x500/563d7c/ffffff?text=Zanzibar+Market+Vibes")', // A more evocative background image
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '450px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.4)' // Dark overlay for text readability
            }}>
            <h1 className="display-3 fw-bold mb-3 animate__animated animate__fadeInDown"
              style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)', letterSpacing: '2px' }}>
              Welcome to the Heart of Zanzibar Markets!
            </h1>
            <p className="lead fs-4 mb-4 px-4 animate__animated animate__fadeInUp"
              style={{ textShadow: '1px 1px 5px rgba(0,0,0,0.6)', maxWidth: '800px' }}>
              Dive into the vibrant tapestry of Jumbi and Mwanakwerekwe. Discover unparalleled freshness, rich culture, and endless opportunities.
            </p>
            <NavLink to="/browse-market" className="btn btn-warning btn-lg px-5 py-3 rounded-pill fw-bold animate__animated animate__zoomIn"
              style={{ fontSize: '1.2rem', animationDelay: '0.5s' }}>
              Start Your Market Journey <i className="bi bi-arrow-right-circle-fill ms-2"></i>
            </NavLink>
          </section>

          {/* Jumbi Market Showcase */}
          <section className="py-5 bg-white position-relative" style={{ padding: '4rem 0' }}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0 animate__animated animate__fadeInLeft">
                  <img src="https://via.placeholder.com/800x600/FF8C00/FFFFFF?text=Jumbi+Market+Abundance" // Jumbi specific, warm tones
                    className="img-fluid rounded shadow-lg transform-on-hover"
                    alt="Jumbi Market Fresh Produce"
                    style={{ border: '5px solid #FF8C00', transition: 'transform 0.3s ease-in-out', cursor: 'pointer' }}
                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.02)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
                <div className="col-lg-6 animate__animated animate__fadeInRight">
                  <h3 className="display-4 fw-bold text-success mb-3">Jumbi: Where Freshness Comes Alive!</h3>
                  <p className="lead fs-5 text-muted mb-4">
                    Experience the true essence of local farming at Jumbi Market. Here, every stall bursts with **organic produce**, hand-picked fruits, and artisanal goods, creating a sensory feast for every visitor.
                  </p>
                  <ul className="list-unstyled fa-ul mb-4">
                    <li><span className="fa-li"><i className="bi bi-check-circle-fill text-success"></i></span> **Peak Season Produce:** Direct from farm to your table, guaranteed freshness.</li>
                    <li><span className="fa-li"><i className="bi bi-check-circle-fill text-success"></i></span> **Unique Local Delicacies:** Discover flavors you won't find anywhere else.</li>
                    <li><span className="fa-li"><i className="bi bi-check-circle-fill text-success"></i></span> **Support Local Farmers:** Every purchase directly empowers our community.</li>
                  </ul>
                  <NavLink to="/browse-market" className="btn btn-success btn-lg rounded-pill px-4">
                    Find Your Jumbi Stall <i className="bi bi-shop ms-2"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </section>

          {/* Mwanakwerekwe Market Showcase */}
          <section className="py-5 bg-light position-relative" style={{ padding: '4rem 0' }}>
            <div className="container">
              <div className="row align-items-center flex-md-row-reverse"> {/* Reverse for alternating layout */}
                <div className="col-lg-6 mb-4 mb-lg-0 animate__animated animate__fadeInRight">
                  <img src="https://via.placeholder.com/800x600/007BFF/FFFFFF?text=Mwanakwerekwe+Market+Culture" // Mwanakwerekwe specific, cool tones
                    className="img-fluid rounded shadow-lg transform-on-hover"
                    alt="Mwanakwerekwe Market Spices and Crafts"
                    style={{ border: '5px solid #007BFF', transition: 'transform 0.3s ease-in-out', cursor: 'pointer' }}
                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.02)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
                <div className="col-lg-6 animate__animated animate__fadeInLeft">
                  <h3 className="display-4 fw-bold text-info mb-3">Mwanakwerekwe: A Kaleidoscope of Island Life!</h3>
                  <p className="lead fs-5 text-muted mb-4">
                    Zanzibar's largest market is an immersion into the island's soul. Explore aromatic **spice stalls**, vibrant textiles, and a dynamic atmosphere where every corner tells a story.
                  </p>
                  <ul className="list-unstyled fa-ul mb-4">
                    <li><span className="fa-li"><i className="bi bi-star-fill text-warning"></i></span> **World-Renowned Spices:** From cloves to vanilla, the scents of Zanzibar.</li>
                    <li><span className="fa-li"><i className="bi bi-star-fill text-warning"></i></span> **Handwoven Textiles:** Discover unique kanga and local artistry.</li>
                    <li><span className="fa-li"><i className="bi bi-star-fill text-warning"></i></span> **Lively Bazaars:** A true cultural melting pot for unique finds.</li>
                  </ul>
                  <NavLink to="/browse-market" className="btn btn-info btn-lg rounded-pill px-4">
                    Discover Mwanakwerekwe's Magic <i className="bi bi-tags-fill ms-2"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Feature: Quick Stats or Testimonials */}
          <section className="py-5 bg-dark text-white text-center">
            <div className="container">
              <h3 className="display-5 fw-bold mb-5">Why Choose Our Markets?</h3>
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="p-4 bg-secondary rounded shadow-sm h-100 d-flex flex-column justify-content-center animate__animated animate__pulse animate__infinite" style={{ '--animate-duration': '3s' }}>
                    <i className="bi bi-hand-thumbs-up-fill display-4 mb-3 text-warning"></i>
                    <h4 className="fw-bold">Seamless Booking</h4>
                    <p className="lead mb-0">Easy online reservations for your perfect spot.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="p-4 bg-secondary rounded shadow-sm h-100 d-flex flex-column justify-content-center animate__animated animate__pulse animate__infinite" style={{ '--animate-duration': '3s', animationDelay: '0.5s' }}>
                    <i className="bi bi-globe display-4 mb-3 text-info"></i>
                    <h4 className="fw-bold">Vast Selection</h4>
                    <p className="lead mb-0">From fresh produce to unique crafts, find it all!</p>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="p-4 bg-secondary rounded shadow-sm h-100 d-flex flex-column justify-content-center animate__animated animate__pulse animate__infinite" style={{ '--animate-duration': '3s', animationDelay: '1s' }}>
                    <i className="bi bi-heart-fill display-4 mb-3 text-danger"></i>
                    <h4 className="fw-bold">Support Local</h4>
                    <p className="lead mb-0">Connect directly with Zanzibari vendors.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>
      <Footer />
    </div>
  );
};

export default CustomerDashboard;