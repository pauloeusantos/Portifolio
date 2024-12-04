import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Container from '../components/Container';
import Footer from '../components/Footer';
import DragCloseDrawer from '../components/DragCloseDrawer';
import About from '../components/About';
import { ExternalLink, Github } from 'lucide-react'; 

const Home = () => {
  const [open, setOpen] = useState(false);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch('https://api.github.com/users/pauloeusantos/repos');
        const data = await response.json();
        const formattedData = data.map(repo => ({
          id: repo.id,
          title: repo.name,
          description: repo.description || 'Sem descrição',
          demoLink: repo.homepage || repo.html_url,
          codeLink: repo.html_url,
        }));
        setRepositories(formattedData);
      } catch (error) {
        console.error("Erro ao buscar repositórios:", error);
      }
    };

    fetchRepositories();
  }, []);

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
            {repositories.map((project) => (
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
};

export default Home;
