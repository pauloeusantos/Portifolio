import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './AboutAndContactSection.css';

const AboutAndContactSection = () => {
  return (
    <section id="about-contact">
      <div className="container">
        <div className="about">
          <h2>About Me</h2>
          <p>👋 Hi there! I'm Paulo, a technology enthusiast constantly evolving and a dedicated student of the Technical Informatics course. 👨‍💻</p>
        </div>
        <div className="contact">
          <div className="social-icons">
            <a href="mailto:paulohenriquedeoliveira2006@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/paulohenrique2006" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/pauloeusantos" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutAndContactSection;
