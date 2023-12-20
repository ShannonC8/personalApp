import React, { useRef } from 'react';

function Home({ AboutRef, ProjectsRef, ContactRef }) {

  return (
    <div>
      <section ref={AboutRef} id="About" style={{ height: '500px', backgroundColor: 'lightblue' }}>
        Section 1
      </section>
      <section ref = {ProjectsRef} id="Projects" style={{ height: '500px', backgroundColor: 'lightgreen' }}>
        Section 2
      </section>
      <section ref = {ContactRef} id="Contact" style={{ height: '500px', backgroundColor: 'lightpink' }}>
        Section 3
      </section>
      {/* Add more sections as needed */}
    </div>
  )
}

export default Home