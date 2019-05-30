import React, { Component } from 'react';
import './style.css';
import AboutSection from '../../components/main-view/about-section';
import ProjectsSection from '../../components/main-view/projects-section';
import ContactSection from '../../components/main-view/contact-section';

function MainView() {

  return (
    <div className="container">
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default MainView;
