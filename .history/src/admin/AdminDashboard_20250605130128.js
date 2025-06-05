// src/admin/AdminDashboard.js
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    const userRole = 'Admin';

    // Data za mfano zinazohusu masoko ya Jumbi na Mwanakwerekwe
    const totalVendors = 120; // Hii sasa itatumika!
    const activeVendorsJumbi = 70;
    const activeVendorsMwanakwerekwe = 50;

    const totalProducts = 850; // Hii sasa itatumika!
    const productsJumbi = 450;
    const productsMwanakwerekwe = 400;

    const pendingOrders = 15; // Hii sasa itatumika!
    const pendingOrdersJumbi = 8;
    const pendingOrdersMwanakwerekwe = 7;

    const totalCustomers = 5000;
    const newRegistrationsToday = 12;

    const totalRevenueThisMonth = 'Tsh 12,500,000'; // Hii sasa itatumika!
    const jumbiRevenueThisMonth = 'Tsh 7,000,000';
    const mwanakwerekweRevenueThisMonth = 'Tsh 5,500,000';

    const recentActivities = [
        { id: 1, text: 'Vendor "Fresh Fruits Jumbi" updated product stock.', time: '5 minutes ago', type: 'success' },
        { id: 2, text: 'New customer registered from Mwanakwerekwe.', time: '1 hour ago', type: 'info' },
        { id: 3, text: 'Order #MZ2025-0012 (Mwanakwerekwe) processed.', time: '3 hours ago', type: 'primary' },
        { id: 4, text: 'Product "Seaweed 1kg" (Jumbi) stock low.', time: 'Yesterday', type: 'warning' },
        { id: 5, text: 'Market Owner "Binti Kiziwi" account reviewed.', time: '2 days ago', type: 'secondary' },
        { id: 6, text: 'New vendor registration pending approval in Jumbi.', time: '3 days ago', type: 'danger' },
    ];

    return (
        <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: '#e9ecef' }}>
            <Header />
            <div className="d-flex flex-grow-1">
                <Sidebar userRole={userRole} />
                <main className="flex-grow-1 p-4 overflow-auto">
                    <div className="container-fluid">
                        <h1 className="mb-4 display-4 text-primary fw-bold">
                            <i className="bi bi-shop-window me-3"></i>Zanzibar e-Market Performance Overview
                        </h1>
                        <p className="lead text-muted mb-5">
                            A comprehensive glance at the operational efficiency and impact of **Jumbi and Mwanakwerekwe Markets**.
                        </p>

                        {/* --- Executive Summary / Key Performance Indicators (KPIs) Section --- */}
                        <section className="row mb-5 g-4">
                            {/* Kadi ya Jumla ya Wachuuzi - Iliyoboreshwa kutumia totalVendors */}
                            <div className="col-lg-6 col-md-12">
                                <div className="card text-white bg-success p-4 shadow-lg border-0 rounded-4 h-100 animate__animated animate__fadeInLeft">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <h4 className="card-title mb-0 opacity-75"><i className="bi bi-people me-2"></i>Total Active Vendors</h4>
                                            <i className="bi bi-person-check display-4"></i>
                                        </div>
                                        <p className="card-text fs-1 fw-bold mb-0">{totalVendors}</p>
                                        <small className="opacity-75">Jumbi: {activeVendorsJumbi} | Mwanakwerekwe: {activeVendorsMwanakwerekwe}</small>
                                    </div>
                                </div>
                            </div>

                            {/* Kadi ya Jumla ya Bidhaa - Iliyoboreshwa kutumia totalProducts */}
                            <div className="col-lg-6 col-md-12">
                                <div className="card text-white bg-info p-4 shadow-lg border-0 rounded-4 h-100 animate__animated animate__fadeInRight">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <h4 className="card-title mb-0 opacity-75"><i className="bi bi-box-seam me-2"></i>Total Products Listed</h4>
                                            <i className="bi bi-boxes display-4"></i>
                                        </div>
                                        <p className="card-text fs-1 fw-bold mb-0">{totalProducts}</p>
                                        <small className="opacity-75">Jumbi: {productsJumbi} | Mwanakwerekwe: {productsMwanakwerekwe}</small>
                                    </div>
                                </div>
                            </div>

                            {/* Kadi ya Maagizo Yanayosubiri Jumla - Iliyoboreshwa kutumia pendingOrders */}
                            <div className="col-lg-6 col-md-12">
                                <div className="card text-white bg-danger p-4 shadow-lg border-0 rounded-4 h-100 animate__animated animate__fadeInLeft animate__delay-1s">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <h4 className="card-title mb-0 opacity-75"><i className="bi bi-cart-x me-2"></i>Total Pending Orders</h4>
                                            <i className="bi bi-truck display-4"></i>
                                        </div>
                                        <p className="card-text fs-1 fw-bold mb-0">{pendingOrders}</p>
                                        <small className="opacity-75">Jumbi: {pendingOrdersJumbi} | Mwanakwerekwe: {pendingOrdersMwanakwerekwe}</small>
                                    </div>
                                </div>
                            </div>

                            {/* Kadi ya Mapato ya Mwezi Jumla - Iliyoboreshwa kutumia totalRevenueThisMonth */}
                            <div className="col-lg-6 col-md-12">
                                <div className="card text-white bg-primary p-4 shadow-lg border-0 rounded-4 h-100 animate__animated animate__fadeInRight animate__delay-1s">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <h4 className="card-title mb-0 opacity-75"><i className="bi bi-cash-stack me-2"></i>Total Monthly Revenue</h4>
                                            <i className="bi bi-currency-dollar display-4"></i>
                                        </div>
                                        <p className="card-text fs-1 fw-bold mb-0">{totalRevenueThisMonth}</p>
                                        <small className="opacity-75">Jumbi: {jumbiRevenueThisMonth} | Mwanakwerekwe: {mwanakwerekweRevenueThisMonth}</small>
                                    </div>
                                </div>
                            </div>

                             {/* Adding a new card for Total Customers and New Registrations to use the variables */}
                            <div className="col-lg-6 col-md-12">
                                <div className="card bg-gradient-dark text-white p-4 shadow-lg border-0 rounded-4 h-100 animate__animated animate__fadeInUp animate__delay-2s">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <h5 className="card-title mb-0 opacity-75">Total Customers</h5>
                                                <p className="card-text fs-2 fw-bold">{totalCustomers}</p>
                                            </div>
                                            <i className="bi bi-person-lines-fill display-5 ms-3"></i>
                                        </div>
                                        <hr className="opacity-25" />
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <h5 className="card-title mb-0 opacity-75">New Registrations Today</h5>
                                                <p className="card-text fs-2 fw-bold">{newRegistrationsToday}</p>
                                            </div>
                                            <i className="bi bi-person-plus-fill display-5 ms-3"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             {/* Placeholder for an overall market health or trend chart */}
                            <div className="col-lg-6 col-md-12">
                                <div className="card shadow-lg p-4 bg-white rounded-4 h-100 animate__animated animate__fadeInUp animate__delay-3s">
                                    <h4 className="mb-4 text-secondary"><i className="bi bi-activity me-2"></i>Overall Market Activity Trend</h4>
                                    <div className="text-center py-5 border rounded bg-light">
                                        <p className="text-muted">
                                            <i className="bi bi-graph-up-arrow display-6 text-warning"></i>
                                            <br /> Combined Market Activity Chart (e.g., daily transactions, user engagement).
                                            <br /> (This chart would integrate data from both Jumbi and Mwanakwerekwe)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* --- Market-Specific Performance Charts Section --- */}
                        <section className="row mb-5 g-4">
                            <div className="col-lg-6">
                                <div className="card shadow-lg p-4 bg-white rounded-4 h-100 animate__animated animate__zoomIn">
                                    <h4 className="mb-4 text-primary"><i className="bi bi-graph-up-arrow me-2"></i>Jumbi Market Monthly Sales Analysis</h4>
                                    <div className="text-center py-5 border rounded-3 bg-light">
                                        <p className="text-muted lead">
                                            <i className="bi bi-bar-chart-fill display-3 text-primary mb-3"></i>
                                            <br /> Detailed sales performance for **Jumbi Market** will be visualized here.
                                            <br /> (e.g., monthly sales volume, top-selling products)
                                        </p>
                                        <button className="btn btn-outline-primary btn-sm mt-3">View Full Jumbi Sales Report</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card shadow-lg p-4 bg-white rounded-4 h-100 animate__animated animate__zoomIn animate__delay-1s">
                                    <h4 className="mb-4 text-primary"><i className="bi bi-bar-chart-line me-2"></i>Mwanakwerekwe Market Product Insights</h4>
                                    <div className="text-center py-5 border rounded-3 bg-light">
                                        <p className="text-muted lead">
                                            <i className="bi bi-pie-chart-fill display-3 text-success mb-3"></i>
                                            <br /> Product category and sales breakdown for **Mwanakwerekwe Market**.
                                            <br /> (e.g., market share by product category, popular items)
                                        </p>
                                        <button className="btn btn-outline-success btn-sm mt-3">View Full Mwanakwerekwe Report</button>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* --- Recent System Activity --- */}
                        <section className="mb-5 animate__animated animate__fadeInUp">
                            <h2 className="mb-4 text-primary"><i className="bi bi-clock-history me-2"></i>Recent System Activity Log</h2>
                            <div className="card shadow-lg p-4 bg-white rounded-4">
                                <div className="card-body">
                                    <h5 className="card-title text-dark mb-3">Key Events Across Markets</h5>
                                    <ul className="list-group list-group-flush">
                                        {recentActivities.map((activity) => (
                                            <li key={activity.id} className="list-group-item d-flex justify-content-between align-items-center">
                                                <i className={`bi bi-arrow-right-short text-${activity.type} me-2`}></i> {activity.text}
                                                <small className="text-muted">{activity.time}</small>
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="btn btn-outline-primary mt-4 btn-sm">
                                        <i className="bi bi-list-nested me-2"></i>View Comprehensive Log
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* --- Quick Administrative Actions --- */}
                        <section className="mb-5 animate__animated animate__fadeInUp">
                            <h2 className="mb-4 text-primary"><i className="bi bi-tools me-2"></i>Quick Administrative Actions</h2>
                            <div className="row g-3">
                                <div className="col-md-4 col-sm-6">
                                    <button className="btn btn-lg btn-block btn-success w-100 shadow-sm rounded-3 py-3">
                                        <i className="bi bi-person-plus me-2"></i>Register New Vendor
                                    </button>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <button className="btn btn-lg btn-block btn-info text-white w-100 shadow-sm rounded-3 py-3">
                                        <i className="bi bi-file-earmark-spreadsheet me-2"></i>Generate Market Reports
                                    </button>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <button className="btn btn-lg btn-block btn-secondary w-100 shadow-sm rounded-3 py-3">
                                        <i className="bi bi-database-gear me-2"></i>System Data Management
                                    </button>
                                </div>
                            </div>
                        </section>

                        <Outlet />
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;