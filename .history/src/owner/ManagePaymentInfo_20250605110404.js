// src/owner/PaymentInfo.js
import React, { useState, useEffect } from 'react';
import Header from "../components/Header"; // Import Header
import Sidebar from "../components/Sidebar"; // Import Sidebar
import Footer from "../components/Footer"; // Import Footer

const ManagePaymentInfo = () => {
  const [revenueSummary, setRevenueSummary] = useState({
    totalRevenue: 0, // Initialize to 0, will be calculated
    totalPayouts: 0, // Initialize to 0, will be calculated
    balance: 0,        // Initialize to 0, will be calculated
    pendingPayouts: 0
  });

  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPaymentData();
  }, []); // Empty dependency array means this runs once on mount

  const fetchPaymentData = async () => {
    setLoading(true);
    setError(null);
    try {
      // Simulate API call for payment data
      await new Promise(resolve => setTimeout(resolve, 1200));

      const simulatedTransactions = [
        { id: 'TRN001', date: '2025-05-28', description: 'May bookings payout', amount: 500000, type: 'Payout', status: 'Completed' },
        { id: 'TRN002', date: '2025-05-20', description: 'Stall booking #1234', amount: 15000, type: 'Income', status: 'Completed' },
        { id: 'TRN003', date: '2025-05-15', description: 'April bookings payout', amount: 750000, type: 'Payout', status: 'Completed' },
        { id: 'TRN004', date: '2025-05-10', description: 'Stall booking #1235', amount: 20000, type: 'Income', status: 'Completed' },
        { id: 'TRN005', date: '2025-05-05', description: 'Stall booking #1236', amount: 10000, type: 'Income', status: 'Completed' },
        { id: 'TRN006', date: '2025-04-30', description: 'March bookings payout', amount: 750000, type: 'Payout', status: 'Completed' },
        { id: 'TRN007', date: '2025-04-25', description: 'Stall booking #1237', amount: 18000, type: 'Income', status: 'Completed' },
        { id: 'TRN008', date: '2025-04-18', description: 'Stall booking #1238', amount: 22000, type: 'Income', status: 'Completed' },
        // Example of a pending transaction if you want to test pendingPayouts
        // { id: 'TRN009', date: '2025-06-01', description: 'June booking (pending payout)', amount: 50000, type: 'Income', status: 'Pending' },
      ];

      // Calculate summary from simulated transactions
      let totalIncome = 0;
      let totalPayouts = 0;
      let pendingPayouts = 0;

      simulatedTransactions.forEach(trans => {
        if (trans.type === 'Income' && trans.status === 'Completed') {
          totalIncome += trans.amount;
        } else if (trans.type === 'Payout' && trans.status === 'Completed') {
          totalPayouts += trans.amount;
        } else if (trans.status === 'Pending') {
          // Assuming pending applies to income awaiting payout
          pendingPayouts += trans.amount;
        }
      });

      const currentBalance = totalIncome - totalPayouts;

      setTransactions(simulatedTransactions);
      setRevenueSummary({
        totalRevenue: totalIncome,
        totalPayouts: totalPayouts,
        balance: currentBalance,
        pendingPayouts: pendingPayouts,
      });

    } catch (err) {
      setError("Failed to fetch payment information. Please try again.");
      console.error("Payment info fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const formatTsh = (amount) => {
    return `Tsh ${amount.toLocaleString('en-TZ')}`;
  };

  return (
    // Main container for the entire page, takes full viewport height and arranges content in a column
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: "#f5f7fa" }}>
      {/* Header component at the top */}
      <Header />

      {/* Content area: Sidebar and Main Content, takes remaining height */}
      <div className="d-flex flex-grow-1">
        {/* Sidebar component on the left */}
        <Sidebar userRole="Owner" /> {/* Pass appropriate userRole for sidebar navigation */}

        {/* Main content area, takes remaining width, grows, and has scroll */}
        <main className="flex-grow-1 overflow-auto p-4" style={{ backgroundColor: "#f8f9fa" }}>
          <div className="container-fluid mt-4">
            <div className="card shadow-lg p-4 bg-white border-0 rounded-4">
              <h3 className="mb-4 text-primary fw-bold display-6"><i className="bi bi-currency-dollar me-3"></i>Market Finances Overview</h3>
              <p className="mb-5 text-muted lead">Gain comprehensive insights into your market's financial performance and manage transactions effortlessly.</p>

              {loading && (
                <div className="d-flex flex-column align-items-center justify-content-center my-5 py-5">
                  <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
                    <span className="visually-hidden">Loading Payment Info...</span>
                  </div>
                  <p className="mt-3 lead text-muted">Fetching your financial data...</p>
                </div>
              )}

              {error && (
                <div className="alert alert-danger my-4" role="alert">
                  <i className="bi bi-exclamation-triangle-fill me-2"></i>{error}
                </div>
              )}

              {!loading && !error && (
                <>
                  {/* Revenue Summary Cards - Equalized Fields */}
                  <div className="row g-4 mb-5">
                    <div className="col-md-6 col-lg-3 d-flex">
                      <div className="card text-center text-white bg-gradient-success flex-fill shadow-lg border-0 rounded-3 animate__animated animate__fadeInUp">
                        <div className="card-body p-4">
                          <i className="bi bi-graph-up-arrow fs-2 mb-2"></i>
                          <h5 className="card-title text-opacity-75">Total Revenue</h5>
                          {/* Apply text-info class here for blue color */}
                          <p className="card-text fs-1 fw-bold text-info">{formatTsh(revenueSummary.totalRevenue)}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex">
                      <div className="card text-center text-white bg-gradient-primary flex-fill shadow-lg border-0 rounded-3 animate__animated animate__fadeInUp animate__delay-1s">
                        <div className="card-body p-4">
                          <i className="bi bi-cash-stack fs-2 mb-2"></i>
                          <h5 className="card-title text-opacity-75">Total Payouts</h5>
                          {/* Apply text-info class here for blue color */}
                          <p className="card-text fs-1 fw-bold text-info">{formatTsh(revenueSummary.totalPayouts)}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex">
                      <div className="card text-center text-white bg-gradient-info flex-fill shadow-lg border-0 rounded-3 animate__animated animate__fadeInUp animate__delay-2s">
                        <div className="card-body p-4">
                          <i className="bi bi-wallet2 fs-2 mb-2"></i>
                          <h5 className="card-title text-opacity-75">Current Balance</h5>
                          {/* Apply text-info class here for blue color */}
                          <p className="card-text fs-1 fw-bold text-info">{formatTsh(revenueSummary.balance)}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex">
                      <div className="card text-center text-dark bg-gradient-warning flex-fill shadow-lg border-0 rounded-3 animate__animated animate__fadeInUp animate__delay-3s">
                        <div className="card-body p-4">
                          <i className="bi bi-hourglass fs-2 mb-2"></i>
                          <h5 className="card-title text-opacity-75">Pending Payouts</h5>
                          <p className="card-text fs-1 fw-bold">{formatTsh(revenueSummary.pendingPayouts)}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr className="my-5 border-2 border-primary-subtle" />

                  {/* Recent Transactions Table */}
                  <h4 className="mb-4 text-secondary fw-bold"><i className="bi bi-receipt-cutoff me-2"></i>Recent Transactions</h4>
                  {transactions.length > 0 ? (
                    <div className="table-responsive bg-white rounded-3 shadow-sm p-3">
                      <table className="table table-hover table-borderless table-striped align-middle">
                        <thead className="bg-primary text-white">
                          <tr>
                            <th scope="col" className="py-3">Transaction ID</th>
                            <th scope="col" className="py-3">Date</th>
                            <th scope="col" className="py-3">Description</th>
                            <th scope="col" className="py-3">Amount</th>
                            <th scope="col" className="py-3">Type</th>
                            <th scope="col" className="py-3">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {transactions.map(transaction => (
                            <tr key={transaction.id}>
                              <td>`#`{transaction.id}</td>
                              <td>{transaction.date}</td>
                              <td>{transaction.description}</td>
                              <td className={transaction.type === 'Income' ? 'text-success fw-bold' : 'text-danger fw-bold'}>
                                {transaction.type === 'Income' ? '+' : '-'} {formatTsh(transaction.amount)}
                              </td>
                              <td>
                                <span className={`badge ${transaction.type === 'Income' ? 'bg-success-subtle text-success' : 'bg-primary-subtle text-primary'} p-2 rounded-pill`}>
                                  {transaction.type}
                                </span>
                              </td>
                              <td>
                                <span className={`badge ${transaction.status === 'Completed' ? 'bg-success-subtle text-success' : 'bg-warning-subtle text-warning'} p-2 rounded-pill`}>
                                  {transaction.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="alert alert-info text-center my-4" role="alert">
                      <i className="bi bi-info-circle me-2"></i>No transactions found for the selected period.
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </main>
      </div>
      {/* Footer component at the bottom */}
      <Footer />
    </div>
  );
};

export default ManagePaymentInfo;