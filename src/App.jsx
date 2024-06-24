import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';
import './App.css';

const projects = [
  { id: 1, title: 'Movie List', description: '', link: 'https://santfilmes.netlify.app/' },
  { id: 2, title: 'Project 2', description: 'Description for project 2', link: 'https://link_to_project_2.com' },
 
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectPage projects={projects} />} />
      </Routes>
    </Router>
  );
}

export default App;
