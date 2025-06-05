// src/owner/ManageReports.js
import React, { useState, useEffect } from 'react';

const ManageReports = () => {
  const [reportType, setReportType] = useState('summary');
  const [marketFilter, setMarketFilter] = useState('All');
  const [dateRange, setDateRange] = useState('last30days');
  const [reportData, setReportData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const marketOptions = ['All', 'Jumbi Market', 'Mwanakwerekwe Market'];

  useEffect(() => {
    generateReport();
  }, [reportType, marketFilter, dateRange, generateReport]);

  const generateReport = async () => {
    setLoading(true);
    setError(null);
    setReportData(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      let data = {};
      let title = "";
      let description = "";

      // --- Simulated Report Data Generation ---
      if (reportType === 'summary') {
        title = "Market Performance Summary";
        description = `Overall performance for ${marketFilter === 'All' ? 'all markets' : marketFilter} over the ${dateRange} period.`;
        data = {
          totalBookings: 150,
          pendingBookings: 15,
          totalRevenue: 2500000, // Tsh
          averageOccupancy: '85%',
          topPerformingMarket: 'Jumbi Market',
          summaryPoints: [
            "Market activity has been consistent.",
            "Revenue shows steady growth.",
            "Pending bookings require timely action."
          ]
        };
      } else if (reportType === 'bookings') {
        title = "Booking Trends";
        description = `Detailed booking trends for ${marketFilter === 'All' ? 'all markets' : marketFilter} over the ${dateRange} period.`;
        data = {
          marketBookings: [
            { market: 'Jumbi Market', total: 80, pending: 10, approved: 70 },
            { market: 'Mwanakwerekwe Market', total: 70, pending: 5, approved: 65 }
          ].filter(m => marketFilter === 'All' || m.market === marketFilter),
          recentBookings: [
            { id: 'BKG001', vendor: 'Mama Amina Spices', market: 'Jumbi Market', date: '2025-06-15', status: 'Pending' },
            { id: 'BKG004', vendor: 'Ali\'s Fish Stall', market: 'Mwanakwerekwe Market', date: '2025-07-01', status: 'Pending' }
          ]
        };
      } else if (reportType === 'revenue') {
        title = "Revenue Breakdown";
        description = `Revenue details for ${marketFilter === 'All' ? 'all markets' : marketFilter} over the ${dateRange} period.`;
        data = {
          monthlyRevenue: [
            { month: 'Jan', amount: 400000 },
            { month: 'Feb', amount: 450000 },
            { month: 'Mar', amount: 500000 },
            { month: 'Apr', amount: 550000 },
            { month: 'May', amount: 600000 },
            { month: 'Jun', amount: 700000 }
          ],
          highestRevenueDay: { date: '2025-05-28', amount: 120000 }
        };
      } else if (reportType === 'occupancy') {
        title = "Stall Occupancy Rate";
        description = `Current stall occupancy status for ${marketFilter === 'All' ? 'all markets' : marketFilter}.`;
        data = {
          occupiedStalls: 120,
          availableStalls: 30,
          totalStalls: 150,
          occupancyPercentage: ((120 / 150) * 100).toFixed(2) + '%'
        };
      }

      setReportData({ type: reportType, title, description, data });

    } catch (err) {
      setError("Failed to generate report. Please try again.");
      console.error("Report generation error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid mt-4">
      <div className="card shadow-lg p-4 bg-white">
        <h3 className="mb-4 text-primary"><i className="bi bi-clipboard-data me-2"></i>Manage Reports</h3> {/* Changed icon */}
        <p className="mb-4 text-muted">Gain insights into your market's performance with various reports.</p>

        {/* Report Filters */}
        <div className="row g-3 mb-4 align-items-end">
          <div className="col-md-4">
            <label htmlFor="reportType" className="form-label">Report Type</label>
            <select
              id="reportType"
              className="form-select"
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
            >
              <option value="summary">Market Summary</option>
              <option value="bookings">Booking Trends</option>
              <option value="revenue">Revenue Breakdown</option>
              <option value="occupancy">Stall Occupancy</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="marketFilter" className="form-label">Market</label>
            <select
              id="marketFilter"
              className="form-select"
              value={marketFilter}
              onChange={(e) => setMarketFilter(e.target.value)}
            >
              {marketOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="dateRange" className="form-label">Date Range</label>
            <select
              id="dateRange"
              className="form-select"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
            >
              <option value="last7days">Last 7 Days</option>
              <option value="last30days">Last 30 Days</option>
              <option value="thisMonth">This Month</option>
              <option value="lastMonth">Last Month</option>
            </select>
          </div>
        </div>

        <hr className="my-4"/>

        {loading && (
          <div className="d-flex justify-content-center my-5 py-5">
            <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
              <span className="visually-hidden">Generating Report...</span>
            </div>
            <p className="ms-3 lead text-muted">Generating Report...</p>
          </div>
        )}

        {error && (
          <div className="alert alert-danger my-4" role="alert">
            {error}
          </div>
        )}

        {!loading && !error && reportData && (
          <div className="report-display mt-4">
            <h4 className="text-center mb-3 text-secondary">{reportData.title}</h4>
            <p className="text-center text-muted mb-4">{reportData.description}</p>

            {reportType === 'summary' && reportData.data && (
              <div className="row g-4 mb-5">
                <div className="col-md-6 col-lg-3">
                  <div className="card text-center bg-info text-white shadow-sm h-100">
                    <div className="card-body">
                      <i className="bi bi-bar-chart-steps fs-1 mb-2"></i>
                      <h5 className="card-title">Total Bookings</h5>
                      <p className="card-text fs-3 fw-bold">{reportData.data.totalBookings}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="card text-center bg-warning text-dark shadow-sm h-100">
                    <div className="card-body">
                      <i className="bi bi-hourglass-split fs-1 mb-2"></i>
                      <h5 className="card-title">Pending Bookings</h5>
                      <p className="card-text fs-3 fw-bold">{reportData.data.pendingBookings}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="card text-center bg-success text-white shadow-sm h-100">
                    <div className="card-body">
                      <i className="bi bi-currency-dollar fs-1 mb-2"></i>
                      <h5 className="card-title">Total Revenue</h5>
                      <p className="card-text fs-3 fw-bold">Tsh {reportData.data.totalRevenue.toLocaleString('en-TZ')}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="card text-center bg-secondary text-white shadow-sm h-100">
                    <div className="card-body">
                      <i className="bi bi-graph-up fs-1 mb-2"></i>
                      <h5 className="card-title">Avg. Occupancy</h5>
                      <p className="card-text fs-3 fw-bold">{reportData.data.averageOccupancy}</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card shadow-sm">
                    <div className="card-header text-primary fw-bold">Key Summary Points</div>
                    <ul className="list-group list-group-flush">
                      {reportData.data.summaryPoints.map((point, index) => (
                        <li key={index} className="list-group-item"><i className="bi bi-check-circle-fill text-success me-2"></i>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {reportType === 'bookings' && reportData.data && (
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="card shadow-sm mb-4">
                    <div className="card-header text-primary fw-bold">Bookings by Market</div>
                    <ul className="list-group list-group-flush">
                      {reportData.data.marketBookings.map((market, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                          <strong>{market.market}:</strong> Total <span className="badge bg-primary">{market.total}</span> | Pending <span className="badge bg-warning text-dark">{market.pending}</span> | Approved <span className="badge bg-success">{market.approved}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="card shadow-sm">
                    <div className="card-header text-primary fw-bold">Recent Booking Activities</div>
                    <ul className="list-group list-group-flush">
                      {reportData.data.recentBookings.map((booking, index) => (
                        <li key={index} className="list-group-item">
                          Booking ID: <strong>{booking.id}</strong> | Vendor: {booking.vendor} | Market: {booking.market} | Date: {booking.date} | Status: <span className={`badge ${booking.status === 'Pending' ? 'bg-warning text-dark' : 'bg-primary'}`}>{booking.status}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {reportType === 'revenue' && reportData.data && (
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="card shadow-sm mb-4">
                    <div className="card-header text-primary fw-bold">Monthly Revenue Data</div>
                    <ul className="list-group list-group-flush">
                      {reportData.data.monthlyRevenue.map((item, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                          <strong>{item.month}:</strong> Tsh {item.amount.toLocaleString('en-TZ')}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="card shadow-sm">
                    <div className="card-header text-primary fw-bold">Highest Revenue Day</div>
                    <div className="card-body">
                      <p className="mb-0">On <strong>{reportData.data.highestRevenueDay.date}</strong>, the market generated a revenue of <strong>Tsh {reportData.data.highestRevenueDay.amount.toLocaleString('en-TZ')}</strong>.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {reportType === 'occupancy' && reportData.data && (
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="card shadow-sm">
                    <div className="card-header text-primary fw-bold">Stall Occupancy Overview</div>
                    <div className="card-body">
                      <p className="mb-1"><strong>Total Stalls:</strong> {reportData.data.totalStalls}</p>
                      <p className="mb-1"><strong>Occupied Stalls:</strong> {reportData.data.occupiedStalls}</p>
                      <p className="mb-1"><strong>Available Stalls:</strong> {reportData.data.availableStalls}</p>
                      <h5 className="mt-3">Occupancy Rate: <span className="badge bg-primary fs-5">{reportData.data.occupancyPercentage}</span></h5>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageReports;