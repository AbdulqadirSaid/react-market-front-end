import React, { useState } from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

// Static market data for the table
const initialMarkets = [
  {
    id: 1,
    bookingId: 'B-001', // Added Booking ID
    marketName: 'Fresh Farmers Market',
    marketSpaceType: 'Outdoor Stall',
    startDate: '2025-07-01',
    endDate: '2025-07-07',
    status: 'Active',
  },
  {
    id: 2,
    bookingId: 'B-002', // Added Booking ID
    marketName: 'Organic Goods Fair',
    marketSpaceType: 'Indoor Booth',
    startDate: '2025-08-10',
    endDate: '2025-08-12',
    status: 'Booked',
  },
  {
    id: 3,
    bookingId: 'B-003', // Added Booking ID
    marketName: 'Local Craft Festival',
    marketSpaceType: 'Large Tent',
    startDate: '2025-09-01',
    endDate: '2025-09-03',
    status: 'Cancelled',
  },
  {
    id: 4,
    bookingId: 'B-004', // Added Booking ID
    marketName: 'Artisan Food Showcase',
    marketSpaceType: 'Food Truck Spot',
    startDate: '2025-10-05',
    endDate: '2025-10-05',
    status: 'Active',
  },
  {
    id: 5,
    bookingId: 'B-005', // Added Booking ID
    marketName: 'Vintage Collectors Meet',
    marketSpaceType: 'Pavilion Area',
    startDate: '2025-11-20',
    endDate: '2025-11-22',
    status: 'Active',
  },
];

const BookingInfo = () => {
  // We'll manage the markets in state to allow for cancellation
  const [markets, setMarkets] = useState(initialMarkets);

  // Function to handle canceling a market
  const handleCancelMarket = (id) => {
    setMarkets(prevMarkets =>
      prevMarkets.map(market =>
        market.id === id ? { ...market, status: 'Cancelled' } : market
      )
    );
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <main className="flex-grow-1 p-4" style={{ backgroundColor: '#f8f9fa' }}>
          <h2>Booking Information</h2>
          <p>Details of available markets and their current status.</p>

          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Booking ID</th> {/* New column header */}
                  <th scope="col">Market Name</th>
                  <th scope="col">Market Space Type</th>
                  <th scope="col">Start Date</th>
                  <th scope="col">End Date</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {markets.map((market) => (
                  <tr key={market.id}>
                    <td>{market.bookingId}</td> {/* Display Booking ID */}
                    <td>{market.marketName}</td>
                    <td>{market.marketSpaceType}</td>
                    <td>{market.startDate}</td>
                    <td>{market.endDate}</td>
                    <td>
                      <span className={`badge ${
                        market.status === 'Active' ? 'bg-success' :
                        market.status === 'Booked' ? 'bg-info' :
                        'bg-danger'
                      }`}>
                        {market.status}
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleCancelMarket(market.id)}
                        disabled={market.status === 'Cancelled'} // Disable if already cancelled
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default BookingInfo;