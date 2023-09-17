import React from 'react';

import WorkExperienceInfo from './infoOverlays/WorkExperienceInfo';
import  { openElements } from '../../../../setup/components/displayControls';
import { toggleClass } from '../../../../setup/components/changeClass';
import { toggleCapitalise } from '../../../../setup/components/textEffects';

function WorkExperience() {
  const title = "Work".split("");
  
  return (
    <>
        <div className="textBox marginTop cardScrollBox">
            <div className="marginTop marginBottom">
                {title.map((titleChar: string, titleCharIndex: number) => (
                    <div className="h3 byLetter marginBottom" id={"workExperienceTitle" + titleCharIndex + titleChar} key={"workExperienceTitle" + titleCharIndex + titleChar} 
                    onClick={(() => {
                        toggleClass("workExperienceTitle" + titleCharIndex + titleChar, "h3 byLetter marginBottom", "h3Hold byLetter marginBottom");
                        toggleCapitalise("workExperienceTitle" + titleCharIndex + titleChar);
                    })}>
                        {titleChar}
                    </div>
                ))}
            </div>

            <div className="scrollBox">
                <div className="card long m-3">
                    <img className="skeleton header" src="./images/companyLogos/KCL.jpg" alt="KCL" loading="lazy"/>
                    <h5>Teaching Assistant</h5>
                    <br/>
                    <h6>King's College London</h6>
                    <h6>Sep 2023 - Current</h6>
                    <br/>
                    <div className="file button marginTop" onClick={(e) => openElements(["workExperienceOverlay", "kclTeachingAssistant"])}>
                        More Info
                    </div>
                </div>

                <div className="card long m-3">
                    <img className="skeleton header" src="./images/companyLogos/JPMorganChase.jpg" alt="JPMC" loading="lazy"/>
                    <h5>Software Engineer Analyst Intern</h5>
                    <br/>
                    <h6>J.P Morgan Chase & Co</h6>
                    <h6>Jun 2023 - Aug 2023</h6>
                    <br/>
                    <div className="file button marginTop" onClick={(e) => openElements(["experienceHighlightsOverlay", "jpSoftwareEngineerAnalystIntern"])}>
                        More Info
                    </div>
                </div>

                <div className="card long m-3">
                    <img className="skeleton header" src="./images/companyLogos/LeytonXIFormCollege.png" alt="Leyton XI Form College" loading="lazy"/>
                    <h5>Computer Science Student Mentor</h5>
                    <br/>
                    <h6>Leyton Sixth Form College</h6>
                    <h6>Sep 2021 - Oct 2022</h6>
                    <br/>
                    <div className="file button marginTop" onClick={(e) => openElements(["experienceHighlightsOverlay", "leytonComputerScienceStudentMentor"])}>
                        More Info
                    </div>
                </div>

                <div className="card long m-3">
                    <img className="skeleton header" src="./images/companyLogos/KCL.jpg" alt="KCL" loading="lazy"/>
                    <h5>K+ Mentor</h5>
                    <br/>
                    <h6>King's College London</h6>
                    <h6>Jan 2022 - Dec 2022</h6>
                    <br/>
                    <div className="file button marginTop" onClick={(e) => openElements(["workExperienceOverlay", "k+MentorKCL"])}>
                        More Info
                    </div>
                </div>

                <div className="card long m-3">
                    <img className="skeleton header" src="./images/companyLogos/Funtech.png" alt="FunTech" loading="lazy"/>
                    <h5>Location Camp Manger</h5>
                    <br/>
                    <h6>FunTech</h6>
                    <h6>Jul 2022 - Aug 2022</h6>
                    <br/>
                    <div className="file button marginTop" onClick={(e) => openElements(["experienceHighlightsOverlay", "funtechLocationCampManger"])}>
                        More Info
                    </div>
                </div>

                <div className="card long m-3">
                    <img className="skeleton header" src="./images/companyLogos/Funtech.png" alt="FunTech" loading="lazy"/>
                    <h5>Computer Science Teacher</h5>
                    <br/>
                    <h6>FunTech</h6>
                    <h6>Jul 2021 - Aug 2021</h6>
                    <br/>
                    <div className="file button marginTop" onClick={(e) => openElements(["workExperienceOverlay", "funtechComputerScienceTeacher"])}>
                        More Info
                    </div>
                </div>
            </div>
        </div>

        <WorkExperienceInfo/>
    </>
  );
}

export default WorkExperience;