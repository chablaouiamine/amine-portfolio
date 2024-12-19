import { useEffect, useRef } from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: "Expense Tracker App",
    description: "A simple expense tracker application to manage your finances and track your spending.",
    technologies: ["React", "Springboot", "PostgreSQL", "Material-UI"],
    imageUrl: "expense_track.jpeg",
    link: "#"
  },
  {
    title: "Scholar Orientation Web Application",
    description: "Chatbot powered by AI. The chatbot helps new students find information about the university, courses, etc.",
    technologies: ["React.js", "Django", "OpenAI API", "PostgreSQL", "Bootstrap"],
    imageUrl: "scholar_orientation2.png",
    link: "#"
  },
  {
    title: "Pomodoro Timer",
    description: "A simple productivity app that helps you stay focused and manage your time effectively using the Pomodoro Technique.",
    technologies: ["React.js", "Shadcn", "Tailwind CSS"],
    imageUrl: "pomodoro.png",
    link: "#"
  }
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.imageUrl} alt={project.title} />
              <div className="project-overlay">
                <a href={project.link} className="view-project">View Project</a>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technology-tags">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
