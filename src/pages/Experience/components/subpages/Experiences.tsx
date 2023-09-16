import React from 'react';

import ExperiencesInfo from './infoOverlays/ExperiencesInfo';
import  { openElements } from '../../../../setup/components/displayControls';
import { toggleClass } from '../../../../setup/components/changeClass';
import { toggleCapitalise } from '../../../../setup/components/textEffects';

function Experiences() {
  const title = "Experiences".split("");
  
  return (
    <>
        <div className="textBox marginTop cardScrollBox">
            <div className="marginTop marginBottom">
                {title.map((titleChar: string, titleCharIndex: number) => (
                    <div className="h3 byLetter marginBottom" id={"experiencesTitle" + titleCharIndex + titleChar} key={"experiencesTitle" + titleCharIndex + titleChar} 
                    onClick={(() => {
                        toggleClass("experiencesTitle" + titleCharIndex + titleChar, "h3 byLetter marginBottom", "h3Hold byLetter marginBottom");
                        toggleCapitalise("experiencesTitle" + titleCharIndex + titleChar);
                    })}>
                        {titleChar}
                    </div>
                ))}
            </div>

            <div className="scrollBox">
                <div className="card long m-3">
                    <img className="skeleton header" src="./images/companyLogos/Expedia.jpg" alt="Expedia" loading="lazy"/>
                    <h5>Expedia Career Discovery Program</h5>
                    <br/>
                    <h6>Expedia</h6>
                    <h6>Jul 2022</h6>
                    <div className="file button marginTop" onClick={(e) => openElements(["experiencesOverlay", "expediaCareerDiscoveryProgram"])}>
                        More Info
                    </div>
                </div>

                <div className="card long m-3">
                    <img className="skeleton header" src="./images/companyLogos/BrightNetwork.jpg" alt="BrightNetwork" loading="lazy"/>
                    <h5>Internship Experience UK 2022: On Demand - Technology</h5>
                    <br/>
                    <h6>Bright Network</h6>
                    <h6>Jun 2022 - Jul 2022</h6>
                    <div className="file button marginTop" onClick={(e) => openElements(["experiencesOverlay", "internshipExperienceUK2022"])}>
                        More Info
                    </div>
                </div>

                <div className="card long m-3">
                    <img className="skeleton header" src="./images/companyLogos/JPMorganChase.jpg" alt="JPMC" loading="lazy"/>
                    <h5>Spring Insight into Software Engineering</h5>
                    <br/>
                    <h6>J.P Morgan Chase & Co</h6>
                    <h6>Apr 2022</h6>
                    <div className="file button marginTop" onClick={(e) => openElements(["experiencesOverlay", "jpSpringInsightintoSoftwareEngineering"])}>
                        More Info
                    </div>
                </div>

                <div className="card long m-3">
                    <img className="skeleton header" src="./images/companyLogos/Deloitte.webp" alt="Deloitte" loading="lazy"/>
                    <h5>Consulting Work Experience with Deloitte</h5>
                    <br/>
                    <h6>Springpod</h6>
                    <h6>Aug 2021</h6>
                    <div className="file button marginTop" onClick={(e) => openElements(["experiencesOverlay", "consultingWorkExperiencewithDeloitte"])}>
                        More Info
                    </div>
                </div>

                <div className="card long m-3">
                    <img className="skeleton header" src="./images/companyLogos/Springpod.png" alt="Springpod" loading="lazy"/>
                    <h5>Technology Virtual Work Experience</h5>
                    <br/>
                    <h6>Springpod</h6>
                    <h6>Apr 2021</h6>
                    <div className="file button marginTop" onClick={(e) => openElements(["experiencesOverlay", "technologyVirtualWorkExperience"])}>
                        More Info
                    </div>
                </div>

                <div className="card long m-3">
                    <img className="skeleton header" src="./images/companyLogos/CareerCamp.jpg" alt="Careers Camp CIC" loading="lazy"/>
                    <h5>Design Competition</h5>
                    <br/>
                    <h6>Careers Camp CIC</h6>
                    <h6>Nov 2019 - Dec 2019</h6>
                    <div className="file button marginTop" onClick={(e) => openElements(["experiencesOverlay", "careersCampCIC"])}>
                        More Info
                    </div>
                </div>
            </div>
        </div>

        <ExperiencesInfo/>
    </>
  );
}

export default Experiences;