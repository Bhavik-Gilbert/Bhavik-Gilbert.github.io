import React from 'react';
import { NavLink } from "react-router-dom";

import { toggleClass } from '../../../../setup/components/changeClass';
import { toggleCapitalise } from '../../../../setup/components/textEffects';
import { pageLinks } from '../../../../setup/router/pages';
import { displayInfo } from '../../../../setup/components/displayControls';

import ProjectHighlights from '../../../Projects/components/subpages/ProjectHighlights';
import ExperienceHighlights from '../../../Experience/components/subpages/ExperienceHighlights';
import EducationHighlights from '../../../Education/components/subpages/EducationHighlights';


function Pages() {
    const title = "Pages".split("");

    return (
        <div className='textBox bioBox px-0 pb-0'>
            <div className="mb-3">
                {title.map((titleChar: string, titleCharIndex: number) => (
                    <div className="h3 byLetter" id={"pagesTitle" + titleCharIndex + titleChar} key={"pagesTitle" + titleCharIndex + titleChar} 
                    onClick={(() => {
                        toggleClass("pagesTitle" + titleCharIndex + titleChar, "h3 byLetter", "h3Hold byLetter");
                        toggleCapitalise("pagesTitle" + titleCharIndex + titleChar);
                    })}>
                        {titleChar}
                    </div>
                ))}
            </div>
            
            <div>
                <div className="file button marginBottom" id="projects" onClick={() => displayInfo('projects', 'pages', true)}>
                    <h4>Projects</h4>
                </div>

                <div className="file button marginBottom" id="experience" onClick={() => displayInfo('experience', 'pages', true)}>
                    <h4>Experience</h4>
                </div>

                <div className="file button marginBottom" id="education" onClick={() => displayInfo('education', 'pages', true)}>
                    <h4>Education</h4>
                </div>
            </div>

            <div>
                <div id="projectsinfo" className='info'>
                    <ProjectHighlights />
                    <NavLink to={pageLinks.Projects} className="file button mt-4">
                        View More
                    </NavLink>
                </div>
                <div id="experienceinfo" className='info'>
                    <ExperienceHighlights />
                    <NavLink to={pageLinks.Experience} className="file button mt-4">
                        View More
                    </NavLink>
                </div>
                <div id="educationinfo" className='info'>
                    <EducationHighlights />
                    <NavLink to={pageLinks.Education} className="file button mt-4">
                        View More
                    </NavLink>
                </div>
                    <br></br>
            </div>
        </div>
  );
}

export default Pages;