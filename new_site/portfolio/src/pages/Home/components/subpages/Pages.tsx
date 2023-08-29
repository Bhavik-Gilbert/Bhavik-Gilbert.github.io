import React from 'react';
import { NavLink } from "react-router-dom";

import { toggleClass, displayInfo } from '../../../../setup/components/changeClass';
import { toggleCapitalise } from '../../../../setup/components/textEffects';
import { pageLinks } from '../../../../setup/router/pages';
import ProjectHighlights from '../../../Projects/components/subpages/ProjectHighlights';
import ExperienceHighlights from '../../../Experience/components/subpages/ExperienceHighlights';
import EducationHighlights from '../../../Education/components/subpages/EducationHighlights';


function Pages() {
    const title = "Pages".split("");

    return (
        <div className='textBox bioBox px-0'>
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
            
            <div className="marginBottom">
                <div className="file" id="projects" onClick={() => displayInfo('projects', 'pages', true)}>
                    <h3 className='h4'>Projects</h3>
                </div>

                <div className="file" id="experience" onClick={() => displayInfo('experience', 'pages', true)}>
                    <div className='h4'>Experience</div>
                </div>

                <div className="file" id="education" onClick={() => displayInfo('education', 'pages', true)}>
                    <div className='h4'>Education</div>
                </div>
            </div>

            <div>
                <div id="projectsinfo" className='info'>
                    <ProjectHighlights />
                    <NavLink to={pageLinks.Projects} className="file mt-4">
                        View More
                    </NavLink>
                </div>
                <div id="experienceinfo" className='info'>
                    <ExperienceHighlights />
                    <NavLink to={pageLinks.Experience} className="file mt-4">
                        View More
                    </NavLink>
                </div>
                <div id="educationinfo" className='info'>
                    <EducationHighlights />
                    <NavLink to={pageLinks.Education} className="file mt-4">
                        View More
                    </NavLink>
                </div>
            </div>
        </div>
  );
}

export default Pages;