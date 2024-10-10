// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      {/* Left side - Contact Info */}
      <div className="footer-left">
        <p>Herndon, VA</p>
      </div>

      {/* Right side - Social Media Icons */}
      <div className="footer-right">
        <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
