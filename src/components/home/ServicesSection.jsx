import React from 'react';
import { FaSyringe, FaHeartbeat, FaBrain, FaAllergies, FaBaby, FaEye } from 'react-icons/fa';

const ServicesSection = () => {
  const services = [
    {
      icon: <FaSyringe />,
      title: 'Vaccines & Injectables',
      description: 'Complete range of vaccines and injectable medicines with proper cold chain management'
    },
    {
      icon: <FaHeartbeat />,
      title: 'Oncology Products',
      description: 'Specialized cancer medications with expert guidance and support'
    },
    {
      icon: <FaBrain />,
      title: 'Neurology Medicines',
      description: 'Complete neuro-psychiatry and neurology product portfolio'
    },
    {
      icon: <FaAllergies />,
      title: 'Dermatology & Cosmetics',
      description: 'Ethical dermatologicals and cosmetologicals from renowned companies'
    },
    {
      icon: <FaBaby />,
      title: 'Pediatrics',
      description: 'Special pediatric formulations and baby care products'
    },
    {
      icon: <FaEye />,
      title: 'Critical Care',
      description: 'Life-saving drugs and critical care medications available 24/7'
    }
  ];

  return (
    <section className="services-section py-5">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="section-title">Our Specialized Services</h2>
          <p className="section-subtitle">Comprehensive pharmaceutical distribution solutions</p>
        </div>
        
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="service-card">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <a href="/services" className="service-link">Learn More →</a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5">
          <a href="/services" className="btn btn-outline-primary">View All Services</a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;