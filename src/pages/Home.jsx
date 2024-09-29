import React, { useState } from 'react';
import Header from '../components/Header';
import Container from '../components/Container';
import Footer from '../components/Footer';
import DragCloseDrawer from '../components/DragCloseDrawer';
import About from '../components/About';

const projects = [
  { id: 1, title: 'Movie List', description: 'Os dados dos filmes são obtidos a partir de uma API externa, proporcionando informações atualizadas sobre títulos, sinopses, classificações e outros detalhes relevantes.', link: 'https://santfilmes.netlify.app/' },
  { id: 2, title: 'Api Movies', description: 'React.js consumindo API', link: 'https://api-movies-virid.vercel.app/.com' },
  { id: 3, title: 'RoomApp', description: 'Utilizando a biblioteca Room para gerenciamento de banco de dados local. Este aplicativo permite a criação, leitura, atualização e exclusão (CRUD) de dados armazenados localmente no dispositivo.', link: 'https://github.com/pauloeusantos/RoomApp' },
  { id: 4, title: 'RoomApp-Inventory', description: 'Este aplicativo permite aos usuários adicionar itens ao inventário, especificar o preço e a quantidade em estoque, e gerenciar esses itens de forma eficiente.', link: 'https://github.com/pauloeusantos/RoomApp-Inventory' },
];

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Header onOpen={handleOpen} />
      <Container onOpen={handleOpen} />
      <About />
      <Footer />


      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
          <h2 className="text-4xl font-bold text-neutral-200">Meus Projetos</h2>
          <div className="flex flex-col space-y-4">
            {projects.map(project => (
              <div key={project.id} className="bg-neutral-800 p-4 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <h3 className="text-lg font-bold">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-500 transition-colors duration-300"
                  >
                    {project.title}
                  </a>
                </h3>
                <p className="text-neutral-300">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </DragCloseDrawer>

    </>
  );
}

export default Home;
