import React from 'react';

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <a
            className="nav-bar-brand"
            href="https://www.google.com/"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Employee Management System
          </a>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
