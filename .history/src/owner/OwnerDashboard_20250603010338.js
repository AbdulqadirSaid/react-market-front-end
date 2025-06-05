// src/owner/OwnerDashboard.js
import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { NavLink, Outlet } from "react-router-dom"; // Import Outlet for nested routes
import { useLocation } from 'react-router-dom'; // Import useLocation to get current path

// --- IMPORT YOUR IMAGES HERE ---
// You might use these for a background or a specific market showcase if you want to feature
// the owner's managed market directly on the dashboard.
// For now, I'll keep the hero background generic and use the images as placeholders if needed.
// import jumbiMarketImg from "../images/Jumbi-Image.jpg";
// import mwanakwerekweMarketImg from "../images/Kwere_Image.jpg";


const OwnerDashboard = () => {
  const location = useLocation();

  const getPageTitle = (path) => {
    switch (path) {
      case '/owner-dash':
        return 'Dashboard Overview';
      case '/owner-dash/manage-market-info':
        return 'Manage My Market Information';
      case '/owner-dash/manage-bookings':
        return 'Manage Bookings';
      case '/owner-dash/payment-info':
        return 'Payment Information';
      case '/owner-dash/generate-reports':
        return 'Generate Reports';
      case '/owner-dash/account-settings':
        return 'Account Settings';
      default:
        return 'Market Owner Dashboard';
    }
  };

  const currentPageTitle = getPageTitle(location.pathname);


  return (
    <div className="d-flex flex-column min-vh-100">
      <Header userRole="Owner" />
      <div className="d-flex flex-grow-1">
        <Sidebar userRole="Owner" /> {/* Pass userRole to Sidebar to render owner-specific links */}
        <main className="flex-grow-1" style={{ backgroundColor: "#f8f9fa" }}>
          {/* Hero Section: Main Welcome for Market Owners */}
          <section
            className="py-4 text-center text-white bg-dark position-relative overflow-hidden"
            style={{
              backgroundImage:
                'url("https://via.placeholder.com/1500x400/343a40/ffffff?text=Your+Marketplace+Hub")', // Generic background for owner dashboard
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "350px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div className="container px-3">
              <h1
                className="display-4 fw-bold mb-2 animate__animated animate__fadeInDown"
                style={{
                  textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
                  letterSpacing: "1px",
                }}
              >
                Welcome to Your Market Owner Dashboard!
              </h1>
              <p
                className="lead fs-5 mb-3 px-3 animate__animated animate__fadeInUp"
                style={{
                  textShadow: "1px 1px 5px rgba(0,0,0,0.6)",
                  maxWidth: "700px",
                }}
              >
                Efficiently manage your market's information, bookings, payments, and performance reports, all in one place.
              </p>
              <NavLink
                to="/owner-dash/manage-market-info"
                className="btn btn-warning btn-md px-4 py-2 rounded-pill fw-bold animate__animated animate__zoomIn"
                style={{ fontSize: "1rem", animationDelay: "0.5s" }}
              >
                Manage My Market <i className="bi bi-arrow-right-circle-fill ms-2"></i>
              </NavLink>
            </div>
          </section>

          {/* Quick Actions / Market Overview Section for Owners */}
          <section className="py-4 bg-white">
            <div className="container">
              <h3 className="h4 fw-bold text-center text-primary mb-4">Your Market at a Glance & Quick Actions</h3>
              <div className="row g-4 justify-content-center">
                {/* Card 1: Manage Market Info */}
                <div className="col-md-4 animate__animated animate__fadeInUp">
                  <NavLink to="/owner-dash/manage-market-info" className="card h-100 shadow-sm border-0 text-decoration-none text-dark hover-shadow-lg">
                    <div className="card-body text-center p-4">
                      <i className="bi bi-shop display-4 text-info mb-3"></i>
                      <h5 className="card-title fw-bold mb-2">Manage Market Info</h5>
                      <p className="card-text small text-muted">Update your market's description, location, and operating hours.</p>
                    </div>
                  </NavLink>
                </div>
                {/* Card 2: Manage Bookings */}
                <div className="col-md-4 animate__animated animate__fadeInUp" style={{ animationDelay: '0.2s' }}>
                  <NavLink to="/owner-dash/manage-bookings" className="card h-100 shadow-sm border-0 text-decoration-none text-dark hover-shadow-lg">
                    <div className="card-body text-center p-4">
                      <i className="bi bi-calendar-check display-4 text-success mb-3"></i>
                      <h5 className="card-title fw-bold mb-2">Manage Bookings</h5>
                      <p className="card-text small text-muted">Approve, reject, or view all stall bookings for your market.</p>
                    </div>
                  </NavLink>
                </div>
                {/* Card 3: View Payment Info */}
                <div className="col-md-4 animate__animated animate__fadeInUp" style={{ animationDelay: '0.4s' }}>
                  <NavLink to="/owner-dash/payment-info" className="card h-100 shadow-sm border-0 text-decoration-none text-dark hover-shadow-lg">
                    <div className="card-body text-center p-4">
                      <i className="bi bi-wallet display-4 text-warning mb-3"></i>
                      <h5 className="card-title fw-bold mb-2">View Payment Logs</h5>
                      <p className="card-text small text-muted">Track all incoming payments and transaction history.</p>
                    </div>
                  </NavLink>
                </div>
                {/* Card 4: Generate Reports */}
                <div className="col-md-4 animate__animated animate__fadeInUp" style={{ animationDelay: '0.6s' }}>
                  <NavLink to="/owner-dash/generate-reports" className="card h-100 shadow-sm border-0 text-decoration-none text-dark hover-shadow-lg">
                    <div className="card-body text-center p-4">
                      <i className="bi bi-graph-up display-4 text-danger mb-3"></i>
                      <h5 className="card-title fw-bold mb-2">Generate Reports</h5>
                      <p className="card-text small text-muted">Access detailed reports on market performance and payments.</p>
                    </div>
                  </NavLink>
                </div>
                {/* Card 5: Account Settings */}
                <div className="col-md-4 animate__animated animate__fadeInUp" style={{ animationDelay: '0.8s' }}>
                  <NavLink to="/owner-dash/account-settings" className="card h-100 shadow-sm border-0 text-decoration-none text-dark hover-shadow-lg">
                    <div className="card-body text-center p-4">
                      <i className="bi bi-gear display-4 text-secondary mb-3"></i>
                      <h5 className="card-title fw-bold mb-2">Account Settings</h5>
                      <p className="card-text small text-muted">Update your personal profile and security settings.</p>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </section>

          {/* You can add another section here for market-specific statistics,
              e.g., "Current Bookings: 15/20 stalls", "Revenue This Month: $X", etc.
              This would likely involve fetching data from your backend.
          */}
          <section className="py-4 bg-light text-center">
            <div className="container">
              <h3 className="h4 fw-bold mb-3 text-dark">Quick Statistics & Insights</h3>
              <div className="row justify-content-center">
                <div className="col-md-6 col-lg-3 mb-3">
                  <div className="p-3 bg-white rounded shadow-sm">
                    <h5 className="mb-1 text-primary">Active Bookings</h5>
                    <p className="display-6 fw-bold mb-0">12</p> {/* Placeholder */}
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-3">
                  <div className="p-3 bg-white rounded shadow-sm">
                    <h5 className="mb-1 text-success">Total Revenue (Month)</h5>
                    <p className="display-6 fw-bold mb-0">Tsh 5,200,000</p> {/* Placeholder */}
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-3">
                  <div className="p-3 bg-white rounded shadow-sm">
                    <h5 className="mb-1 text-warning">Pending Approvals</h5>
                    <p className="display-6 fw-bold mb-0">3</p> {/* Placeholder */}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* This Outlet is essential for rendering nested routes within the Dashboard content area */}
          <Outlet />

        </main>
      </div>
      <Footer />
    </div>
  );
};

export default OwnerDashboard;