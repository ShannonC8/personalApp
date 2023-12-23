import React, { useRef } from 'react';
import '../styles/Home.css';
import Skills from '../components/Skills';
function Home({ AboutRef, ProjectsRef, ContactRef }) {

  return (
    <div>
      <section ref={AboutRef} id="About" className="About">
        Section 1
      </section>
      <section ref = {ProjectsRef} id="Projects" className="Projects" >
        <Skills/>
      </section>
      <section ref = {ContactRef} id="Contact" className="Contact" >
        Section 3
      </section>
      {/* Add more sections as needed */}
    </div>
  )
}

export default Home