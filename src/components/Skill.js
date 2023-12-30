import React, { useEffect } from 'react';
import '../styles/Skills.css';

function Skill({ skillName, percent }) {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.skill-per');
        hiddenElements.forEach((el) => observer.observe(el));

        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
        };
    }, []); // Empty dependency array to run once when the component mounts

    const skillStyle = {
        width: `${percent}%`,
        animationDelay: '0.1s' // Adjust the multiplier as needed
    };

    return (
        <div className="skill-box skill-per hidden">
            <span className="title">{skillName}</span>
            <div className="skill-bar">
                <span className={`skill-per ${percent}`} style={skillStyle} />
            </div>
        </div>
    );
}

export default Skill;
