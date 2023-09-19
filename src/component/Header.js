import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="App-header">
      <h1>Rescue Agency</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/aboutus">About Us</a></li>
          <li><a href="/emergency">Emergency</a></li> {/* Add a link to the EmergencyInformation page */}

        </ul>
      </nav>
    </header>
  );
}

export default Header;
