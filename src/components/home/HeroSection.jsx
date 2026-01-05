import React from 'react';

const HeroSection = () => {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="hero-content text-center">
          <h1>Leading Pharmaceutical Distributor in Chennai</h1>
          <p className="lead">30+ Years of Excellence in Medical Supplies Distribution</p>
          <div className="hero-buttons">
            <a href="/products" className="btn btn-primary btn-lg me-3">View Products</a>
            <a href="/contact" className="btn btn-outline-light btn-lg">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
