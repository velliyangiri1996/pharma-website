import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaHistory, FaBullseye, FaUsers, FaAward, FaWarehouse, FaShieldAlt, FaTemperatureLow } from 'react-icons/fa';

const AboutPage = () => {
  const milestones = [
    { year: '1989', event: 'Company Founded in Chennai' },
    { year: '1995', event: 'Expanded to 5000 sq ft warehouse' },
    { year: '2005', event: 'Achieved ISO 9001 Certification' },
    { year: '2010', event: 'Launched 24/7 Emergency Service' },
    { year: '2015', event: 'Expanded cold chain facilities' },
    { year: '2020', event: 'Digital transformation & online portal' },
    { year: '2023', event: '20,000 sq ft modern warehouse' }
  ];

  const values = [
    {
      icon: <FaShieldAlt />,
      title: 'Quality Assurance',
      description: 'All products sourced from authorized manufacturers with proper documentation'
    },
    {
      icon: <FaUsers />,
      title: 'Customer Focus',
      description: 'Building long-term relationships with hospitals, clinics, and dealers'
    },
    {
      icon: <FaBullseye />,
      title: 'Reliability',
      description: 'Consistent supply chain with 99.8% order fulfillment rate'
    },
    {
      icon: <FaAward />,
      title: 'Excellence',
      description: 'Continuous improvement in processes and customer service'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Pharmaceutical Distribution Company</title>
        <meta name="description" content="Learn about our 30+ years experience as leading pharmaceutical distributor in Chennai. Quality medicines, reliable supply chain." />
      </Helmet>

      {/* Hero Section */}
      <section className="page-hero about-hero">
        <div className="container">
          <h1>About Pharma Distribution</h1>
          <p>30+ Years of Trust in Pharmaceutical Distribution</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="company-overview py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title">Our Journey</h2>
              <p className="lead">
                Founded in 1989 by Mr. Baskaran, Pharma Distribution has grown from 
                a small medical supplies store to one of Chennai's leading pharmaceutical 
                distributors.
              </p>
              <p>
                With a humble beginning in a 500 sq ft space, today we operate from a 
                modern 20,000 sq ft warehouse with state-of-the-art cold chain facilities. 
                Our journey is a testament to our commitment to quality, reliability, 
                and customer satisfaction.
              </p>
              <p>
                We serve over 500 hospitals, 2000+ retail pharmacies, and numerous 
                clinics across Tamil Nadu and neighboring states.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="about-image">
                <img 
                  src="/images/about/warehouse-interior.jpg" 
                  alt="Our Modern Warehouse" 
                  className="img-fluid rounded"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="milestones-section py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-5">Our Milestones</h2>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <div className="timeline-event">{milestone.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="values-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Our Core Values</h2>
          <div className="row g-4">
            {values.map((value, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="value-card text-center">
                  <div className="value-icon">
                    {value.icon}
                  </div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="infrastructure-section py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-5">Our Infrastructure</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="infra-card">
                <FaWarehouse className="infra-icon" />
                <h4>20,000 Sq Ft Warehouse</h4>
                <p>Modern warehouse with temperature monitoring system</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="infra-card">
                <FaTemperatureLow className="infra-icon" />
                <h4>Cold Chain Facility</h4>
                <p>500 sq ft cold room (2-8°C) for vaccines and biologics</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="infra-card">
                <FaShieldAlt className="infra-icon" />
                <h4>Quality Control Lab</h4>
                <p>In-house quality checking and documentation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Leadership Team</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="team-card">
                <div className="team-img-placeholder">
                  <FaUsers size={80} />
                </div>
                <h4>Mr. Baskaran</h4>
                <p className="position">Founder & Managing Director</p>
                <p>30+ years in pharmaceutical industry</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-card">
                <div className="team-img-placeholder">
                  <FaUsers size={80} />
                </div>
                <h4>Dr. Priya Sharma</h4>
                <p className="position">Head of Operations</p>
                <p>Pharmaceuticals expert with 15 years experience</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-card">
                <div className="team-img-placeholder">
                  <FaUsers size={80} />
                </div>
                <h4>Mr. Ramesh Kumar</h4>
                <p className="position">Sales Director</p>
                <p>Expert in hospital and dealer networks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications-section py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="mb-4">Certifications & Accreditations</h2>
          <div className="cert-logos">
            <div className="cert-logo">ISO 9001</div>
            <div className="cert-logo">GMP Certified</div>
            <div className="cert-logo">Wholesale License</div>
            <div className="cert-logo">IDA Member</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;