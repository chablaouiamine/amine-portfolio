import React, { useEffect, useState } from 'react';
import '../styles/Header.css';

export default function Header() {
  const [text, setText] = useState('');
  const fullText = "Full Stack Developer | Software Engineer";
  
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="profile-image-container">
          <img src="my_img.jpg" alt="Profile" className="profile-image" />
        </div>
        <h1 className="name-title">Amine CHABLAOUI</h1>
        <p className="typing-text">{text}</p>
      </div>
    </header>
  );
}