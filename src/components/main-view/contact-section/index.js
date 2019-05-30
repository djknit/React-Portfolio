import React from 'react';
import './style.css'

function ContactSection() {
  return (
    <section id="contact">
      <div id="contact-main">
        <h2>Contact Me</h2>
        <div id="contact_methods">
          <a href="mailto:djknit@gmail.com" class="contact-method">
            <p>Send me an e-mail:</p>
            <img src="assets/images/email.png" alt="Email symbol" />
            <p>djknit@gmail.com</p>
          </a>
          <a href="https://www.linkedin.com/in/david-knittel-675a20167/" class="contact-method" target="_blank" rel="noopener noreferrer">
            <p>Or visit my</p>
            <img src="assets/images/linked_in_logo.png" alt="LinkedIn logo" />
          </a>
          <a href="https://github.com/djknit/" class="contact-method" target="_blank" rel="noopener noreferrer">
            <p>Or my</p>
            <img src="assets/images/github_logo.png" alt="GitHub logo" />
          </a>
          <a href="tel:+1-785-410-5644" class="contact-method">
            <p>Call or text</p>
            <span><i class="fas fa-phone" /></span>
            <p>(785) 410-5644</p>
          </a>
          <a href="assets/documents/Resume-David-Knittel.pdf" class="contact-method" target="_blank" rel="noopener noreferrer">
            <p>Download my</p>
            <span>Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;