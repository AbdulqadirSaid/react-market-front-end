import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import links from './Links';

// Set 'Admin' as the default value for userRole
const Sidebar = ({ userRole = 'Admin' }) => {
  const roleLinks = links[userRole] || [];

  const getIconClass = (iconName) => {
    switch (iconName) {
      case 'dashboard':
        return 'bi-speedometer2';
      case 'users':
        return 'bi-people-fill';
      case 'settings':
        return 'bi-gear-fill';
      case 'reports':
        return 'bi-bar-chart-line-fill';
      case 'box-seam': // Added for 'My Orders' example
        return 'bi-box-seam';
      default:
        return 'bi-circle';
    }
  };

  return (
    <nav
      className="bg-dark text-white d-flex flex-column p-3"
      style={{ width: '240px', minHeight: 'calc(100vh - 112px)' }}
    >
      <h5 className="mb-4">Navigation</h5>
      <ul className="nav nav-pills flex-column">
        {roleLinks.map((linkItem, index) => (
          <li key={index} className="nav-item mb-2">
            <Link to={linkItem.path} className="nav-link text-white d-flex align-items-center">
              <i className={`bi ${getIconClass(linkItem.icon)} me-2`}></i> {linkItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;