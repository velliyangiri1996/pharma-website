import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { FaCheckCircle, FaUserTie, FaChartLine, FaShieldAlt, FaHandshake, FaFileContract, FaUpload, FaRupeeSign } from 'react-icons/fa';
import DealerCard from '../components/dealer/DealerCard';

const DealersPage = () => {
  const [activeTab, setActiveTab] = useState('register');
  
  const benefits = [
    {
      icon: <FaRupeeSign />,
      title: 'Competitive Margins',
      description: 'Attractive profit margins and volume-based incentives'
    },
    {
      icon: <FaChartLine />,
      title: 'Business Growth',
      description: 'Support for expanding your product portfolio and customer base'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Brand Authorization',
      description: 'Authorized dealer status for premium pharmaceutical brands'
    },
    {
      icon: <FaHandshake />,
      title: 'Marketing Support',
      description: 'Co-marketing initiatives and promotional materials'
    },
    {
      icon: <FaUserTie />,
      title: 'Training Programs',
      description: 'Regular training on products and sales techniques'
    },
    {
      icon: <FaFileContract />,
      title: 'Credit Facilities',
      description: 'Flexible payment terms for established dealers'
    }
  ];

  const requirements = [
    'Valid drug license (Wholesale)',
    'GST registration certificate',
    'Minimum 500 sq ft storage space',
    'Minimum 2 years experience in pharmaceutical distribution',
    'Bank reference and financial stability',
    'Cold storage facility (for vaccine dealers)'
  ];

  const dealers = [
    {
      id: 1,
      name: 'MediCare Distributors',
      location: 'Chennai Central',
      experience: '15 years',
      specialties: ['Oncology', 'Critical Care'],
      rating: 4.8
    },
    {
      id: 2,
      name: 'HealthPlus Pharma',
      location: 'Chennai South',
      experience: '8 years',
      specialties: ['Pediatrics', 'Vaccines'],
      rating: 4.6
    },
    {
      id: 3,
      name: 'Prime Med Supplies',
      location: 'Chennai West',
      experience: '12 years',
      specialties: ['Cardiology', 'Diabetology'],
      rating: 4.7
    }
  ];

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Dealer Registration:', data);
    alert('Registration submitted successfully! We will contact you within 48 hours.');
  };

  return (
    <>
      <Helmet>
        <title>Dealer Network | Become Pharmaceutical Dealer</title>
        <meta name="description" content="Join our dealer network for pharmaceutical distribution. Authorized dealer program with benefits and support." />
      </Helmet>

      {/* Hero Section */}
      <section className="page-hero dealers-hero">
        <div className="container">
          <h1>Join Our Dealer Network</h1>
          <p>Partner with leading pharmaceutical distributor in South India</p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="dealers-tabs py-4 bg-light">
        <div className="container">
          <div className="tabs-navigation">
            <button 
              className={`tab-btn ${activeTab === 'register' ? 'active' : ''}`}
              onClick={() => setActiveTab('register')}
            >
              Become a Dealer
            </button>
            <button 
              className={`tab-btn ${activeTab === 'benefits' ? 'active' : ''}`}
              onClick={() => setActiveTab('benefits')}
            >
              Dealer Benefits
            </button>
            <button 
              className={`tab-btn ${activeTab === 'network' ? 'active' : ''}`}
              onClick={() => setActiveTab('network')}
            >
              Our Network
            </button>
          </div>
        </div>
      </section>

      {/* Content based on active tab */}
      <section className="dealers-content py-5">
        <div className="container">
          
          {activeTab === 'register' && (
            <div className="row">
              <div className="col-lg-6">
                <h2 className="section-title mb-4">Dealer Registration</h2>
                <p className="lead">
                  Join our network of authorized pharmaceutical dealers and grow your business with us.
                </p>
                
                <div className="requirements-card p-4 mb-4">
                  <h4>Minimum Requirements</h4>
                  <ul className="requirements-list">
                    {requirements.map((req, index) => (
                      <li key={index}>
                        <FaCheckCircle className="text-success me-2" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="process-steps">
                  <h4>Registration Process</h4>
                  <ol>
                    <li>Submit application with documents</li>
                    <li>Background verification (7-10 days)</li>
                    <li>Agreement signing</li>
                    <li>Initial training & onboarding</li>
                    <li>Start of business</li>
                  </ol>
                </div>
              </div>
              
              <div className="col-lg-6">
                <div className="registration-form p-4 shadow rounded">
                  <h3 className="mb-4">Registration Form</h3>
                  
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Business Name *</label>
                          <input 
                            type="text" 
                            className="form-control"
                            {...register('businessName', { required: true })}
                          />
                        </div>
                      </div>
                      
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Contact Person *</label>
                          <input 
                            type="text" 
                            className="form-control"
                            {...register('contactPerson', { required: true })}
                          />
                        </div>
                      </div>
                      
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Email *</label>
                          <input 
                            type="email" 
                            className="form-control"
                            {...register('email', { required: true })}
                          />
                        </div>
                      </div>
                      
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Phone *</label>
                          <input 
                            type="tel" 
                            className="form-control"
                            {...register('phone', { required: true })}
                          />
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <div className="form-group">
                          <label>Business Address *</label>
                          <textarea 
                            className="form-control"
                            rows="3"
                            {...register('address', { required: true })}
                          />
                        </div>
                      </div>
                      
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Drug License Number *</label>
                          <input 
                            type="text" 
                            className="form-control"
                            {...register('licenseNumber', { required: true })}
                          />
                        </div>
                      </div>
                      
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>GST Number *</label>
                          <input 
                            type="text" 
                            className="form-control"
                            {...register('gstNumber', { required: true })}
                          />
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <div className="form-group">
                          <label>Annual Turnover (₹)</label>
                          <select className="form-control" {...register('turnover')}>
                            <option value="">Select Range</option>
                            <option value="0-50">0-50 Lakhs</option>
                            <option value="50-100">50-100 Lakhs</option>
                            <option value="100-500">1-5 Crores</option>
                            <option value="500+">5+ Crores</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <div className="form-group">
                          <label>Specialization Areas</label>
                          <div className="specialization-tags">
                            {['Oncology', 'Vaccines', 'Cardiology', 'Neurology', 'Critical Care', 'Pediatrics', 'Dermatology'].map((spec) => (
                              <label key={spec} className="tag-label">
                                <input type="checkbox" value={spec} {...register('specializations')} />
                                <span>{spec}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <div className="form-group">
                          <label>Upload Documents</label>
                          <div className="upload-area">
                            <FaUpload className="upload-icon" />
                            <p>Drag & drop or click to upload documents</p>
                            <input type="file" multiple className="d-none" id="docUpload" />
                            <label htmlFor="docUpload" className="btn btn-outline-secondary">
                              Choose Files
                            </label>
                          </div>
                          <small className="text-muted">Upload Drug License, GST Certificate, Address Proof (PDF/Image, max 5MB each)</small>
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <button type="submit" className="btn btn-primary btn-lg w-100">
                          Submit Application
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'benefits' && (
            <div className="benefits-section">
              <h2 className="section-title text-center mb-5">Dealer Benefits & Support</h2>
              
              <div className="row g-4">
                {benefits.map((benefit, index) => (
                  <div className="col-lg-4 col-md-6" key={index}>
                    <div className="benefit-card text-center">
                      <div className="benefit-icon">
                        {benefit.icon}
                      </div>
                      <h4>{benefit.title}</h4>
                      <p>{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="support-details mt-5 p-4 bg-light rounded">
                <h3 className="mb-4">Additional Support Services</h3>
                <div className="row">
                  <div className="col-md-4">
                    <h5>Technical Support</h5>
                    <ul>
                      <li>Product training</li>
                      <li>Sales techniques</li>
                      <li>Market intelligence</li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h5>Marketing Support</h5>
                    <ul>
                      <li>Promotional materials</li>
                      <li>Campaign support</li>
                      <li>Digital marketing</li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h5>Operational Support</h5>
                    <ul>
                      <li>Inventory management</li>
                      <li>Order processing</li>
                      <li>Logistics coordination</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'network' && (
            <div className="network-section">
              <h2 className="section-title text-center mb-5">Our Dealer Network</h2>
              
              <div className="network-stats mb-5">
                <div className="row text-center">
                  <div className="col-md-3">
                    <div className="stat-card">
                      <h3>150+</h3>
                      <p>Authorized Dealers</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="stat-card">
                      <h3>25+</h3>
                      <p>Years Experience</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="stat-card">
                      <h3>500+</h3>
                      <p>Hospitals Served</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="stat-card">
                      <h3>95%</h3>
                      <p>Satisfaction Rate</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="dealers-grid">
                <div className="row g-4">
                  {dealers.map((dealer) => (
                    <div className="col-lg-4 col-md-6" key={dealer.id}>
                      <DealerCard dealer={dealer} />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="network-map mt-5">
                <h4 className="text-center mb-4">Network Coverage</h4>
                <div className="map-placeholder">
                  {/* You would integrate a real map component here */}
                  <img src="/images/network-map.jpg" alt="Dealer Network Map" className="img-fluid rounded" />
                </div>
              </div>
            </div>
          )}
          
        </div>
      </section>
    </>
  );
};

export default DealersPage;