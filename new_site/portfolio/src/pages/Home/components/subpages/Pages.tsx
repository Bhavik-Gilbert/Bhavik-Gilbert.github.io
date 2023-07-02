import React from 'react';
import { NavLink } from "react-router-dom";


import { toggleClass, displayInfo } from '../../../../setup/components/changeClass';
import { toggleCapitalise } from '../../../../setup/components/textEffects';
import Projects from '../../../Projects/index';
import Education from '../../../Education/index';
import Experience from '../../../Experience/index';


function Pages() {
    const title = "Pages".split("");

    return (
        <div className='textBox bioBox px-0'>
            <div className="mb-3">
                {title.map((titleChar: string, titleCharIndex: number) => (
                    <div className="h3 byLetter" id={"pagesTitle" + titleCharIndex + titleChar} key={"pagesTitle" + titleCharIndex + titleChar} 
                    onClick={(() => {
                        toggleClass("pagesTitle" + titleCharIndex + titleChar, "h2 byLetter", "h2Hold byLetter");
                        toggleCapitalise("pagesTitle" + titleCharIndex + titleChar);
                    })}>
                        {titleChar}
                    </div>
                ))}
            </div>
            
            <div className="marginBottom">
                <div className="file" id="projects" onClick={() => displayInfo('projects', 'pages', true)}>
                    <h3 className='h3'>Projects</h3>
                </div>

                <div className="file" id="experience" onClick={() => displayInfo('experience', 'pages', true)}>
                    <div className='h3'>Experience</div>
                </div>

                <div className="file" id="education" onClick={() => displayInfo('education', 'pages', true)}>
                    <div className='h3'>Education</div>
                </div>
            </div>

            <div>
                <div id="projectsinfo" className='info'>
                    <Projects />
                </div>
                <div id="experienceinfo" className='info'>
                    <Experience />
                </div>
                <div id="educationinfo" className='info'>
                    <Education />
                </div>
            </div>
        </div>
  );
}

export default Pages;