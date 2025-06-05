import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';

const CustomerDashboard = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <main className="flex-grow-1" style={{ backgroundColor: '#f8f9fa' }}>

          {/* Hero Section: Main Welcome - Adjusted font sizes, reduced minHeight */}
          <section className="py-4 text-center text-white bg-primary position-relative overflow-hidden" // py-4 for less vertical padding
            style={{
              backgroundImage: 'url("https://via.placeholder.com/1500x400/563d7c/ffffff?text=Zanzibar+Market+Vibes")', // Slightly smaller placeholder image
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '350px', // Reduced height
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.4)'
            }}>
            <div className="container px-3"> {/* px-3 for slightly less horizontal padding */}
              <h1 className="display-4 fw-bold mb-2 animate__animated animate__fadeInDown" // display-4 for smaller font size
                style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)', letterSpacing: '1px' }}> {/* Reduced letter spacing */}
                Welcome to the Heart of Zanzibar Markets!
              </h1>
              <p className="lead fs-5 mb-3 px-3 animate__animated animate__fadeInUp" // fs-5 for smaller font size, px-3
                style={{ textShadow: '1px 1px 5px rgba(0,0,0,0.6)', maxWidth: '700px' }}> {/* Smaller maxWidth */}
                Dive into the vibrant tapestry of Jumbi and Mwanakwerekwe. Discover unparalleled freshness, rich culture, and endless opportunities.
              </p>
              <NavLink to="/browse-market" className="btn btn-warning btn-md px-4 py-2 rounded-pill fw-bold animate__animated animate__zoomIn" // btn-md, smaller padding
                style={{ fontSize: '1rem', animationDelay: '0.5s' }}> {/* Smaller font size */}
                Start Your Market Journey <i className="bi bi-arrow-right-circle-fill ms-2"></i>
              </NavLink>
            </div>
          </section>

          {/* Jumbi Market Showcase - Reduced padding, font sizes, image sizes */}
          <section className="py-4 bg-white"> {/* py-4 for less vertical padding */}
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 mb-3 mb-lg-0 animate__animated animate__fadeInLeft"> {/* mb-3 */}
                  <img src="https://via.placeholder.com/600x450/FF8C00/FFFFFF?text=Jumbi+Market+Abundance" // Smaller placeholder image
                    className="img-fluid rounded shadow-lg transform-on-hover"
                    alt="Jumbi Market Fresh Produce"
                    style={{ border: '3px solid #FF8C00', transition: 'transform 0.3s ease-in-out', cursor: 'pointer' }} // Thinner border
                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.01)'} // Less scale on hover
                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
                <div className="col-lg-6 animate__animated animate__fadeInRight">
                  <h3 className="h3 fw-bold text-success mb-2">Jumbi: Where Freshness Comes Alive!</h3> {/* h3 for smaller font size */}
                  <p className="fs-6 text-muted mb-3"> {/* fs-6 for smaller font size, mb-3 */}
                    Experience the true essence of local farming at Jumbi Market. Here, every stall bursts with **organic produce**, hand-picked fruits, and artisanal goods, creating a sensory feast for every visitor.
                  </p>
                  <ul className="list-unstyled fa-ul mb-3 small"> {/* mb-3, small class for list items */}
                    <li><span className="fa-li"><i className="bi bi-check-circle-fill text-success"></i></span> **Peak Season Produce:** Direct from farm to your table, guaranteed freshness.</li>
                    <li><span className="fa-li"><i className="bi bi-check-circle-fill text-success"></i></span> **Unique Local Delicacies:** Discover flavors you won't find anywhere else.</li>
                    <li><span className="fa-li"><i className="bi bi-check-circle-fill text-success"></i></span> **Support Local Farmers:** Every purchase directly empowers our community.</li>
                  </ul>
                  <NavLink to="/browse-market" className="btn btn-success btn-sm rounded-pill px-3"> {/* btn-sm, smaller padding */}
                    Find Your Jumbi Stall <i className="bi bi-shop ms-2"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </section>

          {/* Mwanakwerekwe Market Showcase - Reduced padding, font sizes, image sizes */}
          <section className="py-4 bg-light"> {/* py-4 for less vertical padding */}
            <div className="container">
              <div className="row align-items-center flex-md-row-reverse">
                <div className="col-lg-6 mb-3 mb-lg-0 animate__animated animate__fadeInRight"> {/* mb-3 */}
                  <img src="https://via.placeholder.com/600x450/007BFF/FFFFFF?text=Mwanakwerekwe+Market+Culture" // Smaller placeholder image
                    className="img-fluid rounded shadow-lg transform-on-hover"
                    alt="Mwanakwerekwe Market Spices and Crafts"
                    style={{ border: '3px solid #007BFF', transition: 'transform 0.3s ease-in-out', cursor: 'pointer' }} // Thinner border
                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.01)'} // Less scale on hover
                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
                <div className="col-lg-6 animate__animated animate__fadeInLeft">
                  <h3 className="h3 fw-bold text-info mb-2">Mwanakwerekwe: A Kaleidoscope of Island Life!</h3> {/* h3 for smaller font size */}
                  <p className="fs-6 text-muted mb-3"> {/* fs-6 for smaller font size, mb-3 */}
                    Zanzibar's largest market is an immersion into the island's soul. Explore aromatic **spice stalls**, vibrant textiles, and a dynamic atmosphere where every corner tells a story.
                  </p>
                  <ul className="list-unstyled fa-ul mb-3 small"> {/* mb-3, small class for list items */}
                    <li><span className="fa-li"><i className="bi bi-star-fill text-warning"></i></span> **World-Renowned Spices:** From cloves to vanilla, the scents of Zanzibar.</li>
                    <li><span className="fa-li"><i className="bi bi-star-fill text-warning"></i></span> **Handwoven Textiles:** Discover unique kanga and traditional fabrics.</li>
                    <li><span className="fa-li"><i className="bi bi-star-fill text-warning"></i></span> **Lively Bazaars:** A true cultural melting pot for unique finds.</li>
                  </ul>
                  <NavLink to="/browse-market" className="btn btn-info btn-sm rounded-pill px-3"> {/* btn-sm, smaller padding */}
                    Discover Mwanakwerekwe's Magic <i className="bi bi-tags-fill ms-2"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Feature: Quick Stats or Testimonials - Reduced padding, font sizes */}
          <section className="py-4 bg-dark text-white text-center"> {/* py-4 for less vertical padding */}
            <div className="container">
              <h3 className="h4 fw-bold mb-4">Why Choose Our Markets?</h3> {/* h4 for smaller font size */}
              <div className="row">
                <div className="col-md-4 mb-3"> {/* mb-3 */}
                  <div className="p-3 bg-secondary rounded shadow-sm h-100 d-flex flex-column justify-content-center animate__animated animate__pulse animate__infinite" style={{ '--animate-duration': '3s' }}> {/* p-3 for less padding */}
                    <i className="bi bi-hand-thumbs-up-fill display-5 mb-2 text-warning"></i> {/* display-5 for smaller icon size */}
                    <h4 className="h5 fw-bold">Seamless Booking</h4> {/* h5 for smaller font size */}
                    <p className="small mb-0">Easy online reservations for your perfect spot.</p> {/* small class for text */}
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="p-3 bg-secondary rounded shadow-sm h-100 d-flex flex-column justify-content-center animate__animated animate__pulse animate__infinite" style={{ '--animate-duration': '3s', animationDelay: '0.5s' }}>
                    <i className="bi bi-globe display-5 mb-2 text-info"></i>
                    <h4 className="h5 fw-bold">Vast Selection</h4>
                    <p className="small mb-0">From fresh produce to unique crafts, find it all!</p>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="p-3 bg-secondary rounded shadow-sm h-100 d-flex flex-column justify-content-center animate__animated animate__pulse animate__infinite" style={{ '--animate-duration': '3s', animationDelay: '1s' }}>
                    <i className="bi bi-heart-fill display-5 mb-2 text-danger"></i>
                    <h4 className="h5 fw-bold">Support Local</h4>
                    <p className="small mb-0">Connect directly with Zanzibari vendors.</p>
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