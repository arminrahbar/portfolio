// src/components/Projects.js
import React from 'react';
import '../styles/Projects.css';

const projects = [
  { id: 1, title: "Chatbox", description: "A chatbox connected to ChatGPT. The frontend is hosted on GitHub Pages, and the backend is an Express.js server deployed on AWS Elastic Beanstalk.", tags: ["React", "Node.js", "ChatGPT", "Elastic BeanStalk"] },
  { id: 2, title: "Price Tracker", description: "A React-based frontend for tracking price changes. The project will eventually include a backend server and be deployed using AWS Elastic Beanstalk.", tags: ["React"] },
  { id: 3, title: "Survey Site", description: "A React-based frontend for tracking price changes. The project will eventually include a backend server and be deployed using AWS Elastic Beanstalk asdf asdfasdf asdf asdf asf asdf asdf asdf asdf ..................................................................................", tags: ["React", "Django"] }
];

function Projects() {
  return (
    <section class="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            
            <ul>
              {project.tags.map(tag => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
