import React from 'react';
import '../styles/Skills.css';

function Skill({ skillName, percent }) {
  const skillStyle = {
    width: `${percent}%`,
    animationDelay: '0.6s' // Adjust the multiplier as needed
  };

  return (
    <div className="skill-box">
      <span className="title">{skillName}</span>
      <div className="skill-bar">
        <span className="skill-per" style={skillStyle} />
      </div>
    </div>
  );
}

export default Skill;
