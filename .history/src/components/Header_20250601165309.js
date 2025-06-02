import React from 'react';

const Header = () => {
  return (
    <header
      style={{
        background: 'linear-gradient(90deg, #4b6cb7 0%, #182848 100%)',
        boxShadow: '0 4px 12px rgba(24, 40, 72, 0.6)',
        padding: '1.25rem 2rem',
        color: '#ffffff',
      }}
    >
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <h1
          style={{
            fontWeight: '700',
            fontSize: '1.75rem',
            fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            marginBottom: 0,
          }}
        >
          New Market Management System
        </h1>
        {/* You can add additional header controls/icons here in the future */}
      </div>
    </header>
  );
};

export default Header;
