import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <svg xmlns="http://www.w3.org/2000/svg" className="logo-icon" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2-1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4a1 1 0 00-1-1H6z"
              clipRule="evenodd"
            />
            <path d="M8 5a1 1 0 011 1v3a1 1 0 11-2 0V6a1 1 0 011-1zm4 0a1 1 0 011 1v6a1 1 0 11-2 0V6a1 1 0 011-1z" />
          </svg>
          <h1 className="logo-text">MyLIB</h1>
        </div>

        <nav className="nav">
          <ul className="nav-list">
            <li><button className="nav-item">Home</button></li>
            <li><button className="nav-item">Catalog</button></li>
            <li><button className="nav-item">Services</button></li>
            <li><button className="nav-item">About</button></li>
            <li><button className="nav-item">Contact</button></li>
          </ul>
        </nav>

        <div className="user-actions">
          <input type="text" className="search-input" placeholder="Search books..." />
          <button className="user-icon">
            <span className="material-icons">person</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
