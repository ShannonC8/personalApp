import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React, { useRef } from 'react';

function App() {
  const AboutRef = useRef(null);
  const ProjectsRef = useRef(null);
  const ContactRef = useRef(null);

  const scrollToSection = (id) => {
    let targetRef;

    switch (id) {
      case 'AboutRef':
        targetRef = AboutRef;
        break;
      case 'ProjectsRef':
        targetRef = ProjectsRef;
        break;
      case 'ContactRef':
        targetRef = ContactRef;
        break;
      default:
        break;
    }

    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Router> 
        <Navbar onScrollToSection={scrollToSection}/>
        <Home AboutRef={AboutRef} ProjectsRef={ProjectsRef} ContactRef={ContactRef} />
      </Router>
    </div>
  );
}

export default App;
