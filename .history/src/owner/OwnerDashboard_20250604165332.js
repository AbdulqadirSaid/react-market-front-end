// src/owner/OwnerDashboard.js
import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { NavLink, Outlet } from "react-router-dom";

const OwnerDashboard = () => {
  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: "#f5f7fa" }}>
      {/* Header */}
      <Header userRole="Owner" />

      {/* Body: Sidebar + Main Content */}
      <div className="d-flex flex-grow-1">
        <Sidebar userRole="Owner" />

        {/* Main Content Area */}
        <main className="flex-grow-1 overflow-auto" style={{ backgroundColor: "#f8f9fa" }}>
          {/* Hero Section with Gradient Background */}
          <section className="market-hero">
            <div className="container px-4 py-5 text-center position-relative">
              <h1 className="display-5 fw-bold mb-3 text-white">
                <i className="bi bi-shop-window me-2"></i>
                Market Owner Dashboard
              </h1>
              <p className="lead mb-4 text-white-50">
                Manage your markets efficiently with real-time data and analytics
              </p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <NavLink
                  to="/owner-dash/manage-market-info"
                  className="btn btn-light btn-lg px-4 gap-3"
                >
                  <i className="bi bi-gear-fill me-2"></i>
                  Manage Market
                </NavLink>
                <NavLink
                  to="/owner-dash/manage-bookings"
                  className="btn btn-outline-light btn-lg px-4"
                >
                  <i className="bi bi-calendar-check me-2"></i>
                  View Bookings
                </NavLink>
              </div>
            </div>
          </section>

          {/* Stats Overview Cards */}
          <div className="container mt-n4">
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card stat-card bg-primary bg-gradient text-white">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h6 className="text-uppercase mb-0">Active Bookings</h6>
                        <h2 className="mb-0">24</h2>
                      </div>
                      <div className="icon-shape">
                        <i className="bi bi-calendar-check fs-1"></i>
                      </div>
                    </div>
                    <p className="mt-2 mb-0 small">
                      <span className="text-white-50">This month</span>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="card stat-card bg-success bg-gradient text-white">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h6 className="text-uppercase mb-0">Total Revenue</h6>
                        <h2 className="mb-0">Tsh 8.7M</h2>
                      </div>
                      <div className="icon-shape">
                        <i className="bi bi-currency-dollar fs-1"></i>
                      </div>
                    </div>
                    <p className="mt-2 mb-0 small">
                      <span className="text-white-50">Last 30 days</span>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="card stat-card bg-warning bg-gradient text-dark">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h6 className="text-uppercase mb-0">Pending Actions</h6>
                        <h2 className="mb-0">5</h2>
                      </div>
                      <div className="icon-shape">
                        <i className="bi bi-exclamation-triangle fs-1"></i>
                      </div>
                    </div>
                    <p className="mt-2 mb-0 small">
                      <span className="text-dark-50">Require attention</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area with Market Info */}
          <section className="container py-4">
            <div className="row">
              <div className="col-12">
                <div className="card shadow-sm border-0 overflow-hidden">
                  <div className="card-header bg-white border-0">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="mb-0 fw-bold">Market Management</h5>
                      <div className="d-flex">
                        <button className="btn btn-sm btn-outline-primary me-2">
                          <i className="bi bi-printer me-1"></i> Print
                        </button>
                        <button className="btn btn-sm btn-primary">
                          <i className="bi bi-plus-circle me-1"></i> Add New
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    {/* Render nested routes here */}
                    <Outlet />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <Footer />

      {/* Custom CSS in JS */}
      <style jsx>{`
        .market-hero {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 3rem 0;
          position: relative;
          overflow: hidden;
          margin-bottom: 2rem;
        }
        
        .market-hero:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') no-repeat center center;
          background-size: cover;
          opacity: 0.15;
          z-index: 0;
        }
        
        .stat-card {
          border-radius: 12px;
          border: none;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-5px);
        }
        
        .icon-shape {
          width: 50px;
          height: 50px;
          background-color: rgba(255,255,255,0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default OwnerDashboard;
