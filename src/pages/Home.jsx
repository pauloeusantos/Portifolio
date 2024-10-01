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
    title: 'Lista De Contato',
    description: 'Projeto Utilizando Swift',
    demoLink: 'https://github.com/pauloeusantos/Lista-Contato-',
    codeLink: 'https://github.com/pauloeusantos/Lista-Contato-' 
  },
  {
    id: 2,
    title: 'Cadastro De Filmes',
    description: 'Projeto Utilizando Swift',
    demoLink: 'https://github.com/pauloeusantos/Tela-Cadastro-Filmes',
    codeLink: 'https://github.com/pauloeusantos/Tela-Cadastro-Filmes' 
  },
  {
    id: 3,
    title: 'Clima ',
    description: 'Projeto Consumindo API https://api.openweathermap.org',
    demoLink: 'https://github.com/pauloeusantos/Tela-Cadastro-Filmes',
    codeLink: 'https://github.com/pauloeusantos/Tela-Cadastro-Filmes' 
  },

  {
    id: 4,
    title: 'Api Movies',
    description: 'React.js consumindo API',
    demoLink: 'https://api-movies-virid.vercel.app/',
    codeLink: 'https://github.com/pauloeusantos/ApiMovies' 
  },
  {
    id: 5,
    title: 'RoomApp',
    description: 'Utilizando a biblioteca Room para gerenciamento de banco de dados local.',
    demoLink: 'https://github.com/pauloeusantos/RoomApp',
    codeLink: 'https://github.com/pauloeusantos/RoomApp'
  },
  {
    id: 6,
    title: 'RoomApp-Inventory',
    description: 'Este aplicativo permite aos usuários adicionar itens ao inventário, especificar o preço e a quantidade em estoque, e gerenciar esses itens de forma eficiente.',
    demoLink: 'https://github.com/pauloeusantos/RoomApp-Inventory',
    codeLink: 'https://github.com/pauloeusantos/RoomApp-Inventory'
  },
  {
    id: 7,
    title: 'Movie List',
    description: 'Os dados dos filmes são obtidos a partir de uma API externa, proporcionando informações atualizadas sobre títulos, sinopses, classificações e outros detalhes relevantes.',
    demoLink: 'https://santfilmes.netlify.app/',
    codeLink: 'https://github.com/pauloeusantos/MovieList' 
  },
  {
    id: 8,
    title: 'Pedra-Papel-Tesoura',
    description: '',
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
