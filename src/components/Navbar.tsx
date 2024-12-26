import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBrain, FaUser, FaBriefcase, FaCode, FaEnvelope, FaFilePdf, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

const menuItems = [
  { id: 'about', label: 'About', icon: <FaUser /> },
  { id: 'experience', label: 'Experience', icon: <FaBriefcase /> },
  { id: 'projects', label: 'Projects', icon: <FaCode /> },
  { id: 'skills', label: 'Skills', icon: <FaBrain /> },
  { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
  { id: 'resume', label: 'Resume', icon: <FaFilePdf /> }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${hasScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* <motion.div 
          className="navbar-logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          AC
        </motion.div> */}

        <div className="nav-menu">
          {menuItems.map(({ id, label, icon }) => (
            <motion.a
              key={id}
              href={`#${id}`}
              className="nav-item"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="nav-icon">{icon}</span>
              <span>{label}</span>
            </motion.a>
          ))}
        </div>

        <button 
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className={`mobile-menu ${isOpen ? 'active' : ''}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {menuItems.map(({ id, label, icon }) => (
                <motion.a
                  key={id}
                  href={`#${id}`}
                  className="nav-item"
                  onClick={() => setIsOpen(false)}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="nav-icon">{icon}</span>
                  <span>{label}</span>
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}