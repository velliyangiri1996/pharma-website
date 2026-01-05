import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaSyringe, FaHeartbeat, FaBrain, FaAllergies, FaBaby, FaEye, FaTruck, FaUserMd, FaHeadset, FaShieldAlt, FaTemperatureLow, FaClipboardCheck } from 'react-icons/fa';

const ServicesPage = () => {
  const mainServices = [
    {
      icon: <FaSyringe />,
      title: 'Vaccine Distribution',
      description: 'Complete cold chain management for vaccines with temperature monitoring and validation.',
      features: ['2-8°C storage', 'Temperature monitoring', 'Vaccine validation', 'Emergency delivery']
    },
    {
      icon: <FaHeartbeat />,
      title: 'Oncology Supply Chain',
      description: 'Specialized handling and distribution of oncology medications with patient support.',
      features: ['Chemotherapy drugs', 'Targeted therapies', 'Patient assistance', 'Clinical support']
    },
    {
      icon: <FaBrain />,
      title: 'Neurology Specialities',
      description: 'Complete range of neurology and psychiatry medications with expert guidance.',
      features: ['Anti-epileptics', 'Neuro-protectives', 'Psychiatric drugs', 'Therapy management']
    }
  ];

  const supportServices = [
    {
      icon: <FaTruck />,
      title: '24/7 Emergency Delivery',
      description: 'Round-the-clock emergency medicine delivery service for hospitals and clinics.'
    },
    {
      icon: <FaUserMd />,
      title: 'Medical Representative Support',
      description: 'On-ground support for pharmaceutical companies and their medical representatives.'
    },
    {
      icon: <FaHeadset />,
      title: 'Technical Support',
      description: 'Product information, dosage guidance, and therapeutic support for healthcare professionals.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Quality Assurance',
      description: 'Rigorous quality checks and documentation for all pharmaceutical products.'
    }
  ];

  const coldChainServices = [
    {
      title: 'Temperature-Controlled Storage',
      details: ['2-8°C Cold Room (500 sq ft)', '15-25°C Controlled Room', 'Temperature Monitoring 24/7']
    },
    {
      title: 'Cold Chain Transportation',
      details: ['Refrigerated Vehicles', 'Temperature Data Loggers', 'Emergency Backup Systems']
    },
    {
      title: 'Validation & Compliance',
      details: ['IQ/OQ/PQ Validation', 'Regulatory Compliance', 'Audit Support']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pharmaceutical Services | Medical Distribution Solutions</title>
        <meta name="description" content="Comprehensive pharmaceutical services including cold chain management, oncology distribution, and 24/7 emergency delivery." />
      </Helmet>

      {/* Hero Section */}
      <section className="page-hero services-hero">
        <div className="container">
          <h1>Our Pharmaceutical Services</h1>
          <p>Comprehensive distribution and support solutions for healthcare providers</p>
        </div>
      </section>

      {/* Main Services */}
      <section className="main-services py-5">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="section-title">Specialized Distribution Services</h2>
            <p className="section-subtitle">Tailored solutions for different therapeutic areas</p>
          </div>
          
          <div className="row g-4">
            {mainServices.map((service, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="service-detail-card">
                  <div className="service-icon-main">
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  
                  <div className="service-features">
                    <h5>Key Features:</h5>
                    <ul>
                      {service.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="btn btn-outline-primary">
                    Request Service Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="support-services py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-5">Additional Support Services</h2>
          
          <div className="row g-4">
            {supportServices.map((service, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="support-card text-center">
                  <div className="support-icon">
                    {service.icon}
                  </div>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cold Chain Services */}
      <section className="cold-chain-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title">Cold Chain Management</h2>
              <p className="lead">
                State-of-the-art cold chain facilities for temperature-sensitive pharmaceutical products.
              </p>
              
              {coldChainServices.map((service, index) => (
                <div className="cold-chain-service mb-4" key={index}>
                  <h4>
                    <FaTemperatureLow className="me-2" />
                    {service.title}
                  </h4>
                  <ul>
                    {service.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="col-lg-6">
              <div className="cold-chain-image">
                <img 
                  src="/images/services/cold-chain.jpg" 
                  alt="Cold Chain Facility" 
                  className="img-fluid rounded shadow"
                />
                <div className="temperature-monitor">
                  <div className="temp-reading">
                    <span className="temp-value">2.8°C</span>
                    <span className="temp-label">Current Temperature</span>
                  </div>
                  <div className="temp-status">
                    <span className="status-indicator active"></span>
                    <span>System Normal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="process-section py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-5">Our Distribution Process</h2>
          
          <div className="process-flow">
            <div className="process-step">
              <div className="step-number">1</div>
              <h4>Order Receipt</h4>
              <p>Order received via portal, phone, or email</p>
            </div>
            
            <div className="process-arrow">→</div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <h4>Quality Check</h4>
              <p>Product verification and quality validation</p>
            </div>
            
            <div className="process-arrow">→</div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <h4>Packing</h4>
              <p>Temperature-appropriate packaging</p>
            </div>
            
            <div className="process-arrow">→</div>
            
            <div className="process-step">
              <div className="step-number">4</div>
              <h4>Dispatch</h4>
              <p>Timely dispatch with tracking</p>
            </div>
            
            <div className="process-arrow">→</div>
            
            <div className="process-step">
              <div className="step-number">5</div>
              <h4>Delivery</h4>
              <p>Safe delivery with proof</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Request CTA */}
      <section className="service-request-cta py-5 bg-primary text-white">
        <div className="container text-center">
          <h2>Need Customized Pharmaceutical Services?</h2>
          <p className="mb-4">Contact us for tailored distribution solutions for hospitals, clinics, or retail chains</p>
          <a href="/contact" className="btn btn-light btn-lg">
            <FaClipboardCheck className="me-2" />
            Request Service Proposal
          </a>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;