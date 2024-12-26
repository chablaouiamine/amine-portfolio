import { useEffect, useState } from 'react';
import '../styles/Navbar.css';
export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = window.innerHeight;
      setVisible(window.scrollY > headerHeight * 0.8);

      // Get all sections and their positions
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update navigation items to match the order in your App.tsx
  const navigationItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
    { id: 'resume', label: 'Resume' }
  ];

  return (
    <nav className={`navbar ${visible ? 'visible' : ''}`}>
      {navigationItems.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={activeSection === id ? 'active' : ''}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}