import React from 'react';
import './style.css'
import ProjectCard from './project-card';
import projects from '../../../data/projects';

function projectsSection() {
  return (
    <section id="projects">
      <div id="projects-main">
        <h2>Projects</h2>
        <div class="cards container">
          <div class="row">
            {projects &&
              projects.map(project => (
                <div className="col-xl-6">
                  <ProjectCard
                    project={project}
                  />
                </div>
              ))
            }
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default projectsSection;