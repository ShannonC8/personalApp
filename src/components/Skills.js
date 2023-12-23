import React from "react";
import '../styles/Skills.css';
import Skill from './Skill';

function Skills () {
   return (    
       <div className="container">
           <div className="column">
                <Skill skillName="Java" percent={90}/>
                <Skill skillName="Poop" percent={20}/>
                <Skill skillName="Poop" percent={20}/>
                <Skill skillName="Poop" percent={20}/>
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