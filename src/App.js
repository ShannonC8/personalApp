import React, { useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import IntroSection from './pages/IntroSection';

function App() {
  const refs = {
    AboutRef: useRef(null),
    SkillsRef: useRef(null),
    ProjectsRef: useRef(null),
    ContactRef: useRef(null),
  };

  const scrollToSection = (id) => {
    const targetRef = refs[id];

    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'auto' });
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar onScrollToSection={scrollToSection} />
        <IntroSection {...refs} />
      </Router>
    </div>
  );
}

export default App;
