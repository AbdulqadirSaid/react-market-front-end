import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';


const BrowseMarket = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <main className="flex-grow-1 p-4" style={{ backgroundColor: '#f8f9fa' }}>
          <h2>Welcome to the Admin Dashboard</h2>
          <p>Use the navigation bar to explore.</p>
          {/* Your dashboard content here */}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
