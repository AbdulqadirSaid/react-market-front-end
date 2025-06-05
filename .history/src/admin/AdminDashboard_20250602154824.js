// src/admin/AdminDashboard.js (RENAMED FROM Dashboard.js)
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom'; // For rendering nested routes

const Dashboard = () => { // Renamed the component to AdminDashboard
   
    const userRole = 'Admin'; // Hardcoding for demonstration

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <div className="d-flex flex-grow-1">
                {/* Pass the userRole to the Sidebar */}
                <Sidebar userRole={userRole} />
                <main className="flex-grow-1 p-4" style={{ backgroundColor: '#f0f2f5' }}> {/* Light grey background */}
                    <div className="container-fluid"> {/* Use fluid container for full width */}
                        {/* This is the key change:
                            If the path is exactly /admin-dash, the content inside this <Outlet />
                            will be rendered by the 'index' route defined in App.js.
                            We'll put the AdminOverview content directly here for the default view.
                        */}
                        <h1 className="mb-4 display-4 text-primary">Admin Dashboard Overview</h1>

                        {/* Overview / Quick Stats Section */}
                        <section className="row mb-4">
                            <div className="col-md-4 mb-3">
                                <div className="card text-white bg-success p-3 shadow-sm h-100">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-shop display-4 me-3"></i>
                                            <div>
                                                <h5 className="card-title mb-0">Total Vendors</h5>
                                                <p className="card-text fs-3 fw-bold">120</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="card text-white bg-info p-3 shadow-sm h-100">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-box-seam display-4 me-3"></i>
                                            <div>
                                                <h5 className="card-title mb-0">Total Products</h5>
                                                <p className="card-text fs-3 fw-bold">850</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="card text-white bg-warning p-3 shadow-sm h-100">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-cart-check display-4 me-3"></i>
                                            <div>
                                                <h5 className="card-title mb-0">Pending Orders</h5>
                                                <p className="card-text fs-3 fw-bold">15</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Recent Activity/Log Section */}
                        <section className="mb-4">
                            <h2 className="mb-3 text-secondary">Recent Activity</h2>
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">System Log</h5>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Vendor "Spice King" updated product list. <small className="text-muted float-end">5 minutes ago</small></li>
                                        <li className="list-group-item">New customer registered. <small className="text-muted float-end">1 hour ago</small></li>
                                        <li className="list-group-item">Order #ZA2025-0012 processed. <small className="text-muted float-end">3 hours ago</small></li>
                                        <li className="list-group-item">Product "Fresh Cloves 1kg" stock low. <small className="text-muted float-end">Yesterday</small></li>
                                    </ul>
                                    <button className="btn btn-outline-primary mt-3">View Full Log</button>
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

export default Dashboard;