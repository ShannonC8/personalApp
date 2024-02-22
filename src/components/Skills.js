import React from "react";
import '../styles/Skills.css';
import Skill from './Skill';

function Skills () {
   return (    
       <div className="container" style={{ paddingBottom: '4vw' }}>
           <div className="column">
                <Skill skillName="Java" percent={80}/>
                <Skill skillName="C" percent={70}/>
                <Skill skillName="Python" percent={80}/>
                <Skill skillName="Javascript" percent={50}/>
            </div>
            <div className="column">
                <Skill skillName="Poop" percent={20}/>
                <Skill skillName="Poop" percent={20}/>
                <Skill skillName="Poop" percent={20}/>
                <Skill skillName="Poop" percent={20}/>
            </div>
       </div>
       
   )
}

export default Skills;