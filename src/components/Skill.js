import React, { useEffect, useRef } from 'react';
import '../styles/Skills.css';

function Skill({ skillName, percent }) {
  const skillStyle = {
    width: '0%', // Initial width set to 0
  };

  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When the skill box is in the viewport, set the width to the actual percentage
            skillStyle.width = `${percent}%`;
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    // Cleanup the observer on component unmount
    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [percent]);

  return (
    <div ref={skillRef} className="skill-box">
      <span className="title">{skillName}</span>
      <div className="skill-bar">
        <span className="skill-per" style={skillStyle} />
      </div>
    </div>
  );
}

export default Skill;
