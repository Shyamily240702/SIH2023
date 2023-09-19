import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>

      {/* Service Category 1: Search and Rescue */}
      <div className="service-category">
        <h3>Search and Rescue</h3>
        <p>
          Our Search and Rescue team is dedicated to locating and rescuing individuals in emergency situations.
          We specialize in rapid response and have a proven track record of saving lives.
        </p>
        <ul className="benefits">
          <li>24/7 Availability</li>
          <li>Highly Trained Personnel</li>
          <li>State-of-the-Art Equipment</li>
        </ul>
        <div className="case-study">
          <h4>Recent Success Story</h4>
          <p>
            Our team successfully rescued a hiker stranded in the wilderness after three days.
            The hiker was safely reunited with their family thanks to our dedicated efforts.
          </p>
        </div>
      </div>

      {/* Service Category 2: Medical Assistance */}
      <div className="service-category">
        <h3>Medical Assistance</h3>
        <p>
          Our Medical Assistance unit provides immediate medical care to those in need during emergencies.
          We are equipped to handle a wide range of medical situations and prioritize patient well-being.
        </p>
        <ul className="benefits">
          <li>Rapid Medical Response</li>
          <li>Advanced Medical Equipment</li>
          <li>Compassionate Care</li>
        </ul>
        <div className="case-study">
          <h4>Recent Success Story</h4>
          <p>
            We successfully administered life-saving medical treatment to a car accident victim,
            stabilizing their condition until they could be transported to a hospital.
          </p>
        </div>
      </div>

      {/* Add more service categories as needed */}
    </section>
  );
}

export default Services;
