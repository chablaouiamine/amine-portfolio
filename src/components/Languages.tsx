import React from 'react';
import '../styles/Languages.css';


const Languages: React.FC = () => {
    const languages = ['English', 'Spanish', 'French', 'German', 'Mandarin'];

    return (
        <section id="languages">
            <h2>Languages</h2>
            <ul className="languages-list">
                {languages.map((language, index) => (
                    <li key={index} className="language-item">
                        {language}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Languages;