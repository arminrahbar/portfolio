import React from 'react';
import "../styles/Resume.css";

function Resume() {
  return (
    <div className="resume-container">
      

      <div className="resume-buttons">
        <a
          href="/Armin Keshavarz Rahbar - Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          Open in New Tab
        </a>
      </div>

      <div className="resume-iframe">
        <iframe
          src="/Armin Keshavarz Rahbar - Resume.pdf"
          title="Resume PDF"
        ></iframe>
      </div>
    </div>
  );
}

export default Resume;
