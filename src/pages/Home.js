import React, { useRef } from 'react';
import '../styles/Home.css';
import Skills from '../components/Skills';
function Home({ AboutRef, SkillsRef, ProjectsRef, ContactRef }) {

  return (
    <div>
      <section ref={AboutRef} id="About" className="About">
        Section 1
      </section>
      <section ref = {SkillsRef} id="Skills" className="Skills" >
        <Skills/>
      </section>
      <section ref = {ProjectsRef} id="Projects" className="Projects" >
      </section>
      <section ref = {ContactRef} id="Contact" className="Contact" >
        Section 3
      </section>
    </div>
  )
}

export default Home