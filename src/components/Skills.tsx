import { 
  FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava,
  FaReact, FaBootstrap, FaNode,
  FaGit, FaGithub, FaDocker, FaJira,
  FaNpm
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiExpress, 
  SiPostgresql, SiMysql, SiMongodb, SiOracle,
  SiPostman, SiNextdotjs 
} from 'react-icons/si';
import '../styles/Skills.css';

const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", icon: <FaJs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Python", icon: <FaPython /> },
      { name: "Java", icon: <FaJava /> }
    ]
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs  /> },
      { name: "Node.js", icon: <FaNode /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ]
  },
  {
    category: "Development Tools",
    skills: [
      { name: "Git", icon: <FaGit /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "NPM", icon: <FaNpm /> },
    ]
  },
  {
    category: "Database Management",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Oracle", icon: <SiOracle /> }
    ]
  },
  {
    category: "Agile & Tools",
    skills: [
      { name: "Scrum", icon: <FaJira /> },
      { name: "Jira", icon: <FaJira /> },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.category}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-name-with-icon">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}