import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import $ from 'jquery';
import './Header.scss';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // jQuery for smooth scroll
  useEffect(() => {
    $('a[href^="#"]').on('click', function(e) {
      e.preventDefault();
      const target = $(this.getAttribute('href'));
      if (target.length) {
        $('html, body').stop().animate({
          scrollTop: target.offset().top - 80
        }, 1000);
      }
    });
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/services', label: 'Services' },
    { path: '/dealers', label: 'Dealers' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="contact-info">
                <span><FaPhone /> +91 98745 63210</span>
                <span><FaEnvelope /> sandhya@pharmadist.com</span>
              </div>
            </div>
            <div className="col-md-6 text-end">
              <div className="auth-links">
                <Link to="/login"><FaUser /> Dealer Login</Link>
                <Link to="/cart" className="cart-icon">
                  <FaShoppingCart /> <span className="cart-count">0</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/">
              <img src="/images/logo.png" alt="Pharma Distribution" height="50" />
              <span className="brand-name">MUNICARE<span>AGENCIES</span></span>
            </Link>

            <button 
              className="navbar-toggler" 
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
              <ul className="navbar-nav ms-auto">
                {navLinks.map((link) => (
                  <li className="nav-item" key={link.path}>
                    <Link 
                      className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="header-actions">
                <button className="btn btn-primary quote-btn">
                  Get Quote
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;