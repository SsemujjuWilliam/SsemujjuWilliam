
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Showcase from '../components/Showcase';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = 'William Ssemujju | AI Engineer & Data Scientist';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Showcase />
      <Footer />
    </div>
  );
};

export default Index;
