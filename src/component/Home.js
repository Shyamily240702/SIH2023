import React from 'react';
import './Home.css';

const HomePage = () => {
  return (
    <section className="home">
      <header className="header">
       
        
      </header>

      <div className="hero">
        
        <h2>Your Trusted Partner in Emergency Response</h2>
      </div>

      <section className="services-overview">
        <h3>Our Core Services</h3>
        <p>Briefly describe the agency's core services and expertise.</p>
        <div className="service-buttons">
          <button className="service-button">Emergency Response</button>
          <button className="service-button">Medical Assistance</button>
          {/* Add more service buttons */}
        </div>
      </section>

      <section className="emergency-resources">
        <h3>Emergency Resources</h3>
        <p>Quick access to emergency resources such as contact numbers, emergency plans, and safety tips.</p>
        <a href="emergency" className="emergency-button">Emergency</a>
      </section>

      
    </section>
  );
}

export default HomePage;
