import { useEffect, useRef } from "react";
import "../styles/Experience.css";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Tamtam International",
    period: "February - August 2024",
    description:
      "Contributed to the development of an LLM powered Chatbot utilizing different sources of information that aims to provide quick access to information in different areas of expertise(Accounting, Taxation and Finance).",
    achievements: [
      "Worked on the responsiveness of the UI",
      "Worked on the Backend of the Chatbot",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Entscheider",
    period: "July & August 2024",
    description:
      "Designed and developed a web application meant to assist students in scholar orientation by leveraging AI.",
    achievements: [
      "Built responsive web pages using React",
      "Created chatbot using Django and OpenAI API",
      "Deployed application on AWS",
    ],
  },
  {
    role: "Frontend Developer",
    company: "FST Marrakech",
    period: "August 2023",
    description:
      "Created a conference management Web application using HTML, CSS and JavaScript.",
    achievements: ["Designed and implemented user interfaces"],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience-section" ref={sectionRef}>
      <h2 className="section-title">Professional Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <span className="timeline-period">{exp.period}</span>
              <h3 className="timeline-role">{exp.role}</h3>
              <h4 className="timeline-company">{exp.company}</h4>
              <p className="timeline-description">{exp.description}</p>
              <ul className="timeline-achievements">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
