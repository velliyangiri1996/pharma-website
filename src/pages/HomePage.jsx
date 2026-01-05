import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import ProductsShowcase from '../components/home/ProductsShowcase';
import Testimonials from '../components/home/Testimonials';
import { FaTruck, FaShieldAlt, FaHandsHelping, FaAward } from 'react-icons/fa';

const HomePage = () => {
  const features = [
    {
      icon: <FaTruck />,
      title: 'Fast Delivery',
      description: '24/7 delivery across Chennai and Tamil Nadu'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Quality Assured',
      description: 'All products from authorized manufacturers'
    },
    {
      icon: <FaHandsHelping />,
      title: 'Dealer Support',
      description: 'Complete support for our dealer network'
    },
    {
      icon: <FaAward />,
      title: '30+ Years Experience',
      description: 'Trusted pharmaceutical distributor since 1990'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pharmaceutical Distribution | Medical Supplies Distributor</title>
        <meta name="description" content="Leading pharmaceutical distributor in Chennai with 30+ years experience. Authorized stockist for all major pharma companies." />
      </Helmet>

      <HeroSection />

      {/* Features Section */}
      <section className="features-section py-5">
        <div className="container">
          <div className="row g-4">
            {features.map((feature, index) => (
              <div className="col-md-3 col-sm-6" key={index}>
                <div className="feature-card text-center">
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesSection />

      <ProductsShowcase />

      {/* About Section */}
      <section className="about-section py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title">Leading Pharmaceutical Distributor</h2>
              <p className="lead">
                With over 30 years of experience in pharmaceutical distribution, 
                we are one of Chennai's most trusted medical supplies distributors.
              </p>
              <ul className="about-list">
                <li>20,000 sq ft warehouse space</li>
                <li>500 sq ft cold storage facility</li>
                <li>Authorized stockist for 100+ companies</li>
                <li>24/7 emergency supply service</li>
                <li>Coverage across South India</li>
              </ul>
              <a href="/about" className="btn btn-primary">Learn More About Us</a>
            </div>
            <div className="col-lg-6">
              <img 
                src="/images/warehouse.jpg" 
                alt="Our Warehouse" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Brands Section */}
      <section className="brands-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Authorized Distributor For</h2>
          <div className="brands-slider">
            {['Cipla', 'Sun Pharma', 'Dr. Reddy\'s', 'Lupin', 'GlaxoSmithKline', 'Pfizer', 'Novartis', 'Abbott'].map((brand) => (
              <div className="brand-logo" key={brand}>
                <img 
                  src={`/images/company-logos/${brand.toLowerCase().replace(/\s+/g, '-')}.png`} 
                  alt={brand}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;