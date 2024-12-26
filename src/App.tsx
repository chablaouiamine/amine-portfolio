import React, { useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Resume from './components/Resume';
import './App.css';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const href = ((e.currentTarget as HTMLAnchorElement).getAttribute('href')!);
        const target = document.querySelector(href);
        target?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Header />
      <AboutMe />
      <Experience />
      <Projects />
      <Skills />
      <ContactMe />
      <Resume />
      <Footer />
    </div>
  );
};

export default App;