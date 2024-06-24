import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  { id: 1, title: 'Movie List', description: '', link: 'https://santfilmes.netlify.app/' },
  { id: 2, title: 'Project 2', description: 'Description for project 2', link: 'https://link_to_project_2.com' },
  // Add more projects as needed
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="section-content">
        <h2>Projects</h2>
        <div className="project-cards">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
