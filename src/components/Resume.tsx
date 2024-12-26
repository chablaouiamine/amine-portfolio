import '../styles/Resume.css';
export default function Resume() {
    return (
        <section id="resume" className="resume-section">
          <h2>Resume</h2>
          <div className="resume-content">
            <a 
              href="chablaoui_amine.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="resume-download-btn"
            >
              Download Resume
            </a>
            {/* Add more resume content here as needed */}
          </div>
        </section>
      );
}
