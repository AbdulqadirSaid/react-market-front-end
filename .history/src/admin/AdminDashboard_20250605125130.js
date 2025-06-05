// src/admin/AdminDashboard.js
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

// Jina la component sasa ni Dashboard kama ulivyoomba
const Dashboard = () => {
    const userRole = 'Admin';

    // Data za mfano zinazohusu masoko ya Jumbi na Mwanakwerekwe
    const totalVendors = 120;
    const activeVendorsJumbi = 70;
    const activeVendorsMwanakwerekwe = 50;

    const totalProducts = 850;
    const productsJumbi = 450;
    const productsMwanakwerekwe = 400;

    const pendingOrders = 15;
    const pendingOrdersJumbi = 8;
    const pendingOrdersMwanakwerekwe = 7;

    const totalCustomers = 5000;
    const newRegistrationsToday = 12;

    const totalRevenueThisMonth = 'Tsh 12,500,000'; // Mfano wa mapato
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
        <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: '#e9ecef' }}> {/* Light grey background */}
            <Header />
            <div className="d-flex flex-grow-1">
                <Sidebar userRole={userRole} />
                <main className="flex-grow-1 p-4 overflow-auto"> {/* Main content area with scroll */}
                    <div className="container-fluid">
                        <h1 className="mb-4 display-4 text-primary fw-bold">
                            <i className="bi bi-shop-window me-3"></i>Zanzibar e-Market Central Dashboard
                        </h1>
                        <p className="lead text-muted mb-5">
                            Real-time insights and operational overview for **Jumbi and Mwanakwerekwe Markets**.
                        </p>

                        {/* --- Executive Summary / Key Performance Indicators (KPIs) Section --- */}
                        <section className="row mb-5 g-4"> {/* Added gap for spacing */}
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card bg-gradient-success text-white p-3 shadow-lg border-0 rounded-4 h-100 animate__animated animate__fadeInUp">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-person-check display-5 me-3"></i>
                                            <div>
                                                <h5 className="card-title mb-0 opacity-75">Total Active Vendors</h5>
                                                <p className="card-text fs-2 fw-bold">{totalVendors}</p>
                                                <small>Jumbi: {activeVendorsJumbi} | Mwanakwerekwe: {activeVendorsMwanakwerekwe}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card bg-gradient-info text-white p-3 shadow-lg border-0 rounded-4 h-100 animate__animated animate__fadeInUp animate__delay-1s">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-box-seam display-5 me-3"></i>
                                            <div>
                                                <h5 className="card-title mb-0 opacity-75">Total Products Listed</h5>
                                                <p className="card-text fs-2 fw-bold">{totalProducts}</p>
                                                <small>Jumbi: {productsJumbi} | Mwanakwerekwe: {productsMwanakwerekwe}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card bg-gradient-warning text-dark p-3 shadow-lg border-0 rounded-4 h-100 animate__animated animate__fadeInUp animate__delay-2s">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-cart-check display-5 me-3"></i>
                                            <div>
                                                <h5 className="card-title mb-0 opacity-75">Orders Pending Action</h5>
                                                <p className="card-text fs-2 fw-bold">{pendingOrders}</p>
                                                <small>Jumbi: {pendingOrdersJumbi} | Mwanakwerekwe: {pendingOrdersMwanakwerekwe}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card bg-gradient-primary text-white p-3 shadow-lg border-0 rounded-4 h-100 animate__animated animate__fadeInUp animate__delay-3s">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-cash-stack display-5 me-3"></i>
                                            <div>
                                                <h5 className="card-title mb-0 opacity-75">Monthly Revenue</h5>
                                                <p className="card-text fs-2 fw-bold">{totalRevenueThisMonth}</p>
                                                <small>Jumbi: {jumbiRevenueThisMonth} | Mwanakwerekwe: {mwanakwerekweRevenueThisMonth}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                             {/* Adding a new card for Total Customers and New Registrations to use the variables */}
                            <div className="col-lg-6 col-md-12">
                                <div className="card bg-gradient-dark text-white p-3 shadow-lg border-0 rounded-4 h-100 animate__animated animate__fadeInUp animate__delay-4s">
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
                                <div className="card shadow-lg p-4 bg-white rounded-4 h-100 animate__animated animate__fadeInUp animate__delay-5s">
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

                        {/* --- Market-Specific Performance Section --- */}
                        <section className="row mb-5 g-4">
                            <div className="col-lg-6">
                                <div className="card shadow-lg p-4 bg-white rounded-4 h-100 animate__animated animate__fadeInLeft">
                                    <h4 className="mb-4 text-secondary"><i className="bi bi-graph-up-arrow me-2"></i>Jumbi Market Performance</h4>
                                    <div className="text-center py-5 border rounded bg-light">
                                        <p className="text-muted">
                                            <i className="bi bi-bar-chart-fill display-6 text-primary"></i>
                                            <br /> **Jumbi Market** Sales & Product Trends Chart will be displayed here.
                                            <br /> (e.g., specific to Jumbi market data)
                                        </p>
                                        <ul className="list-unstyled text-start mx-auto" style={{ maxWidth: '300px' }}>
                                            <li>**Active Vendors:** {activeVendorsJumbi}</li>
                                            <li>**Total Products:** {productsJumbi}</li>
                                            <li>**Pending Orders:** {pendingOrdersJumbi}</li>
                                            <li>**Monthly Revenue:** {jumbiRevenueThisMonth}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card shadow-lg p-4 bg-white rounded-4 h-100 animate__animated animate__fadeInRight">
                                    <h4 className="mb-4 text-secondary"><i className="bi bi-bar-chart-line me-2"></i>Mwanakwerekwe Market Performance</h4>
                                    <div className="text-center py-5 border rounded bg-light">
                                        <p className="text-muted">
                                            <i className="bi bi-pie-chart-fill display-6 text-success"></i>
                                            <br /> **Mwanakwerekwe Market** Sales & Product Categories Chart will be displayed here.
                                            <br /> (e.g., specific to Mwanakwerekwe market data)
                                        </p>
                                        <ul className="list-unstyled text-start mx-auto" style={{ maxWidth: '300px' }}>
                                            <li>**Active Vendors:** {activeVendorsMwanakwerekwe}</li>
                                            <li>**Total Products:** {productsMwanakwerekwe}</li>
                                            <li>**Pending Orders:** {pendingOrdersMwanakwerekwe}</li>
                                            <li>**Monthly Revenue:** {mwanakwerekweRevenueThisMonth}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* --- Recent System Activity --- */}
                        <section className="mb-5 animate__animated animate__fadeInUp">
                            <h2 className="mb-4 text-primary"><i className="bi bi-clock-history me-2"></i>Recent System Activity Log</h2>
                            <div className="card shadow-lg p-4 bg-white rounded-4">
                                <div className="card-body">
                                    <h5 className="card-title text-dark mb-3">Key System Events</h5>
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


                        {/* This Outlet will render specific sub-pages when their routes are matched */}
                        <Outlet />
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

// Exporting kama 'Dashboard'
export default Dashboard;