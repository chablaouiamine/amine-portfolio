import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import './styles/Header.css';
import './styles/AboutMe.css';
import './styles/Skills.css';
import './styles/Certifications.css';
import './styles/Languages.css';
import './styles/ContactMe.css';
import './styles/Footer.css';
import ContactMe from './components/ContactMe';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <AboutMe />
      <Projects />
      <section id="projects" style={{ minHeight: '100vh' }}>
        <h2>Projects</h2>
        {/* Projects content */}
      </section>
      <section id="skills" style={{ minHeight: '100vh' }}>
        <h2>Skills</h2>
        {/* Skills content */}
      </section>
      <Skills />
      <section id="experience" style={{ minHeight: '100vh' }}>
        <h2>Experience</h2>
        {/* Experience content */}
      </section>
      <Experience />
      <section id="contact" style={{ minHeight: '100vh' }}>
        <h2>Contact</h2>
        {/* Contact content */}
        <ContactMe />
      </section>
    </div>
  );
};

export default App;