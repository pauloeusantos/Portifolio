import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';

import ProjectsSection from '../components/ProjectsSection';

import Skils from '../components/Skills/Skillss';
import AboutAndContactSection from '../components/AboutAndContactSection/AboutAndContactSection';


const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Skils/>
      <ProjectsSection />
      <AboutAndContactSection/>
    </div>
  );
}

export default Home;
