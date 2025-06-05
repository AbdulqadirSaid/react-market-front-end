// src/owner/OwnerDashboard.js
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header'; // Assuming shared Header
import Sidebar from '../components/Sidebar'; // Assuming shared Sidebar structure
import Footer from '../components/Footer'; // Assuming shared Footer

const OwnerDashboard = () => {
  const location = useLocation();

  // Determine current page title based on path for dynamic display
  const getPageTitle = (path) => {
    switch (path) {
      case '/owner-dash':
        return 'Dashboard Overview';
      case '/owner-dash/account-settings':
        return 'Account Settings';
      case '/owner-dash/manage-market-info':
        return 'Manage Market Information';
      case '/owner-dash/manage-bookings':
        return 'Manage Bookings';
      case '/owner-dash/payment-info':
        return 'Payment Information';
      case '/owner-dash/generate-reports':
        return 'Generate Reports';
      default:
        return 'Market Owner Dashboard';
    }
  };

  const currentPageTitle = getPageTitle(location.pathname);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header userRole="Owner" /> {/* Pass role for conditional rendering in Header if needed */}
      <div className="d-flex flex-grow-1">
        <Sidebar userRole="Owner" /> {/* Pass role to Sidebar to show owner-specific links */}
        <main className="flex-grow-1 p-4" style={{ backgroundColor: '#f8f9fa' }}>
          {/* Main content area for nested routes */}
          <h1 className="mb-4 text-primary">{currentPageTitle}</h1>
          <Outlet /> {/* Renders the nested component (e.g., AccountSettings, ManageMarketInfo) */}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default OwnerDashboard;