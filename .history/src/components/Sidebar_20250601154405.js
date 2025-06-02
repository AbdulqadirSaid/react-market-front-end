import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons

const Sidebar = () => {
  return (
    <nav
      className="bg-dark text-white d-flex flex-column p-3"
      style={{ width: '240px', minHeight: 'calc(100vh - 112px)' }}
    >
      <h5 className="mb-4">Navigation</h5>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item mb-2">
          <a href="#dashboard" className="nav-link text-white d-flex align-items-center">
            <i className="bi bi-speedometer2 me-2"></i> Dashboard
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#users" className="nav-link text-white d-flex align-items-center">
            <i className="bi bi-people-fill me-2"></i> Users
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#settings" className="nav-link text-white d-flex align-items-center">
            <i className="bi bi-gear-fill me-2"></i> Settings
          </a>
        </li>
        <li className="nav-item">
          <a href="#reports" className="nav-link text-white d-flex align-items-center">
            <i className="bi bi-bar-chart-line-fill me-2"></i> Reports
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
