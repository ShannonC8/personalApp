import React from 'react'
import Home from './Home'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
//import TextBlock from './textBlock';
import '../styles/IntroSection.css';

function IntroSection({ AboutRef, SkillsRef, ProjectsRef, ContactRef }) {
  return (
    <div className="App">
      <Parallax pages={4} style={{ top: '0', left: '0' }} class="animation">
        <ParallaxLayer>
        <h3 style={{ fontSize: '24px' }}>Shannon Cheng</h3>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0}>
          <div class="animation_layer parallax" id="backGroundLayer"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={-0.5} speed={0}>
          <div class="animation_layer parallax" id="fourthLayer"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={-0.3} speed={0.1}>
          <div class="animation_layer parallax" id="thirdLayer"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={-0.4} speed={0.2}>
          <div class="animation_layer parallax" id="secondLayer"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} speed={0.6}>
          <div class="animation_layer parallax" id="firstLayer"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25}>
        <Home AboutRef={AboutRef} SkillsRef={SkillsRef} ProjectsRef={ProjectsRef} ContactRef={ContactRef} />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default IntroSection