import React from 'react';
import './HeroSection.css';
const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h2>Welcome to MyLIB Management System</h2>
          <p>Manage your library resources efficiently with our comprehensive management system. Search, borrow, and track books with ease.</p>
          <div className="hero-buttons">
            <button className="button primary">Browse Catalog</button>
            <button className="button secondary">My Loans</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Library Books" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
