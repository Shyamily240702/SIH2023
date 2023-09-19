import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Us</h2>

      {/* Contact Information */}
      <div className="contact-info">
        <div className="address">
          <h3>Address</h3>
          <p>123 Main Street</p>
          <p>City, State, ZIP</p>
        </div>
        <div className="phone">
          <h3>Phone</h3>
          <p>Main Office: (555) 123-4567</p>
          <p>Emergency Line: (555) 789-1234</p>
        </div>
        <div className="email">
          <h3>Email</h3>
          <p>General Inquiries: info@rescueagency.com</p>
          <p>Emergency: emergency@rescueagency.com</p>
        </div>
      </div>

      {/* Map */}
      <div className="map">
        {/* You can embed a map here using an iframe or other map library */}
        {/* Example: */}
        <iframe
          title="Agency Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-78.123456!3d40.987654!4m5!3m4!1s0x0:0x0!8m2!3d40.987654!4d-78.123456"
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h3>Send us a message</h3>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <label htmlFor="attachment">Attach Files</label>
          <input type="file" id="attachment" name="attachment" multiple />

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
