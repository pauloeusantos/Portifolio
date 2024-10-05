import { useState } from 'react';
import Header from '../components/Header';
import Container from '../components/Container';
import Footer from '../components/Footer';
import DragCloseDrawer from '../components/DragCloseDrawer';
import About from '../components/About';
import { ExternalLink, Github } from 'lucide-react'; 


const projects = [
  {
    id: 1,
    title: 'Chat',
    description: 'Projeto Utilizando SDK-Vercel, HuggingFace e ShadcnUi',
    demoLink: 'https://chat-paulo.vercel.app/',
    codeLink: 'https://github.com/pauloeusantos/ChatPaulo'
  },
  {
    id: 2,
    title: 'Lista De Contato',
    description: 'Projeto Utilizando Swift',
    demoLink: 'https://github.com/pauloeusantos/Lista-Contato-',
    codeLink: 'https://github.com/pauloeusantos/Lista-Contato-' 
  },
  {
    id: 3,
    title: 'Cadastro De Filmes',
    description: 'Projeto Utilizando Swift',
    demoLink: 'https://github.com/pauloeusantos/Tela-Cadastro-Filmes',
    codeLink: 'https://github.com/pauloeusantos/Tela-Cadastro-Filmes' 
  },
  {
    id: 4,
    title: 'Clima ',
    description: 'Projeto Consumindo API https://api.openweathermap.org',
    demoLink: 'https://github.com/pauloeusantos/Tela-Cadastro-Filmes',
    codeLink: 'https://github.com/pauloeusantos/Tela-Cadastro-Filmes' 
  },
  {
    id: 5,
    title: 'Api Movies',
    description: 'React.js consumindo API',
    demoLink: 'https://api-movies-virid.vercel.app/',
    codeLink: 'https://github.com/pauloeusantos/ApiMovies' 
  },
  {
    id: 6,
    title: 'RoomApp',
    description: 'Utilizando a biblioteca Room para gerenciamento de banco de dados local.',
    demoLink: 'https://github.com/pauloeusantos/RoomApp',
    codeLink: 'https://github.com/pauloeusantos/RoomApp'
  },
  {
    id: 7,
    title: 'RoomApp-Inventory',
    description: 'Aplicativo de inventário para gerenciar estoque e preços.',
    demoLink: 'https://github.com/pauloeusantos/RoomApp-Inventory',
    codeLink: 'https://github.com/pauloeusantos/RoomApp-Inventory'
  },
  {
    id: 8,
    title: 'Movie List',
    description: 'Consumo de API externa para informações de filmes.',
    demoLink: 'https://santfilmes.netlify.app/',
    codeLink: 'https://github.com/pauloeusantos/MovieList' 
  },
  {
    id: 9,
    title: 'Pedra-Papel-Tesoura',
    description: 'Jogo clássico de Pedra, Papel e Tesoura.',
    demoLink: 'https://jokenp-pedra-papel-tesoura.vercel.app/',
    codeLink: 'https://github.com/pauloeusantos/JOKENP---Pedra-Papel-Tesoura' 
  },
];

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  

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
         
            {projects.map((project) => (
  
              <div key={project.id} className="bg-neutral-800 p-4 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                <p className="text-neutral-300">{project.description}</p>
                <div className="flex justify-between mt-4">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <button className="text-sm text-blue-500 border border-blue-500 px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-500 hover:text-white transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </button>
                  </a>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    <button className="text-sm text-gray-500 border border-gray-500 px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-500 hover:text-white transition-colors">
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DragCloseDrawer>
    </>
  );
}

export default Home;
