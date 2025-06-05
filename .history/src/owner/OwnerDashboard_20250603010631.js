// src/owner/OwnerDashboard.js
import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { NavLink, Outlet, useLocation } from "react-router-dom";

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
        <Sidebar userRole="Owner" />
        <main className="flex-grow-1" style={{ backgroundColor: "#f8f9fa" }}>
          {/* Hero Section: Main Welcome for Market Owners - Reduced padding, font sizes */}
          <section
            className="py-3 text-center text-white bg-dark position-relative overflow-hidden" // py-3 instead of py-4
            style={{
              backgroundImage:
                'url("https://via.placeholder.com/1500x300/343a40/ffffff?text=Your+Marketplace+Hub")', // Shorter placeholder image
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "250px", // Reduced minHeight
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div className="container px-2"> {/* px-2 instead of px-3 */}
              <h1
                className="display-5 fw-bold mb-1 animate__animated animate__fadeInDown" // display-5 instead of display-4, mb-1 instead of mb-2
                style={{
                  textShadow: "2px 2px 6px rgba(0,0,0,0.7)", // Smaller text shadow
                  letterSpacing: "0.5px", // Smaller letter spacing
                }}
              >
                Welcome to Your Market Owner Dashboard!
              </h1>
              <p
                className="lead fs-6 mb-2 px-2 animate__animated animate__fadeInUp" // fs-6 instead of fs-5, mb-2 instead of mb-3, px-2
                style={{
                  textShadow: "1px 1px 3px rgba(0,0,0,0.6)", // Smaller text shadow
                  maxWidth: "600px", // Reduced max-width
                }}
              >
                Efficiently manage your market's information, bookings, payments, and performance reports.
              </p>
              <NavLink
                to="/owner-dash/manage-market-info"
                className="btn btn-warning btn-sm px-3 py-1 rounded-pill fw-bold animate__animated animate__zoomIn" // btn-sm, px-3, py-1
                style={{ fontSize: "0.9rem", animationDelay: "0.5s" }} // Smaller font size
              >
                Manage My Market <i className="bi bi-arrow-right-circle-fill ms-1"></i> {/* ms-1 */}
              </NavLink>
            </div>
          </section>

          {/* Quick Actions / Market Overview Section for Owners - Reduced padding, smaller cards */}
          <section className="py-3 bg-white"> {/* py-3 instead of py-4 */}
            <div className="container">
              <h3 className="h5 fw-bold text-center text-primary mb-3">Your Market at a Glance & Quick Actions</h3> {/* h5 instead of h4, mb-3 */}
              <div className="row g-3 justify-content-center"> {/* g-3 instead of g-4 */}
                {/* Card 1: Manage Market Info */}
                <div className="col-md-4 col-lg-3 animate__animated animate__fadeInUp"> {/* Adjusted column size for more compactness */}
                  <NavLink to="/owner-dash/manage-market-info" className="card h-100 shadow-sm border-0 text-decoration-none text-dark hover-shadow-lg">
                    <div className="card-body text-center p-3"> {/* p-3 instead of p-4 */}
                      <i className="bi bi-shop display-5 text-info mb-2"></i> {/* display-5 instead of display-4, mb-2 */}
                      <h5 className="card-title fw-bold mb-1 fs-6">Manage Market Info</h5> {/* fs-6, mb-1 */}
                      <p className="card-text small text-muted text-truncate-2">Update your market's description, location, and operating hours.</p> {/* text-truncate-2 (custom class for 2 lines) */}
                    </div>
                  </NavLink>
                </div>
                {/* Card 2: Manage Bookings */}
                <div className="col-md-4 col-lg-3 animate__animated animate__fadeInUp" style={{ animationDelay: '0.2s' }}>
                  <NavLink to="/owner-dash/manage-bookings" className="card h-100 shadow-sm border-0 text-decoration-none text-dark hover-shadow-lg">
                    <div className="card-body text-center p-3">
                      <i className="bi bi-calendar-check display-5 text-success mb-2"></i>
                      <h5 className="card-title fw-bold mb-1 fs-6">Manage Bookings</h5>
                      <p className="card-text small text-muted text-truncate-2">Approve, reject, or view all stall bookings for your market.</p>
                    </div>
                  </NavLink>
                </div>
                {/* Card 3: View Payment Info */}
                <div className="col-md-4 col-lg-3 animate__animated animate__fadeInUp" style={{ animationDelay: '0.4s' }}>
                  <NavLink to="/owner-dash/payment-info" className="card h-100 shadow-sm border-0 text-decoration-none text-dark hover-shadow-lg">
                    <div className="card-body text-center p-3">
                      <i className="bi bi-wallet display-5 text-warning mb-2"></i>
                      <h5 className="card-title fw-bold mb-1 fs-6">View Payment Logs</h5>
                      <p className="card-text small text-muted text-truncate-2">Track all incoming payments and transaction history.</p>
                    </div>
                  </NavLink>
                </div>
                {/* Card 4: Generate Reports */}
                <div className="col-md-4 col-lg-3 animate__animated animate__fadeInUp" style={{ animationDelay: '0.6s' }}>
                  <NavLink to="/owner-dash/generate-reports" className="card h-100 shadow-sm border-0 text-decoration-none text-dark hover-shadow-lg">
                    <div className="card-body text-center p-3">
                      <i className="bi bi-graph-up display-5 text-danger mb-2"></i>
                      <h5 className="card-title fw-bold mb-1 fs-6">Generate Reports</h5>
                      <p className="card-text small text-muted text-truncate-2">Access detailed reports on market performance and payments.</p>
                    </div>
                  </NavLink>
                </div>
                {/* Card 5: Account Settings */}
                <div className="col-md-4 col-lg-3 animate__animated animate__fadeInUp" style={{ animationDelay: '0.8s' }}>
                  <NavLink to="/owner-dash/account-settings" className="card h-100 shadow-sm border-0 text-decoration-none text-dark hover-shadow-lg">
                    <div className="card-body text-center p-3">
                      <i className="bi bi-gear display-5 text-secondary mb-2"></i>
                      <h5 className="card-title fw-bold mb-1 fs-6">Account Settings</h5>
                      <p className="card-text small text-muted text-truncate-2">Update your personal profile and security settings.</p>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Statistics & Insights - Reduced padding, font sizes */}
          <section className="py-3 bg-light text-center"> {/* py-3 */}
            <div className="container">
              <h3 className="h5 fw-bold mb-2 text-dark">Quick Statistics & Insights</h3> {/* h5, mb-2 */}
              <div className="row justify-content-center">
                <div className="col-md-6 col-lg-3 mb-2"> {/* mb-2 */}
                  <div className="p-2 bg-white rounded shadow-sm"> {/* p-2 */}
                    <h5 className="mb-1 text-primary fs-6">Active Bookings</h5> {/* fs-6 */}
                    <p className="display-6 fw-bold mb-0">12</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-2">
                  <div className="p-2 bg-white rounded shadow-sm">
                    <h5 className="mb-1 text-success fs-6">Total Revenue (Month)</h5>
                    <p className="display-6 fw-bold mb-0">Tsh 5.2M</p> {/* Shortened */}
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-2">
                  <div className="p-2 bg-white rounded shadow-sm">
                    <h5 className="mb-1 text-warning fs-6">Pending Approvals</h5>
                    <p className="display-6 fw-bold mb-0">3</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Outlet />

        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ODashboard;