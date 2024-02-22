import React, { useState } from 'react';
import '../styles/Constellation.css';


const Constellation = () => {
  const [experiences, setExperiences] = useState([
    { id: 1, title: 'AFRL', description: 'Intern at Wright-Patterson', position: { x: window.outerWidth / 25, y: window.outerWidth / 20 } },
    { id: 2, title: 'Research', description: 'Description for Job 2', position: { x: window.outerWidth / 7, y: window.outerWidth / 10 } },
    { id: 3, title: 'Volunteer', description: 'Description for Job 3', position: { x: window.outerWidth / 4, y: window.outerWidth / 12 } },
    { id: 4, title: 'Quantum', description: 'Description for Job 4', position: { x: window.outerWidth / 12, y: window.outerWidth / 5 } },
  ]);

  const [hoveredExperience, setHoveredExperience] = useState(null);

  const handleStarHover = (experience) => {
    setHoveredExperience(experience);
  };

  const handleStarLeave = () => {
    setHoveredExperience(null);
  };

  function generateLine(id, experiences) {
    if (id >= 4) {
      return <></>;
    }
    return (
      <line
        key={`line-${id}`}
        x1={experiences[id - 1].position.x}
        y1={experiences[id - 1].position.y}
        x2={experiences[id].position.x}
        y2={experiences[id].position.y}
        stroke="#ffff92" 
        strokeWidth="2" 
      />
    );
  }

  return (
    <div className="constellation-container">
      <svg className="line-item" width={window.outerWidth / 2.5} height={window.outerWidth / 2.5}>
        {experiences.map((experience) => (
          <React.Fragment key={experience.id}>
            {generateLine(experience.id, experiences)}
            <g>
              <text
                className="star"
                x={experience.position.x} 
                y={experience.position.y} 
                text-anchor="middle"
                dominantBaseline="middle"
                onMouseEnter={() => handleStarHover(experience)}
                onMouseLeave={handleStarLeave}
              >
                ⭐
              </text>
              <text
                x={experience.position.x - (window.outerWidth / 2)/30} // Adjust text positioning as needed
                y={experience.position.y + (window.outerWidth / 2)/20} // Adjust text positioning as needed
                className="mini-title"
              >
                {experience.title}
              </text>
            </g>
          </React.Fragment>
        ))}
      </svg>
  
      {hoveredExperience && (
        <div className="tooltip" style={{ left: hoveredExperience.position.x - 50, top: hoveredExperience.position.y + 40 }}>
          <h3>{hoveredExperience.title}</h3>
          <p>{hoveredExperience.description}</p>
        </div>
      )}
    </div>
  );
  
  
};

export default Constellation;
