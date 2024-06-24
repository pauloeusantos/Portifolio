import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectPage.css';
import Header from '../components/Header';

const ProjectPage = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find(p => p.id.toString() === id);

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div>
        <div className="project-page">
        <div className="project-banner">
            <img src={project.image} alt={project.title} />
        </div>
        <div className="project-details">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">View Project</a>
        </div>
        </div>
    </div>
  );
}

export default ProjectPage;
