import React from 'react';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      position: 'Chief Medical Officer, Apollo Hospital',
      content: 'Excellent service and timely delivery of all pharmaceutical supplies. Their cold chain management is impeccable.',
      rating: 5
    },
    {
      id: 2,
      name: 'Mrs. Priya Sharma',
      position: 'Pharmacy Owner',
      content: 'Reliable partner for over 10 years. Always get genuine products at competitive prices.',
      rating: 5
    },
    {
      id: 3,
      name: 'Mr. Venkatesh Iyer',
      position: 'Medical Store Manager',
      content: 'Professional team and excellent customer support. Highly recommended for medical distributors.',
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar key={i} className={i < rating ? 'text-warning' : 'text-muted'} />
    ));
  };

  return (
    <section className="testimonials-section py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Trusted by healthcare professionals across Tamil Nadu</p>
        </div>
        <div className="row g-4">
          {testimonials.map(testimonial => (
            <div className="col-lg-4 col-md-6" key={testimonial.id}>
              <div className="testimonial-card">
                <div className="testimonial-rating mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="testimonial-content mb-3">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <h5 className="mb-1">{testimonial.name}</h5>
                  <p className="text-muted mb-0">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
