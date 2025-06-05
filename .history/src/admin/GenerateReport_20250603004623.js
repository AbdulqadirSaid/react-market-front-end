// src/admin/GenerateReport.js
import React, { useState } from 'react';

const GenerateReport = () => {
  const [reportType, setReportType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedMarket, setSelectedMarket] = useState(''); // For Market specific reports
  const [customerStatusFilter, setCustomerStatusFilter] = useState('All'); // For Customer specific reports

  // Placeholder for available markets (in a real app, this would be fetched from an API)
  const availableMarkets = [
    { id: 'all', name: 'All Markets' },
    { id: 'jumbi', name: 'Jumbi Market' },
    { id: 'mwanakwerekwe', name: 'Mwanakwerekwe Market' },
    { id: 'kiembesamaki', name: 'Kiembe Samaki Market' },
    { id: 'darajani', name: 'Darajani Market' },
  ];

  const handleGenerateReport = (e) => {
    e.preventDefault();
    console.log('Generating Report with the following criteria:');
    console.log('Report Type:', reportType);
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);

    if (reportType === 'market_sales' || reportType === 'market_owner_performance') {
      console.log('Selected Market:', selectedMarket);
    }
    if (reportType === 'customer_activity') {
      console.log('Customer Status Filter:', customerStatusFilter);
    }

    // In a real application, you would send these parameters to your backend API
    // and then display the generated report data, perhaps in a chart, table, or downloadable format.
    alert(`Report of type "${reportType}" generated successfully for the selected period.`);

    // Simulate fetching and displaying a report (in a real app, this would be dynamic)
    // For demonstration, we'll just show a success message.
  };

  return (
    <div className="container-fluid mt-4">
      <h2 className="mb-4 text-primary">Generate Reports</h2>
      <p className="mb-4 text-muted">Select report type, date range, and apply filters to generate various system reports. These reports provide insights into customer activity, market performance, and more.</p>

      <div className="card shadow-lg p-4 bg-white">
        <form onSubmit={handleGenerateReport}>
          <div className="row mb-4">
            <div className="col-md-6">
              <label htmlFor="reportType" className="form-label">Report Type</label>
              <select
                id="reportType"
                name="reportType"
                className="form-select"
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
                required
              >
                <option value="">-- Select Report Type --</option>
                <optgroup label="Customer Reports">
                  <option value="customer_registration">Customer Registrations</option>
                  <option value="customer_activity">Customer Activity Overview</option>
                </optgroup>
                <optgroup label="Market Reports">
                  <option value="market_sales">Market Sales Performance</option>
                  <option value="market_owner_performance">Market Owner Performance</option>
                  <option value="product_listings">Product Listings Overview</option>
                </optgroup>
                <optgroup label="Order Reports">
                  <option value="total_orders">Total Orders</option>
                  <option value="pending_orders">Pending Orders</option>
                  <option value="completed_orders">Completed Orders</option>
                </optgroup>
                <optgroup label="Financial Reports">
                  <option value="revenue_summary">Revenue Summary</option>
                  <option value="payments_processed">Payments Processed</option>
                </optgroup>
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="startDate" className="form-label">From Date</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                className="form-control"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="endDate" className="form-label">To Date</label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                className="form-control"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Conditional Filters based on Report Type */}
          {(reportType === 'market_sales' || reportType === 'market_owner_performance' || reportType === 'product_listings') && (
            <div className="row mb-4">
              <div className="col-md-6">
                <label htmlFor="selectedMarket" className="form-label">Select Market</label>
                <select
                  id="selectedMarket"
                  name="selectedMarket"
                  className="form-select"
                  value={selectedMarket}
                  onChange={(e) => setSelectedMarket(e.target.value)}
                >
                  {availableMarkets.map(market => (
                    <option key={market.id} value={market.id}>{market.name}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {reportType === 'customer_activity' && (
            <div className="row mb-4">
              <div className="col-md-6">
                <label htmlFor="customerStatusFilter" className="form-label">Customer Status</label>
                <select
                  id="customerStatusFilter"
                  name="customerStatusFilter"
                  className="form-select"
                  value={customerStatusFilter}
                  onChange={(e) => setCustomerStatusFilter(e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
          )}

          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary btn-lg">
              <i className="bi bi-file-earmark-bar-graph me-2"></i>Generate Report
            </button>
          </div>
        </form>

        <hr className="my-5" />

        {/* Report Display Area (Placeholder) */}
        <div className="text-center py-5 bg-light rounded-3">
          <i className="bi bi-bar-chart-line display-1 text-muted mb-3"></i>
          <p className="lead text-muted">Your generated report data will appear here.</p>
          <small className="text-secondary">Select options above and click "Generate Report".</small>
          {/* In a real app, this area would render charts, tables, or data visualizations */}
        </div>

      </div>
    </div>
  );
};

export default GenerateReport;