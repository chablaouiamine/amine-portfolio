import { useEffect, useState } from 'react';

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = window.innerHeight;
      setVisible(window.scrollY > headerHeight * 0.8);
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Filter for sections that are more than 50% visible
      const visibleSections = entries.filter(
        entry => entry.isIntersecting && entry.intersectionRatio > 0.5
      );

      if (visibleSections.length > 0) {
        // Get the section that's most visible
        const currentSection = visibleSections.reduce((prev, current) => {
          return prev.intersectionRatio > current.intersectionRatio ? prev : current;
        });
        
        setActiveSection(currentSection.target.id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '0px',
      threshold: [0, 0.25, 0.5, 0.75, 1],
    });

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav className={`navbar ${visible ? 'visible' : ''}`}>
      {['about', 'projects', 'skills', 'experience', 'contact'].map((section) => (
        <a
          key={section}
          href={`#${section}`}
          className={activeSection === section ? 'active' : ''}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </a>
      ))}
    </nav>
  );
}
