// src/admin/AdminDashboard.js
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

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

    const totalRevenueThisMonth = 'Tsh 12.5M'; // Kufupisha
    const jumbiRevenueThisMonth = 'Tsh 7M'; // Kufupisha
    const mwanakwerekweRevenueThisMonth = 'Tsh 5.5M'; // Kufupisha

    const recentActivities = [
        { id: 1, text: 'Vendor "Fresh Fruits Jumbi" updated stock.', time: '5m ago', type: 'success' }, // Kufupisha
        { id: 2, text: 'New customer from Mwanakwerekwe registered.', time: '1h ago', type: 'info' }, // Kufupisha
        { id: 3, text: 'Order #MZ2025-0012 (Mwanakwerekwe) processed.', time: '3h ago', type: 'primary' }, // Kufupisha
    ];
    // Zimepunguzwa kuwa 3 tu kwa ajili ya compact view.

    return (
        <div className="d-flex flex-column vh-100" style={{ backgroundColor: '#e9ecef' }}> {/* vh-100 instead of min-vh-100 */}
            <Header />
            <div className="d-flex flex-grow-1">
                <Sidebar userRole={userRole} />
                <main className="flex-grow-1 p-3 overflow-hidden"> {/* Punguza padding, overflow-hidden */}
                    <div className="container-fluid h-100 d-flex flex-column"> {/* h-100 na flex-column */}
                        <h1 className="mb-2 display-6 text-primary fw-bold"> {/* Punguza ukubwa wa kichwa */}
                            <i className="bi bi-shop-window me-2"></i>Zanzibar e-Market Overview
                        </h1>
                        <p className="lead text-muted mb-3 fs-6"> {/* Punguza ukubwa wa lead text */}
                            Key insights for **Jumbi & Mwanakwerekwe Markets**.
                        </p>

                        {/* --- Executive Summary / Key Performance Indicators (KPIs) Section --- */}
                        <section className="row mb-3 g-2 flex-grow-0"> {/* Punguza margin na gap */}
                            {/* Kadi ya Jumla ya Wachuuzi */}
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card text-white bg-success p-3 shadow-sm border-0 rounded-3 h-100 animate__animated animate__fadeInUp"> {/* Punguza padding, shadow, rounded */}
                                    <div className="card-body p-2"> {/* Punguza padding ndani ya card-body */}
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="card-title mb-0 opacity-75">Total Vendors</h6> {/* Punguza ukubwa wa kichwa cha card */}
                                            <i className="bi bi-person-check display-6"></i> {/* Punguza ukubwa wa icon */}
                                        </div>
                                        <p className="card-text fs-3 fw-bold mb-0">{totalVendors}</p> {/* Punguza ukubwa wa namba */}
                                        <small className="opacity-75 d-block">Jumbi: {activeVendorsJumbi} | Mwana: {activeVendorsMwanakwerekwe}</small> {/* Kufupisha "Mwanakwerekwe" */}
                                    </div>
                                </div>
                            </div>

                            {/* Kadi ya Jumla ya Bidhaa */}
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card text-white bg-info p-3 shadow-sm border-0 rounded-3 h-100 animate__animated animate__fadeInUp animate__delay-1s">
                                    <div className="card-body p-2">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="card-title mb-0 opacity-75">Total Products</h6>
                                            <i className="bi bi-box-seam display-6"></i>
                                        </div>
                                        <p className="card-text fs-3 fw-bold mb-0">{totalProducts}</p>
                                        <small className="opacity-75 d-block">Jumbi: {productsJumbi} | Mwana: {productsMwanakwerekwe}</small>
                                    </div>
                                </div>
                            </div>

                            {/* Kadi ya Jumla ya Maagizo Yanayosubiri */}
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card text-white bg-warning p-3 shadow-sm border-0 rounded-3 h-100 animate__animated animate__fadeInUp animate__delay-2s">
                                    <div className="card-body p-2">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="card-title mb-0 opacity-75">Pending Orders</h6>
                                            <i className="bi bi-cart-x display-6"></i>
                                        </div>
                                        <p className="card-text fs-3 fw-bold mb-0">{pendingOrders}</p>
                                        <small className="opacity-75 d-block">Jumbi: {pendingOrdersJumbi} | Mwana: {pendingOrdersMwanakwerekwe}</small>
                                    </div>
                                </div>
                            </div>

                            {/* Kadi ya Jumla ya Mapato ya Mwezi */}
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card text-white bg-primary p-3 shadow-sm border-0 rounded-3 h-100 animate__animated animate__fadeInUp animate__delay-3s">
                                    <div className="card-body p-2">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="card-title mb-0 opacity-75">Monthly Revenue</h6>
                                            <i className="bi bi-cash-stack display-6"></i>
                                        </div>
                                        <p className="card-text fs-3 fw-bold mb-0">{totalRevenueThisMonth}</p>
                                        <small className="opacity-75 d-block">Jumbi: {jumbiRevenueThisMonth} | Mwana: {mwanakwerekweRevenueThisMonth}</small>
                                    </div>
                                </div>
                            </div>

                            {/* Kadi mpya kwa Total Customers */}
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card text-white bg-dark p-3 shadow-sm border-0 rounded-3 h-100 animate__animated animate__fadeInUp animate__delay-4s">
                                    <div className="card-body p-2">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="card-title mb-0 opacity-75">Total Customers</h6>
                                            <i className="bi bi-person-lines-fill display-6"></i>
                                        </div>
                                        <p className="card-text fs-3 fw-bold mb-0">{totalCustomers}</p>
                                        <small className="opacity-75 d-block">Overall registered users</small>
                                    </div>
                                </div>
                            </div>

                            {/* Kadi mpya kwa New Registrations Today */}
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="card text-dark bg-light p-3 shadow-sm border-0 rounded-3 h-100 animate__animated animate__fadeInUp animate__delay-5s">
                                    <div className="card-body p-2">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="card-title mb-0">New Registrations</h6>
                                            <i className="bi bi-person-plus-fill display-6 text-secondary"></i>
                                        </div>
                                        <p className="card-text fs-3 fw-bold mb-0">{newRegistrationsToday}</p>
                                        <small className="text-muted d-block">Today's new users</small>
                                    </div>
                                </div>
                            </div>

                            {/* Overall Market Activity Trend - sasa imepunguzwa ukubwa (col-lg-6) na inahifadhi nafasi */}
                            <div className="col-lg-6 col-md-12">
                                <div className="card shadow-sm p-3 bg-white rounded-3 h-100 animate__animated animate__fadeInUp animate__delay-6s">
                                    <h6 className="mb-2 text-secondary"><i className="bi bi-activity me-1"></i>Overall Market Activity</h6>
                                    <div className="text-center py-3 border rounded bg-light">
                                        <p className="text-muted small mb-0">
                                            <i className="bi bi-graph-up-arrow display-6 text-warning"></i>
                                            <br />Combined Market Trends Chart Here
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* --- Market-Specific Performance Charts Section (Compact) --- */}
                        <section className="row mb-3 g-2 flex-grow-1"> {/* Flex-grow-1 ili ichukue nafasi iliyobaki */}
                            <div className="col-lg-6 h-100"> {/* H-100 ili kadi zijaze nafasi */}
                                <div className="card shadow-sm p-3 bg-white rounded-3 h-100 animate__animated animate__zoomIn">
                                    <h6 className="mb-2 text-primary"><i className="bi bi-graph-up-arrow me-1"></i>Jumbi Market Sales</h6>
                                    <div className="text-center py-3 border rounded-3 bg-light flex-grow-1 d-flex align-items-center justify-content-center"> {/* Centered content */}
                                        <p className="text-muted small mb-0">
                                            <i className="bi bi-bar-chart-fill display-6 text-primary mb-1"></i>
                                            <br />Jumbi Sales & Products Chart
                                        </p>
                                    </div>
                                    <button className="btn btn-outline-primary btn-sm mt-2 w-100">View Jumbi Report</button> {/* Button ndogo */}
                                </div>
                            </div>
                            <div className="col-lg-6 h-100">
                                <div className="card shadow-sm p-3 bg-white rounded-3 h-100 animate__animated animate__zoomIn animate__delay-1s">
                                    <h6 className="mb-2 text-primary"><i className="bi bi-bar-chart-line me-1"></i>Mwanakwerekwe Insights</h6>
                                    <div className="text-center py-3 border rounded-3 bg-light flex-grow-1 d-flex align-items-center justify-content-center">
                                        <p className="text-muted small mb-0">
                                            <i className="bi bi-pie-chart-fill display-6 text-success mb-1"></i>
                                            <br />Mwanakwerekwe Categories Chart
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
                                    <ul className="list-group list-group-flush small"> {/* Fonti ndogo */}
                                        {recentActivities.map((activity) => (
                                            <li key={activity.id} className="list-group-item d-flex justify-content-between align-items-center py-1"> {/* Padding ndogo */}
                                                <i className={`bi bi-arrow-right-short text-${activity.type} me-1`}></i> {activity.text}
                                                <small className="text-muted">{activity.time}</small>
                                            </li>
                                        ))}
                                    </ul>
                                    {/* <button className="btn btn-outline-primary mt-2 btn-sm w-100">View All Log</button> */} {/* Imeondolewa au kuwekwa comment ili kupunguza nafasi */}
                                </div>
                            </div>
                        </section>

                        {/* --- Quick Administrative Actions (Compact) --- */}
                        <section className="mb-0 animate__animated animate__fadeInUp flex-grow-0"> {/* Punguza margin-bottom */}
                            <h6 className="mb-2 text-primary"><i className="bi bi-tools me-1"></i>Quick Actions</h6>
                            <div className="row g-2"> {/* Punguza gap */}
                                <div className="col-md-4 col-sm-12">
                                    <button className="btn btn-sm btn-success w-100 shadow-sm rounded-3 py-2"> {/* Punguza ukubwa wa button */}
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