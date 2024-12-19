import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
                <div className="footer-links">
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#certifications">Certifications</a>
                    <a href="#languages">Languages</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;