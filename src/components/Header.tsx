import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/Header.css";

export default function Header() {
  const [text, setText] = useState("");
  const [scrollY, setScrollY] = useState(0);
  const fullText = "Full Stack Developer | Software Engineer";

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header-container">
      <div className="header-background"></div>
      <motion.div
        className="header-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="floating-shapes">
          <div className="shape shape1"></div>
          <div className="shape shape2"></div>
          <div className="shape shape3"></div>
        </div>

        <div className="header-main-content">
          <motion.div
            className="profile-image-container"
            whileHover={{ scale: 1.05 }}
            style={{ y: scrollY * 0.2 }}
          >
            <div className="profile-image-border">
              <img src="/my_img.jpg" alt="Profile" className="profile-image" />
            </div>
            <div className="profile-image-glow"></div>
          </motion.div>

          <div className="header-text-content">
            <motion.h1
              className="name-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Amine CHABLAOUI
            </motion.h1>

            <motion.p
              className="typing-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {text}
            </motion.p>

            <motion.div
              className="cta-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <a href="#contact" className="cta-button">
                Get In Touch
              </a>
              <a href="#projects" className="cta-button secondary">
                View Projects
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
