import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="section-content">
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me through any of the platforms below:</p>
        <div className="social-icons">
          <a href="mailto:paulohenriquedeoliveira2006@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/paulohenrique2006" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/pauloeusantos" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
