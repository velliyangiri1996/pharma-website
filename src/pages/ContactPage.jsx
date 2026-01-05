import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';

const schema = yup.object({
  name: yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
  email: yup.string().required('Email is required').email('Invalid email format'),
  phone: yup.string().required('Phone is required').matches(/^[0-9]{10}$/, 'Invalid phone number'),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required').min(20, 'Message must be at least 20 characters'),
  enquiryType: yup.string().required('Please select enquiry type'),
  dealerId: yup.string().when('enquiryType', {
    is: 'dealer',
    then: yup.string().required('Dealer ID is required for dealer enquiries')
  })
}).required();

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success('Message sent successfully! We will contact you within 24 hours.');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Head Office',
      details: ['123 Medical Street', 'T Nagar, Chennai - 600017', 'Tamil Nadu, India']
    },
    {
      icon: <FaPhone />,
      title: 'Phone Numbers',
      details: ['+91 44 1234 5678 (Office)', '+91 98765 43210 (24/7 Emergency)', '+91 87654 32109 (Sales)']
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Addresses',
      details: ['info@pharmadist.com', 'sales@pharmadist.com', 'support@pharmadist.com']
    },
    {
      icon: <FaClock />,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 8:00 PM', 'Saturday: 9:00 AM - 6:00 PM', 'Sunday: Emergency Only']
    }
  ];

  const enquiryTypes = [
    { value: 'general', label: 'General Enquiry' },
    { value: 'product', label: 'Product Information' },
    { value: 'order', label: 'Order Status' },
    { value: 'dealer', label: 'Dealer Registration' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'emergency', label: 'Emergency Order' }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | Pharmaceutical Distribution Contact</title>
        <meta name="description" content="Contact our pharmaceutical distribution team for medicines, dealer registration, bulk orders, and emergency supplies." />
      </Helmet>

      {/* Hero Section */}
      <section className="page-hero contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our pharmaceutical distribution team</p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="contact-section py-5">
        <div className="container">
          <div className="row g-5">
            {/* Contact Information */}
            <div className="col-lg-5">
              <h2 className="section-title mb-4">Get in Touch</h2>
              
              <div className="contact-info-grid">
                {contactInfo.map((info, index) => (
                  <div className="contact-info-card" key={index}>
                    <div className="contact-icon">
                      {info.icon}
                    </div>
                    <div className="contact-details">
                      <h4>{info.title}</h4>
                      {info.details.map((detail, i) => (
                        <p key={i}>{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Contact */}
              <div className="emergency-contact mt-4 p-4 bg-danger text-white rounded">
                <h4><FaWhatsapp /> 24/7 Emergency Order</h4>
                <p className="mb-2">For urgent medical supplies after hours</p>
                <a href="https://wa.me/919876543210" className="btn btn-light">
                  <FaWhatsapp /> WhatsApp: +91 98765 43210
                </a>
              </div>

              {/* Map */}
              <div className="map-container mt-4">
                <iframe
                  title="Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2692365436356!2d80.238864!3d13.047675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzUxLjYiTiA4MMKwMTQnMjAuMCJF!5e0!3m2!1sen!2sin!4v1678876543210!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="contact-form-container p-4 shadow rounded">
                <h3 className="mb-4">Send us a Message</h3>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                          {...register('name')}
                          placeholder="Enter your full name"
                        />
                        {errors.name && (
                          <div className="invalid-feedback">{errors.name.message}</div>
                        )}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                          {...register('email')}
                          placeholder="Enter your email"
                        />
                        {errors.email && (
                          <div className="invalid-feedback">{errors.email.message}</div>
                        )}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                          {...register('phone')}
                          placeholder="10-digit mobile number"
                        />
                        {errors.phone && (
                          <div className="invalid-feedback">{errors.phone.message}</div>
                        )}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="enquiryType">Enquiry Type *</label>
                        <select
                          id="enquiryType"
                          className={`form-control ${errors.enquiryType ? 'is-invalid' : ''}`}
                          {...register('enquiryType')}
                        >
                          <option value="">Select enquiry type</option>
                          {enquiryTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                        {errors.enquiryType && (
                          <div className="invalid-feedback">{errors.enquiryType.message}</div>
                        )}
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="subject">Subject *</label>
                        <input
                          type="text"
                          id="subject"
                          className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                          {...register('subject')}
                          placeholder="Brief subject of your enquiry"
                        />
                        {errors.subject && (
                          <div className="invalid-feedback">{errors.subject.message}</div>
                        )}
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="message">Your Message *</label>
                        <textarea
                          id="message"
                          rows="5"
                          className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                          {...register('message')}
                          placeholder="Please provide detailed information about your enquiry..."
                        />
                        {errors.message && (
                          <div className="invalid-feedback">{errors.message.message}</div>
                        )}
                      </div>
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                            Sending...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane className="me-2" />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>

                <div className="mt-4 pt-3 border-top">
                  <p className="text-muted small">
                    <strong>Note:</strong> For dealer registration enquiries, please have your 
                    GST number and drug license details ready. Emergency orders require 
                    valid prescription and hospital details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="branches-section py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-5">Our Branch Offices</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="branch-card">
                <h4>Chennai - Head Office</h4>
                <p>123 Medical Street, T Nagar</p>
                <p>Chennai - 600017</p>
                <p>Phone: +91 44 1234 5678</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="branch-card">
                <h4>Bangalore Office</h4>
                <p>456 Pharma Road, Indiranagar</p>
                <p>Bangalore - 560038</p>
                <p>Phone: +91 80 2345 6789</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="branch-card">
                <h4>Coimbatore Office</h4>
                <p>789 Health Avenue, RS Puram</p>
                <p>Coimbatore - 641002</p>
                <p>Phone: +91 422 3456 789</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;