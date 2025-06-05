// src/owner/GenerateReports.js
import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2'; // For basic charts
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const GenerateReports = () => {
  const [reportType, setReportType] = useState('summary'); // 'summary', 'bookings', 'revenue', 'occupancy'
  const [marketFilter, setMarketFilter] = useState('All'); // 'All', 'Jumbi Market', 'Mwanakwerekwe Market'
  const [dateRange, setDateRange] = useState('last30days'); // 'last7days', 'last30days', 'thisMonth', 'lastMonth'
  const [reportData, setReportData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Dummy market options (should be dynamic based on owner's markets)
  const marketOptions = ['All', 'Jumbi Market', 'Mwanakwerekwe Market'];

  useEffect(() => {
    // Automatically generate report when filters change (simulated)
    generateReport();
  }, [reportType, marketFilter, dateRange]);

  const generateReport = async () => {
    setLoading(true);
    setError(null);
    setReportData(null); // Clear previous data

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      let data = {};
      let title = "";

      // --- Simulated Report Data Generation ---
      if (reportType === 'summary') {
        title = "Market Performance Summary";
        data = {
          totalBookings: 150,
          pendingBookings: 15,
          totalRevenue: 2500000, // Tsh
          averageOccupancy: '85%',
          topPerformingMarket: 'Jumbi Market',
          // Data for a small line chart (e.g., daily revenue)
          dailyRevenue: {
            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
            datasets: [
              {
                label: 'Daily Revenue (Tsh)',
                data: [50000, 75000, 60000, 90000, 80000, 100000, 70000],
                borderColor: '#007bff',
                backgroundColor: 'rgba(0, 123, 255, 0.2)',
                fill: true,
              },
            ],
          },
        };
      } else if (reportType === 'bookings') {
        title = "Booking Trends";
        data = {
          // Example data for a bar chart (bookings per market)
          labels: ['Jumbi Market', 'Mwanakwerekwe Market'],
          datasets: [
            {
              label: 'Total Bookings',
              data: [
                marketFilter === 'Jumbi Market' ? 80 : (marketFilter === 'Mwanakwerekwe Market' ? 0 : 80),
                marketFilter === 'Mwanakwerekwe Market' ? 70 : (marketFilter === 'Jumbi Market' ? 0 : 70)
              ],
              backgroundColor: ['#007bff', '#28a745'],
              borderColor: ['#007bff', '#28a745'],
              borderWidth: 1,
            },
            {
              label: 'Pending Bookings',
              data: [
                marketFilter === 'Jumbi Market' ? 10 : (marketFilter === 'Mwanakwerekwe Market' ? 0 : 10),
                marketFilter === 'Mwanakwerekwe Market' ? 5 : (marketFilter === 'Jumbi Market' ? 0 : 5)
              ],
              backgroundColor: ['#ffc107', '#ffc107'],
              borderColor: ['#ffc107', '#ffc107'],
              borderWidth: 1,
            },
          ],
        };
        if (marketFilter !== 'All') { // Adjust labels if specific market is selected
            data.labels = [marketFilter];
            data.datasets[0].data = [marketFilter === 'Jumbi Market' ? 80 : 70];
            data.datasets[1].data = [marketFilter === 'Jumbi Market' ? 10 : 5];
        }

      } else if (reportType === 'revenue') {
        title = "Revenue Breakdown";
        data = {
          // Example data for a line chart (monthly revenue)
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: 'Monthly Revenue (Tsh)',
              data: [400000, 450000, 500000, 550000, 600000, 700000],
              borderColor: '#28a745',
              backgroundColor: 'rgba(40, 167, 69, 0.2)',
              fill: true,
            },
          ],
        };
      } else if (reportType === 'occupancy') {
        title = "Stall Occupancy Rate";
        data = {
            // Example data for a simple doughnut chart (Occupied vs Available)
            labels: ['Occupied Stalls', 'Available Stalls'],
            datasets: [
                {
                    data: [120, 30], // Example: 120 occupied, 30 available
                    backgroundColor: ['#17a2b8', '#6c757d'],
                    hoverBackgroundColor: ['#17a2b8', '#6c757d'],
                },
            ],
        };
      }

      setReportData({ type: reportType, title, data });

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
        <h3 className="mb-4 text-primary"><i className="bi bi-bar-chart-line me-2"></i>Generate Reports</h3>
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
              {/* More sophisticated options like custom date pickers can be added here */}
            </select>
          </div>
          {/* <div className="col-12 text-end">
            <button className="btn btn-primary" onClick={generateReport} disabled={loading}>
              <i className="bi bi-graph-up me-2"></i>Generate Report
            </button>
          </div> */}
           {/* The report auto-generates on filter change, so explicit button is less critical.
               Uncomment above if you want an explicit "Generate" button. */}
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
            <h4 className="text-center mb-4 text-secondary">{reportData.title}</h4>

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
                    <div className="card-header text-primary fw-bold">Daily Revenue Trend</div>
                    <div className="card-body">
                      <Line data={reportData.data.dailyRevenue} options={{ responsive: true, maintainAspectRatio: true, plugins: { legend: { position: 'top' }, title: { display: false } } }} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {reportType === 'bookings' && reportData.data && (
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="card shadow-sm">
                    <div className="card-header text-primary fw-bold">Bookings by Market/Status</div>
                    <div className="card-body">
                      <Bar data={reportData.data} options={{
                        responsive: true,
                        maintainAspectRatio: true,
                        scales: { y: { beginAtZero: true, title: { display: true, text: 'Number of Bookings' } } },
                        plugins: { legend: { position: 'top' }, title: { display: false } }
                      }} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {reportType === 'revenue' && reportData.data && (
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="card shadow-sm">
                    <div className="card-header text-primary fw-bold">Monthly Revenue Trend</div>
                    <div className="card-body">
                      <Line data={reportData.data} options={{
                        responsive: true,
                        maintainAspectRatio: true,
                        scales: { y: { beginAtZero: true, title: { display: true, text: 'Revenue (Tsh)' } } },
                        plugins: { legend: { position: 'top' }, title: { display: false } }
                      }} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {reportType === 'occupancy' && reportData.data && (
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="card shadow-sm">
                    <div className="card-header text-primary fw-bold">Stall Occupancy Overview</div>
                    <div className="card-body text-center">
                        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
                           <Line data={reportData.data} options={{
                            responsive: true,
                            maintainAspectRatio: true,
                            plugins: { legend: { position: 'top' }, title: { display: false } }
                            }} />
                        </div>
                        <p className="mt-3 text-muted">This chart shows the distribution of occupied vs. available stalls.</p>
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