import React, { useRef } from 'react';
import '../styles/Home.css';
import Skills from '../components/Skills';
import Constellation from '../components/Constellation';

function Home({ AboutRef, SkillsRef, ProjectsRef, ContactRef }) {

  return (
    <div>
      
      <section ref={AboutRef} id="About" className="About" >
        <table>
          <tr>
            <td >
              <h1 >
                Im poopy
              </h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit 
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
              occaecat cupidatat non proident, sunt in culpa qui officia 
              deserunt mollit anim id est laborum. 
            </td>
            <td >
              <Constellation/>
            </td>
        </tr>
        </table>
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