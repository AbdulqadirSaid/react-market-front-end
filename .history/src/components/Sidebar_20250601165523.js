import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import links from './Links';

const Sidebar = ({ userRole = 'Customer' }) => {
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
      case 'box-seam':
        return 'bi-box-seam';
      default:
        return 'bi-circle';
    }
  };

  return (
    <nav
      className="bg-gradient text-white d-flex flex-column p-3"
      style={{ width: '240px', minHeight: 'calc(100vh - 112px)', boxShadow: '2px 0 10px rgba(0, 0, 0, 0.2)' }}
    >
      <h5 className="mb-4" style={{ fontWeight: '600', fontSize: '1.25rem' }}>Navigation</h5>
      <ul className="nav nav-pills flex-column">
        {roleLinks.map((linkItem, index) => (
          <li key={index} className="nav-item mb-2">
            <Link
              to={linkItem.path}
              className="nav-link text-white d-flex align-items-center"
              style={{
                padding: '10px 15px',
                borderRadius: '5px',
                transition: 'background-color 0.3s',
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <i className={`bi ${getIconClass(linkItem.icon)} me-2`} style={{ fontSize: '1.2rem' }}></i>
              {linkItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
