import React from 'react';
import { FaMapMarkerAlt, FaStar, FaPhone, FaEnvelope } from 'react-icons/fa';

const DealerCard = ({ dealer }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar 
          key={i} 
          className={i <= Math.floor(rating) ? 'star-filled' : 'star-empty'}
        />
      );
    }
    return stars;
  };

  return (
    <div className="dealer-card">
      <div className="dealer-header">
        <div className="dealer-avatar">
          {dealer.name.charAt(0)}
        </div>
        <div className="dealer-info">
          <h4>{dealer.name}</h4>
          <p className="dealer-location">
            <FaMapMarkerAlt /> {dealer.location}
          </p>
        </div>
      </div>
      
      <div className="dealer-rating">
        <div className="stars">
          {renderStars(dealer.rating)}
        </div>
        <span className="rating-value">{dealer.rating}/5</span>
      </div>
      
      <div className="dealer-experience">
        <strong>Experience:</strong> {dealer.experience}
      </div>
      
      <div className="dealer-specialties">
        <strong>Specialties:</strong>
        <div className="specialty-tags">
          {dealer.specialties.map((spec, index) => (
            <span key={index} className="specialty-tag">{spec}</span>
          ))}
        </div>
      </div>
      
      <div className="dealer-contact">
        <button className="btn btn-outline-primary btn-sm">
          <FaPhone /> Contact
        </button>
        <button className="btn btn-primary btn-sm">
          <FaEnvelope /> Send Inquiry
        </button>
      </div>
      
      <div className="dealer-status">
        <span className="status-badge active">Active Partner</span>
        <span className="member-since">Member since 2018</span>
      </div>
    </div>
  );
};

export default DealerCard;