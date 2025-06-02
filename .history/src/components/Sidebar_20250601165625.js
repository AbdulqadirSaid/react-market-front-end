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
      style={{
        width: '240px',
        minHeight: 'calc(100vh - 112px)',
        background: 'linear-gradient(180deg, #0d1b2a 0%, #1b263b 100%)',
        boxShadow: '2px 0 10px rgba(11, 38, 71, 0.8)',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h5 
        style={{ 
          fontWeight: '700', 
          fontSize: '1.3rem', 
          color: '#00d8ff', 
          marginBottom: '1.5rem', 
          letterSpacing: '1px',
          textShadow: '0 0 5px #00d8ff',
        }}
      >
        Navigation
      </h5>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, flexGrow: 1 }}>
        {roleLinks.map((linkItem, index) => (
          <li key={index} style={{ marginBottom: '1rem' }}>
            <Link
              to={linkItem.path}
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: '#00d8ff',
                fontWeight: '600',
                padding: '0.6rem 1rem',
                borderRadius: '8px',
                transition: 'background-color 0.3s ease, color 0.3s ease',
                fontSize: '1rem',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#00e0ff55';
                e.currentTarget.style.color = '#005f73';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#00d8ff';
              }}
            >
              <i 
                className={`bi ${getIconClass(linkItem.icon)}`} 
                style={{ fontSize: '1.3rem', marginRight: '0.8rem', textShadow: '0 0 4px #00d8ff' }} 
              />
              {linkItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
