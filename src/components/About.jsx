import { SiJavascript,
   SiReact, 
   SiNodedotjs, 
   SiCss3, 
   SiHtml5, 
   SiTailwindcss, 
   SiKotlin, 
   SiSwift, 
   SiPhp, 
   SiNextdotjs, 
   SiLaravel, 
   SiMysql, 
   SiSqlite, 
   SiMongodb } from 'react-icons/si'; 

const skills = [

  { id: 1, name: 'Kotlin', icon: <SiKotlin className="inline-block text-purple-600" /> },
  { id: 2, name: 'Swift', icon: <SiSwift className="inline-block text-orange-600" /> },
  { id: 3, name: 'JavaScript', icon: <SiJavascript className="inline-block text-yellow-500" /> },
  { id: 4, name: 'PHP', icon: <SiPhp className="inline-block text-yellow-500" /> },
  
  
  { id: 5, name: 'React', icon: <SiReact className="inline-block text-blue-400" /> },
  { id: 6, name: 'Next.js', icon: <SiNextdotjs className="inline-block text-white" /> },
  { id: 8, name: 'Tailwind CSS', icon: <SiTailwindcss className="inline-block text-cyan-400" /> },

  { id: 8, name: 'Node.js', icon: <SiNodedotjs className="inline-block text-green-600" /> },
  { id: 9, name: 'Laravel', icon: <SiLaravel className="inline-block text-red-600" /> },

  
  { id: 10, name: 'CSS', icon: <SiCss3 className="inline-block text-blue-600" /> },
  { id: 11, name: 'HTML', icon: <SiHtml5 className="inline-block text-red-600" /> },


  
  { id: 12, name: 'MySql', icon: <SiMysql className="inline-block text-blue-600" /> },
  { id: 13, name: 'SQLite', icon: <SiSqlite className="inline-block text-blue-600" /> },
  { id: 14, name: 'MongoDB', icon: <SiMongodb className="inline-block text-green-600" /> },
];


const About = () => {
  return (
    <section id="about" className="py-10 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-8">About Me</h2>
        <p className="text-lg text-center mb-10">
          Olá! Eu sou Paulo, um entusiasta da tecnologia em constante evolução e um estudante dedicado do curso de Informática Técnica.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map(skill => (
            <div key={skill.id} className="bg-gray-800 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <div className="flex items-center justify-center mb-2">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-center">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
