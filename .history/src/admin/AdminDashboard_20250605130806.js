// src/admin/AdminDashboard.js
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    const userRole = 'Admin';

    // Data za mfano zinazohusu masoko ya Jumbi na Mwanakwerekwe
    // Nimezificha hizi za 'Total' kwa sababu hatutazitumia moja kwa moja kwenye kadi kuu za KPIs
    // const totalVendors = 120;
    const activeVendorsJumbi = 70;
    const activeVendorsMwanakwerekwe = 50;

    // const totalProducts = 850;
    const productsJumbi = 450;
    const productsMwanakwerekwe = 400;

    // const pendingOrders = 15;
    const pendingOrdersJumbi = 8;
    const pendingOrdersMwanakwerekwe = 7;

    const totalCustomers = 5000;
    const newRegistrationsToday = 12;

    // const totalRevenueThisMonth = 'Tsh 12.5M';
    const jumbiRevenueThisMonth = 'Tsh 7M';
    const mwanakwerekweRevenueThisMonth = 'Tsh 5.5M';

    const recentActivities = [
        { id: 1, text: 'Vendor "Fresh Fruits Jumbi" updated stock.', time: '5m ago', type: 'success' },
        { id: 2, text: 'New customer from Mwanakwerekwe registered.', time: '1h ago', type: 'info' },
        { id: 3, text: 'Order #MZ2025-0012 (Mwanakwerekwe) processed.', time: '3h ago', type: 'primary' },
    ];

    return (
        <div className="d-flex flex-column vh-100" style={{ backgroundColor: '#e9ecef' }}>
            <Header />
            <div className="d-flex flex-grow-1">
                <Sidebar userRole={userRole} />
                <main className="flex-grow-1 p-3 overflow-hidden">
                    <div className="container-fluid h-100 d-flex flex-column">
                        <h1 className="mb-2 display-6 text-primary fw-bold">
                            <i className="bi bi-shop-window me-2"></i>Zanzibar e-Market Overview
                        </h1>
                        <p className="lead text-muted mb-3 fs-6">
                            Key operational insights for **Jumbi & Mwanakwerekwe Markets**.
                        </p>

                        {/* --- Market-Specific Key Performance Indicators (KPIs) Section --- */}
                        <section className="row mb-3 g-2 flex-grow-0">
                            {/* Wachuuzi - Soko la Jumbi */}
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card text-white bg-success p-3 shadow-sm border-0 rounded-3 h-100 animate__animated animate__fadeInUp">
                                    <div className="card-body p-2">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="card-title mb-0 opacity-75">Jumbi Vendors</h6>
                                            <i className="bi bi-shop display-6"></i>
                                        </div>
                                        <p className="card-text fs-3 fw-bold mb-0">{activeVendorsJumbi}</p>
                                        <small className="opacity-75 d-block">Active in Jumbi</small>
                                    </div>
                                </div>
                            </div>

                            {/* Wachuuzi - Soko la Mwanakwerekwe */}
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card text-white bg-info p-3 shadow-sm border-0 rounded-3 h-100 animate__animated animate__fadeInUp animate__delay-1s">
                                    <div className="card-body p-2">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="card-title mb-0 opacity-75">Mwana Vendors</h6>
                                            <i className="bi bi-shop display-6"></i>
                                        </div>
                                        <p className="card-text fs-3 fw-bold mb-0">{activeVendorsMwanakwerekwe}</p>
                                        <small className="opacity-75 d-block">Active in Mwanakwerekwe</small>
                                    </div>
                                </div>
                            </div>

                            {/* Bidhaa - Soko la Jumbi */}
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card text-white bg-dark p-3 shadow-sm border-0 rounded-3 h-100 animate__animated animate__fadeInUp animate__delay-2s">
                                    <div className="card-body p-2">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="card-title mb-0 opacity-75">Jumbi Products</h6>
                                            <i className="bi bi-boxes display-6"></i>
                                        </div>
                                        <p className="card-text fs-3 fw-bold mb-0">{productsJumbi}</p>
                                        <small className="opacity-75 d-block">Items in Jumbi</small>
                                    </div>
                                </div>
                            </div>

                            {/* Bidhaa - Soko la Mwanakwerekwe */}
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card text-dark bg-light p-3 shadow-sm border-0 rounded-3 h-100 animate__animated animate__fadeInUp animate__delay-3s">
                                    <div className="card-body p-2">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="card-title mb-0">Mwana Products</h6>
                                            <i className="bi bi-boxes display-6 text-secondary"></i>
                                        </div>
                                        <p className="card-text fs-3 fw-bold mb-0">{productsMwanakwerekwe}</p>
                                        <small className="text-muted d-block">Items in Mwanakwerekwe</small>
                                    </div>
                                </div>
                            </div>

                            {/* Maagizo Yanayosubiri - Soko la Jumbi */}
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card text-white bg-danger p-3 shadow-sm border-0 rounded-3 h-100 animate__animated animate__fadeInUp animate__delay-4s">
                                    <div className="card-body p-2">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="card-title mb-0 opacity-75">Jumbi Orders</h6>
                                            <i className="bi bi-cart-x display-6"></i>
                                        </div>
                                        <p className="card-text fs-3 fw-bold mb-0">{pendingOrdersJumbi}</p>
                                        <small className="opacity-75 d-block">Pending in Jumbi</small>
                                    </div>
                                </div>
                            </div>

                            {/* Maagizo Yanayosubiri - Soko la Mwanakwerekwe */}
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card text-white bg-warning p-3 shadow-sm border-0 rounded-3 h-100 animate__animated animate__fadeInUp animate__delay-5s">
                                    <div className="card-body p-2">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="card-title mb-0 opacity-75">Mwana Orders</h6>
                                            <i className="bi bi-cart-x display-6"></i>
                                        </div>
                                        <p className="card-text fs-3 fw-bold mb-0">{pendingOrdersMwanakwerekwe}</p>
                                        <small className="opacity-75 d-block">Pending in Mwanakwerekwe</small>
                                    </div>
                                </div>
                            </div>

                            {/* Mapato - Soko la Jumbi */}
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card text-white bg-primary p-3 shadow-sm border-0 rounded-3 h-100 animate__animated animate__fadeInUp animate__delay-6s">
                                    <div className="card-body p-2">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="card-title mb-0 opacity-75">Jumbi Revenue</h6>
                                            <i className="bi bi-cash-stack display-6"></i>
                                        </div>
                                        <p className="card-text fs-3 fw-bold mb-0">{jumbiRevenueThisMonth}</p>
                                        <small className="opacity-75 d-block">This Month</small>
                                    </div>
                                </div>
                            </div>

                            {/* Mapato - Soko la Mwanakwerekwe */}
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card text-white bg-secondary p-3 shadow-sm border-0 rounded-3 h-100 animate__animated animate__fadeInUp animate__delay-7s">
                                    <div className="card-body p-2">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="card-title mb-0 opacity-75">Mwana Revenue</h6>
                                            <i className="bi bi-cash-stack display-6"></i>
                                        </div>
                                        <p className="card-text fs-3 fw-bold mb-0">{mwanakwerekweRevenueThisMonth}</p>
                                        <small className="opacity-75 d-block">This Month</small>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* --- General Insights & Market Activity Chart --- */}
                        <section className="row mb-3 g-2 flex-grow-1">
                            {/* Total Customers & New Registrations (zikiwa zimeunganishwa kwenye kadi moja yenye sehemu mbili) */}
                            <div className="col-lg-6 col-md-12 h-100">
                                <div className="card shadow-sm p-3 bg-white rounded-3 h-100 animate__animated animate__fadeInUp">
                                    <h6 className="mb-2 text-secondary"><i className="bi bi-people me-1"></i>Customer Insights</h6>
                                    <div className="card-body p-2 d-flex flex-column justify-content-around">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <div>
                                                <h5 className="card-title mb-0 text-dark">Total Customers</h5>
                                                <p className="card-text fs-3 fw-bold text-primary mb-0">{totalCustomers}</p>
                                            </div>
                                            <i className="bi bi-person-circle display-5 text-dark"></i>
                                        </div>
                                        <hr className="my-2 opacity-50" />
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <h5 className="card-title mb-0 text-dark">New Registrations Today</h5>
                                                <p className="card-text fs-3 fw-bold text-success mb-0">{newRegistrationsToday}</p>
                                            </div>
                                            <i className="bi bi-person-plus display-5 text-success"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Overall Market Activity Trend Chart */}
                            <div className="col-lg-6 col-md-12 h-100">
                                <div className="card shadow-sm p-3 bg-white rounded-3 h-100 animate__animated animate__fadeInUp animate__delay-1s">
                                    <h6 className="mb-2 text-secondary"><i className="bi bi-activity me-1"></i>Combined Market Activity</h6>
                                    <div className="text-center py-3 border rounded bg-light flex-grow-1 d-flex align-items-center justify-content-center">
                                        <p className="text-muted small mb-0">
                                            <i className="bi bi-graph-up-arrow display-6 text-warning"></i>
                                            <br />Overall Market Trends Chart Here
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* --- Market-Specific Performance Charts Section (Compact) --- */}
                        <section className="row mb-3 g-2 flex-grow-1">
                            <div className="col-lg-6 h-100">
                                <div className="card shadow-sm p-3 bg-white rounded-3 h-100 animate__animated animate__zoomIn">
                                    <h6 className="mb-2 text-primary"><i className="bi bi-graph-up-arrow me-1"></i>Jumbi Sales Analysis</h6>
                                    <div className="text-center py-3 border rounded-3 bg-light flex-grow-1 d-flex align-items-center justify-content-center">
                                        <p className="text-muted small mb-0">
                                            <i className="bi bi-bar-chart-fill display-6 text-primary mb-1"></i>
                                            <br />Jumbi Sales & Products Chart
                                        </p>
                                    </div>
                                    <button className="btn btn-outline-primary btn-sm mt-2 w-100">View Jumbi Report</button>
                                </div>
                            </div>
                            <div className="col-lg-6 h-100">
                                <div className="card shadow-sm p-3 bg-white rounded-3 h-100 animate__animated animate__zoomIn animate__delay-1s">
                                    <h6 className="mb-2 text-primary"><i className="bi bi-bar-chart-line me-1"></i>Mwana Product Insights</h6>
                                    <div className="text-center py-3 border rounded-3 bg-light flex-grow-1 d-flex align-items-center justify-content-center">
                                        <p className="text-muted small mb-0">
                                            <i className="bi bi-pie-chart-fill display-6 text-success mb-1"></i>
                                            <br />Mwana Categories Chart
                                        </p>
                                    </div>
                                    <button className="btn btn-outline-success btn-sm mt-2 w-100">View Mwana Report</button>
                                </div>
                            </div>
                        </section>

                        {/* --- Recent System Activity (Compact) --- */}
                        <section className="mb-3 animate__animated animate__fadeInUp flex-grow-0">
                            <h6 className="mb-2 text-primary"><i className="bi bi-clock-history me-1"></i>Recent Activity Log</h6>
                            <div className="card shadow-sm p-3 bg-white rounded-3">
                                <div className="card-body p-2">
                                    <ul className="list-group list-group-flush small">
                                        {recentActivities.map((activity) => (
                                            <li key={activity.id} className="list-group-item d-flex justify-content-between align-items-center py-1">
                                                <i className={`bi bi-arrow-right-short text-${activity.type} me-1`}></i> {activity.text}
                                                <small className="text-muted">{activity.time}</small>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* --- Quick Administrative Actions (Compact) --- */}
                        <section className="mb-0 animate__animated animate__fadeInUp flex-grow-0">
                            <h6 className="mb-2 text-primary"><i className="bi bi-tools me-1"></i>Quick Actions</h6>
                            <div className="row g-2">
                                <div className="col-md-4 col-sm-12">
                                    <button className="btn btn-sm btn-success w-100 shadow-sm rounded-3 py-2">
                                        <i className="bi bi-person-plus me-1"></i>New Vendor
                                    </button>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <button className="btn btn-sm btn-info text-white w-100 shadow-sm rounded-3 py-2">
                                        <i className="bi bi-file-earmark-spreadsheet me-1"></i>Market Reports
                                    </button>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <button className="btn btn-sm btn-secondary w-100 shadow-sm rounded-3 py-2">
                                        <i className="bi bi-database-gear me-1"></i>Data Management
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