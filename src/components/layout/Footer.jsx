import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' },
      { name: 'Products', path: '/products' },
      { name: 'Services', path: '/services' },
      { name: 'Dealers', path: '/dealers' },
      { name: 'Contact', path: '/contact' }
    ],
    categories: [
      { name: 'Oncology Products', path: '/products?category=oncology' },
      { name: 'Vaccines', path: '/products?category=vaccines' },
      { name: 'Critical Care', path: '/products?category=critical-care' },
      { name: 'Neurology', path: '/products?category=neurology' },
      { name: 'Cardiology', path: '/products?category=cardiology' },
      { name: 'Dermatology', path: '/products?category=dermatology' }
    ],
    policies: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms & Conditions', path: '/terms' },
      { name: 'Return Policy', path: '/returns' },
      { name: 'Shipping Policy', path: '/shipping' },
      { name: 'Quality Assurance', path: '/quality' }
    ]
  };

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row g-4">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-logo">
              <img src="/images/logo-white.png" alt="Pharma Distribution" height="50" />
              <h3 className="brand-name">PHARMA<span>DIST</span></h3>
              <p className="mt-3">
                Leading pharmaceutical distributor in Chennai with over 30 years 
                of experience in medical supplies distribution.
              </p>
            </div>
            <div className="social-links mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Categories */}
          <div className="col-lg-2 col-md-6">
            <div className="footer-links">
              <h4>Products</h4>
              <ul>
                {footerLinks.categories.map((category) => (
                  <li key={category.name}>
                    <Link to={category.path}>{category.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 col-md-6">
            <div className="contact-info">
              <h4>Contact Us</h4>
              <p><FaMapMarkerAlt /> 123 Medical Street, T Nagar, Chennai - 600017</p>
              <p><FaPhone /> +91 44 1234 5678</p>
              <p><FaPhone /> +91 98765 43210 (24/7 Emergency)</p>
              <p><FaEnvelope /> info@pharmadist.com</p>
              <p><FaEnvelope /> sales@pharmadist.com</p>
              
              <div className="newsletter mt-4">
                <h5>Subscribe to Newsletter</h5>
                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Your email" />
                  <button className="btn btn-primary" type="button">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6">
            <div className="certifications">
              <h5>Certifications & Memberships</h5>
              <div className="cert-logos">
                <img src="/images/certifications/iso.png" alt="ISO Certified" height="40" />
                <img src="/images/certifications/gmp.png" alt="GMP Certified" height="40" />
                <img src="/images/certifications/ida.png" alt="IDA Member" height="40" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="payment-methods">
              <h5>Payment Methods</h5>
              <div className="payment-icons">
                <i className="fab fa-cc-visa"></i>
                <i className="fab fa-cc-mastercard"></i>
                <i className="fab fa-cc-amex"></i>
                <i className="fab fa-cc-paypal"></i>
                <span>UPI | Net Banking</span>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>&copy; {currentYear} Pharma Distribution Pvt Ltd. All Rights Reserved. | 
            <Link to="/privacy"> Privacy Policy</Link> | 
            <Link to="/terms"> Terms & Conditions</Link>
          </p>
          <p className="disclaimer">
            *This site is for registered medical practitioners and authorized dealers only. 
            All medicines require valid prescription.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;