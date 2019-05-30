import React from 'react';
import './style.css';

function header() {
  return (
    <header>
      <div className="container">
        <h2>David Knittel</h2>
        <hr />
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="./assets/documents/Resume-David-Knittel.pdf" target="_blank" rel="noopener noreferrer">
            <span>Resume</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default header;