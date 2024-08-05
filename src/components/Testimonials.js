// Testimonials.js
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import reviews from './reviewsData';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h1>What do our parents say?</h1>
      <Carousel fade>
        {reviews.map(review => (
          <Carousel.Item key={review.id}>
            <div className="testimonial">
              <p>"{review.text}"</p>
              <p>- {review.author}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Testimonials;
