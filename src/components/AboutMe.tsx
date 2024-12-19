import React, { useEffect, useRef } from 'react';
import '../styles/AboutMe.css';

export default function AboutMe() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-content">
        <div className="about-text-container">
          <h2 className="section-title">About Me</h2>
          <div className="highlight-box">
            <p className="intro-text">
              Hi there! 👋 I'm a passionate Full Stack Developer with a love for creating
              elegant solutions to complex problems.
            </p>
          </div>
          <div className="details-grid">
            <div className="detail-item">
              <h3>🎯 Mission</h3>
              <p>Building innovative web applications that make a difference</p>
            </div>
            <div className="detail-item">
              <h3>💡 Expertise</h3>
              <p>Full Stack Development, Cloud Architecture, System Design</p>
            </div>
            <div className="detail-item">
              <h3>🌱 Growth</h3>
              <p>Constantly learning and adapting to new technologies</p>
            </div>
            <div className="detail-item">
              <h3>🤝 Collaboration</h3>
              <p>Strong team player with excellent communication skills</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}