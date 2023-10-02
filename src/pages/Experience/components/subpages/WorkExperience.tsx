import React, {useEffect} from 'react';

import WorkExperienceInfo from './infoOverlays/WorkExperienceInfo';
import  { openElements } from '../../../../setup/components/displayControls';
import { toggleClass, toggleCollapsible } from '../../../../setup/components/changeClass';
import { toggleCapitalise } from '../../../../setup/components/textEffects';
import { collapseEventListeners } from '../../../../setup/components/eventListeners';

function WorkExperience() {
  const title = "Work".split("");

  useEffect(() => {
    collapseEventListeners(["workExperienceScrollBox"]);
  }, []);
  
  return (
    <>
        <div className="textBox marginTop cardScrollBox">
            <div className="marginTop marginBottom">
                {title.map((titleChar: string, titleCharIndex: number) => (
                    <div className="h3 byLetter marginBottom" id={"workExperienceTitle" + titleCharIndex + titleChar} key={"workExperienceTitle" + titleCharIndex + titleChar} 
                    onClick={(() => {
                        toggleClass("workExperienceTitle" + titleCharIndex + titleChar, "h3", "h3Hold");
                        toggleCapitalise("workExperienceTitle" + titleCharIndex + titleChar);
                    })}>
                        {titleChar}
                    </div>
                ))}
            </div>

            <div className="file button marginBottom" id="workExperienceScrollBoxCollapseButton" onClick={(e) => toggleCollapsible("workExperienceScrollBox", "scrollBox")}>
                Expand
            </div>

            <div className="scrollBox" id="workExperienceScrollBox">
                <div className="card long m-3" onClick={(e) => openElements(["workExperienceOverlay", "kclTeachingAssistant"])}>
                    <img className="skeleton header" src="./images/companyLogos/KCL.jpg" alt="KCL" loading="lazy"/>
                    <h5>Graduate Teaching Assistant</h5>
                    <br/>
                    <h6>King's College London</h6>
                    <h6>Sep 2023 - Current</h6>
                    <br/>
                    <div className="file button marginTop">
                        More Info
                    </div>
                </div>

                <div className="card long m-3" onClick={(e) => openElements(["experienceHighlightsOverlay", "jpSoftwareEngineerAnalystIntern"])}>
                    <img className="skeleton header" src="./images/companyLogos/JPMorganChase.jpg" alt="JPMC" loading="lazy"/>
                    <h5>Software Engineer Analyst Intern</h5>
                    <br/>
                    <h6>J.P Morgan Chase & Co</h6>
                    <h6>Jun 2023 - Aug 2023</h6>
                    <br/>
                    <div className="file button marginTop">
                        More Info
                    </div>
                </div>

                <div className="card long m-3" onClick={(e) => openElements(["experienceHighlightsOverlay", "leytonComputerScienceStudentMentor"])}>
                    <img className="skeleton header" src="./images/companyLogos/LeytonXIFormCollege.png" alt="Leyton XI Form College" loading="lazy"/>
                    <h5>Computer Science Student Mentor</h5>
                    <br/>
                    <h6>Leyton Sixth Form College</h6>
                    <h6>Sep 2021 - Oct 2022</h6>
                    <br/>
                    <div className="file button marginTop">
                        More Info
                    </div>
                </div>

                <div className="card long m-3" onClick={(e) => openElements(["workExperienceOverlay", "k+MentorKCL"])}>
                    <img className="skeleton header" src="./images/companyLogos/KCL.jpg" alt="KCL" loading="lazy"/>
                    <h5>K+ Mentor</h5>
                    <br/>
                    <h6>King's College London</h6>
                    <h6>Jan 2022 - Dec 2022</h6>
                    <br/>
                    <div className="file button marginTop">
                        More Info
                    </div>
                </div>

                <div className="card long m-3" onClick={(e) => openElements(["experienceHighlightsOverlay", "funtechLocationCampManger"])}>
                    <img className="skeleton header" src="./images/companyLogos/Funtech.png" alt="FunTech" loading="lazy"/>
                    <h5>Location Camp Manger</h5>
                    <br/>
                    <h6>FunTech</h6>
                    <h6>Jul 2022 - Aug 2022</h6>
                    <br/>
                    <div className="file button marginTop">
                        More Info
                    </div>
                </div>

                <div className="card long m-3" onClick={(e) => openElements(["workExperienceOverlay", "funtechComputerScienceTeacher"])}>
                    <img className="skeleton header" src="./images/companyLogos/Funtech.png" alt="FunTech" loading="lazy"/>
                    <h5>Computer Science Teacher</h5>
                    <br/>
                    <h6>FunTech</h6>
                    <h6>Jul 2021 - Aug 2021</h6>
                    <br/>
                    <div className="file button marginTop">
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