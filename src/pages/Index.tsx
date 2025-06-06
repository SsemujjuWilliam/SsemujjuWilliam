
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Showcase from '../components/Showcase';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';

const Index = () => {
  const { theme } = useTheme();
  
  useEffect(() => {
    document.title = 'William Ssemujju | AI Engineer & Data Scientist';
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'dark' : ''}`}>
      <Navbar />
      <Hero />
      <Showcase />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
