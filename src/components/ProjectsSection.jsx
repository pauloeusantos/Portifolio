import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  { id: 1, title: 'Movie List', description: 'Os dados dos filmes são obtidos a partir de uma API externa, proporcionando informações atualizadas sobre títulos, sinopses, classificações e outros detalhes relevantes.', link: 'https://santfilmes.netlify.app/' },
  { id: 2, title: 'Api Movies', description: 'React.js consumindo API', link: 'https://https://api-movies-virid.vercel.app/.com' },
  { id: 3, title: 'RoomApp', description: 'Utilizando a biblioteca Room para gerenciamento de banco de dados local. Este aplicativo permite a criação, leitura, atualização e exclusão (CRUD) de dados armazenados localmente no dispositivo.', link: 'https://github.com/pauloeusantos/RoomApp' },
  { id: 4, title: 'RoomApp-Inventory', description: 'Este aplicativo permite aos usuários adicionar itens ao inventário, especificar o preço e a quantidade em estoque, e gerenciar esses itens de forma eficiente.', link: 'https://github.com/pauloeusantos/RoomApp-Inventory' },
  { id: 5, title: 'Coming soon', description: '', link: '' },
  { id: 6, title: 'Coming soon', description: '', link: '' },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="section">
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
