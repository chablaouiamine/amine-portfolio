import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social">
          <a href="https://github.com/chablaouiamine" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/amine-chablaoui-371950247/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Chablaoui Amine. All rights reserved.</p>
        {/* <p className="footer-tagline">Built with React & TypeScript</p> */}
      </div>
    </footer>
  );
};

export default Footer;